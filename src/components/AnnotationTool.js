import React, { useState } from 'react';
import axios from 'axios';

const AnnotationTool = ({ videoId }) => {
  const [type, setType] = useState('text');
  const [text, setText] = useState('');
  const [timestamp, setTimestamp] = useState(0);
  const [comments, setComments] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const annotation = { videoId, type, text, timestamp, comments };
    axios.post('/api/annotations', annotation)
      .then(response => console.log('Annotation saved:', response.data))
      .catch(error => console.error('Error saving annotation:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Type:</label>
        <select value={type} onChange={e => setType(e.target.value)}>
          <option value="text">Text</option>
          {/* Add other types as needed */}
        </select>
      </div>
      <div>
        <label>Text:</label>
        <input type="text" value={text} onChange={e => setText(e.target.value)} />
      </div>
      <div>
        <label>Timestamp:</label>
        <input type="number" value={timestamp} onChange={e => setTimestamp(parseInt(e.target.value))} />
      </div>
      <div>
        <label>Comments:</label>
        <textarea value={comments} onChange={e => setComments(e.target.value)} />
      </div>
      <button type="submit">Add Annotation</button>
    </form>
  );
};

export default AnnotationTool;

