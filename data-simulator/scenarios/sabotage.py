import random
from utils import current_timestamp, random_ip

def generate_sabotage(employee):
    return {
        "employee_id": employee["employee_id"],
        "timestamp": current_timestamp(),
        "login_hour": random.randint(22, 3),  # late night
        "data_downloaded_mb": random.randint(0, 20),
        "ip_address": random_ip(),
        "usb_connected": False,
        "files_deleted_count": random.randint(50, 300),
        "system_config_modified": True,
        "event_type": "sabotage"
    }
