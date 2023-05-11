import React from "react";
import axios from "axios";

export default function PastOrderItem({ order }) {
  const sendData = async (order) => {
    await axios
      .post("http://localhost:5000/api/users/orders", {
        user: localStorage.getItem("userId"),
        products: order.products,
        personalDetails: {
          name: order.personalDetails.name,
          email: order.personalDetails.email,
          city: order.personalDetails.city,
          address: order.personalDetails.address,
          zip: order.personalDetails.zip,
          cardHolderName: order.personalDetails.cardHolderName,
          cardNumber: order.personalDetails.cardNumber,
          expiryDate: order.personalDetails.expiryDate,
          cvv: order.personalDetails.cvv,
        },
      })
      .then((res) => {
        console.log(res);
        alert("Re-Order placed successfully!");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="border border-gray-300 flex my-5 shadow rounded-md p-4 w-full  sm:w-1/2 mx-auto">
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2sm font-bold tracking-tight text-gray-900 dark:text-white">
          Order ID: {order?._id}
        </h5>
        <p class=" font-bold flex items-center text-gray-700 dark:text-gray-400">
          Products:
        </p>
        {order?.products.map((product, index) => (
          <div>
            <p class="  flex items-center text-gray-700 dark:text-gray-400">
              SNo. {index + 1}
            </p>
            <p class="  flex items-center text-gray-700 dark:text-gray-400">
              product name: {product.name}
            </p>
            <p class="  flex items-center text-gray-700 dark:text-gray-400">
              product Quantity: {product.quantity}
            </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Price : {product.totalPrice}$
            </p>
          </div>
        ))}

        <button
          class="lg:mt-2 xl:mt-0   text-white bg-darkSlateBlue border-2 py-2 px-6 focus:outline-none hover:bg-white hover:text-black  rounded"
          onClick={() => sendData(order)}
        >
          Re-Order
        </button>
      </div>
    </div>
  );
}
