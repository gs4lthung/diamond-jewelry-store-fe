import axios from "axios";
import ERROR_MESSAGES from "../../config/error.config";
import { toast } from "react-toastify";
import Router from "next/router";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      toast.error(ERROR_MESSAGES.NETWORK_ERROR);
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

    if (status === 401) {
      Router.push("/login");
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
