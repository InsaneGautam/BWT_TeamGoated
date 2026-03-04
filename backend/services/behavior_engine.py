from datetime import datetime
from .anomaly_model import AnomalyDetector

detector = AnomalyDetector()


def calculate_rule_score(events):

    score = 0
    reasons = []

    for event in events:

        hour = datetime.fromisoformat(event["timestamp"]).hour

        if hour < 7 or hour > 21:
            score += 10
            reasons.append("Access outside working hours")

        if event["event_type"] == "bulk_download":
            if event["metadata"].get("file_size_mb", 0) > 500:
                score += 20
                reasons.append("Large bulk download detected")

        if event["event_type"] == "usb_connected":
            score += 15
            reasons.append("USB device connected")

        if event["event_type"] == "permission_change":
            score += 10
            reasons.append("Permission change activity")

    return min(score, 50), reasons


def compute_risk(events, feature_vector):

    rule_score, reasons = calculate_rule_score(events)

    ml_score = detector.predict(feature_vector)

    total_score = rule_score + ml_score

    risk_score = min(total_score, 100)

    return {
        "risk_score": risk_score,
        "reasons": reasons
    }


def risk_level(score):

    if score <= 30:
        return "Normal"

    elif score <= 60:
        return "Watch"

    elif score <= 80:
        return "Suspicious"

    else:
        return "Critical"