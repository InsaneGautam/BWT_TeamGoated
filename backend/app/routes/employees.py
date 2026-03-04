from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..database import SessionLocal
from ..models import Employee

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/employees/add")
def add_employee(name: str, department: str, db: Session = Depends(get_db)):
    employee = Employee(name=name, department=department)
    db.add(employee)
    db.commit()
    db.refresh(employee)
    return employee


@router.get("/employees")
def get_employees(db: Session = Depends(get_db)):
    return db.query(Employee).all()