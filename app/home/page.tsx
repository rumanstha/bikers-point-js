import React from "react";
import CarouselImageComponet from "../home/carouselImage/page";

import App from "next/app";
import NavBar from "../home/navBar/page";

const HomePage = () => {
  return (
    <div>
      <CarouselImageComponet />
    </div>
  );
};

export default HomePage;
// folder (app) (home folder inside app page.tsx inside home  folder) (carouselImage folder inside home) (page.tsx inside carouselImage folder)
