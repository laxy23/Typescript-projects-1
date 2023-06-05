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

const bookService = {
  createBook,
};

export default bookService;
