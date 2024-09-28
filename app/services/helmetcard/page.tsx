"use client";
import { Card } from "flowbite-react";
import React from "react";
import Image from "next/image";
import { Button, Navbar } from "flowbite-react";

const ServiceCard = () => {
  const data = [
    {
      id: 1,
      img: "her.png",
      title: "Soman Helmet , luffy graphic",
      rating: 4.5,
      price: "9,000",
    },
    {
      id: 2,
      img: "kyt.png",
      title: "Kyt Helmet",
      rating: 4.0,
      price: "25,500",
    },
    {
      id: 3,
      img: "ls2.png",
      title: "ls2 helmet,Full Face Helmet",
      rating: 4.8,
      price: "10,000",
    },
    {
      id: 4,
      img: "helmet2.png",
      title: "Spyder helmet , mat black",
      rating: 3.8,
      price: "9,500",
    },
    {
      id: 5,
      img: "helmet3.png",
      title: "Drift helmet,Adventure Helmet",
      rating: 5.0,
      price: "3,500",
    },
    {
      id: 6,
      img: "royal.png",
      title: "Royal helmet,shinny black",
      rating: 5.0,
      price: "5,500",
    },
  ];

  return (
    <div className="container mx-auto my-10">
      <div className="text-center">
        <h1 className="text-black text-3xl font-semibold mb-5">Services</h1>
      </div>
      <div>
        <h1 className="text-2xl text-black font-semibold p-7">Helmets</h1>
      </div>
      <br></br>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {data.map((item) => (
          <Card key={item.id} className="max-w-sm mx-auto">
            <Image
              src={`/${item.img}`}
              alt={item.title}
              width={300}
              height={200}
              className="rounded-t-lg"
            />
            <div className="p-5">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {item.title}
                </h5>
              </a>
              <div className="mb-5 mt-2.5 flex items-center">
                {/* Display stars based on rating */}
                {Array.from({ length: 5 }, (_, index) => (
                  <svg
                    key={index}
                    className={`h-5 w-5 ${
                      index < Math.round(item.rating)
                        ? "text-yellow-300"
                        : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-3 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                  {item.rating}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  Rs {item.price}
                </span>
                <Button href="#" gradientDuoTone="purpleToPink">
                  Add to cart
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
