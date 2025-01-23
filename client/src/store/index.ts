// src/store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import experimentReducer from "./experimentSlice";
import websocketReducer from "./websocketSlice";

const store = configureStore({
  reducer: {
    experiment: experimentReducer,
    websocket: websocketReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
