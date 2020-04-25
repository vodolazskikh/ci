import axios from "axios";
import { Dispatch } from "redux";
import { Config } from "../types/state";

export const setConfig = (params: {
  branch: string;
  repo: string;
  command: string;
  period: number;
}) => {
  const { repo, branch, command, period } = params;

  return (dispatch: Dispatch) => {
    dispatch(setConfigStarted());
    const data = {
      repoName: repo,
      buildCommand: command,
      mainBranch: branch,
      period: period || 10,
    };
    axios
      .post(`http://localhost:5000/api/settings`, data)
      .then(() => {
        dispatch(setConfigSuccess(data));
      })
      .catch((err) => {
        dispatch(setConfigFailure(err.message));
      });
  };
};

const setConfigStarted = () => ({
  type: "SET_CONFIG_STARTED",
});

const setConfigSuccess = (res: Config) => ({
  type: "SET_CONFIG_SUCCESS",
  payload: res,
});

const setConfigFailure = (error: Error) => ({
  type: "SET_CONFIG_FAILURE",
  payload: {
    error,
  },
});
