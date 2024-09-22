// back ground back vanko bea use garda renro dekhxa
"use client";
import React from "react";
import { Carousel } from "flowbite-react";
import Image from "next/image";

const CarouselImageComponent = () => {
  return (
    <div className="flex-1 h-[calc(100vh-4rem)]">
      <Carousel slide={true}>
        <Image src="/carousel.png" alt="First Image" width={800} height={600} />
        <Image src="/ver2.jpg" alt="Second Image" width={800} height={600} />
        <Image src="/ver3.jpg" alt="Third Image" width={800} height={600} />
      </Carousel>
    </div>
  );
};

export default CarouselImageComponent;
