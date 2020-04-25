import { Action } from "../types/actions";

export const config = (state = [], action: Action) => {
  switch (action.type) {
    case "SET_CONFIG_SUCCESS":
      return { ...state, ...action.payload };
    case "GET_CONFIG_SUCCESS":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
