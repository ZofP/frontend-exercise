import { z } from "zod";

export const imageInfoSchema = z.object({
  imageId: z.string(),
  name: z.string(),
});
export type ImageInfo = z.infer<typeof imageInfoSchema>;

export const uploadImageResponseSchema = z.object({
  images: z.array(imageInfoSchema),
});
export type UploadImageResponse = z.infer<typeof uploadImageResponseSchema>;
