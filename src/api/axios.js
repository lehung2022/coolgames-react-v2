import axios from "axios";
import { API_KEY } from "./api_key"; // Assuming you have exported API_KEY from api_key.js

// Memoize API_KEY retrieval
const memoizedApiKey = () => API_KEY;

const instance = axios.create({
  baseURL: "https://api.rawg.io/api/",
});

// Add a request interceptor to append API key to all requests
instance.interceptors.request.use(
  (config) => {
    // Get API_KEY using memoized function
    const key = memoizedApiKey();

    // Ensure config.params is not undefined
    config.params = {
      ...(config.params || {}),
      key: key,
    };
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

export default instance;
