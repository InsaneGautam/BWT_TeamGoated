from fastapi import FastAPI
from .database import engine
from .models import Base
from .routes import events, employees, alerts, dashboard

app = FastAPI(title="SENTINEL - Insider Threat Detection")

Base.metadata.create_all(bind=engine)

app.include_router(events.router)
app.include_router(employees.router)
app.include_router(alerts.router)
app.include_router(dashboard.router)
