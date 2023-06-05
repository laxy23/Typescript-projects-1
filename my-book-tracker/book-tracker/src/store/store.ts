import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../state/authSlice";
import bookReducer from "../state/bookSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    book: bookReducer,
  },
});
