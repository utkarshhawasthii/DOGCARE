from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
from PIL import Image
import numpy as np
import os

app = Flask(__name__)
CORS(app)  # Allow frontend requests

# Load model (user must download dog_skin_model.h5 to this dir from GitHub repo)
MODEL_PATH = 'model.h5'
if not os.path.exists(MODEL_PATH):
    print(f"WARNING: {MODEL_PATH} not found. Download from https://github.com/guruprashanth2004/stray-dog-skin-disease-detection")
    model = None
else:
    model = tf.keras.models.load_model(MODEL_PATH)

# From repo classes
CLASSES = ["Dermatitis", "Fungal Infections", "Healthy", "Hypersensitivity", "Demodicosis", "Ringworm"]

@app.route('/predict', methods=['POST'])
def predict():
    if model is None:
        return jsonify({'error': 'Model not loaded. Please download model.h5'}), 500
    
    try:
        data = request.get_json()
        image_path = data['imagePath']
        
        if not os.path.exists(image_path):
            return jsonify({'error': 'Image not found'}), 400
        
        # Preprocess
        img = Image.open(image_path).convert('RGB').resize((224, 224))
        arr = np.array(img) / 255.0
        arr = np.expand_dims(arr, axis=0)
        
        # Predict
        prediction = model.predict(arr)[0]
        class_idx = np.argmax(prediction)
        confidence = float(prediction[class_idx])
        
        return jsonify({
            'class': CLASSES[class_idx],
            'confidence': confidence,
            'all_probs': prediction.tolist()
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)

