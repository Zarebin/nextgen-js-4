import axios from "axios";

const BASE_URL = "http://localhost:8000/api";

export const getInfo = async () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const response = await axios.get(`${BASE_URL}/food_labeler`, {
    headers: {
      Authorization: `Token ${user.token}`,
    },
  });
  if (response.data) {
    localStorage.setItem("Info", JSON.stringify(response.data));
  }
  return response.data;
};

export const postReq = async (info) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const data = JSON.parse(localStorage.getItem("Info"));
  const formData = new FormData();
  formData.append("question_id", data.question_id.toString());
  formData.append("label", info);

  const response = await axios.post(`${BASE_URL}/food_labeler`, formData, {
    headers: {
      Authorization: `Token ${user.token}`,
    },
  });
  return response.data;
};
