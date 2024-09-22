"use client";
import React from "react";
import { Card } from "flowbite-react";
import Image from "next/image";

const ServiceAccesoriesPage = () => {
  const data = [
    {
      id: 1,
      img: "img1.png",
      title: "Helmets",
    },
    {
      id: 2,
      img: "img(2).png",
      title: "Gloves",
    },
    {
      id: 3,
      img: "img-bag.png",
      title: "Bags",
    },
    {
      id: 4,
      img: "img-assories.png",
      title: "assories",
    },
    {
      id: 5,
      img: "img-tyre.png",
      title: "Bike Tyre",
    },
  ];
  return (
    <div>
      <div className="text-center">
        <h1 className="text-black text-3xl font-semibold mb-5">Services</h1>
      </div>
      <div className="grid grid-cols-5 sm:grid-cols-2 md:grid-cols-5  gap-8">
        {data.map((item) => (
          <Card key={item.id} className="max-w-sm mx-auto">
            <Image
              src={`/${item.img}`}
              alt={item.title}
              width={200}
              height={100}
              className="rounded-t-lg"
            />
            <div className="p-5">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {item.title}
                </h5>
              </a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServiceAccesoriesPage;
