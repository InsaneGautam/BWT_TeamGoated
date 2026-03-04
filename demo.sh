#!/bin/bash

echo "Starting AI Insider Threat Detection System Demo..."

echo "Installing dependencies..."
pip install fastapi uvicorn scikit-learn pandas

echo "Starting Backend Server..."
cd backend
uvicorn app.main:app --reload &

sleep 5

echo "Backend running at:"
echo "http://127.0.0.1:8000"

echo "Opening API docs..."
start http://127.0.0.1:8000/docs

echo "Demo Ready!"
