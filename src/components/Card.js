import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { useDispatch } from "react-redux";
import {
  removeItem,
  addItemQuantity,
  removeItemQuantity,
} from "../store/cartItem/cartItemSlice";

export default function Card({
  productName,
  productPrice,
  productQty,
  item,
  productImg,
}) {
  const dispatch = useDispatch();
  return (
    <div className="border border-gray-300 flex shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <img
        class="object-cover w-full rounded-t-lg h-40  md:w-48 md:rounded-none md:rounded-l-lg"
        src={productImg}
        alt=""
      />
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2sm font-bold tracking-tight text-gray-900 dark:text-white">
          {productName}
        </h5>
        <p class=" font-bold flex items-center text-gray-700 dark:text-gray-400">
          Qty: &nbsp;{" "}
          <IoMdRemoveCircleOutline
            className="cursor-pointer"
            onClick={() => dispatch(removeItemQuantity(item))}
          />{" "}
          &nbsp; {productQty} &nbsp;{" "}
          <IoMdAddCircleOutline
            className="cursor-pointer"
            onClick={() => dispatch(addItemQuantity(item))}
          />
        </p>

        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Price : {productPrice}$
        </p>
        <button
          class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-darkSlateBlue border-2 py-2 px-6 focus:outline-none hover:bg-white hover:text-black  rounded"
          onClick={() => dispatch(removeItem(item))}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
