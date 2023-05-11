import React, { useEffect, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { FileUploader } from "react-drag-drop-files";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FiSettings } from "react-icons/fi";
import { FiHelpCircle } from "react-icons/fi";
import { MdOutlinePrivacyTip } from "react-icons/md";
import "flowbite/dist/flowbite.min.js";

const fileTypes = ["JPG", "PNG", "GIF"];

const Profile = ({ isDarkMode, setIsDarkMode }) => {
  const navigate = useNavigate();
  const [isEditDetails, setIsEditDetails] = useState(false);
  const [file, setFile] = useState(null);
  const [uploadImageURL, setUploadImageURL] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [id, setId] = useState("");
  const handleChange = (file) => {
    setFile(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setUploadImageURL(reader.result);
    };
  };
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const getData = async () => {
    await axios
      .get(`http://localhost:5000/api/users/${localStorage.getItem("userId")}`)
      .then((res) => {
        console.log(res);
        setEmail(res.data.email);
        setName(res.data.name);
        setId(res.data._id);
      })
      .catch((err) => {
        console.log(err.response.data.msg);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const body = document.querySelector("html");
    if (isDarkMode) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <>
      {!isEditDetails ? (
        <section class="text-gray-600 body-font sm:mt-24 mt-64">
          <div class="container px-5 py-24 mx-auto flex flex-col">
            <div class="lg:w-4/6 mx-auto">
              <div class="flex flex-col sm:flex-row mt-10">
                <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                  <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                    {uploadImageURL ? (
                      <img src={uploadImageURL} alt="" srcset="" />
                    ) : (
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-10 h-10"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    )}
                  </div>
                  <div class="flex flex-col items-center text-center justify-center">
                    <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">
                      {name ? name : "not found"}
                    </h2>
                    <div class="w-12 h-1 bg-darkSlateBlue rounded mt-2 mb-4"></div>
                    <p class="text-base"></p>
                    <div className="flex gap-3">
                      <button
                        class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
                        onClick={() => navigate("/pastOrders")}
                      >
                        View Past Orders
                      </button>
                      <span
                        data-popover-target="popover-default"
                        data-popover-placement="bottom"
                      >
                        <FiSettings
                          style={{ fontSize: "31px", cursor: "pointer" }}
                        />
                      </span>
                      <div
                        data-popover
                        id="popover-default"
                        role="tooltip"
                        class="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
                      >
                        <div class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                          <h3 class="font-semibold text-gray-900 dark:text-white">
                            Settings
                          </h3>
                        </div>
                        <div class="px-3 py-2">
                          <p className="my-3">
                            <label class="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                value=""
                                class="sr-only peer"
                              />
                              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                              <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Turn on/off notifications
                              </span>
                            </label>
                          </p>
                          <p>
                            <label class="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                value=""
                                onChange={() => toggleDarkMode()}
                                class="sr-only peer"
                              />
                              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                              <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Dark Mode
                              </span>
                            </label>
                          </p>

                          <p className="my-3">
                            <label
                              class="relative inline-flex items-center cursor-pointer"
                              onClick={() => navigate("/privacy")}
                            >
                              <MdOutlinePrivacyTip
                                style={{
                                  fontSize: "28px",
                                }}
                              />
                              <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Privacy
                              </span>
                            </label>
                          </p>
                          <p className="my-3">
                            <label
                              class="relative inline-flex items-center cursor-pointer"
                              onClick={() => navigate("/help")}
                            >
                              <FiHelpCircle
                                style={{
                                  fontSize: "28px",
                                }}
                              />
                              <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Help
                              </span>
                            </label>
                          </p>
                        </div>
                        <div data-popper-arrow></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                  <p class="mb-4 flex justify-end">
                    {" "}
                    <span className="font-bold">
                      <AiOutlineEdit
                        style={{
                          fontSize: "30px",
                          cursor: "pointer",
                        }}
                        onClick={() => setIsEditDetails(true)}
                      />
                    </span>
                  </p>
                  <p class="leading-relaxed text-lg mb-4">
                    {" "}
                    <span className="font-bold">User ID :</span>{" "}
                    {id ? id : "not found"}
                  </p>
                  <p class="leading-relaxed text-lg mb-4">
                    {" "}
                    <span className="font-bold">Email :</span>{" "}
                    {email ? email : "not found"}{" "}
                  </p>
                  <p class="leading-relaxed text-lg mb-4">
                    {" "}
                    <span className="font-bold">Phone :</span> 55869955845{" "}
                  </p>
                  <p class="leading-relaxed text-lg mb-4">
                    {" "}
                    <span className="font-bold">Address :</span> E9 Islamabad{" "}
                  </p>
                  <p class="leading-relaxed text-lg mb-4">
                    {" "}
                    <span className="font-bold">City :</span> Islamabad{" "}
                  </p>
                  <button
                    class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
                    onClick={() => navigate("/changePassword")}
                  >
                    Change Password
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section class="text-gray-600 body-font relative sm:mt-24 mt-64">
          <div class="container px-5 py-24 mx-auto">
            <h3 class="sm:text-3xl text-center text-2xl font-medium title-font mb-4 text-gray-900">
              Upload Profile Picture
            </h3>
            <div className="flex justify-center p-16 mb-20 flex-col items-center">
              <FileUploader
                handleChange={handleChange}
                name="file"
                types={fileTypes}
              />
            </div>
            <div class="flex flex-col text-center w-full mb-12">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Edit Details
              </h1>

              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                Contact us if you experience any issues with our virtual try-on
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
                      name="email"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-darkSlateBlue focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="name" class="leading-7 text-sm text-gray-600">
                      Phone
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-darkSlateBlue focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="email" class="leading-7 text-sm text-gray-600">
                      City
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-darkSlateBlue focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-full">
                  <div class="relative">
                    <label
                      for="message"
                      class="leading-7 text-sm text-gray-600"
                    >
                      Address
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-darkSlateBlue focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div class="p-2 w-full">
                  <button
                    class="flex mx-auto text-white bg-darkSlateBlue border-2 py-2 px-8 focus:outline-none hover:bg-white hover:text-black rounded text-lg"
                    onClick={() => setIsEditDetails(false)}
                  >
                    Save
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
      )}
    </>
  );
};

export default Profile;
