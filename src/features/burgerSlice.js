import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boolean: false,
};

const burgerSlice = createSlice({
  name: "burger",
  initialState,
  reducers: {
    changeBurger(state, action) {
      state.boolean = !action.payload;
    },
  },
});

export const { changeBurger } = burgerSlice.actions;

export default burgerSlice.reducer;
