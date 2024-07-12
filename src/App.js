import React from 'react';
import VideoPlayer from './components/VideoPlayer';
import AnnotationTool from './components/AnnotationTool';

const App = () => {
  const videoUrl = 'your_video_url_here';
  const videoId = 'your_video_id_here';

  return (
    <div className="App">
      <VideoPlayer videoUrl={videoUrl} videoId={videoId} />
      <AnnotationTool videoId={videoId} />
    </div>
  );
};

export default App;
