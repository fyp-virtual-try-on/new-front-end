import React, { useState, useEffect } from "react";
import { FileUploader } from "react-drag-drop-files";
import useDrivePicker from "react-google-drive-picker";
import Webcam from "react-webcam";
import { useDispatch } from "react-redux";
import { favItem } from "../store/cartItem/favItemSlice";
import axios from "axios";

const fileTypes = ["JPG", "PNG", "GIF"];

const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: "user",
};
const ProductDetailsPage = () => {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const [openPicker, data, authResponse] = useDrivePicker();
  const [driveObj, setDriveObj] = useState("");
  const [uploadImageURL, setUploadImageURL] = useState("");
  const [isCamera, setIsCamera] = useState(false);
  const [itemObj, setItemObj] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");

  const [picture, setPicture] = useState("");
  const webcamRef = React.useRef(null);
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");
  const capture = React.useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot();
    setPicture(pictureSrc);
  });
  const handleChange = (file) => {
    setFile(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setUploadImageURL(reader.result);
    };
  };

  const sendData = async () => {
    await axios
      .post("http://localhost:5000/api/users/review", {
        username: fullName,
        email: email,
        comment: message,
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

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const token = query.get("item");
    setItemObj(JSON.parse(token));
  }, []);
  const handleOpenPicker = () => {
    openPicker({
      clientId:
        "843861638932-3a853gfcdmvdk4k2n7i7g8tbe5fq3qgl.apps.googleusercontent.com",
      developerKey: "AIzaSyC7PwiaGP7I7hsJ48XfiPNV0n9pBiabPJ0",
      viewId: "DOCS_IMAGES",
      // token: token, // pass oauth token in case you already have one
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: false,
      // customViews: customViewsArray, // custom view
      callbackFunction: (data) => {
        if (data.action === "cancel") {
          console.log("User clicked cancel/close button");
        }
        console.log(data);
        // console.log("imag id=> ", );
        setDriveObj(data.docs[0]?.id);
      },
    });
  };

  // const addNewReview = (e) => {
  //   const newReview = {
  //     name,
  //     date: new Date().toLocaleDateString(),
  //     review,
  //   };
  //   reviews.push(newReview);
  //   setName("");
  //   setEmail("");
  //   setReview("");
  // };

  const reviews = [
    {
      name: "John Doe",
      date: "12/12/2020",
      review: ` 
                    I recently purchased a women's T-shirt from your website using the
              virtual try-on feature, and I have to say it was a fantastic
              experience. The virtual try-on feature allowed me to see how the
              T-shirt would look on me before making a purchase, which helped me
              make an informed decision about the product.
       `,
    },
    {
      name: "John Doe",
      date: "12/12/2020",
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <>
      <div className="flex container justify-around mx-auto w-4/5 sm:flex-row flex-col sm:mt-24 mt-64">
        <div className="upload-img">
          {!uploadImageURL && !file && !isCamera && !picture ? (
            <div className="flex justify-center p-16 mb-20 flex-col items-center">
              <FileUploader
                handleChange={handleChange}
                name="file"
                types={fileTypes}
              />
              {!file && !uploadImageURL ? (
                <>
                  <p className="my-4">OR Upload Image from</p>
                  <div className="flex justify-center">
                    <button
                      class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-darkSlateBlue border-2 py-2 px-6 focus:outline-none hover:bg-white hover:text-black rounded"
                      onClick={() => setIsCamera(true)}
                    >
                      Camera App
                    </button>
                    <button
                      class="lg:mt-2 sm:mx-4 xl:mt-0 flex-shrink-0 inline-flex text-white bg-darkSlateBlue border-2 py-2 px-6 focus:outline-none hover:bg-white hover:text-black  rounded"
                      onClick={() => handleOpenPicker()}
                    >
                      Google Drive
                    </button>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
          {file && uploadImageURL ? (
            <div className="flex justify-center mb-8 h-full flex-col items-center ">
              <img
                src={uploadImageURL}
                alt=""
                // height={200}
                style={{
                  height: "296px",
                  objectFit: "contain",
                  width: "500px",
                }}
                // width={500}
                srcset=""
              />
              <p>
                {file ? `File name: ${file?.name}` : "no files uploaded yet"}
              </p>
              <div className="flex mt-4 justify-between w-full">
                <button
                  class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-darkSlateBlue border-2 py-2 px-6 focus:outline-none hover:bg-white hover:text-black  rounded"
                  onClick={() => {
                    setUploadImageURL(null);
                    setFile(null);
                  }}
                >
                  Delete
                </button>
                <button class="lg:mt-2  xl:mt-0 flex-shrink-0 inline-flex text-white bg-darkSlateBlue border-2 py-2 px-6 focus:outline-none hover:bg-white hover:text-black rounded">
                  Execute
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
          {picture && !uploadImageURL ? (
            <div className="flex justify-center mb-8 h-full flex-col items-center ">
              <img
                src={picture}
                alt=""
                // height={200}
                style={{
                  height: "296px",
                  objectFit: "contain",
                  width: "500px",
                }}
                // width={500}
                srcset=""
              />
              <p>
                {file ? `File name: ${file?.name}` : "no files uploaded yet"}
              </p>
              <div className="flex mt-4 justify-between w-full">
                <button
                  class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-darkSlateBlue border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsCamera(false);
                    setPicture("");
                  }}
                >
                  Cancel
                </button>
                <button
                  class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-darkSlateBlue border-2 py-2 px-6 focus:outline-none hover:bg-white hover:text-black rounded"
                  onClick={(e) => {
                    e.preventDefault();
                    setPicture();
                  }}
                >
                  Retake
                </button>
                <button class="lg:mt-2  xl:mt-0 flex-shrink-0 inline-flex text-white bg-darkSlateBlue border-2 py-2 px-6 focus:outline-none hover:bg-white hover:text-black rounded">
                  Execute
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
          {!picture && isCamera ? (
            <div className="flex justify-center mb-8 h-full flex-col items-center ">
              <Webcam
                audio={false}
                height={"100%"}
                ref={webcamRef}
                width={"100%"}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
              />
              <p>
                {file ? `File name: ${file?.name}` : "no files uploaded yet"}
              </p>
              <div className="flex mt-4 justify-between w-full">
                <button
                  class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-darkSlateBlue border-2 py-2 px-6 focus:outline-none hover:bg-white hover:text-black rounded"
                  onClick={(e) => {
                    e.preventDefault();
                    capture();
                  }}
                >
                  Capture
                </button>

                <button
                  class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-darkSlateBlue border-2 py-2 px-6 focus:outline-none hover:bg-white hover:text-black rounded"
                  onClick={(e) => {
                    e.preventDefault();
                    setPicture("");
                    setIsCamera(false);
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="p-4 h-full  flex flex-col items-center  justify-center">
          <div
            className="border-2 p-4 border-gray-200 sm:w-96 w-full border-dashed rounded-lg dark:border-gray-700 h-296px"
            style={{ height: "296px" }}
          >
            Output
          </div>
          <p>Output</p>
          <div className="flex mt-4 w-full justify-between">
            <button class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-darkSlateBlue border-2 py-2 px-6 focus:outline-none hover:bg-white hover:text-black rounded">
              Download
            </button>
            <button class="lg:mt-2  xl:mt-0 flex-shrink-0 inline-flex text-white bg-darkSlateBlue border-2 py-2 px-6 focus:outline-none hover:bg-white hover:text-black rounded">
              Share
            </button>
          </div>
        </div>
      </div>

      <section
        class="text-gray-600 body-font overflow-hidden "
        style={{ marginTop: "66px" }}
      >
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 h-3/6 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              class="lg:w-1/4 w-full h-35  object-cover object-center rounded"
              src={itemObj?.image}
            />
            <div class="lg:w-2/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 class="text-sm title-font text-gray-500 tracking-widest">
                BRAND NAME
              </h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                {itemObj?.name}
              </h1>
              <div class="flex mb-4">
                <span class="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-darkSlateBlue"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-darkSlateBlue"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-darkSlateBlue"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-darkSlateBlue"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-darkSlateBlue"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span class="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
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
                  <a class="text-gray-500">
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
                  <a class="text-gray-500">
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

              <div class="flex">
                <span class="title-font font-medium text-2xl text-gray-900">
                  ${itemObj?.price}.00
                </span>
                <button class="flex ml-auto text-white bg-darkSlateBlue border-2 py-2 px-6 focus:outline-none hover:bg-white hover:text-black  rounded">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <h1 class="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-5">
        Product Reviews
      </h1>

      {reviews.map((review) => {
        return (
          <article className="container px-5 py-24 mx-auto w-4/5">
            <div class="flex items-center mb-4 space-x-4">
              <img
                class="w-10 h-10 rounded-full"
                src="/docs/images/people/profile-picture-5.jpg"
                alt=""
              />
              <div class="space-y-1 font-medium dark:text-white">
                <p>
                  {review.name}{" "}
                  <time
                    datetime="2014-08-16 19:00"
                    class="block text-sm text-gray-500 dark:text-gray-400"
                  >
                    Joined on August 2014
                  </time>
                </p>
              </div>
            </div>
            <div class="flex items-center mb-1">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>First star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Second star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Third star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Fourth star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Fifth star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <h3 class="ml-2 text-sm font-semibold text-gray-900 dark:text-white">
                Thinking to buy another one!
              </h3>
            </div>
            <footer class="mb-5 text-sm text-gray-500 dark:text-gray-400">
              <p>
                Reviewed in the United Kingdom on{" "}
                <time datetime="2017-03-03 19:00">March 3, 2017</time>
              </p>
            </footer>
            <p class="mb-2 text-gray-500 dark:text-gray-400">{review.review}</p>

            <a
              href="#"
              class="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Read more
            </a>
            <aside>
              <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">
                19 people found this helpful
              </p>
              <div class="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
                <a
                  href="#"
                  class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  Helpful
                </a>
                <a
                  href="#"
                  class="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Report abuse
                </a>
              </div>
            </aside>
          </article>
        );
      })}
      <section class="text-gray-600 body-font relative">
        <div class="container   mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Leave a Review
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Your feedback is valuable to us! Please take a moment to leave a
              review and let us know how we did.
            </p>
          </div>
          <div class="lg:w-3/4 md:w-2/3 mx-auto">
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    name="email"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-darkSlateBlue focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="message" class="leading-7 text-sm text-gray-600">
                    Comment
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
                  class="flex mx-auto text-white bg-darkSlateBlue border-2 py-2 px-8 focus:outline-none hover:bg-white hover:text-black rounded text-lg"
                  onClick={(e) => sendData()}
                >
                  Comment
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

export default ProductDetailsPage;
