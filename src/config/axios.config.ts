import { AxiosRequestConfig } from "axios";

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  requiresAuth?: boolean;
}
export type { CustomAxiosRequestConfig };
