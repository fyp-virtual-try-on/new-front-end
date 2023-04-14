import { createSlice } from "@reduxjs/toolkit";

const cartItemSlice = createSlice({
  name: "cartItem",
  initialState: [],
  reducers: {
    cartItem: (state, action) => {
      const item = action.payload;
      const itemExists = state.find((i) => i?.id === item?.id);
      if (itemExists) {
        // return state.map((i) =>
        //   i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        // );
      } else {
        state.push(item);
      }

      // return [...state, { ...item, quantity: 1 }];
    },
    // state.push(item);

    removeItem: (state, action) => {
      const item = action.payload;

      const newState = state.filter((cartItem) => cartItem?.id !== item?.id);
      return newState;
    },
    removeAllItems: (state, action) => {
      return [];
    },
    addItemQuantity: (state, action) => {
      const item = action.payload;
      const newState = state.map((cartItem) => {
        if (cartItem?.id === item?.id) {
          return {
            ...cartItem,
            quantity: cartItem?.quantity + 1,
            totalPrice: cartItem?.totalPrice + cartItem?.price,
          };
        }
        return cartItem;
      });

      console.log(newState);
      return newState;
    },
    removeItemQuantity: (state, action) => {
      const item = action.payload;
      const newState = state.map((cartItem) => {
        if (cartItem?.id === item?.id) {
          if (cartItem?.quantity > 1) {
            {
              return {
                ...cartItem,
                quantity: cartItem?.quantity - 1,

                totalPrice: cartItem?.totalPrice - cartItem?.price,
              };
            }
          }
          return cartItem;
        }
        return cartItem;
      });

      console.log(newState);
      return newState;
    },
  },
});

// this is for dispatch
export const {
  cartItem,
  removeItem,
  addItemQuantity,
  removeItemQuantity,
  removeAllItems,
} = cartItemSlice.actions;

// this is for configureStore
export default cartItemSlice.reducer;
