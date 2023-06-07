import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import bookService from "./bookService";
import { BookState, bookData } from "../components/types/StateTypes";

const initialState: BookState = {
  myBooks: null,
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

export const getMyBooks = createAsyncThunk(
  "book/getMyBooks",
  async (id: String, thunkAPI) => {
    try {
      return await bookService.getMyBooks(id);
    } catch (error) {
      console.log(error);
      const msg = error;
      return thunkAPI.rejectWithValue(msg);
    }
  }
);

export const getBookDetail = createAsyncThunk(
  "book/getBookDetail",
  async (id: String, thunkAPI) => {
    try {
      return await bookService.getBookDetail(id);
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
      })
      .addCase(getMyBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMyBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.myBooks = action.payload;
      })
      .addCase(getMyBooks.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.myBooks = null;
      })
      .addCase(getBookDetail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBookDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.book = action.payload;
      })
      .addCase(getBookDetail.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.book = null;
      });
  },
});

export const { reset } = bookSlice.actions;
export default bookSlice.reducer;
