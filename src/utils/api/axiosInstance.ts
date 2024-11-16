import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import ERROR_MESSAGES from "../../config/error.config";
import { toast } from "react-hot-toast";
import { CustomAxiosRequestConfig } from "@/config/axios.config";
import cookieAuth from "@/utils/auth/cookie.auth";

// Extend AxiosRequestConfig to add requiresAuth property
const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://localhost:4000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add the Bearer token only if requiresAuth is true
axiosInstance.interceptors.request.use(
  async (config) => {
    const modifiedConfig = config as InternalAxiosRequestConfig<any>;

    const { userId, token } = await cookieAuth.getAuthData();

    if ((config as CustomAxiosRequestConfig).requiresAuth && token) {
      modifiedConfig.headers["Authorization"] = `Bearer ${token}`;
    }

    return modifiedConfig;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => {
    toast.success(response.data.message);
    return response;
  },
  (error) => {
    if (!error.response) {
      toast.error("Network Error");

      return Promise.reject(error);
    }

    const { status, data } = error.response;
    let message =
      ERROR_MESSAGES[status as keyof typeof ERROR_MESSAGES] ||
      ERROR_MESSAGES.GENERIC_ERROR;

    if (data?.type === "validation") {
      message = `Validation Error: ${data.message}`;
    } else if (data?.type === "authentication") {
      message = `Authentication Error: ${data.message}`;
    }
    console.log("error", error.response);
    if (status === 401) {
      // Redirect
      if (typeof window !== "undefined") {
        window.location.href = "/";
        toast.error(message);
      }
    } else {
      // window.location.href = "/signin";
      toast.error(message);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
