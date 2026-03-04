import random
from utils import current_timestamp, random_ip

def generate_normal_activity(employee):
    return {
        "employee_id": employee["employee_id"],
        "timestamp": current_timestamp(),
        "login_hour": random.randint(8, 18),
        "data_downloaded_mb": random.randint(1, 50),
        "ip_address": random_ip(),
        "usb_connected": False
    }
