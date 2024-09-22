"use client";
import React from "react";
import { Card } from "flowbite-react";
import Image from "next/image";

const BrandPage = () => {
  const data = [
    {
      id: 1,
      img: "brand1.png",
    },
    {
      id: 2,
      img: "brand2.png",
    },
    {
      id: 3,
      img: "brand3.png",
    },
    {
      id: 4,
      img: "brand4.png",
    },
    {
      id: 5,
      img: "brand5.png",
    },
  ];
  return (
    <div>
      <div className="text-center">
        <h1 className="text-black text-3xl font-semibold ">Our Brand</h1>
      </div>
      <div className=" p-11 grid grid-cols-5 sm:grid-cols-5 md:grid-cols-5 gap-3">
        {data.map((item) => (
          <Card
            className="max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={item.img}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default BrandPage;
