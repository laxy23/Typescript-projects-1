import axios from "axios";
import { bookData } from "../components/types/StateTypes";

const API_URL = "http://localhost:5000/api/v1/book";

const createBook = async (data: bookData) => {
  console.log(data);

  const config = {
    headers: { "Content-Type": "multipart/form-data" },
    withCredentials: true,
  };

  const res = await axios.post(API_URL, data, config);

  return res.data;
};

const getMyBooks = async (id: String) => {
  const res = await axios.get(`${API_URL}/${id}`, {
    withCredentials: true,
  });

  console.log(res);

  return res.data.books;
};

const getBookDetail = async (id: String) => {
  const res = await axios.get(`${API_URL}/bookDetail/${id}`, {
    withCredentials: true,
  });

  console.log(res.data);

  return res.data.book;
};

const bookService = {
  createBook,
  getMyBooks,
  getBookDetail,
};

export default bookService;
