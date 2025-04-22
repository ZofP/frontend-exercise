import { Comment } from "@/types/comment";
import { convertIsoToMs } from "@/utils/date";

export const sortCommentsListDescending = (comments: Comment[]) =>
  [...comments].sort(
    (a, b) => convertIsoToMs(b.postedAt) - convertIsoToMs(a.postedAt)
  );
