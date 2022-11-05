export const useVideoPlayer = (
  videoElement: React.MutableRefObject<HTMLVideoElement | null>
) => {
  const setVideoTime = (value: number = 0) => {
    if (videoElement.current) {
      videoElement.current.currentTime = value;
    }
  };

  return {
    setVideoTime,
  };
};
