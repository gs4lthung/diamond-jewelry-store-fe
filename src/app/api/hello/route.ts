import { CustomAxiosRequestConfig } from "@/config/axios.config";
import axiosInstance from "@/utils/api/axiosInstance"; // Correct way to import the default export
import { NextRequest, NextResponse } from "next/server";

// Define GET request handler
export async function GET() {
  try {
    const response = await axiosInstance.get("/videos", {
      requiresAuth: true,
    } as CustomAxiosRequestConfig);
    return NextResponse.json(response.data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
