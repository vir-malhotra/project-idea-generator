// Import the React library
import React from 'react';

// TopicInput component definition
// Receives a single prop: `onTopicChange` (a function to handle topic input changes)
function TopicInput({ onTopicChange }) {
  // Handler for text input changes
  // Calls the `onTopicChange` function with the input value whenever it changes
  const handleInputChange = (e) => {
    onTopicChange(e.target.value); // Passes the input text to the parent component
  };

  // Render the text input field and label
  return (
    <div className="topic-input">
      {/* Label for the topic input */}
      <label className="topic-label">Enter a Topic:</label>
      
      {/* Text input for entering the topic */}
      <input
        type="text"                     // Specifies input type as "text"
        onChange={handleInputChange}     // Calls handleInputChange whenever input changes
        placeholder="e.g., Machine Learning" // Placeholder text to guide user input
        className="topic-textbox"        // Applies CSS class for styling
      />
    </div>
  );
}

// Export the TopicInput component as the default export
export default TopicInput;
