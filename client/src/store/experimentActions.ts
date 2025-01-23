import { ExperimentData } from "../types/experimentDataType";
import httpClient from "../utils/httpClient";
import { Dispatch } from "redux";
import { setExperimentData, setRequestStatus } from "./experimentSlice";

interface UpdatePlaceTypesResponse {
  data: {
    experimentData: ExperimentData[];
  };
}

export const getExperimentData =
  () =>
  async (dispatch: Dispatch): Promise<void> => {
    dispatch(setRequestStatus(true));
    try {
      const response: any = await httpClient.get<UpdatePlaceTypesResponse>(
        "/api/experiments/live"
      );
      dispatch(setExperimentData(response?.data));
      dispatch(setRequestStatus(false));
    } catch (error) {
      dispatch(setRequestStatus(false));
      console.error("Error fetching place types:", error);
    }
  };
