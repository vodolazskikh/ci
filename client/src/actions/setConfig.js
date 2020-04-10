import axios from "axios";

export const setConfig = ({ branch, repo, command, period }) => {
  return dispatch => {
    dispatch(setConfigStarted());
    const data = {
      repoName: repo,
      buildCommand: command,
      mainBranch: branch,
      period: period || 10
    };
    axios
      .post(`http://localhost:5000/api/settings`, data)
      .then(() => {
        dispatch(setConfigSuccess(data));
      })
      .catch(err => {
        dispatch(setConfigFailure(err.message));
      });
  };
};

const setConfigStarted = () => ({
  type: "SET_CONFIG_STARTED"
});

const setConfigSuccess = res => ({
  type: "SET_CONFIG_SUCCESS",
  payload: res
});

const setConfigFailure = error => ({
  type: "SET_CONFIG_FAILURE",
  payload: {
    error
  }
});
