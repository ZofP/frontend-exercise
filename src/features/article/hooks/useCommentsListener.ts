import { useWebSocket } from "@/hooks";
import { webSocketEventSchema } from "@/types/comment";

export const useCommentsListener = () => {
  const onMessage = (event: MessageEvent) => {
    const { changeType, comment } = webSocketEventSchema.parse(
      JSON.parse(event.data)
    );

    console.log("[WS] Event received:", event);

    switch (changeType) {
      case "commentCreated":
        // Optionally update your comment state
        console.log("New comment:", comment);
        break;
      case "commentUpVoted":
      case "commentDownVoted":
        // Handle score updates
        console.log("Comment vote changed:", comment);
        break;
    }
  };
  useWebSocket(onMessage);
};
