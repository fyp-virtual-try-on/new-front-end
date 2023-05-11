import React, { useEffect, useState } from "react";
import PastOrderItem from "../components/PastOrderItem";
import { useSelector } from "react-redux";
import axios from "axios";
import img from "./../images/hero-img.png";

const PastOrders = () => {
  const favItems = useSelector((state) => state.favItems);
  const [orders, setOrders] = useState([]);
  const getData = async () => {
    await axios
      .get(
        `http://localhost:5000/api/users/orders/${localStorage.getItem(
          "userId"
        )}`
      )
      .then((res) => {
        setOrders(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data.msg);
      });
  };

  useEffect(() => {
    getData();
  }, []);

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
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 my-20 sm:mt-24 mt-64">
        Order History
      </h1>
      {orders.map((order) => {
        return <PastOrderItem order={order} />;
      })}
    </>
  );
};

export default PastOrders;
