import time
import random

from employees import generate_employees
from scenarios.normal_employee import generate_normal_activity
from scenarios.data_exfiltration import generate_data_exfiltration

employees = generate_employees(20)

while True:
    employee = random.choice(employees)

    # 85% normal, 15% attack
    if random.random() < 0.85:
        event = generate_normal_activity(employee)
    else:
        event = generate_data_exfiltration(employee)

    print(event)
    time.sleep(2)
