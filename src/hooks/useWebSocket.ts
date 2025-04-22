import { useEffect, useRef } from "react";

import { APP_CONFIG } from "@/config/app";

export const useWebSocket = (onMessage: (msg: MessageEvent) => void) => {
  const wsRef = useRef<WebSocket | null>(null);
  const reconnectRef = useRef(true);

  useEffect(() => {
    const connect = () => {
      wsRef.current = new WebSocket(APP_CONFIG.env.apiWsUrl);

      wsRef.current.onopen = () => console.log("WS connected");
      wsRef.current.onmessage = onMessage;

      wsRef.current.onclose = () => {
        if (reconnectRef.current) {
          console.warn("WS closed, reconnecting...");
          setTimeout(connect, 3000);
        }
      };

      wsRef.current.onerror = (err) => {
        console.error("WS error", err);
        wsRef.current?.close();
      };
    };

    connect();

    return () => {
      reconnectRef.current = false;
      wsRef.current?.close();
    };
  }, [onMessage]);
};
