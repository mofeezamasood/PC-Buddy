import axios from "axios";
// const auth = JSON.parse(localStorage.getItem("auth"));

const API = axios.create({
  baseURL: `http://localhost:8080/api/v1`,
  // headers: {
  //   token: "Bearer " + auth?.token,
  //   "Content-Type": "application/json",
  // },
});

export default API;
