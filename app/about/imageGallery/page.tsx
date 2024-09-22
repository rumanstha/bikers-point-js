import React from "react";
import Image from "next/image";

const ImageGallery = () => {
  const images = [
    "/image1.jpg",
    "/image2.jpg",
    "/image3.jpg",
    "/image4.jpg",
    "/image5.jpg",
  ];

  return (
    <div className="relative w-full h-[600px]">
      {/* Image container to hold all images as a background */}
      <div className="absolute inset-0 grid grid-cols-5 gap-1">
        {images.map((image, index) => (
          <div key={index} className="w-full h-full relative">
            {/* Each image filling the grid cell */}
            <Image
              src={image}
              alt={`Background Image ${index + 1}`}
              layout="fill"
              objectFit="cover" // Ensures the image covers the entire area
              className="w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Overlay text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white bg-black bg-opacity-50 p-6 rounded-md">
          <h1 className="text-5xl font-bold">Welcome to Bikers Point</h1>
          <p className="text-2xl mt-4">
            Ensuring Safety and Style on Every Ride
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;

const data = [
  {
    id: 1,
    img: "helmet1.png",
    title: "Sport Helmet",
    rating: 4.5,
    price: "2000",
  },
  {
    id: 2,
    img: "helmet2.png",
    title: "Classic Helmet",
    rating: 4.0,
    price: "1500",
  },
  {
    id: 3,
    img: "helmet3.png",
    title: "Full Face Helmet",
    rating: 4.8,
    price: "3000",
  },
  {
    id: 4,
    img: "helmet4.png",
    title: "Half Face Helmet",
    rating: 3.8,
    price: "1200",
  },
  {
    id: 5,
    img: "helmet5.png",
    title: "Adventure Helmet",
    rating: 5.0,
    price: "3500",
  },
];

data.map((iter) => <>{iter.title}</>);
