import axios from "axios";

const API_BASE_URI = process.env.BASE_API_URI || "http://localhost:4000/api/v1";

export default axios.create({
  baseURL: API_BASE_URI,
});

export const axiosPrivate = axios.create({
  baseURL: API_BASE_URI,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
