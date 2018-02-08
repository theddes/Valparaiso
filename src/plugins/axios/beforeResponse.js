import axios from "axios";

// upon response, before returning data
axios.interceptors.response.use(response => {
  return response;
});
