import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const todo = {
        id: "1",
        text: action.payload,
      };

      state.push(todo);
    },
  },
});

// this is for dispatch
export const { addItem } = todoSlice.actions;

// this is for configureStore
export default todoSlice.reducer;
