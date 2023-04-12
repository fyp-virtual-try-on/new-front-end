import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FileUploader } from "react-drag-drop-files";
const fileTypes = ["JPG", "PNG", "GIF"];

const Dresses = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [uploadImageURL, setUploadImageURL] = useState("");
  const handleChange = (file) => {
    setFile(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setUploadImageURL(reader.result);
    };
  };
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Category Name
            </h1>
            <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table.
            </p>
          </div>
          <div className="flex justify-center mb-20 flex-col items-center">
            <FileUploader
              handleChange={handleChange}
              name="file"
              types={fileTypes}
            />
            {!file && !uploadImageURL ? (
              <>
                <p className="my-4">OR Upload Image from</p>
                <div>
                  <button class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Camera App
                  </button>
                  <button class="lg:mt-2 mx-4 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Google Drive
                  </button>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
          {file && uploadImageURL ? (
            <div className="flex justify-center mb-8 flex-col items-center ">
              <img
                src={uploadImageURL}
                alt=""
                height={200}
                width={500}
                srcset=""
              />
              <p>
                {file ? `File name: ${file?.name}` : "no files uploaded yet"}
              </p>
            </div>
          ) : (
            ""
          )}

          <div
            class="flex flex-wrap -m-4  justify-center"
            style={{ gap: "33px" }}
          >
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md ">
              <a class="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/420x260"
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  The Catalyzer
                </h2>
                <p class="mt-1 mb-5">$16.00</p>
                <div className="flex justify-between">
                  <button
                    class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                    onClick={() => navigate("/productDetailsPage")}
                  >
                    View More
                  </button>
                  <button class="lg:mt-2  xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Try
                  </button>
                </div>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md ">
              <a class="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/420x260"
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  The Catalyzer
                </h2>
                <p class="mt-1 mb-5">$16.00</p>
                <div className="flex justify-between">
                  <button
                    class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                    onClick={() => navigate("/productDetailsPage")}
                  >
                    View More
                  </button>
                  <button class="lg:mt-2  xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Try
                  </button>
                </div>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md ">
              <a class="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/420x260"
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  The Catalyzer
                </h2>
                <p class="mt-1 mb-5">$16.00</p>
                <div className="flex justify-between">
                  <button
                    class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                    onClick={() => navigate("/productDetailsPage")}
                  >
                    View More
                  </button>
                  <button class="lg:mt-2  xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Try
                  </button>
                </div>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md ">
              <a class="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/420x260"
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  The Catalyzer
                </h2>
                <p class="mt-1 mb-5">$16.00</p>
                <div className="flex justify-between">
                  <button
                    class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                    onClick={() => navigate("/productDetailsPage")}
                  >
                    View More
                  </button>
                  <button class="lg:mt-2  xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Try
                  </button>
                </div>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md ">
              <a class="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/420x260"
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  The Catalyzer
                </h2>
                <p class="mt-1 mb-5">$16.00</p>
                <div className="flex justify-between">
                  <button
                    class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                    onClick={() => navigate("/productDetailsPage")}
                  >
                    View More
                  </button>
                  <button class="lg:mt-2  xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Try
                  </button>
                </div>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md ">
              <a class="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/420x260"
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  The Catalyzer
                </h2>
                <p class="mt-1 mb-5">$16.00</p>
                <div className="flex justify-between">
                  <button
                    class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                    onClick={() => navigate("/productDetailsPage")}
                  >
                    View More
                  </button>
                  <button class="lg:mt-2  xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Try
                  </button>
                </div>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md ">
              <a class="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/420x260"
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  The Catalyzer
                </h2>
                <p class="mt-1 mb-5">$16.00</p>
                <div className="flex justify-between">
                  <button
                    class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                    onClick={() => navigate("/productDetailsPage")}
                  >
                    View More
                  </button>
                  <button class="lg:mt-2  xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Try
                  </button>
                </div>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md ">
              <a class="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/420x260"
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  The Catalyzer
                </h2>
                <p class="mt-1 mb-5">$16.00</p>
                <div className="flex justify-between">
                  <button
                    class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                    onClick={() => navigate("/productDetailsPage")}
                  >
                    View More
                  </button>
                  <button class="lg:mt-2  xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Try
                  </button>
                </div>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md ">
              <a class="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/420x260"
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  The Catalyzer
                </h2>
                <p class="mt-1 mb-5">$16.00</p>
                <div className="flex justify-between">
                  <button
                    class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                    onClick={() => navigate("/productDetailsPage")}
                  >
                    View More
                  </button>
                  <button class="lg:mt-2  xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Try
                  </button>
                </div>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md ">
              <a class="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/420x260"
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  The Catalyzer
                </h2>
                <p class="mt-1 mb-5">$16.00</p>
                <div className="flex justify-between">
                  <button
                    class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                    onClick={() => navigate("/productDetailsPage")}
                  >
                    View More
                  </button>
                  <button class="lg:mt-2  xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Try
                  </button>
                </div>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md ">
              <a class="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/420x260"
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  The Catalyzer
                </h2>
                <p class="mt-1 mb-5">$16.00</p>
                <div className="flex justify-between">
                  <button
                    class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                    onClick={() => navigate("/productDetailsPage")}
                  >
                    View More
                  </button>
                  <button class="lg:mt-2  xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Try
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dresses;
