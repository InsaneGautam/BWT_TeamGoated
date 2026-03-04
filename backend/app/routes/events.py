from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..database import SessionLocal
from ..models import Event, Alert, Employee
from ...services.behavior_engine import extract_features, calculate_rule_based_risk
from ...services.ai_explainer import generate_explanation
from ...services.anomaly_model import AnomalyModel

router = APIRouter()
anomaly_model = AnomalyModel()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/events/ingest")
def ingest_event(employee_id: int, event_type: str, data_volume_mb: float, login_hour: int, ip_address: str, db: Session = Depends(get_db)):

    event = Event(
        employee_id=employee_id,
        event_type=event_type,
        data_volume_mb=data_volume_mb,
        login_hour=login_hour,
        ip_address=ip_address
    )

    db.add(event)
    db.commit()
    db.refresh(event)

    # Rule-based risk
    risk_score = calculate_rule_based_risk(event)

    # Update employee risk score
    employee = db.query(Employee).filter(Employee.id == employee_id).first()
    if employee:
        employee.risk_score += risk_score
        db.commit()

    if risk_score >= 50:
        explanation = generate_explanation(event, risk_score)

        alert = Alert(
            employee_id=employee_id,
            message="Suspicious activity detected",
            risk_score=risk_score,
            explanation=explanation
        )
        db.add(alert)
        db.commit()

    return {"message": "Event ingested", "risk_score": risk_score}
