import axios from "axios";
import { userData } from "../components/types/StateTypes";

const API_URL = "http://localhost:5000/api/v1/auth";

const register = async (userData: userData): Promise<userData> => {
  console.log(userData);
  const res = await axios.post(API_URL, userData);

  console.log(res.data);

  if (res.data) {
    localStorage.setItem("librifyUser", JSON.stringify(res.data));
  }

  return res.data;
};

const login = async (userData: userData): Promise<userData> => {
  console.log(userData);
  const res = await axios.post(`${API_URL}/login`, userData, {
    withCredentials: true,
  });

  console.log(res.data);

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
