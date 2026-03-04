from sklearn.ensemble import IsolationForest
import numpy as np

class AnomalyDetector:

    def __init__(self):
        self.model = IsolationForest(
            n_estimators=100,
            contamination=0.05,
            random_state=42
        )
        self.trained = False

    def train(self, feature_matrix):
        self.model.fit(feature_matrix)
        self.trained = True

    def predict(self, features):

        if not self.trained:
            return 0

        score = self.model.decision_function([features])[0]

        anomaly_score = int((1 - score) * 50)

        return max(0, min(50, anomaly_score))