import axios from "axios";
const instance = axios.create({
  baseURL: "https://evangadi-forum-back-end-nhj6.onrender.com/api",
});
export default instance;
