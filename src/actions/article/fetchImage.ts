"use server";

import { CONFIG } from "@/config";
import { buildPathWithParams } from "@/utils/url";

const { getImage } = CONFIG.api.endpoints.common;

export const fetchImage = async (imageId: string) => {
  const res = await fetch(
    `${CONFIG.app.env.apiUrl}${buildPathWithParams(
      getImage.replace(":imageId", imageId)
    )}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": CONFIG.app.env.apiKey,
      },
      next: { tags: [`image-${imageId}`] },
    }
  );

  if (!res.ok) {
    return null;
  }

  return await res.blob();
};
