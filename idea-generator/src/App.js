// Import required libraries and components
import React, { useState } from 'react';         // React for component rendering and useState hook for state management
import axios from 'axios';                       // Axios for making HTTP requests to the backend
import FileUpload from './components/FileUpload';// Component for file upload input
import TopicInput from './components/TopicInput';// Component for topic input
import IdeaList from './components/IdeaList';    // Component for displaying the generated project ideas
import './App.css';                              // Main CSS file for styling

// Main App component
function App() {
  // State variables to manage file, topic input, generated ideas, and loading status
  const [file, setFile] = useState(null);       // Stores the uploaded file
  const [topic, setTopic] = useState("");       // Stores the topic input by the user
  const [ideas, setIdeas] = useState([]);       // Stores the list of generated ideas
  const [loading, setLoading] = useState(false);// Indicates if ideas are being generated

  // Handler for updating the file state when a new file is uploaded
  const handleFileChange = (newFile) => setFile(newFile);

  // Handler for updating the topic state when the topic input changes
  const handleTopicChange = (newTopic) => setTopic(newTopic);

  // Function to handle generating project ideas by calling the backend API
  const handleGenerateIdeas = async () => {
    // Validation: Ensure a file and topic are provided before generating ideas
    if (!file || !topic) {
      alert("Please upload a file and enter a topic."); // Show alert if validation fails
      return;
    }

    setLoading(true); // Set loading state to true to show loading indicator
    try {
      // Create a new FormData object to send file and topic data to the backend
      const formData = new FormData();
      formData.append('file', file);           // Append file data to the form
      formData.append('topic', topic);         // Append topic input to the form

      // Make a POST request to the backend API with the form data
      const response = await axios.post('http://localhost:5000/api/generate-ideas', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set content type for file upload
        },
      });

      // Update the ideas state with the data received from the backend response
      setIdeas(response.data.ideas);
    } catch (error) {
      console.error("Error generating ideas:", error); // Log any errors for debugging
      alert("Failed to generate project ideas. Please try again."); // Show error message to user
    } finally {
      setLoading(false); // Reset loading state to false once API call completes
    }
  };

  // Render the main structure of the app, including file upload, topic input, generate button, and idea list
  return (
    <div className="app-container">
      {/* Header of the application */}
      <header className="app-header">Project Idea Generator</header>

      {/* Main content wrapper */}
      <div className="content-wrapper">
        {/* File upload component for selecting a PDF file */}
        <FileUpload onFileChange={handleFileChange} />

        {/* Topic input component for entering the topic */}
        <TopicInput onTopicChange={handleTopicChange} />

        {/* Generate button to initiate idea generation process, with loading indicator */}
        <button onClick={handleGenerateIdeas} className="generate-button" disabled={loading}>
          {loading ? 'Generating Ideas...' : 'Generate Ideas'}
        </button>

        {/* Idea list component to display generated project ideas */}
        <IdeaList ideas={ideas} />
      </div>
    </div>
  );
}

// Export the App component as the default export
export default App;
