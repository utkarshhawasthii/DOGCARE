# ML Service Setup

## 1) Install dependencies
```bash
cd ml-service
python -m venv venv
source venv/bin/activate  # Windows: venv\\Scripts\\activate
pip install -r requirements.txt
```

## 2) Add model file
Place `model.h5` inside `ml-service/`.

If missing, the service still starts, but `/predict` will return an error and `/health` will show `model_loaded: false`.

## 3) Run service
```bash
python app.py
```

## 4) Health check
```bash
curl http://localhost:8000/health
```

## 5) Prediction request
```bash
curl -X POST http://localhost:8000/predict \
  -H "Content-Type: application/json" \
  -d '{"imagePath":"/absolute/path/to/image.jpg"}'
```

## Troubleshooting
- `tensorflow_available: false` in `/health`: TensorFlow is not installed or not importable.
- `model_loaded: false` in `/health`: `model.h5` is missing or failed to load.
- `Image not found`: provide a valid absolute path in `imagePath`.
