import axios from "axios";

// axios.defaults.baseURL = "https://social-media-api-25-e478cbb9dc3f.herokuapp.com/";
axios.defaults.baseURL = "drf-api-2024-5-1a986cf1c53f.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();
