import axios from "axios";

const NEXT_PUBLIC_API_BASE_URL =  process.env.NEXT_PUBLIC_API_BASE_URL || ''
  
const api = axios.create({
  baseURL: NEXT_PUBLIC_API_BASE_URL, 
});

export default api;