"use server";

import { API_CONFIG } from "@/config/api";
import { buildPathWithParams } from "@/utils/url";

const { getImage } = API_CONFIG.endpoints.common;

export const fetchImage = async (imageId: string) => {
  const res = await fetch(
    `${API_CONFIG.env.apiUrl}${buildPathWithParams(
      getImage.replace(":imageId", imageId)
    )}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": API_CONFIG.env.apiKey,
      },
      next: { tags: [`image-${imageId}`] },
    }
  );

  if (!res.ok) {
    return null;
  }

  return await res.blob();
};
