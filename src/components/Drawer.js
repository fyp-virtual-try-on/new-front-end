import React from "react";

import { useSelector } from "react-redux";
import { removeAllItems } from "../store/cartItem/cartItemSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Drawer({ children, isOpen, setIsOpen }) {
  const cartItem = useSelector((state) => state.cartItems);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          " w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          <header className="p-4 font-bold text-lg">Your Cart</header>
          {children}
          <header className="pl-4 font-bold text-lg">
            Total No. of Items: &nbsp; {cartItem.length}
          </header>
          <header className="pl-4 font-bold text-lg">
            Total: &nbsp;
            {cartItem?.length > 0
              ? cartItem?.reduce(
                  (accumulator, item) => accumulator + item?.totalPrice,
                  0
                )
              : 0}
          </header>
          <div className="flex px-4 justify-between">
            <button
              class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-darkSlateBlue border-2 py-2 px-6 focus:outline-none hover:bg-white hover:text-black  rounded"
              onClick={() => {
                setIsOpen(false);
                navigate("/checkout");
              }}
            >
              Checkout
            </button>
            <button
              class="lg:mt-2  xl:mt-0 flex-shrink-0 inline-flex text-white bg-darkSlateBlue border-2 py-2 px-6 focus:outline-none hover:bg-white hover:text-black rounded"
              onClick={() => dispatch(removeAllItems())}
            >
              Clear
            </button>
          </div>
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
}
