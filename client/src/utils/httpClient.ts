import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";

// Base API URL from environment variables
const apiUrl: string = process.env.REACT_APP_BASE_URL || "";

// Create an Axios instance
const httpClient: AxiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
httpClient.interceptors.request.use(
  (
    config: InternalAxiosRequestConfig
  ): InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig> => {
    // Add custom request logic here if needed
    return config;
  },
  (error: AxiosError): Promise<never> => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
httpClient.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response; // Pass successful responses as-is
  },
  (error: AxiosError): Promise<never> => {
    if (error.response) {
      const { status } = error.response;

      if (status === 401) {
        console.warn("Unauthorized access - handling 401");
        // Optionally handle 401 logic here
        // Example: redirect to login or display an error message
      } else {
        console.error(`HTTP error: ${status}`, error.response.data);
      }
    } else {
      console.error("Network error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default httpClient;
