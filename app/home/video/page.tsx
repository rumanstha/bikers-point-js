import React from "react";

const VideoPage = () => {
  return (
    <div className="w-full max-w-md mx-auto aspect-[4/5] overflow-hidden relative">
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        controls
      >
        <source src="/quixvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPage;
