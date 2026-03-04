import random
from utils import current_timestamp

def generate_account_takeover(employee):
    return {
        "employee_id": employee["employee_id"],
        "timestamp": current_timestamp(),
        "login_hour": random.randint(1, 5),  # very unusual time
        "data_downloaded_mb": random.randint(100, 400),
        "ip_address": f"203.0.113.{random.randint(1,255)}",  # suspicious external IP
        "usb_connected": False,
        "multiple_failed_logins": random.randint(3, 10),
        "new_device_login": True,
        "event_type": "account_takeover"
    }
