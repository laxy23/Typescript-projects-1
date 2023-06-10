import axios from "axios";
import { userData } from "../components/types/StateTypes";

const API_URL = "https://book-tracker-app.onrender.com/api/v1/auth";

const register = async (userData: userData): Promise<userData> => {
  const res = await axios.post(API_URL, userData);

  if (res.data) {
    localStorage.setItem("librifyUser", JSON.stringify(res.data));
  }

  return res.data;
};

const login = async (userData: userData): Promise<userData> => {
  const res = await axios.post(`${API_URL}/login`, userData, {
    withCredentials: true,
  });

  if (res.data) {
    localStorage.setItem("librifyUser", JSON.stringify(res.data));
  }

  return res.data;
};

const authService = {
  register,
  login,
};

export default authService;
