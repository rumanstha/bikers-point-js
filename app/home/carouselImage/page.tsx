"use client";
import React from "react";
import { Carousel } from "flowbite-react";
import Image from "next/image";

const CarouselImageComponent = () => {
  return (
    <div className="relative w-full h-[calc(100vh-4rem)]">
      <Carousel slide={true} className="h-full">
        <div className="relative w-full h-full">
          <Image
            src="/carousel.png"
            alt="First Image"
            layout="fill" // This makes the image fill the container
            objectFit="cover" // Ensures the image covers the entire container while maintaining aspect ratio
          />
        </div>
        <div className="relative w-full h-full">
          <Image
            src="/ver2.jpg"
            alt="Second Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative w-full h-full">
          <Image
            src="/ver3.jpg"
            alt="Third Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselImageComponent;
