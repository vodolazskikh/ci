import axios from "axios";

export const getConfig = () => {
  return dispatch => {
    dispatch(getConfigStarted());

    axios
      .get(`http://localhost:5000/api/settings`)
      .then(res => {
        dispatch(getConfigSuccess(res.data));
      })
      .catch(err => {
        dispatch(getConfigFailure(err.message));
      });
  };
};

const getConfigStarted = () => ({
  type: "SET_CONFIG_STARTED"
});

const getConfigSuccess = settings => ({
  type: "GET_CONFIG_SUCCESS",
  payload: {
    ...settings.data
  }
});

const getConfigFailure = error => ({
  type: "GET_CONFIG_FAILURE",
  payload: {
    error
  }
});
