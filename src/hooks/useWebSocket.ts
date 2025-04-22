import { useEffect, useRef } from "react";

import { APP_CONFIG } from "@/config/app";

export const useWebSocket = (onMessage: (msg: MessageEvent) => void) => {
  const wsRef = useRef<WebSocket | null>(null);
  const reconnectRef = useRef(true);
  const reconnectingTimeout = useRef<NodeJS.Timeout | null>(null);

  const clearReconnectingTimeout = () => {
    if (!reconnectingTimeout.current) {
      return;
    }
    clearTimeout(reconnectingTimeout.current);
  };

  useEffect(() => {
    const connect = () => {
      wsRef.current = new WebSocket(APP_CONFIG.env.apiWsUrl);
      wsRef.current.onmessage = onMessage;

      wsRef.current.onclose = () => {
        if (!reconnectRef.current) {
          return;
        }
        clearReconnectingTimeout();
        console.log("WS closed, reconnecting");

        reconnectingTimeout.current = setTimeout(connect, 3000);
      };

      wsRef.current.onerror = () => {
        wsRef.current?.close();
      };
    };

    connect();

    return () => {
      wsRef.current?.close();
      clearReconnectingTimeout();
    };
  }, [onMessage]);
};
