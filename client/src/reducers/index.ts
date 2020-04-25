import { combineReducers } from "redux";
import { builds } from "./builds";
import { config } from "./config";

export const rootReducer = combineReducers({ builds, config });
