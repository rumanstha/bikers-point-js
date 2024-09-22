import React from "react";
import ServiceCard from "./helmetcard/page";
import AccesoriesPage from "./BikeAccesories/page";
import AboutCompanyPage from "../about/aboutcompany/page";
import { Table } from "flowbite-react";
import TablePage from "./table/page";

const ServicePages = () => {
  return (
    <div>
      <ServiceCard />
      <AboutCompanyPage />
      <AccesoriesPage />
      <br></br>
      <TablePage />
    </div>
  );
};

export default ServicePages;
