import random

DEPARTMENTS = ["Finance", "HR", "Engineering", "Sales", "IT"]

def generate_employee(employee_id):
    return {
        "employee_id": f"E{str(employee_id).zfill(3)}",
        "department": random.choice(DEPARTMENTS),
        "role": random.choice(["Junior", "Senior", "Manager"]),
        "normal_login_hour": random.randint(8, 10)
    }

def generate_employees(count=20):
    employees = []
    for i in range(1, count + 1):
        employees.append(generate_employee(i))
    return employees
