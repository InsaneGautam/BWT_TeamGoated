# backend/services/anomaly_model.py

import pandas as pd
from sklearn.ensemble import IsolationForest


class AnomalyDetector:

    def __init__(self):
        self.model = IsolationForest(
            n_estimators=100,
            contamination=0.05,
            random_state=42
        )
        self.trained = False

    def train(self, feature_data):

        df = pd.DataFrame(feature_data)

        X = df[[
            "hour",
            "after_hours",
            "location_change",
            "data_download",
            "privilege_access"
        ]]

        self.model.fit(X)

        self.trained = True

    def predict(self, feature_data):

        if not self.trained:
            raise Exception("Model not trained")

        df = pd.DataFrame(feature_data)

        X = df[[
            "hour",
            "after_hours",
            "location_change",
            "data_download",
            "privilege_access"
        ]]

        preds = self.model.predict(X)
        scores = self.model.decision_function(X)

        results = []

        for i, row in df.iterrows():

            results.append({
                "employee_id": row["employee_id"],
                "anomaly": True if preds[i] == -1 else False,
                "risk_score": float(scores[i])
            })

        return results
