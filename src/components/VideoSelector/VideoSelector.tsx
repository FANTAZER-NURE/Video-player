import { useContext } from 'react';
import { VideoPlayerContext } from '../VideoPlayerContext/VideoPlayerContext';
import { v4 as uuidv4 } from 'uuid';

export const VideoSelector = () => {
  const { currentVideo, setCurrentVideo, videos } = useContext(VideoPlayerContext);

  return (
    <select
      className="container__select"
      value={currentVideo.title}
      onChange={(event) => {
        const video =
          videos.find((vid) => vid.title === event.target.value) || videos[0];

        setCurrentVideo(video);
      }}
    >
      {videos.map((video) => (
        <option
          value={video.title}
          className="container__option"
          key={uuidv4()}
        >
          {video.title}
        </option>
      ))}
    </select>
  );
};
