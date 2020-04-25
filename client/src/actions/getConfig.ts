import axios from "axios";
import { Dispatch } from "redux";
import { Config } from "../types/state";

export const getConfig = () => {
  return (dispatch: Dispatch) => {
    dispatch(getConfigStarted());

    axios
      .get(`http://localhost:5000/api/settings`)
      .then((res) => {
        dispatch(getConfigSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getConfigFailure(err.message));
      });
  };
};

const getConfigStarted = () => ({
  type: "SET_CONFIG_STARTED",
});

const getConfigSuccess = (settings: { data: Config }) => ({
  type: "GET_CONFIG_SUCCESS",
  payload: {
    ...settings.data,
  },
});

const getConfigFailure = (error: Error) => ({
  type: "GET_CONFIG_FAILURE",
  payload: {
    error,
  },
});
