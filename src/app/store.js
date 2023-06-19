import { configureStore } from "@reduxjs/toolkit";
import burgerReducer from "../features/burgerSlice";

export const store = configureStore({
  reducer: {
    burger: burgerReducer,
  },
});
