import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-builder-d28db-default-rtdb.firebaseio.com/",
});

export default instance;
