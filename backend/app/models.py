from sqlalchemy import Column, Integer, String, Float, DateTime
from datetime import datetime
from .database import Base

class Employee(Base):
    __tablename__ = "employees"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    department = Column(String, nullable=False)
    risk_score = Column(Float, default=0.0)


class Event(Base):
    __tablename__ = "events"

    id = Column(Integer, primary_key=True, index=True)
    employee_id = Column(Integer)
    event_type = Column(String)
    data_volume_mb = Column(Float)
    login_hour = Column(Integer)
    ip_address = Column(String)
    timestamp = Column(DateTime, default=datetime.utcnow)


class Alert(Base):
    __tablename__ = "alerts"

    id = Column(Integer, primary_key=True, index=True)
    employee_id = Column(Integer)
    message = Column(String)
    risk_score = Column(Float)
    explanation = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)