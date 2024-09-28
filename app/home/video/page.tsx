import React from "react";

const VideoPage = () => {
  return (
    <div className="w-full">
      <video className="w-full h-auto" autoPlay muted loop controls>
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPage;
