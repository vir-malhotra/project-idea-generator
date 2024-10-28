// src/components/FileUpload.js
import React from 'react';

function FileUpload({ onFileChange }) {
  const handleFileInput = (e) => {
    onFileChange(e.target.files[0]);
  };

  return (
    <div className="file-upload">
      <label className="file-label">Upload Assignment PDF:</label>
      <input type="file" className="file-input" accept="application/pdf" onChange={handleFileInput} />
    </div>
  );
}

export default FileUpload;
