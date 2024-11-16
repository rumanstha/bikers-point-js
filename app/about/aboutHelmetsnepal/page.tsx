import React from "react";
import Image from "next/image";

const AboutHelmetsNepal = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-6 md:space-y-0 md:flex md:space-x-4">
      {/* Left side: Heading section */}
      <div className="flex flex-col items-start justify-center text-left text-black md:w-1/2 space-y-4">
        <h3 className="text-xl font-semibold">About Us</h3>
        <h1 className="text-3xl font-bold">QUIXWEARS Pvt. Ltd.</h1>
        <h3 className="text-xl font-semibold">A Little About Us</h3>
        <img
          src="/favicon.ico"
          className="h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
      </div>

      {/* Right side: Paragraph section */}
      <div className="text-black md:w-1/2">
        <p className="text-justify">
          Welcome to QUIXWEARS, your go-to destination for fashion-forward,
          comfortable, and stylish apparel. We believe that fashion should not
          only make you look good but also feel good. Starting with our
          exclusive line of premium t-shirts, we’ve put a focus on combining
          modern trends with top-quality materials to create the perfect
          wardrobe essentials for everyday wear.
          <br></br>
          But we’re just getting started. At QUIXWEARS, we have big plans for
          the future. While t-shirts are our current specialty, we are excited
          to expand our offerings soon to include a wider range of products that
          suit your lifestyle—think fashionable outerwear, cozy hoodies, trendy
          accessories, and much more. Our goal is to provide a one-stop fashion
          destination where you can find pieces that reflect your individuality
          and personal style.
        </p>
      </div>
    </div>
  );
};

export default AboutHelmetsNepal;
