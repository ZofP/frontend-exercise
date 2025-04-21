"use server";

import axios, { AxiosRequestConfig } from "axios";

import { API_CONFIG } from "@/config/api";

interface ExtendedAxiosRequestConfig extends AxiosRequestConfig {
  body?: Record<string, unknown>;
}

const DEFAULT_HEADERS = {
  "Content-Type": "application/json",
  "X-API-KEY": API_CONFIG.env.apiKey,
};

export const axiosBase = async (
  path: string,
  {
    method = "GET",
    headers = {},
    body,
    ...restConfig
  }: ExtendedAxiosRequestConfig = {}
) => {
  const fullUrl = `${API_CONFIG.env.apiUrl}${path}`;

  try {
    const response = await axios({
      url: fullUrl,
      method,
      headers: {
        ...DEFAULT_HEADERS,
        ...headers,
      },
      data: body,
      ...restConfig,
    });

    console.log({ response });

    return response.data;
  } catch (error) {
    console.error("Axios error:", error);
    throw error;
  }
};
