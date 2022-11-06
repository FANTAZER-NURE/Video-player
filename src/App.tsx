import { useContext } from 'react';
import './App.scss';
import '@fortawesome/fontawesome-free/css/all.css';
import { VideoPlayer } from './components/Videoplayer/Videoplayer';
import { VideoPlayerContext } from './components/VideoPlayerContext/VideoPlayerContext';
import { EmptyList } from './components/EmptyList/EmptyList';

function App() {
  const { videos } = useContext(VideoPlayerContext);

  return (
    <div className="App">
      {videos.length === 0 && <EmptyList />}

      {videos.length !== 0 && <VideoPlayer />}
    </div>
  );
}

export default App;
