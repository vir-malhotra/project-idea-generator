// Import the React library
import React from 'react';

// IdeaList component definition
// Receives a single prop: `ideas` (an array of generated project ideas)
function IdeaList({ ideas }) {
  // Render the list of ideas within a styled container
  return (
    <div className="idea-list">
      {/* Header for the ideas list */}
      <h2>Generated Project Ideas</h2>
      
      {/* Unordered list container for the project ideas */}
      <ul className="ideas-container">
        {/* Map over the array of ideas and render each as a list item */}
        {ideas.map((idea, index) => (
          <li key={index} className="idea-item">
            {idea}  {/* Display the idea content */}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Export the IdeaList component as the default export
export default IdeaList;
