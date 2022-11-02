import axios from "axios";

const baseUrl = "https://zarebin.ir/gse/api/search?q=";

export const fetchInput = async (userInput) =>
  axios.get(
    `${baseUrl}${userInput.searchContent}&pl=0&page=${userInput.page}&ldi=0&limit=10&qsrc=user`
  );
