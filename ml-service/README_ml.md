# ML Service Setup
1. cd ml-service
2. python -m venv venv
3. venv\\Scripts\\activate  (Windows)
4. pip install -r requirements.txt
5. Download model.h5 from GitHub repo to here: https://github.com/guruprashanth2004/stray-dog-skin-disease-detection (check releases/assets or train/)
6. python app.py
7. Test: POST http://localhost:8000/predict {imagePath: '/path/to/img.jpg'}

