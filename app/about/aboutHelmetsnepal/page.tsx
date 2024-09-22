import React from "react";
import Image from "next/image";

const AboutHelmetsNepal = () => {
  return (
    <div className="container flex mx-auto px-4 py-8 space-x-4">
      {/* Left side: Heading section */}
      <div className="flex flex-col items-start justify-center text-left text-black w-1/2">
        <h3 className="text-xl font-semibold">About Us</h3>
        <h1 className="text-3xl font-bold">Helmets Nepal Pvt. Ltd.</h1>
        <h3 className="text-xl font-semibold">A Little About Us</h3>
        <img
          src="/favicon.png"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
      </div>

      {/* Right side: Paragraph section */}
      <div className="max-w-2xl text-black w-1/2">
        <p className="text-justify">
          Helmets Nepal is the result of a technological revolution and growing
          e-commerce industry, that encouraged us to create “a one-stop digital
          platform” for bike lovers. We sell fashion with protection ensuring
          quality and with the promise of reliability. But above all, one thing
          we prioritize in selling is “Road Safety”. Our Story: A story of many
          firsts and every one of them was a blessing.
          <br />
          Helmets Nepal began operation in Kathmandu in 2016 as the first
          complete online one-click platform in Nepal with a store in Anamnagar.
          The same year, we became the first motorcycle safety gear and
          accessories retail store in the industry to introduce the concept of
          showrooms in Nepal by opening our first one in Maitighar. Another
          showroom followed in Teku, next to our corporate office in 2019. In
          early 2021, we opened our third showroom in Nagpokhari. Now Helmets
          Nepal is the go-to platform and place for safety gear ranging from
          varieties of helmets, safety apparel, lubricants, and riding techs.
        </p>
      </div>
    </div>
  );
};

export default AboutHelmetsNepal;
