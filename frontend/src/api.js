import axios from "axios";

// Create an Axios instance with a base URL
const apiClient = axios.create({
  baseURL: "http://localhost:8080", // Replace with your API base URL
  timeout: 10000, // Set a timeout for requests (optional)
  headers: {
    "Content-Type": "application/json",
    // Add any other global headers here
  },
});

export default apiClient;
