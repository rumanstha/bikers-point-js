"use client";
import React, { use } from "react";
import { Button, Navbar } from "flowbite-react";
import Image from "next/image";

const NavBar = () => {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img
          src="/favicon.ico"
          className="mr-3 h-4 sm:h-8 "
          alt="Flowbite React Logo"
        />
        <span
          style={{ color: "#3a2f2f" }}
          className="self-center  text-xl font-bold "
        >
          QUIXWEARS
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 gap-3 ">
        <Button href="./login" gradientDuoTone="purpleToPink">
          login
        </Button>
        <Button href="./signup" gradientDuoTone="purpleToPink">
          Sign up
        </Button>
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Navbar.Link href="./" active>
          Home
        </Navbar.Link>

        <Navbar.Link href="./about">About</Navbar.Link>

        <Navbar.Link href="./services">Services</Navbar.Link>
        <Navbar.Link href="./team">Team</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
