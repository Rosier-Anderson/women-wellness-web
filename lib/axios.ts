import axios from "axios";

const API_BASE = process.env.BASE_API_URI || "http://localhost:4000/api/v1";

export default axios.create({
  baseURL: API_BASE,
});
