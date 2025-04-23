import { useEffect, useRef } from "react";

import { APP_CONFIG } from "@/config/app";

export const useWebSocket = (onMessage: (msg: MessageEvent) => void) => {
  const wsRef = useRef<WebSocket | null>(null);
  const reconnectingTimeout = useRef<NodeJS.Timeout | null>(null);
  const isFinallyClosed = useRef(false);

  const clearReconnectingTimeout = () => {
    if (!reconnectingTimeout.current) {
      return;
    }
    clearTimeout(reconnectingTimeout.current);
    reconnectingTimeout.current = null;
  };

  useEffect(() => {
    const connect = () => {
      wsRef.current = new WebSocket(APP_CONFIG.env.apiWsUrl);
      wsRef.current.onmessage = onMessage;
      wsRef.current.onopen = () => {
        isFinallyClosed.current = false;
      };

      wsRef.current.onclose = () => {
        console.log("WS closed");
        if (isFinallyClosed.current) {
          console.log("is final");
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
      console.log("unmounted");
      isFinallyClosed.current = true;
      wsRef.current?.close();
      clearReconnectingTimeout();
      wsRef.current = null;
      console.log("unmounted", wsRef.current);
    };
  }, [onMessage]);
};
