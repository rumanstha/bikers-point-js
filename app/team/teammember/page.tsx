"use client";
import React from "react";
import { Card } from "flowbite-react";
import Image from "next/image";
import { title } from "process";

const TeamMemberPage = () => {
  const data = [
    {
      id: 1,
      img: "boss.png",
      tittle: "Ceo of ISM , Sachin Maharjan",
      about:
        "Sachin Maharjan, the visionary CEO of Helmets Nepal, is known for his dedication to road safety and his innovative approach to creating a culture of helmet use in Nepal. ",
    },
    {
      id: 2,
      img: "Member.jpg",
      tittle: "forntend developer, Rajan Maharjan",
      about:
        "Rajan Maharjan, a frontend developer at Helmets Nepal, is known for his exceptional skills in crafting visually engaging and intuitive user interfaces.",
    },
    {
      id: 3,
      img: "download.jpg",
      tittle: "Intern,Ruman Shrestha",
      about:
        "Ruman Shrestha, an intern specializing in React at Helmets Nepal, is a promising talent with a passion for front-end development.",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
      {data.map((item) => (
        <Card className="max-w-sm p-11" imgSrc={item.img} horizontal>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {item.tittle}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {item.about}
          </p>
        </Card>
      ))}
    </div>
  );
};

export default TeamMemberPage;
