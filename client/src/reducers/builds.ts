import { Action } from "../types/actions";

export const builds = (state = [], action: Action) => {
  switch (action.type) {
    case "FETCH_BUILDS_SUCCESS":
      return [...action.payload.data];
    default:
      return state;
  }
};
