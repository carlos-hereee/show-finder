import axios, { AxiosInstance } from "axios";

export const axiosWithAuth: AxiosInstance = axios.create({
  baseURL: "api url",
  headers: { Authorization: "some token", contentType: "application/json" },
});

export const client: AxiosInstance = axios.create({
  baseURL: "http://api.tvmaze.com",
  headers: {
    contentType: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
