import React from "react";
import img from "./../images/hero-img.png";
import FavListItem from "../components/FavListItem";
import { useSelector } from "react-redux";

const FavoriteList = () => {
  const favItems = useSelector((state) => state.favItems);

  const items = [
    {
      id: 1,
      name: "T-Shirt",
      image: img,
      quantity: 1,
      price: 100,
      totalPrice: 100,
    },
    {
      id: 2,
      name: "Shirt",
      image: img,
      quantity: 1,
      price: 200,
      totalPrice: 200,
    },
    {
      id: 3,
      name: "Pant",
      image: img,
      quantity: 1,
      price: 300,
      totalPrice: 300,
    },
    {
      id: 4,
      name: "Shoes",
      image: img,
      quantity: 1,
      price: 400,
      totalPrice: 400,
    },
  ];

  return (
    <>
      {console.log("fav Items => ", favItems)}
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 my-20">
        Favorites
      </h1>
      {favItems.map((item) => {
        return (
          <FavListItem
            productName={item.name}
            productPrice={item.price}
            productImg={item.image}
            productQty={item.quantity}
            item={item}
          />
        );
      })}
    </>
  );
};

export default FavoriteList;
