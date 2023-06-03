import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";
import { userData, AppState } from "../components/types/StateTypes";

const initialState: AppState = {
  user: null,
  books: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
};

export const register = createAsyncThunk(
  "auth/register",
  async (user: userData, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
      console.log(error);
      const msg = error;
      return thunkAPI.rejectWithValue(msg);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (user: userData, thunkAPI) => {
    try {
      return await authService.login(user);
    } catch (error) {
      console.log(error);
      const msg = error;
      return thunkAPI.rejectWithValue(msg);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.user = null;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
