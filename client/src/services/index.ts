import axios from "axios";


export const inctance = axios.create({
  baseURL: "http://localhost:5000/",
});