import React, { useState, useCallback, useRef } from 'react';
import './Detect.css';

const Detect = () => {
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [loadingImages, setLoadingImages] = useState([]);
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  // Drag drop + file input refs
  const dropZoneRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleFile = useCallback((addedFiles) => {
    const newFiles = Array.from(addedFiles);
    const validFiles = newFiles.filter(f => f.type.startsWith('image/'));

    if (validFiles.length === 0) return setError('Image files only');
    if (files.length + validFiles.length > 5) return setError('Max 5 images');

    const newPreviews = validFiles.map(file => ({ file, url: URL.createObjectURL(file) }));
    setFiles(prev => [...prev, ...validFiles]);
    setPreviews(prev => [...prev, ...newPreviews]);
    setResults([]);
    setError('');
  }, [files.length]);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    handleFile(e.dataTransfer.files);
    dropZoneRef.current.classList.remove('drag-over');
  }, [handleFile]);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    dropZoneRef.current.classList.add('drag-over');
  }, []);

  const clearAll = () => {
    setFiles([]);
    setPreviews([]);
    setResults([]);
    setError('');
    previews.forEach(p => URL.revokeObjectURL(p.url));
    if (fileInputRef.current) fileInputRef.current.value = ''; // reset input safely
  };

  const submitDetect = async () => {
    if (files.length === 0) return setError('Select images');

    setLoadingImages(files.map(() => false));
    setError('');

    const newResults = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const formData = new FormData();
      formData.append('dogImage', file);

      setLoadingImages(prev => {
        const newLoading = [...prev];
        newLoading[i] = true;
        return newLoading;
      });

      try {
        const res = await fetch('http://localhost:5000/api/detect', {
          method: 'POST',
          credentials: 'include',
          body: formData
        });
        const data = await res.json();
        newResults[i] = { file: file.name, data, index: i };
      } catch (err) {
        newResults[i] = { file: file.name, error: 'Error', index: i };
      } finally {
        setLoadingImages(prev => {
          const newLoading = [...prev];
          newLoading[i] = false;
          return newLoading;
        });
      }
    }

    setResults(newResults);
  };

  const getSeverityColor = (confidence) => {
    if (!confidence) return 'danger';
    const conf = confidence * 100;
    if (conf > 85) return 'success';
    if (conf > 65) return 'warning';
    return 'danger';
  };

  const summaryStats = results.filter(r => r.data).reduce((acc, r) => {
    const conf = r.data.confidence * 100;
    acc.count++;
    acc.totalConf += conf;
    acc.healthy += r.data.class === 'Healthy' ? 1 : 0;
    return acc;
  }, { count: 0, totalConf: 0, healthy: 0 });

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <div className="detect-container">
        <header className="detect-header">
          <div className="header-top">
            <h1>🐕 AI Skin Disease Detector</h1>
            <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
          <p>Drag-drop or click - batch analysis up to 5 images</p>
        </header>

        <div className="upload-section">
          <div 
            className={`upload-area ${dropZoneRef.current?.classList.contains('drag-over') ? 'drag-over' : ''}`}
            ref={dropZoneRef}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={() => dropZoneRef.current?.classList.remove('drag-over')}
            onClick={() => fileInputRef.current.click()} // 👈 trigger file picker
          >
            <i className="upload-icon">📁</i>
            <p>{files.length === 0 ? 'Drop images or click' : `${files.length}/5 loaded`}</p>
            <small>Supports JPG/PNG • Max 5</small>
          </div>
          <input 
            type="file" 
            accept="image/*" 
            multiple 
            ref={fileInputRef} // 👈 attach ref
            onChange={(e) => handleFile(e.target.files)} 
            style={{display: 'none'}} 
          />

          {previews.length > 0 && (
            <div className="preview-grid">
              {previews.map((p, i) => (
                <div key={i} className="preview-item">
                  <img src={p.url} alt={`Preview ${i+1}`} />
                  {loadingImages[i] && <div className="loading-overlay"><span className="spinner-small"></span></div>}
                  <small>{p.file.name}</small>
                </div>
              ))}
            </div>
          )}

          <div className="actions-row">
            <button className="clear-btn" onClick={clearAll}>🗑️ Clear All</button>
            <button className="detect-btn" onClick={submitDetect} disabled={loadingImages.some(Boolean)}>
              🔍 Analyze {files.length} Images
            </button>
          </div>
        </div>

        {error && <div className="error-banner">{error}</div>}

        {results.length > 0 && (
          <div className="results-section">
            <h3>📊 Results Summary</h3>
            {summaryStats.count > 0 && (
              <div className="stats-bar">
                <div className="stat-item">
                  <strong>{summaryStats.healthy}/{summaryStats.count}</strong> Healthy
                </div>
                <div className="stat-item">
                  <strong>{(summaryStats.totalConf / summaryStats.count).toFixed(1)}%</strong> Avg Confidence
                </div>
              </div>
            )}
            <div className="results-grid">
              {results.map((r, i) => (
                <div key={i} className={`result-card ${getSeverityColor(r.data?.confidence)}`}>
                  <div className="file-name">{r.file}</div>
                  {r.error ? (
                    <div className="error-state">❌ {r.error}</div>
                  ) : (
                    <div className="result-body">
                      <div className="diagnosis-badge">{r.data.class}</div>
                      <div className="conf-gauge">
                        <div className="gauge-fill" style={{ '--fill': `${r.data.confidence * 100}%` }}></div>
                        <span>{(r.data.confidence * 100).toFixed(0)}%</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <button className="export-btn">📤 Export Results</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detect;
