"use client";
import { Card, Button, Modal } from "flowbite-react";
import React, { useState } from "react";
import Image from "next/image";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import buyPage from "@/app/buy/page";

export default function ServiceCard() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const data = [
    {
      id: 1,
      img: "Capture.PNG",
      title: "GTR T-shirt, premium quality",
      rating: 4.5,
      price: "1,300",
    },
    {
      id: 2,
      img: "Capture2.PNG",
      title: "Billie Eilish T-shirt, cotton fabric",
      rating: 4.0,
      price: "1,500",
    },
    {
      id: 3,
      img: "Capture3.PNG",
      title: "Custom made T-shirt",
      rating: 4.8,
      price: "1,500",
    },
    {
      id: 4,
      img: "Capture4.PNG",
      title: "Custom T-shirt, white",
      rating: 3.8,
      price: "1,200",
    },
    {
      id: 5,
      img: "Capture7.PNG",
      title: "Printed T-shirt, black",
      rating: 5.0,
      price: "1,300",
    },
    {
      id: 6,
      img: "Capture6.PNG",
      title: "Vintage T-shirt with custom design",
      rating: 5.0,
      price: "1,600",
    },
  ];

  const handleAddToCart = (item) => {
    setSelectedItem(item);
    setOpenModal(true);
  };

  return (
    <div className="container mx-auto my-10">
      <div className="text-center">
        <h1 className="text-black text-3xl font-semibold mb-5">Services</h1>
      </div>
      <div>
        <h1 className="text-2xl text-black font-semibold p-7">T-Shirts</h1>
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
              <div className="mb-5 mt-2.5 flex items-center">
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
                <Button
                  gradientDuoTone="purpleToPink"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to cart
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Modal Component */}
      {selectedItem && (
        <Modal
          show={openModal}
          size="md"
          onClose={() => setOpenModal(false)}
          popup
        >
          <Modal.Header />
          <Modal.Body>
            <div className="text-center">
              <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                you wannna buy {selectedItem.title} ?
              </h3>
              <div className="flex justify-center gap-4">
                <Button
                  color="failure"
                  href="./buy"
                  onClick={() => setOpenModal(false)}
                >
                  {"Yes, I'm sure"}
                </Button>
                <Button color="gray" onClick={() => setOpenModal(false)}>
                  No, cancel
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
}
