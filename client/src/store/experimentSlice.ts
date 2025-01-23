// src/store/experimentSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ExperimentData } from "../types/experimentDataType";

interface ExperimentState {
  experimentData: ExperimentData | null;
  isLoading: boolean;
}

const initialState: ExperimentState = {
  experimentData: null,
  isLoading: false,
};

const experimentSlice = createSlice({
  name: "experiment",
  initialState,
  reducers: {
    setRequestStatus(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setExperimentData(state, action: PayloadAction<ExperimentData>) {
      state.experimentData = action.payload;
    },
  },
});

export const { setExperimentData, setRequestStatus } = experimentSlice.actions;

export default experimentSlice.reducer;
