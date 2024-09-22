"use client";
import React from "react";
import Image from "next/image";

const AboutCompanyPage = () => {
  const images = ["/aboutimg.jpg", "/aboutimg(2).jpg"];

  return (
    <div className="relative w-full h-[600px] p-10 overflow-hidden">
      {/* Image container with a subtle zoom-in effect */}
      <div className="absolute inset-0 grid grid-cols-2 gap-12 p-10 animate-fade-in">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full h-full relative transform transition-transform duration-700 hover:scale-110"
          >
            <Image
              src={image}
              alt={`Background Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="w-full h-full rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>

      {/* Gradient overlay for better readability */}
      <div className="absolute inset-0 " />

      {/* Overlay text with animation and effects */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white p-6 bg-black bg-opacity-50 rounded-lg ">
          <h1 className="text-4xl font-extrabold tracking-wide mb-4  text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
            Helmet Servicing
          </h1>
          <p className="text-xl mt-4 drop-shadow-lg">
            We provide professional helmet servicing to keep your helmet clean
            and fresh.
          </p>
        </div>
      </div>

      {/* Keyframes for animations */}
    </div>
  );
};

export default AboutCompanyPage;
