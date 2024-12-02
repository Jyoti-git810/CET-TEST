import { configureStore } from "@reduxjs/toolkit";
import userResponseSliceReducer from "./userResponseSlice";

export const store = configureStore({
  reducer: userResponseSliceReducer,
});
