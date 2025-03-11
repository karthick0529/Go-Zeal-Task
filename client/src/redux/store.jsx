import { configureStore } from "@reduxjs/toolkit";
import certificationReducer from "./certificationSlice";

export const store = configureStore({
  reducer: {
    certification: certificationReducer,
  },
});
