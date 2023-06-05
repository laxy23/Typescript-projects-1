import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import bookService from "./bookService";
import { bookData } from "../components/types/StateTypes";

const initialState = {
  book: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
};

export const createBook = createAsyncThunk(
  "book/createBook",
  async (data: bookData, thunkAPI) => {
    try {
      return await bookService.createBook(data);
    } catch (error) {
      console.log(error);
      const msg = error;
      return thunkAPI.rejectWithValue(msg);
    }
  }
);

export const bookSlice = createSlice({
  name: "book",
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
      .addCase(createBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createBook.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(createBook.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { reset } = bookSlice.actions;
export default bookSlice.reducer;
