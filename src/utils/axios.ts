import axios from "axios";

export const client = axios.create({
  // timeout: 3000,
  baseURL: `http://api.tvmaze.com/`,
});

export const clientWithAuth = axios.create({
  baseURL: "",
});
