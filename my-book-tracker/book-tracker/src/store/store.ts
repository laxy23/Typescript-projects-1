import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../state/authSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
  },
});
