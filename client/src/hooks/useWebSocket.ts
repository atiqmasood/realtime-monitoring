import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addLiveUpdate, setConnectionStatus } from "../store/websocketSlice";

const useWebSocket = (): void => {
  const dispatch = useDispatch();

  useEffect(() => {
    const url = process.env.REACT_APP_WS_URL || "";
    const ws = new WebSocket(url);

    ws.onopen = () => {
      console.log("WebSocket connected");
      dispatch(setConnectionStatus(true));
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === "LIVE_UPDATE") {
        dispatch(addLiveUpdate(data.payload));
      }
    };

    ws.onclose = () => {
      console.log("WebSocket disconnected");
      dispatch(setConnectionStatus(false));
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    return () => {
      ws.close();
    };
  }, [dispatch]);
};

export default useWebSocket;
