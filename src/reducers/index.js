import { combineReducers } from "redux";
import { builds } from "./builds";
import { config } from "./config";

export const initialState = {
  builds: [],
  config: {
    branch: undefined,
    command: undefined,
    repo: undefined
  }
};

export const rootReducer = combineReducers({ builds, config });
