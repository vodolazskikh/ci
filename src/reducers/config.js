export const config = (state = [], action) => {
  console.log("stat", state);
  switch (action.type) {
    case "GET_CONFIG":
      return state;
    case "SET_CONFIG":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
