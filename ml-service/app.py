from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
import numpy as np
import os

app = Flask(__name__)
CORS(app)

MODEL_PATH = "model.h5"
CLASSES = [
    "Dermatitis",
    "Fungal Infections",
    "Healthy",
    "Hypersensitivity",
    "Demodicosis",
    "Ringworm",
]

# TensorFlow is optional at import time so the API can still boot and report status.
try:
    import tensorflow as tf
except Exception as exc:  # broad to surface environment/setup problems cleanly
    tf = None
    print(f"WARNING: TensorFlow import failed: {exc}")

model = None
if tf is None:
    print("WARNING: Model unavailable because TensorFlow is not installed/working.")
elif not os.path.exists(MODEL_PATH):
    print(
        f"WARNING: {MODEL_PATH} not found. Download from "
        "https://github.com/guruprashanth2004/stray-dog-skin-disease-detection"
    )
else:
    model = tf.keras.models.load_model(MODEL_PATH)


def _preprocess_image(image_path: str) -> np.ndarray:
    """Load and normalize image into model input shape."""
    img = Image.open(image_path).convert("RGB").resize((224, 224))
    arr = np.array(img, dtype=np.float32) / 255.0
    return np.expand_dims(arr, axis=0)


@app.get("/health")
def health():
    return jsonify(
        {
            "status": "ok",
            "tensorflow_available": tf is not None,
            "model_loaded": model is not None,
            "model_path": MODEL_PATH,
        }
    )


@app.post("/predict")
def predict():
    if model is None:
        return jsonify({"error": "Model not loaded. Check /health for details."}), 500

    data = request.get_json(silent=True)
    if not data or "imagePath" not in data:
        return jsonify({"error": "Request must include JSON body with imagePath."}), 400

    image_path = data["imagePath"]
    if not isinstance(image_path, str) or not image_path.strip():
        return jsonify({"error": "imagePath must be a non-empty string."}), 400

    if not os.path.exists(image_path):
        return jsonify({"error": f"Image not found: {image_path}"}), 400

    try:
        arr = _preprocess_image(image_path)
        prediction = model.predict(arr, verbose=0)[0]
        class_idx = int(np.argmax(prediction))
        confidence = float(prediction[class_idx])

        return jsonify(
            {
                "class": CLASSES[class_idx],
                "confidence": confidence,
                "all_probs": prediction.tolist(),
            }
        )
    except Exception as exc:
        return jsonify({"error": f"Prediction failed: {exc}"}), 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)
