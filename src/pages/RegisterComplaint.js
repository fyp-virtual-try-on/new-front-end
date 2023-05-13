import React, { useState } from "react";
import axios from "axios";

const RegisterComplaint = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const sendData = async () => {
    await axios
      .post("http://localhost:5000/api/users/register-complaint", {
        name: fullName,
        email: email,
        complaint: message,
      })
      .then((res) => {
        console.log(res);
        alert("Form submitted successfully!");
        setFullName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        alert("Error submitting form!");
      });
  };

  return (
    <>
      <section class="text-gray-600 body-font relative sm:mt-24 mt-64 ">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Complaint
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Complaint if you experience any issues with our virtual try-on
              service. Our team is here to assist you.
            </p>
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    name="name"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-darkSlateBlue focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-1/2">
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
                  <label for="message" class="leading-7 text-sm text-gray-600">
                    Your Complaint
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-darkSlateBlue focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div class="p-2 w-full">
                <button
                  class="flex mx-auto text-white bg-darkSlateBlue border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  onClick={() => sendData()}
                >
                  Send
                </button>
              </div>
              <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a class="text-darkSlateBlue">example@email.com</a>
                <p class="leading-normal my-5">
                  49 Smith St.
                  <br />
                  Saint Cloud, MN 56301
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterComplaint;
