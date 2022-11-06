import { useContext, useEffect, useRef } from 'react';
import { VideoWindow } from '../VideoWindow/VideoWIndow';
import { EventList } from '../EventList/EventList';
import { VideoPlayerContext } from '../VideoPlayerContext/VideoPlayerContext';
import { VideoSelector } from '../VideoSelector/VideoSelector';

export const VideoPlayer: React.FC = () => {
  const { currentVideo, events } = useContext(VideoPlayerContext);
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
  }, [currentVideo]);

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
      />
    </div>
  );
};
