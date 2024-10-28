// Import the React library
import React from 'react';

// FileUpload component definition
// Receives a single prop: `onFileChange` (a function to handle file selection)
function FileUpload({ onFileChange }) {
  // Handler for file input changes
  // Calls the `onFileChange` function with the selected file when a file is chosen
  const handleFileInput = (e) => {
    onFileChange(e.target.files[0]); // Passes the selected file to the parent component
  };

  // Render the file upload input and label
  return (
    <div className="file-upload">
      {/* Label for the file input */}
      <label className="file-label">Upload Assignment PDF:</label>
      
      {/* File input element */}
      <input 
        type="file"                    // Sets the input type to "file" for file selection
        className="file-input"          // Applies styling from CSS classes
        accept="application/pdf"        // Restricts accepted file types to PDF only
        onChange={handleFileInput}      // Calls handleFileInput when a file is selected
      />
    </div>
  );
}

// Export the FileUpload component as the default export
export default FileUpload;
