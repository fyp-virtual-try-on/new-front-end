import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [msg, setMsg] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const sendData = async () => {
    if (password === cpassword) {
      await axios
        .post("http://localhost:5000/api/users/signup", {
          name: fullName,
          email: email,
          phone: phone,
          address: address,
          city: city,
          password: password,
        })
        .then((res) => {
          console.log(res);
          setFullName("");
          setEmail("");
          setPassword("");
          setEmail("");
          setPhone("");
          setAddress("");
          setIsError(false);
          setMsg("Account created successfully!");
          setIsSuccess(true);
          setCpassword("");
        })
        .catch((err) => {
          setMsg(err.response.data.msg);
          setIsError(true);
          console.log(err.response.data.msg);
        });
    } else {
      setMsg("Passwords do not match!");
      setIsError(true);
    }
  };

  return (
    <>
      <section class="text-gray-600 body-font sm:mt-24 mt-64">
        <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 class="title-font font-medium text-3xl text-gray-900">
              Our virtual try-on feature is the ultimate tool for finding the
              perfect outfit. Sign up now to see how it works!
            </h1>
            <p class="leading-relaxed mt-4">
              "Don't settle for guessing the size and fit of your clothes
              online. Sign up now to try on clothes virtually with our
              cutting-edge technology!"
            </p>
          </div>
          <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
              Create a new Account
            </h2>
            {isError && msg && (
              <div
                class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                <span class="font-medium">Error!</span> {msg}
              </div>
            )}

            {isSuccess && msg && (
              <div
                class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
                role="alert"
              >
                <span class="font-medium">Success!</span>
                &nbsp;{msg}
              </div>
            )}

            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                name="fullName"
                class="w-full bg-white rounded border border-gray-300 focus:border-darkSlateBlue focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Phone
              </label>
              <input
                type="text"
                id="full-name"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                name="fullName"
                class="w-full bg-white rounded border border-gray-300 focus:border-darkSlateBlue focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Address
              </label>
              <input
                type="text"
                id="full-name"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                name="fullName"
                class="w-full bg-white rounded border border-gray-300 focus:border-darkSlateBlue focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                City
              </label>
              <input
                type="text"
                id="full-name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                name="fullName"
                class="w-full bg-white rounded border border-gray-300 focus:border-darkSlateBlue focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-darkSlateBlue focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="full-name" class="leading-7 text-sm text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                class="w-full bg-white rounded border border-gray-300 focus:border-darkSlateBlue focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="full-name" class="leading-7 text-sm text-gray-600">
                Confirm Password
              </label>
              <input
                type="password"
                id="password"
                value={cpassword}
                onChange={(e) => setCpassword(e.target.value)}
                name="password"
                class="w-full bg-white rounded border border-gray-300 focus:border-darkSlateBlue focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <button
              onClick={() => sendData()}
              class="text-white bg-darkSlateBlue border-2 py-2 px-8 focus:outline-none hover:bg-white hover:text-black rounded text-lg"
            >
              Signup
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
