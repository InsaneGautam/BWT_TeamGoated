import random
from utils import current_timestamp, random_ip

def generate_privilege_abuse(employee):
    return {
        "employee_id": employee["employee_id"],
        "timestamp": current_timestamp(),
        "login_hour": random.randint(9, 17),
        "data_downloaded_mb": random.randint(50, 200),
        "ip_address": random_ip(),
        "usb_connected": False,
        "admin_access_attempt": True,
        "sensitive_resource_accessed": True,
        "event_type": "privilege_abuse"
    }
