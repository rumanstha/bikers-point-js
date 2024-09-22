import React from "react";
import NavBar from "../home/navBar/page";
import AboutHelmetsNepal from "./aboutHelmetsnepal/page";
import ImageGallery from "./imageGallery/page";
import BrandPage from "./brand/page";

const aboutPage = () => {
  return (
    <div className="bg-white">
      <ImageGallery />
      <AboutHelmetsNepal />
      <BrandPage />
    </div>
  );
};

export default aboutPage;
