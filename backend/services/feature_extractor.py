from datetime import datetime

def extract_features(events):

    login_hours = []
    data_volume = 0
    off_hours = 0
    commands = 0
    resources = set()

    for event in events:

        hour = datetime.fromisoformat(event["timestamp"]).hour
        login_hours.append(hour)

        if hour < 7 or hour > 21:
            off_hours += 1

        if event["event_type"] == "file_download":
            data_volume += event["metadata"].get("file_size_mb", 0)

        if event["event_type"] == "privileged_command":
            commands += 1

        resources.add(event.get("resource", "unknown"))

    mean_login = sum(login_hours) / len(login_hours)

    return [
        mean_login,
        len(resources),
        data_volume,
        commands,
        off_hours
    ]