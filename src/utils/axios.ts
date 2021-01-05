import axios from "axios";

export const client = axios.create({
  timeout: 3000,
  baseURL: `http://api.tvmaze.com/`,
  headers: {
    contentType: "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
  },
});

export const clientWithAuth = axios.create({
  baseURL: "",
});
