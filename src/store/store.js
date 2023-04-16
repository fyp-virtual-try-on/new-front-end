import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todo/todoSlice";
import cartItemReducer from "./cartItem/cartItemSlice";
import favItemReducer from "./cartItem/favItemSlice";

export default configureStore({
  reducer: {
    todos: todoReducer,
    cartItems: cartItemReducer,
    favItems: favItemReducer,
  },
});
