import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import ERROR_MESSAGES from "../../config/error.config";
import { toast } from "react-hot-toast";
import { CustomAxiosRequestConfig } from "@/config/axios.config";
import cookieAuth from "@/utils/auth/cookie.auth";
import store from "@/lib/redux/store";
import { loginFailure, logout } from "@/lib/redux/actions/auth.action";
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
    toast.error(message);
    console.log("error", error.response);
    if (status === 401) {
      store.dispatch(logout());
      // Redirect
      if (typeof window !== "undefined") {
        window.location.href = "/";
      }
    } else {
      // window.location.href = "/signin";
      store.dispatch(loginFailure("Invalid credentials"));
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
