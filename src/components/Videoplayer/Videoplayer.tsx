import { useContext, useEffect, useRef, useState } from 'react';
import { VideoWindow } from '../VideoWindow/VideoWIndow';
import { EventList } from '../EventList/EventList';
import { Event } from '../../types/Event';
import { VideoPlayerContext } from '../VideoPlayerContext/VideoPlayerContext';
import { VideoSelector } from '../VideoSelector/VideoSelector';

interface Props {
  events: Event[];
}

export const VideoPlayer: React.FC<Props> = ({ events }) => {
  const { currentVideo } = useContext(VideoPlayerContext);
  const videoElement = useRef(null);
  let visibleEvents = events.filter((e) => e.videoUrl === currentVideo.url);

  visibleEvents.forEach((el, i) => {
    el.index = i;
  });

  useEffect(() => {
    visibleEvents = events.filter((e) => e.videoUrl === currentVideo.url);

    visibleEvents.forEach((el, i) => {
      el.index = i;
    });

    console.log('changed');
  }, [currentVideo]);

  console.log(visibleEvents);

  return (
    <div className="container">
      <h2 className="container__title">{currentVideo.title}</h2>

      <VideoSelector />

      <VideoWindow
        video={currentVideo}
        videoRef={videoElement}
        events={visibleEvents}
      />

      <EventList
        events={visibleEvents}
        videoRef={videoElement}
        selectedVideo={currentVideo}
      />
    </div>
  );
};
