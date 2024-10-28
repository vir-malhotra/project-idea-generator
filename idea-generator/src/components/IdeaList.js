// src/components/IdeaList.js
import React from 'react';

function IdeaList({ ideas }) {
  return (
    <div className="idea-list">
      <h2>Generated Project Ideas</h2>
      <ul className="ideas-container">
        {ideas.map((idea, index) => (
          <li key={index} className="idea-item">
            {idea}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IdeaList;
