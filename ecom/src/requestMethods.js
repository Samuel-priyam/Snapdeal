import axios from "axios";

const BASE_URL = "https://ecom-first.onrender.com/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjUwN2Q2NzEzN2JmN2VjNjgyNmU1MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NzI2NjY2MiwiZXhwIjoxNjc3NTI1ODYyfQ.xERBVBDhqQJBz_FXNJ7v3WLa_YMIi98rhPepW6UVvvQ "

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
