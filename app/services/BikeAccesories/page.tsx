"use client";
import React from "react";
import Image from "next/image";
import { Card } from "flowbite-react";
import { Button } from "flowbite-react";

const AccesoriesPage = () => {
  const data = [
    {
      id: 1,
      img: "Tyrehugger.jpg",
      title: "SUKICHI Bike Tyre Hugger | Universal Mudguard for Bike",

      price: "2,000",
    },
    {
      id: 2,
      img: "exhaust.jpg",
      title: "51mm Motorcycle Termignoni Exhaust Modified Carbon Fiber Steel ",

      price: "5,000",
    },
    {
      id: 3,
      img: "2.jpg",
      title: "Universal Bike Exhaust SC Project Straight (Multicolor)",

      price: "6,500",
    },
    {
      id: 4,
      img: "3.jpg",
      title:
        "Motorcycle Suspension Strut Shock Absorber Universal 320mm Motorcycle Shock",

      price: "2,999",
    },
    {
      id: 5,
      img: "4.jpg",
      title: "Modified Hand Guard Light",

      price: "2,050",
    },
  ];

  return (
    <div>
      <div>
        <h1 className="text-2xl text-black font-semibold p-7">
          Bike modification part
        </h1>
      </div>
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

export default AccesoriesPage;
