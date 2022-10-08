import axios from "axios";

const user = JSON.parse(localStorage.getItem("user"));
const BASE_URL = "http://localhost:8000/api";
export const getProject = async () => {
  const response = await axios.get(`${BASE_URL}/food_fact`, {
    headers: {
      Authorization: `Token ${user.token}`,
    },
  });
  if (response.data) {
    localStorage.setItem("Info", JSON.stringify(response.data));
  }
  return response.data;
};

export const postProject = async (info) => {
  const response = await axios.post(`${BASE_URL}/food_fact`, info, {
    headers: {
      Authorization: `Token ${user.token}`,
    },
  });
  return response.data;
};
