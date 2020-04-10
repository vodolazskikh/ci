export const config = (state = [], action) => {
  switch (action.type) {
    case "SET_CONFIG_SUCCESS":
      return { ...state, ...action.payload };
    case "GET_CONFIG_SUCCESS":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
