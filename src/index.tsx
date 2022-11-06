import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { VideoPlayerProvider } from './components/VideoPlayerContext/VideoPlayerContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <VideoPlayerProvider>
      <App />
    </VideoPlayerProvider>
  </React.StrictMode>
);
