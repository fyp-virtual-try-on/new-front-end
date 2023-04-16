import React from "react";
import { useNavigate } from "react-router-dom";
const ForgetPassword = () => {
  const navigate = useNavigate();
  return (
    <>
      <section class="text-gray-600 body-font sm:mt-24 mt-64">
        <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 class="title-font font-medium text-3xl text-gray-900">
           Forget Password?
            </h1>
            <p class="leading-relaxed mt-4">
            "Don't remember your password? That's okay! Just enter your email address and we'll get you back in your account in no time."
            </p>
          </div>
          <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
              Forget Password
            </h2>

            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-darkSlateBlue focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <button
              class="text-white bg-darkSlateBlue border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              onClick={() => navigate("/newPassword")}
            >
              Send Link
            </button>
            <p class="text-xs text-gray-500 mt-3">
              Literally you probably haven't heard of them jean shorts.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForgetPassword;
