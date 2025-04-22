import { useState } from "react";

import { useWebSocket } from "@/hooks";
import { Comment, webSocketEventSchema } from "@/types/comment";
import { sortCommentsListDescending } from "../utils";

interface UseCommentsListenerArgs {
  defaultComments: Comment[];
  articleId: string;
}

export const useCommentsListener = ({
  defaultComments,
  articleId,
}: UseCommentsListenerArgs) => {
  // The sorting can be ommitted in case the items are already sorted on the server. Currently this info is unavailable.
  const sortedComments = sortCommentsListDescending(defaultComments);
  const [comments, setComments] = useState(sortedComments);
  const onMessage = (event: MessageEvent) => {
    // WARNING: the webSocketEventSchema is strange because it does not include the articleId by which we could identify if the comments relate to the current article
    const { changeType, comment } = webSocketEventSchema.parse(
      JSON.parse(event.data)
    );
    const { createdAt: postedAt, ...rest } = comment;
    const newCommentItem: Comment = { ...rest, articleId, postedAt };

    // new comment
    if (changeType === "commentCreated") {
      // prepend the new item
      setComments((prevComments) => [newCommentItem, ...prevComments]);
      return;
    }
    // upvoting/downvoting of an existing comment
    let step = 1;
    if (changeType === "commentDownVoted") {
      step = -step;
    }
    setComments((prevComments) =>
      prevComments.map((item) => {
        if (item.commentId === newCommentItem.commentId) {
          return { ...item, score: item.score + step };
        }
        return newCommentItem;
      })
    );
  };
  useWebSocket(onMessage);

  return { comments };
};
