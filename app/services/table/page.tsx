"use client";
import React from "react";
import { Table } from "flowbite-react";

const TablePage = () => {
  const data = [
    {
      id: 1,
      title: "HELMETS",
      avilableColour: "White,black,coustomize",
      category: "DOT,ISI,ESE",
      price: "2000 to 110,000",
    },
    {
      id: 2,
      title: "BIKE MODIFICATION PART",
      avilableColour: "All avilable",
      category: "Exhaust,mud guard,suspension hand guard",
      price: "1000,20,000",
    },
    {
      id: 3,
      title: "Bags",
      avilableColour: "green,black,brown",
      category: "waterproof,travel Essentials",
      price: "10,000 to 30,000",
    },
  ];
  return (
    <div className="overflow-x-auto">
      <div className="text-2xl text-black font-semibold p-7">
        Product Inventory
      </div>

      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Products</Table.HeadCell>
          <Table.HeadCell>Avilable Color</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price Range</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        {data.map((item) => (
          <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {item.title}
              </Table.Cell>
              <Table.Cell>{item.avilableColour}</Table.Cell>
              <Table.Cell>{item.category}</Table.Cell>
              <Table.Cell>Rs {item.price}</Table.Cell>
              <Table.Cell>
                <a
                  href="#"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Edit
                </a>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
      </Table>
    </div>
  );
};

export default TablePage;
