import { useVideoPlayer } from '../../hooks/useVideoPlayer';
import { memo, useCallback, useContext, useEffect } from 'react';
import { Video } from '../../types/Video';
import { VideoPlayerContext } from '../VideoPlayerContext/VideoPlayerContext';
import { Event } from '../../types/Event';

interface Props {
  video: Video;
  videoRef: React.MutableRefObject<HTMLVideoElement | null>;
  events: Event[];
}

type IndexObject = {
  [key: string]: Array<number>;
};

export const VideoWindow: React.FC<Props> = memo(
  ({ video, videoRef, events }) => {
    const { setVideoTime } = useVideoPlayer(videoRef);
    const { currentVideo, currentEvent, setCurrentEvent } =
      useContext(VideoPlayerContext);

    /*
     * indexObject is needed to
     * regulate events and sync it with timeline
     */
    const indexObject: IndexObject = {};

    events.forEach((el, i) => {
      indexObject[i] = [el.videoTime, el.videoToTime];
    });

    useEffect(() => {
      setCurrentEvent(events[0]);
      setVideoTime(events[0].videoTime);
    }, [currentVideo]);

    useEffect(() => {
      setCurrentEvent(currentEvent);
    }, [currentEvent]);

    const handleTimeChange = useCallback(
      (e: React.SyntheticEvent<HTMLVideoElement>) => {
        for (const key in indexObject) {
          if (
            e.currentTarget.currentTime >= indexObject[key][0] &&
            e.currentTarget.currentTime <= indexObject[key][1]
          ) {
            const searchEvent = events.find((e) => e.index === +key);

            setCurrentEvent(searchEvent || null);
            break;
          } else {
            setCurrentEvent(null);
          }
        }
      },
      [currentEvent, currentVideo]
    );

    return (
      <div className="video">
        <div className="video__wrapper">
          <video
            src={video.url}
            ref={videoRef}
            controls
            autoPlay
            muted
            onTimeUpdate={handleTimeChange}
          />
        </div>
      </div>
    );
  }
);
