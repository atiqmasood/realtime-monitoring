import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LiveUpdate {
  timestamp: string;
  control: {
    visitors: number;
    conversions: number;
    revenue: number;
  };
  variantB: {
    visitors: number;
    conversions: number;
    revenue: number;
  };
}

export interface WebSocketState {
  liveUpdates: LiveUpdate[];
  isConnected: boolean;
  lastUpdateTimestamp: string | null; // Stores the timestamp of the last update
}

const initialState: WebSocketState = {
  liveUpdates: [],
  isConnected: false,
  lastUpdateTimestamp: null,
};

const websocketSlice = createSlice({
  name: "websocket",
  initialState,
  reducers: {
    addLiveUpdate(state, action: PayloadAction<LiveUpdate>) {
      state.liveUpdates.push(action.payload);
      state.lastUpdateTimestamp = action.payload.timestamp; // Update the last update timestamp
    },
    setConnectionStatus(state, action: PayloadAction<boolean>) {
      state.isConnected = action.payload;
    },
    clearLiveUpdates(state) {
      state.liveUpdates = [];
      state.lastUpdateTimestamp = null; // Reset the timestamp
    },
  },
});

export const { addLiveUpdate, setConnectionStatus, clearLiveUpdates } =
  websocketSlice.actions;

export default websocketSlice.reducer;
