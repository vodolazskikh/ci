export const builds = (state = [], action) => {
  switch (action.type) {
    case "FETCH_BUILDS_SUCCESS":
      return [...action.payload.data];
    default:
      return state;
  }
};
