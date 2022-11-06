import { Event } from '../../types/Event';
import { v4 as uuidv4 } from 'uuid';
import { useVideoPlayer } from '../../hooks/useVideoPlayer';
import { useContext } from 'react';
import { VideoPlayerContext } from '../VideoPlayerContext/VideoPlayerContext';
import classNames from 'classnames';

interface Props {
  events: Event[];
  videoRef: React.MutableRefObject<HTMLVideoElement | null>;
}

export const EventList: React.FC<Props> = ({
  events,
  videoRef,
}) => {
  const { setVideoTime } = useVideoPlayer(videoRef);
  const { setCurrentEvent, currentEvent, currentVideo } =
    useContext(VideoPlayerContext);

  const handleClick = (event: Event) => {
    setVideoTime(event.videoTime);

    setCurrentEvent(event);
  };

  const checkEventsEquality = (event1: Event | null, event2: Event | null) => {
    if (!event1 || !event2) {
      return false;
    }

    for (const key in event1) {
      if (
        event1[key as keyof typeof event1] !==
        event2[key as keyof typeof event1]
      ) {
        return false;
      }
    }

    return true;
  };

  const visibleEvents = events.filter((e) => e.videoUrl === currentVideo.url);

  return (
    <div className="events">
      {visibleEvents.map((event) => (
        <div
          key={uuidv4()}
          className={classNames('events__card', {
            'events__card--selected': checkEventsEquality(event, currentEvent),
          })}
          onClick={() => {
            handleClick(event);
          }}
        >
          <p className="events__text text1">{event.title}</p>
        </div>
      ))}
    </div>
  );
};
