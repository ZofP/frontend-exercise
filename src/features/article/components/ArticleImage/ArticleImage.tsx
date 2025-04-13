"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { fetchImage } from "@/actions/article";

interface ArticleImageProps {
  imageId: string | null;
  width: number;
  height: number;
}

export const ArticleImage = ({ imageId, width, height }: ArticleImageProps) => {
  const [src, setSrc] = useState<string>("");

  /* 
   The URL.createObjectURL method would not work in a server component.
   It would be much better if the API returned the url of the image directly, rather than a blob.
   Then the image could be loaded directly from the API in a server component - benefit of caching the image etc.
  */
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

  return (
    /* 
    The background serves both as a placeholder and a loading indicator.
    In production apps it would be more optimal to use a loading indicator such as a skeleton.
    */

    <div
      className="bg-secondary"
      style={{ width, height, minHeight: height, minWidth: width }}
    >
      {src && (
        <Image
          src={src}
          alt="article-image"
          width={width}
          height={height}
          style={{ aspectRatio: `${width} / ${height}` }}
        />
      )}
    </div>
  );
};
