import React, { useState } from 'react';
import axios from 'axios';
import FileUpload from './components/FileUpload';
import TopicInput from './components/TopicInput';
import IdeaList from './components/IdeaList';
import './App.css';

function App() {
  const [file, setFile] = useState(null);
  const [topic, setTopic] = useState("");
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (newFile) => setFile(newFile);
  const handleTopicChange = (newTopic) => setTopic(newTopic);

  const handleGenerateIdeas = async () => {
    if (!file || !topic) {
      alert("Please upload a file and enter a topic.");
      return;
    }

    setLoading(true); // Show loading state
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('topic', topic);

      const response = await axios.post('http://localhost:5000/api/generate-ideas', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setIdeas(response.data.ideas);
    } catch (error) {
      console.error("Error generating ideas:", error);
      alert("Failed to generate project ideas. Please try again.");
    } finally {
      setLoading(false); // Hide loading state
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">Project Idea Generator</header>
      <div className="content-wrapper">
        <FileUpload onFileChange={handleFileChange} />
        <TopicInput onTopicChange={handleTopicChange} />
        <button onClick={handleGenerateIdeas} className="generate-button" disabled={loading}>
          {loading ? 'Generating Ideas...' : 'Generate Ideas'}
        </button>
        <IdeaList ideas={ideas} />
      </div>
    </div>
  );
}

export default App;
