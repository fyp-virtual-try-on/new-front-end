import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "./../images/1.jpg";
import img2 from "./../images/2.jpg";
import img3 from "./../images/3.jpg";
import img4 from "./../images/4.jpg";
import img5 from "./../images/5.jpg";
import img6 from "./../images/6.jpg";
import kImg1 from "./../images/kurties/1.jpg";
import kImg2 from "./../images/kurties/2.jpg";
import kImg3 from "./../images/kurties/3.jpg";
import kImg4 from "./../images/kurties/4.jpg";
import kImg5 from "./../images/kurties/5.jpg";
import kImg6 from "./../images/kurties/6.jpg";
import kImg7 from "./../images/kurties/7.jpg";
import "./Categories.css";
import fImg1 from "./../images/froks/1.jpg";
import fImg2 from "./../images/froks/2.jpg";
import fImg3 from "./../images/froks/3.jpg";
import fImg4 from "./../images/froks/4.jpg";
import fImg5 from "./../images/froks/5.jpg";
import fImg6 from "./../images/froks/6.jpg";
import fImg7 from "./../images/froks/7.jpg";
import fImg8 from "./../images/froks/8.jpg";
import fImg9 from "./../images/froks/9.jpg";

import { useDispatch } from "react-redux";
import { cartItem } from "../store/cartItem/cartItemSlice";
import { favItem } from "../store/cartItem/favItemSlice";
import { removeAllItems } from "../store/cartItem/cartItemSlice";

const Categories = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isTshirts, setIsTshirts] = useState(true);
  const [isKurti, setIsKurti] = useState(false);
  const [isFroks, setIsFroks] = useState(false);

  const tshirts = [
    {
      id: 1,
      name: "Craptop",
      image: img1,
      quantity: 1,
      price: 100,
      totalPrice: 100,
    },
    {
      id: 2,
      name: "T Shirt",
      image: img2,
      quantity: 1,
      price: 200,
      totalPrice: 200,
    },
    {
      id: 3,
      name: "T Shirt",
      image: img3,
      quantity: 1,
      price: 300,
      totalPrice: 300,
    },
    {
      id: 4,
      name: "T Shirt",
      image: img4,
      quantity: 1,
      price: 400,
      totalPrice: 400,
    },
    {
      id: 5,
      name: "Net Green Top",
      image: img5,
      quantity: 1,
      price: 400,
      totalPrice: 400,
    },
    {
      id: 6,
      name: "Pink Top",
      image: img6,
      quantity: 1,
      price: 400,
      totalPrice: 400,
    },
  ];
  const kurti = [
    {
      id: 1,
      name: " Long Kurti",
      image: kImg1,
      quantity: 1,
      price: 100,
      totalPrice: 100,
    },
    {
      id: 2,
      name: " Short Kurti",
      image: kImg2,
      quantity: 1,
      price: 200,
      totalPrice: 200,
    },
    {
      id: 3,
      name: "Short Kurti",
      image: kImg3,
      quantity: 1,
      price: 300,
      totalPrice: 300,
    },
    {
      id: 4,
      name: "Long Kurti",
      image: kImg4,
      quantity: 1,
      price: 400,
      totalPrice: 400,
    },
    {
      id: 5,
      name: "Kurti Top",
      image: kImg5,
      quantity: 1,
      price: 400,
      totalPrice: 400,
    },
    {
      id: 6,
      name: "Kurti Top",
      image: kImg6,
      quantity: 1,
      price: 400,
      totalPrice: 400,
    },
    {
      id: 7,
      name: " White Kurti",
      image: kImg7,
      quantity: 1,
      price: 400,
      totalPrice: 400,
    },
  ];
  const froks = [
    {
      id: 1,
      name: "Long Frok",
      image: fImg1,
      quantity: 1,
      price: 100,
      totalPrice: 100,
    },
    {
      id: 2,
      name: "Short Frok",
      image: fImg2,
      quantity: 1,
      price: 200,
      totalPrice: 200,
    },
    {
      id: 3,
      name: "Long Frok",
      image: fImg3,
      quantity: 1,
      price: 300,
      totalPrice: 300,
    },
    {
      id: 4,
      name: " Short Frok",
      image: fImg4,
      quantity: 1,
      price: 400,
      totalPrice: 400,
    },
    {
      id: 5,
      name: "Frok",
      image: fImg5,
      quantity: 1,
      price: 400,
      totalPrice: 400,
    },
    {
      id: 6,
      name: "Frok",
      image: fImg6,
      quantity: 1,
      price: 400,
      totalPrice: 400,
    },
    {
      id: 7,
      name: "Frok",
      image: fImg7,
      quantity: 1,
      price: 400,
      totalPrice: 400,
    },
    {
      id: 8,
      name: "Long Frok",
      image: fImg8,
      quantity: 1,
      price: 400,
      totalPrice: 400,
    },
    {
      id: 9,
      name: "Long Frok",
      image: fImg9,
      quantity: 1,
      price: 400,
      totalPrice: 400,
    },
  ];

  const active = {
    backgroundColor: "rgb(198 198 198)",
    color: "#fff",
  };

  return (
    <>
      <div
        className="flex sm:flex-row flex-col sm:mt-24 mt-64 "
        // style={{
        //   marginTop: "6rem",
        // }}
      >
        <aside
          id="default-sidebar"
          class="static  top-0 left-0  w-96 h-screen transition-transform  "
          aria-label="Sidebar"
        >
          <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <ul class="space-y-2 font-medium">
              <li
                style={isTshirts ? active : null}
                onClick={() => {
                  setIsTshirts(true);
                  setIsKurti(false);
                  setIsFroks(false);
                }}
              >
                <a
                  href="#"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span class="ml-3">T-Shirts</span>
                </a>
              </li>
              <li
                style={isKurti ? active : null}
                onClick={() => {
                  setIsTshirts(false);
                  setIsKurti(true);
                  setIsFroks(false);
                }}
              >
                <a
                  href="#"
                  class="flex items-center  p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span class="flex-1 ml-3 whitespace-nowrap">Kurti</span>
                </a>
              </li>
              <li
                style={isFroks ? active : null}
                onClick={() => {
                  setIsTshirts(false);
                  setIsKurti(false);
                  setIsFroks(true);
                }}
              >
                <a
                  href="#"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span class="flex-1 ml-3 whitespace-nowrap">Froks</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>

        <div class=" ">
          <div class="p-2 ">
            <section class="text-gray-600 body-font">
              <div class="container px-5  mx-auto">
                <form className="mt-5 mb-20">
                  <label
                    for="default-search"
                    class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >
                    Search
                  </label>
                  <div class="relative sm:w-1/2 w-full mx-auto">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search Catogories..."
                      required
                    />
                    <button
                      type="submit"
                      class="text-white absolute right-2.5 bottom-2.5 bg-darkSlateBlue hover:bg-white hover:text-black border-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Search
                    </button>
                  </div>
                </form>

                <div
                  class="flex flex-wrap -m-4  justify-center"
                  style={{ gap: "33px" }}
                >
                  {isTshirts &&
                    tshirts.map((item) => {
                      return (
                        <>
                          <div class="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md">
                            <a class="block relative h-auto rounded overflow-hidden img">
                              <img
                                alt="ecommerce"
                                class="object-cover object-center w-full h-full block "
                                src={item.image}
                              />
                            </a>
                            <div class="mt-4">
                              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                                CATEGORY
                              </h3>
                              <h2 class="text-gray-900 flex justify-between title-font text-lg font-medium">
                                <span>{item.name}</span>{" "}
                                <button
                                  class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
                                  onClick={() => dispatch(favItem(item))}
                                >
                                  <svg
                                    fill="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    class="w-5 h-5"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                  </svg>
                                </button>
                              </h2>
                              <div className="flex justify-between items-center my-3">
                                <p class="mt-1 ">${item.price}.00</p>
                                <p class=" text-gray-500  ">
                                  {" "}
                                  <a
                                    onClick={() => {
                                      dispatch(removeAllItems());
                                      dispatch(cartItem(item));
                                      navigate("/checkout");
                                    }}
                                    className="cursor-pointer"
                                  >
                                    Buy Now
                                  </a>{" "}
                                </p>
                              </div>
                              <div className="flex justify-between">
                                <button
                                  class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-darkSlateBlue border-2 py-2 px-6 focus:outline-none hover:bg-white hover:text-black rounded"
                                  onClick={() => dispatch(cartItem(item))}
                                >
                                  Add to Cart
                                </button>
                                <button
                                  class="lg:mt-2  xl:mt-0 flex-shrink-0 inline-flex text-white bg-darkSlateBlue border-2 py-2 px-6 focus:outline-none hover:bg-white hover:text-black rounded "
                                  onClick={() =>
                                    navigate(
                                      `/productDetailsPage?item=${JSON.stringify(
                                        item
                                      )}`
                                    )
                                  }
                                >
                                  Try
                                </button>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  {isKurti &&
                    kurti.map((item) => {
                      return (
                        <>
                          <div class="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md">
                            <a class="block relative h-auto rounded overflow-hidden img">
                              <img
                                alt="ecommerce"
                                class="object-cover object-center w-full h-full block"
                                src={item.image}
                              />
                            </a>
                            <div class="mt-4">
                              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                                CATEGORY
                              </h3>
                              <h2 class="text-gray-900 flex justify-between title-font text-lg font-medium">
                                <span>{item.name}</span>{" "}
                                <button
                                  class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
                                  onClick={() => dispatch(favItem(item))}
                                >
                                  <svg
                                    fill="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    class="w-5 h-5"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                  </svg>
                                </button>
                              </h2>
                              <div className="flex justify-between items-center my-3">
                                <p class="mt-1 ">${item.price}.00</p>
                                <p class=" text-gray-500  ">
                                  {" "}
                                  <a
                                    onClick={() => {
                                      dispatch(removeAllItems());
                                      dispatch(cartItem(item));
                                      navigate("/checkout");
                                    }}
                                    className="cursor-pointer"
                                  >
                                    Buy Now
                                  </a>{" "}
                                </p>
                              </div>
                              <div className="flex justify-between">
                                <button
                                  class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-darkSlateBlue border-2 py-2 px-6 focus:outline-none hover:bg-white hover:text-black rounded"
                                  onClick={() => dispatch(cartItem(item))}
                                >
                                  Add to Cart
                                </button>
                                <button
                                  class="lg:mt-2  xl:mt-0 flex-shrink-0 inline-flex text-white bg-darkSlateBlue border-2 py-2 px-6 focus:outline-none hover:bg-white hover:text-black rounded "
                                  onClick={() =>
                                    navigate(
                                      `/productDetailsPage?item=${JSON.stringify(
                                        item
                                      )}`
                                    )
                                  }
                                >
                                  Try
                                </button>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  {isFroks &&
                    froks.map((item) => {
                      return (
                        <>
                          <div class="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md">
                            <a class="block relative h-auto rounded overflow-hidden img">
                              <img
                                alt="ecommerce"
                                class=" w-full block"
                                src={item.image}
                                style={{
                                  height: "300px",
                                  objectFit: "contain",
                                }}
                              />
                            </a>
                            <div class="mt-4">
                              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                                CATEGORY
                              </h3>
                              <h2 class="text-gray-900 flex justify-between title-font text-lg font-medium">
                                <span>{item.name}</span>{" "}
                                <button
                                  class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
                                  onClick={() => dispatch(favItem(item))}
                                >
                                  <svg
                                    fill="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    class="w-5 h-5"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                  </svg>
                                </button>
                              </h2>
                              <div className="flex justify-between items-center my-3">
                                <p class="mt-1 ">${item.price}.00</p>
                                <p class=" text-gray-500  ">
                                  {" "}
                                  <a
                                    onClick={() => {
                                      dispatch(removeAllItems());
                                      dispatch(cartItem(item));
                                      navigate("/checkout");
                                    }}
                                    className="cursor-pointer"
                                  >
                                    Buy Now
                                  </a>{" "}
                                </p>
                              </div>
                              <div className="flex justify-between">
                                <button
                                  class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-darkSlateBlue border-2 py-2 px-6 focus:outline-none hover:bg-white hover:text-black rounded"
                                  onClick={() => dispatch(cartItem(item))}
                                >
                                  Add to Cart
                                </button>
                                <button
                                  class="lg:mt-2  xl:mt-0 flex-shrink-0 inline-flex text-white bg-darkSlateBlue border-2 py-2 px-6 focus:outline-none hover:bg-white hover:text-black rounded "
                                  onClick={() =>
                                    navigate(
                                      `/productDetailsPage?item=${JSON.stringify(
                                        item
                                      )}`
                                    )
                                  }
                                >
                                  Try
                                </button>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
