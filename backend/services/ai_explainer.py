# backend/services/ai_explainer.py

class AIExplainer:

    def explain(self, feature):

        reasons = []

        if feature["after_hours"] == 1:
            reasons.append("Access outside working hours")

        if feature["location_change"] == 1:
            reasons.append("Login from unusual location")

        if feature["data_download"] == 1:
            reasons.append("Large data download detected")

        if feature["privilege_access"] == 1:
            reasons.append("Unauthorized admin privilege usage")

        if not reasons:
            reasons.append("Behavior deviates from normal pattern")

        return {
            "employee_id": feature["employee_id"],
            "reasons": reasons
        }
