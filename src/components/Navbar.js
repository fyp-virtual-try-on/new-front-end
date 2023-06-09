import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { useSelector } from "react-redux";
import logo from "../images/logoNew.png";
import { ReactComponent as Logo } from "../images/b_logo.svg";
import Drawer from "./Drawer";
import Card from "./Card";

const Navbar = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cartItems);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header class="text-gray-600 top-0 body-font absolute w-full">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a
            onClick={() => navigate("/")}
            class="flex title-font font-medium items-center cursor-pointer text-gray-900 mb-4 md:mb-0"
          >
            <svg
              width="441"
              height="83"
              viewBox="0 0 441 83"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                height: "47px",
                width: "100%",
              }}
            >
              <path
                d="M22.88 53.336C20.544 53.336 18.432 52.936 16.544 52.136C14.688 51.336 13.216 50.184 12.128 48.68C11.04 47.176 10.48 45.4 10.448 43.352H17.648C17.744 44.728 18.224 45.816 19.088 46.616C19.984 47.416 21.2 47.816 22.736 47.816C24.304 47.816 25.536 47.448 26.432 46.712C27.328 45.944 27.776 44.952 27.776 43.736C27.776 42.744 27.472 41.928 26.864 41.288C26.256 40.648 25.488 40.152 24.56 39.8C23.664 39.416 22.416 39 20.816 38.552C18.64 37.912 16.864 37.288 15.488 36.68C14.144 36.04 12.976 35.096 11.984 33.848C11.024 32.568 10.544 30.872 10.544 28.76C10.544 26.776 11.04 25.048 12.032 23.576C13.024 22.104 14.416 20.984 16.208 20.216C18 19.416 20.048 19.016 22.352 19.016C25.808 19.016 28.608 19.864 30.752 21.56C32.928 23.224 34.128 25.56 34.352 28.568H26.96C26.896 27.416 26.4 26.472 25.472 25.736C24.576 24.968 23.376 24.584 21.872 24.584C20.56 24.584 19.504 24.92 18.704 25.592C17.936 26.264 17.552 27.24 17.552 28.52C17.552 29.416 17.84 30.168 18.416 30.776C19.024 31.352 19.76 31.832 20.624 32.216C21.52 32.568 22.768 32.984 24.368 33.464C26.544 34.104 28.32 34.744 29.696 35.384C31.072 36.024 32.256 36.984 33.248 38.264C34.24 39.544 34.736 41.224 34.736 43.304C34.736 45.096 34.272 46.76 33.344 48.296C32.416 49.832 31.056 51.064 29.264 51.992C27.472 52.888 25.344 53.336 22.88 53.336ZM47.282 47.672H58.322V53H40.562V19.496H47.282V47.672ZM83.1373 46.616H69.7933L67.5853 53H60.5293L72.5773 19.448H80.4013L92.4493 53H85.3453L83.1373 46.616ZM81.3133 41.24L76.4653 27.224L71.6172 41.24H81.3133ZM127.049 19.496L114.761 53H106.601L94.3126 19.496H101.513L110.729 46.136L119.897 19.496H127.049ZM140.883 36.2C140.883 32.904 141.619 29.96 143.091 27.368C144.595 24.744 146.627 22.712 149.187 21.272C151.779 19.8 154.675 19.064 157.875 19.064C161.619 19.064 164.899 20.024 167.715 21.944C170.531 23.864 172.499 26.52 173.619 29.912H165.891C165.123 28.312 164.035 27.112 162.627 26.312C161.251 25.512 159.651 25.112 157.827 25.112C155.875 25.112 154.131 25.576 152.595 26.504C151.091 27.4 149.907 28.68 149.043 30.344C148.211 32.008 147.795 33.96 147.795 36.2C147.795 38.408 148.211 40.36 149.043 42.056C149.907 43.72 151.091 45.016 152.595 45.944C154.131 46.84 155.875 47.288 157.827 47.288C159.651 47.288 161.251 46.888 162.627 46.088C164.035 45.256 165.123 44.04 165.891 42.44H173.619C172.499 45.864 170.531 48.536 167.715 50.456C164.931 52.344 161.651 53.288 157.875 53.288C154.675 53.288 151.779 52.568 149.187 51.128C146.627 49.656 144.595 47.624 143.091 45.032C141.619 42.44 140.883 39.496 140.883 36.2ZM186.079 47.672H197.119V53H179.359V19.496H186.079V47.672ZM216.942 53.336C213.806 53.336 210.926 52.6 208.302 51.128C205.678 49.656 203.598 47.624 202.062 45.032C200.526 42.408 199.758 39.448 199.758 36.152C199.758 32.888 200.526 29.96 202.062 27.368C203.598 24.744 205.678 22.696 208.302 21.224C210.926 19.752 213.806 19.016 216.942 19.016C220.11 19.016 222.99 19.752 225.582 21.224C228.206 22.696 230.27 24.744 231.774 27.368C233.31 29.96 234.078 32.888 234.078 36.152C234.078 39.448 233.31 42.408 231.774 45.032C230.27 47.624 228.206 49.656 225.582 51.128C222.958 52.6 220.078 53.336 216.942 53.336ZM216.942 47.336C218.958 47.336 220.734 46.888 222.27 45.992C223.806 45.064 225.006 43.752 225.87 42.056C226.734 40.36 227.166 38.392 227.166 36.152C227.166 33.912 226.734 31.96 225.87 30.296C225.006 28.6 223.806 27.304 222.27 26.408C220.734 25.512 218.958 25.064 216.942 25.064C214.926 25.064 213.134 25.512 211.566 26.408C210.03 27.304 208.83 28.6 207.966 30.296C207.102 31.96 206.67 33.912 206.67 36.152C206.67 38.392 207.102 40.36 207.966 42.056C208.83 43.752 210.03 45.064 211.566 45.992C213.134 46.888 214.926 47.336 216.942 47.336ZM261.878 19.496V24.92H252.95V53H246.23V24.92H237.302V19.496H261.878ZM294.573 19.496V53H287.853V38.744H273.501V53H266.781V19.496H273.501V33.272H287.853V19.496H294.573ZM307.907 19.496V53H301.187V19.496H307.907ZM343.202 53H336.482L321.266 30.008V53H314.546V19.448H321.266L336.482 42.488V19.448H343.202V53ZM373.171 29.576C372.403 28.168 371.347 27.096 370.003 26.36C368.659 25.624 367.091 25.256 365.299 25.256C363.315 25.256 361.555 25.704 360.019 26.6C358.483 27.496 357.283 28.776 356.419 30.44C355.555 32.104 355.123 34.024 355.123 36.2C355.123 38.44 355.555 40.392 356.419 42.056C357.315 43.72 358.547 45 360.115 45.896C361.683 46.792 363.507 47.24 365.587 47.24C368.147 47.24 370.243 46.568 371.875 45.224C373.507 43.848 374.579 41.944 375.091 39.512H363.571V34.376H381.715V40.232C381.267 42.568 380.307 44.728 378.835 46.712C377.363 48.696 375.459 50.296 373.123 51.512C370.819 52.696 368.227 53.288 365.347 53.288C362.115 53.288 359.187 52.568 356.563 51.128C353.971 49.656 351.923 47.624 350.419 45.032C348.947 42.44 348.211 39.496 348.211 36.2C348.211 32.904 348.947 29.96 350.419 27.368C351.923 24.744 353.971 22.712 356.563 21.272C359.187 19.8 362.099 19.064 365.299 19.064C369.075 19.064 372.355 19.992 375.139 21.848C377.923 23.672 379.843 26.248 380.899 29.576H373.171Z"
                fill="black"
              />
              <line
                opacity="0.7"
                y1="25"
                x2="397"
                y2="25"
                stroke="#007DB9"
                stroke-width="6"
              />
              <line
                opacity="0.7"
                y1="36"
                x2="397"
                y2="36"
                stroke="#007DB9"
                stroke-width="6"
              />
              <line
                opacity="0.7"
                y1="46"
                x2="397"
                y2="46"
                stroke="#007DB9"
                stroke-width="6"
              />
            </svg>
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
          <div className="sm:flex flex sm:justify-center sm:items-center justify-center items-center">
            {localStorage.getItem("token") ? (
              <>
                <button
                  class="inline-flex items-center bg-gray-100 mx-3 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
                  // onClick={() => navigate("/")}
                  onClick={() => {
                    localStorage.removeItem("token");
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

            {localStorage.getItem("token") ? (
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

                <span
                  className="mx-2 relative  "
                  style={{
                    marginBottom: "17px",
                  }}
                >
                  <div class="inline-flex ml-3 -mb-3 items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full top-2.5 right-3 dark:border-gray-900">
                    {cartItems.length}
                  </div>
                  <HiShoppingCart
                    onClick={() => setIsOpen(true)}
                    style={{ fontSize: "31px", cursor: "pointer" }}
                  />
                </span>
              </>
            ) : (
              ""
            )}
          </div>
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
