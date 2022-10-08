import axios from "axios";

const BASE_URL = "http://localhost:8000/api";

export const register = async (registersData) => {
  const response = await axios.post(
    `${BASE_URL}/users/register`,
    registersData
  );
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};
export const login = async (loginsData) => {
  const response = await axios.post(`${BASE_URL}/users/login`, loginsData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};
export const logout = () => {
  console.log("logout");
  localStorage.removeItem("user");
  localStorage.removeItem("Info");
};


