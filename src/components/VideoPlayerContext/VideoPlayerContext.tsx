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
