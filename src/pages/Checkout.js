import React, { useState } from "react";
import cod from "../images/cod.png";
import easypaisa from "../images/easypaisa.png";
import jazz from "../images/jazz.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

const Checkout = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cartItems);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const sendData = async () => {
    if (
      cartItems.length > 0 &&
      name !== "" &&
      email !== "" &&
      city !== "" &&
      address !== "" &&
      zip !== "" &&
      cardHolderName !== "" &&
      cardNumber !== "" &&
      expiryDate !== "" &&
      cvv !== ""
    ) {
      await axios
        .post("http://localhost:5000/api/users/orders", {
          user: localStorage.getItem("userId"),
          products: cartItems,
          personalDetails: {
            name: name,
            email: email,
            city: city,
            address: address,
            zip: zip,
            cardHolderName: cardHolderName,
            cardNumber: cardNumber,
            expiryDate: expiryDate,
            cvv: cvv,
          },
        })
        .then((res) => {
          console.log(res);
          alert("Order placed successfully!");
          setName("");
          setEmail("");
          setCity("");
          setAddress("");
          setZip("");
          setCardHolderName("");
          setCardNumber("");
          setExpiryDate("");
          setCvv("");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Please fill all the fields!");
    }
  };

  return (
    <>
      {console.log("cartItems => ", cartItems)}
      <section class="text-gray-600 body-font relative sm:mt-24 mt-64">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Checkout
            </h1>
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    name="name"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-darkSlateBlue focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-darkSlateBlue focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm text-gray-600">
                    City
                  </label>
                  <input
                    type="text"
                    id="email"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    name="email"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-darkSlateBlue focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm text-gray-600">
                    Zip code
                  </label>
                  <input
                    type="text"
                    id="email"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    name="email"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-darkSlateBlue focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="message" class="leading-7 text-sm text-gray-600">
                    Address
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-darkSlateBlue focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm text-gray-600">
                    Card Holder Name
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={cardHolderName}
                    onChange={(e) => setCardHolderName(e.target.value)}
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-darkSlateBlue focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm text-gray-600">
                    Card Number
                  </label>
                  <input
                    type="text"
                    id="email"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    name="email"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-darkSlateBlue focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm text-gray-600">
                    CVV
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="cvv"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-darkSlateBlue focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm text-gray-600">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-darkSlateBlue focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              <fieldset>
                <legend class="sr-only">Countries</legend>
                <header className="p-3 font-bold text-lg">
                  Payment Method
                </header>

                <div class="flex items-center mb-4">
                  <input
                    id="country-option-1"
                    type="radio"
                    name="countries"
                    value="USA"
                    class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                    checked
                  />
                  <label
                    for="country-option-1"
                    class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    <img style={{ height: "56px" }} src={cod} alt="visa" />{" "}
                  </label>
                </div>

                <div class="flex items-center mb-4">
                  <input
                    id="country-option-2"
                    type="radio"
                    name="countries"
                    value="Germany"
                    class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="country-option-2"
                    class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    <img
                      style={{ height: "34px" }}
                      src={easypaisa}
                      alt="visa"
                    />{" "}
                  </label>
                </div>

                <div class="flex items-center mb-4">
                  <input
                    id="country-option-3"
                    type="radio"
                    name="countries"
                    value="Spain"
                    class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="country-option-3"
                    class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    <img style={{ height: "56px" }} src={jazz} alt="visa" />{" "}
                  </label>
                </div>
              </fieldset>

              <div class="p-2 flex justify-center w-full">
                <button
                  class="flex  text-white bg-darkSlateBlue border-2 py-2 px-8 focus:outline-none hover:bg-white hover:text-black rounded text-lg"
                  onClick={() => navigate("/categories")}
                >
                  Cancel Order
                </button>
                <button
                  class="flex mx-3 text-white bg-darkSlateBlue border-2 py-2 px-8 focus:outline-none hover:bg-white hover:text-black rounded text-lg"
                  onClick={() => sendData()}
                >
                  Place Order
                </button>
              </div>
              <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a class="text-darkSlateBlue">example@email.com</a>
                <p class="leading-normal my-5">
                  49 Smith St.
                  <br />
                  Saint Cloud, MN 56301
                </p>
                <span class="inline-flex">
                  <a class="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a class="ml-4 text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a class="ml-4 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                  <a class="ml-4 text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
