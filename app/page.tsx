import React from "react";
import HomePage from "./home/page";
import AboutHelmetsNepal from "./about/aboutHelmetsnepal/page";
import ServiceAccesoriesPage from "./services/serviceshomepage/page";
import AboutCompanyPage from "./about/aboutcompany/page";
import BrandPage from "./about/brand/page";

const Main = () => {
  return (
    <div>
      <HomePage />
      <AboutHelmetsNepal />
      <ServiceAccesoriesPage />
      <AboutCompanyPage />
      <BrandPage />
    </div>
  );
};

export default Main;
