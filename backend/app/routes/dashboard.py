from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..database import SessionLocal
from ..models import Employee, Alert

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.get("/dashboard/stats")
def dashboard_stats(db: Session = Depends(get_db)):
    total_employees = db.query(Employee).count()
    total_alerts = db.query(Alert).count()
    high_risk = db.query(Employee).filter(Employee.risk_score > 50).count()

    return {
        "total_employees": total_employees,
        "total_alerts": total_alerts,
        "high_risk_employees": high_risk
    }