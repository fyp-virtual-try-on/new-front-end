import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todo/todoSlice";
import cartItemReducer from "./cartItem/cartItemSlice";

export default configureStore({
  reducer: {
    todos: todoReducer,
    cartItems: cartItemReducer,
  },
});
