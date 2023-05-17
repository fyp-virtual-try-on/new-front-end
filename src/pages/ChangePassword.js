import React, { useState } from "react";
import axios from "axios";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const UpdatePassword = async () => {
    if (newPassword === confirmNewPassword) {
      await axios
        .put(
          `http://localhost:5000/api/users/users/${localStorage.getItem(
            "userId"
          )}/password`,
          {
            currentPassword: currentPassword,
            newPassword: newPassword,
          }
        )
        .then((res) => {
          alert("Password Updated Successfully");
          setCurrentPassword("");
          setNewPassword("");
          setConfirmNewPassword("");
        })
        .catch((err) => {
          alert("Your current password is incorrect");
        });
    } else {
      alert("New Password and Confirm New Password does not match");
    }
  };
  return (
    <>
      <section
        class="text-gray-600 body-font"
        style={{
          marginTop: "6rem",
        }}
      >
        <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 class="title-font font-medium text-3xl text-gray-900">
              Slow-carb next level shoindcgoitch ethical authentic, poko
              scenester
            </h1>
            <p class="leading-relaxed mt-4">
              Poke slow-carb mixtape knausgaard, typewriter street art gentrify
              hammock starladder roathse. Craies vegan tousled etsy austin.
            </p>
          </div>
          <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
              Change Password
            </h2>

            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Current Password
              </label>
              <input
                type="password"
                id="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                name="password"
                class="w-full bg-white rounded border border-gray-300 focus:border-darkSlateBlue focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                New Password
              </label>
              <input
                type="password"
                id="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                name="password"
                class="w-full bg-white rounded border border-gray-300 focus:border-darkSlateBlue focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Confirm Password
              </label>
              <input
                type="password"
                id="cpassword"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                name="cpassword"
                class="w-full bg-white rounded border border-gray-300 focus:border-darkSlateBlue focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <button
              class="text-white bg-darkSlateBlue border-2 py-2 px-8 focus:outline-none hover:bg-white hover:text-black rounded text-lg"
              onClick={() => UpdatePassword()}
            >
              Save
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

export default ChangePassword;
