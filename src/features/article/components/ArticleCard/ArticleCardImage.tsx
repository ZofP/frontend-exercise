"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { fetchImage } from "@/actions/article";

interface ArticleCardImageProps {
  imageId: string | null;
}

export const ArticleCardImage = ({ imageId }: ArticleCardImageProps) => {
  const [src, setSrc] = useState<string>("");

  useEffect(() => {
    const fetchBlob = async () => {
      if (!imageId) {
        return;
      }
      const imgBlob = await fetchImage(imageId);
      if (!imgBlob) {
        return;
      }
      setSrc(URL.createObjectURL(imgBlob));
    };
    fetchBlob();
  }, [imageId]);

  if (!imageId || !src) {
    // This serves both as a placeholder and a loading indicator. In production apps it would be better to use a loading indicator such as a skeleton.
    return <div className="w-[272px] h-[244px] bg-secondary" />;
  }

  return <Image src={src} alt="article-image" width={272} height={244} />;
};
