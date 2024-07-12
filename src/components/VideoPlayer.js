import React, { useRef, useState, useEffect } from 'react';
import { Player, ControlBar } from 'video-react';
import 'video-react/dist/video-react.css';
import axios from 'axios';

const VideoPlayer = ({ videoUrl, videoId }) => {
  const player = useRef(null);
  const [annotations, setAnnotations] = useState([]);
  const [currentAnnotation, setCurrentAnnotation] = useState(null);

  useEffect(() => {
    axios.get(`/api/annotations/${videoId}`)
      .then(response => setAnnotations(response.data))
      .catch(error => console.error('Error fetching annotations:', error));
  }, [videoId]);

  const handleTimeUpdate = () => {
    const currentTime = player.current.getState().player.currentTime;
    const annotation = annotations.find(ann => ann.timestamp === Math.floor(currentTime));
    setCurrentAnnotation(annotation);
  };

  return (
    <div>
      <Player ref={player} src={videoUrl} onTimeUpdate={handleTimeUpdate}>
        <ControlBar autoHide={false} />
      </Player>
      {currentAnnotation && (
        <div className="annotation">
          {currentAnnotation.type === 'text' && <p>{currentAnnotation.text}</p>}
          {currentAnnotation.comments && <p>Comments: {currentAnnotation.comments}</p>}
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
