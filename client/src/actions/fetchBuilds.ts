import axios from "axios";
import { Dispatch } from "redux";
import { Build } from "../types/state";

export const fetchBuilds = () => {
  return (dispatch: Dispatch) => {
    dispatch(fetchBuildsStarted());

    axios
      .get(`http://localhost:5000/api/builds`)
      .then((res) => {
        dispatch(fetchBuildsSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchBuildsFailure(err.message));
      });
  };
};

const fetchBuildsStarted = () => ({
  type: "FETCH_BUILDS_STARTED",
});

const fetchBuildsSuccess = (builds: Build[]) => ({
  type: "FETCH_BUILDS_SUCCESS",
  payload: {
    ...builds,
  },
});

const fetchBuildsFailure = (error: Error) => ({
  type: "FETCH_BUILDS_FAILURE",
  payload: {
    error,
  },
});
