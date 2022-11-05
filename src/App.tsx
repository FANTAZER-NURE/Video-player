import { useContext } from 'react';
import './App.scss';
import '@fortawesome/fontawesome-free/css/all.css';
import { VideoPlayer } from './components/Videoplayer/Videoplayer';
import { VideoPlayerContext } from './components/VideoPlayerContext/VideoPlayerContext';


function App() {
  const { events, videos } = useContext(VideoPlayerContext);

  return (
    <div className="App">
      {videos.length === 0 && <h1>There are no videos now</h1>}

      {videos.length !== 0 && <VideoPlayer events={events} />}
    </div>
  );
}

export default App;
