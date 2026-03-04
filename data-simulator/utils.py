import random
from datetime import datetime

def random_ip():
    return f"192.168.1.{random.randint(1,255)}"

def current_timestamp():
    return datetime.now().isoformat()

def random_data_volume():
    return random.randint(1, 1000)
