import axios from "axios";

const BASE_URL = "http://localhost:8000/api";

export const register = async (userInfo) => {
  const response = await axios.post(`${BASE_URL}/users/register`, userInfo);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

export const login = async (loginInfo) => {
  const response = await axios.post(`${BASE_URL}/users/login`, loginInfo);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("Info");
};
