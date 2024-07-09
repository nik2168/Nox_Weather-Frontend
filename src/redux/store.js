 import { configureStore } from "@reduxjs/toolkit";
import api from "./api/api.js";
import authSlice from "./reducer/authslice.js";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    api: api.reducer,
  },
  middleware: (defaultMiddleware) => [...defaultMiddleware(), api.middleware],
});
