import { configureStore } from "@reduxjs/toolkit";
import tips from "./reducers/tips";

export const store = configureStore({
  reducer: tips,
});
