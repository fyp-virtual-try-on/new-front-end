import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";

import Drawer from "./Drawer";
import Card from "./Card";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a
            onClick={() => navigate("/")}
            class="flex title-font font-medium items-center cursor-pointer text-gray-900 mb-4 md:mb-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl">MetaWear</span>
          </a>
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 hover:text-gray-900">
              {" "}
              <Link to="/categories"> Categories</Link>
            </a>
            <a class="mr-5 hover:text-gray-900">
              {" "}
              <Link to="/about"> About Us </Link>
            </a>
            <a class="mr-5 hover:text-gray-900">
              {" "}
              <Link to="/dresses"> Dresses </Link>
            </a>
            <a class="mr-5 hover:text-gray-900">
              {" "}
              <Link to="/contactus"> Contact Us </Link>
            </a>
          </nav>
          <button
            class="inline-flex items-center bg-gray-100 mx-3 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </button>
          <span className="mx-2">
            <HiShoppingCart
              onClick={() => setIsOpen(true)}
              style={{ fontSize: "31px", cursor: "pointer" }}
            />
          </span>
        </div>
      </header>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <Card />
        <Card />
        <Card />
        <Card />
      </Drawer>
    </>
  );
};

export default Navbar;
