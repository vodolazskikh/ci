import axios from "axios";

export const fetchBuilds = () => {
  return dispatch => {
    dispatch(fetchBuildsStarted());

    axios
      .get(`http://localhost:5000/api/builds`)
      .then(res => {
        dispatch(fetchBuildsSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchBuildsFailure(err.message));
      });
  };
};

const fetchBuildsStarted = () => ({
  type: "FETCH_BUILDS_STARTED"
});

const fetchBuildsSuccess = builds => ({
  type: "FETCH_BUILDS_SUCCESS",
  payload: {
    ...builds
  }
});

const fetchBuildsFailure = error => ({
  type: "FETCH_BUILDS_FAILURE",
  payload: {
    error
  }
});
