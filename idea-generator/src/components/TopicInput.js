// src/components/TopicInput.js
import React from 'react';

function TopicInput({ onTopicChange }) {
  const handleInputChange = (e) => {
    onTopicChange(e.target.value);
  };

  return (
    <div className="topic-input">
      <label className="topic-label">Enter a Topic:</label>
      <input
        type="text"
        onChange={handleInputChange}
        placeholder="e.g., Machine Learning"
        className="topic-textbox"
      />
    </div>
  );
}

export default TopicInput;
