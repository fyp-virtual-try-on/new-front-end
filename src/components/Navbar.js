import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { useSelector } from "react-redux";
import logo from "../images/logoNew.png";

import Drawer from "./Drawer";
import Card from "./Card";

const Navbar = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cartItems);

  const [isOpen, setIsOpen] = useState(false);
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
              class="w-10 h-10 text-white p-2 bg-darkSlateBlue rounded-full"
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
              <Link to="/contactus"> Contact Us </Link>
            </a>
          </nav>
          {localStorage.getItem("metaWear") === "loggedIn" ? (
            <>
              <button
                class="inline-flex items-center bg-gray-100 mx-3 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
                // onClick={() => navigate("/")}
                onClick={() => {
                  localStorage.removeItem("metaWear");
                  navigate("/");
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
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
            </>
          )}
          <span className="mx-2">
            <AiOutlineHome
              style={{ fontSize: "31px", cursor: "pointer" }}
              onClick={() => navigate("/")}
            />
          </span>

          {localStorage.getItem("metaWear") === "loggedIn" ? (
            <>
              <div class="relative w-10 h-10 mx-4 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <svg
                  class="absolute w-12 h-12 text-gray-400 -left-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => navigate("/profile")}
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>

              <span className="mx-2">
                <MdOutlineFavoriteBorder
                  style={{ fontSize: "31px", cursor: "pointer" }}
                  onClick={() => navigate("/favorite")}
                />
              </span>

              <span className="mx-2">
                <HiShoppingCart
                  onClick={() => setIsOpen(true)}
                  style={{ fontSize: "31px", cursor: "pointer" }}
                />
                <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full top-2.5 right-3 dark:border-gray-900">
                  {cartItems.length}
                </div>
              </span>
            </>
          ) : (
            ""
          )}
        </div>
      </header>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        {cartItems.map((item) => {
          return (
            <Card
              productName={item.name}
              productPrice={item.price}
              productImg={item.image}
              productQty={item.quantity}
              item={item}
            />
          );
        })}
      </Drawer>
    </>
  );
};

export default Navbar;
