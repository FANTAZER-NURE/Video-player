import React, { ReactNode, useMemo, useState } from 'react';
import { Event } from '../../types/Event';
import { Video } from '../../types/Video';
import videos from '../../videos.json'
import events from '../../events.json'

/*
  I'm considering that events sorted in chronological
  order by default. If events from server will not be
  sorted I will just do it here
*/

type ContextValue = {
  currentVideo: Video;
  setCurrentVideo: React.Dispatch<React.SetStateAction<Video>>;
  currentEvent: Event | null;
  setCurrentEvent: React.Dispatch<React.SetStateAction<Event | null>>;
  videos: Video[];
  events: Event[];
};

type Props = {
  children: ReactNode;
};


// const videos: Video[] = [
//   { title: 'Elephant', url: './assets/video.mp4' },
//   { title: 'Earth', url: './assets/videogular.mp4' },
// ];



// const events: Event[] = [
//   {
//     title: 'First',
//     videoTime: 5,
//     videoUrl: './assets/video.mp4',
//     videoToTime: 10,
//   },
//   {
//     title: 'Second',
//     videoTime: 5,
//     videoUrl: './assets/videogular.mp4',
//     videoToTime: 10,
//   },
//   {
//     title: 'Third',
//     videoTime: 12,
//     videoUrl: './assets/video.mp4',
//     videoToTime: 15,
//   },
//   {
//     title: 'Fourth',
//     videoTime: 12,
//     videoUrl: './assets/videogular.mp4',
//     videoToTime: 15,
//   },
//   {
//     title: 'Fifth',
//     videoTime: 17,
//     videoUrl: './assets/video.mp4',
//     videoToTime: 20,
//   },
//   {
//     title: 'Sixth',
//     videoTime: 17,
//     videoUrl: './assets/videogular.mp4',
//     videoToTime: 20,
//   },
// ];

export const VideoPlayerContext = React.createContext<ContextValue>({
  currentEvent: events[0],
  currentVideo: videos[0],
  setCurrentEvent: () => {},
  setCurrentVideo: () => {},
  videos,
  events
});

export const VideoPlayerProvider: React.FC<Props> = ({ children }) => {
  const [currentEvent, setCurrentEvent] = useState<Event | null>(events[0]);
  const [currentVideo, setCurrentVideo] = useState<Video>(videos[0]);

  const contextValue = useMemo(
    () => ({
      currentEvent,
      setCurrentEvent,
      currentVideo,
      setCurrentVideo,
      videos,
      events
    }),
    [currentEvent, currentVideo]
  );

  return (
    <VideoPlayerContext.Provider value={contextValue}>
      {children}
    </VideoPlayerContext.Provider>
  );
};
