# backend/services/behavior_engine.py

import datetime
from collections import defaultdict

class BehaviorEngine:

    def __init__(self):
        self.employee_profiles = defaultdict(dict)

    def extract_features(self, events):
        """
        Convert raw event logs into behavior features
        events = list of dictionaries
        """

        features = []

        for event in events:

            employee_id = event["employee_id"]
            action = event["action"]
            timestamp = event["timestamp"]
            location = event.get("location", "unknown")

            hour = datetime.datetime.fromisoformat(timestamp).hour

            feature = {
                "employee_id": employee_id,
                "action": action,
                "hour": hour,
                "after_hours": 1 if hour < 6 or hour > 20 else 0,
                "location_change": self._location_change(employee_id, location),
                "data_download": 1 if action == "download" else 0,
                "privilege_access": 1 if action == "admin_access" else 0
            }

            features.append(feature)

            self.employee_profiles[employee_id]["last_location"] = location

        return features

    def _location_change(self, employee_id, new_location):

        last = self.employee_profiles.get(employee_id, {}).get("last_location")

        if last is None:
            return 0

        return 1 if last != new_location else 0
