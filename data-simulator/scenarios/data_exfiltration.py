import random
from utils import current_timestamp, random_ip

def generate_data_exfiltration(employee):
    return {
        "employee_id": employee["employee_id"],
        "timestamp": current_timestamp(),
        "login_hour": random.randint(1, 4),  # suspicious time
        "data_downloaded_mb": random.randint(500, 1000),
        "ip_address": random_ip(),
        "usb_connected": True
    }
