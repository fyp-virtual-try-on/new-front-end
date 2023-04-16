import { createSlice } from "@reduxjs/toolkit";

const favItemSlice = createSlice({
  name: "favItem",
  initialState: [],
  reducers: {
    favItem: (state, action) => {
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

      const newState = state.filter((favItem) => favItem?.id !== item?.id);
      return newState;
    },
    removeAllItems: (state, action) => {
      return [];
    },
    addItemQuantity: (state, action) => {
      const item = action.payload;
      const newState = state.map((favItem) => {
        if (favItem?.id === item?.id) {
          return {
            ...favItem,
            quantity: favItem?.quantity + 1,
            totalPrice: favItem?.totalPrice + favItem?.price,
          };
        }
        return favItem;
      });

      console.log(newState);
      return newState;
    },
    removeItemQuantity: (state, action) => {
      const item = action.payload;
      const newState = state.map((favItem) => {
        if (favItem?.id === item?.id) {
          if (favItem?.quantity > 1) {
            {
              return {
                ...favItem,
                quantity: favItem?.quantity - 1,

                totalPrice: favItem?.totalPrice - favItem?.price,
              };
            }
          }
          return favItem;
        }
        return favItem;
      });

      console.log(newState);
      return newState;
    },
  },
});

// this is for dispatch
export const {
  favItem,
  removeItem,
  addItemQuantity,
  removeItemQuantity,
  removeAllItems,
} = favItemSlice.actions;

// this is for configureStore
export default favItemSlice.reducer;
