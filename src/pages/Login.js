import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [isShowPassword, setIsShowPassword] = useState(false);
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 class="title-font font-medium text-3xl text-gray-900">
              With our virtual try-on feature, you can try on clothes without
              ever leaving your house. Log in now to try it out!
            </h1>
            <p class="leading-relaxed mt-4">
              Want to try on clothes virtually before you buy them? Our virtual
              try-on feature has got you covered. Sign in now to get started!
            </p>
          </div>
          <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
              Login
            </h2>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="full-name" class="leading-7 text-sm text-gray-600">
                Password
              </label>
              <input
                type={`${isShowPassword ? "text" : "password"}`}
                id="full-name"
                name="full-name"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <div class="flex items-center mt-4 mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  onChange={(e) => {
                    setIsShowPassword(e.target.checked);
                  }}
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-checkbox"
                  class="ml-2   text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Show/Hide Password
                </label>
              </div>
              <p class="text-xs text-gray-500 mt-3 ">
                {" "}
                <a onClick={() => navigate("/forgetPassword")}>
                  Forgot Password?
                </a>{" "}
              </p>
            </div>

            <button
              class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              onClick={() => {
                localStorage.setItem("metaWear", "loggedIn");
                navigate("/");
              }}
            >
              Login
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
