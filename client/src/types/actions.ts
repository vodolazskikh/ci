import { Build, Config } from "./state";

export type Action = FetchBuilds | setConfigSuccess | getConfigSuccess;

interface FetchBuilds {
  type: "FETCH_BUILDS_SUCCESS";
  payload: {
    data: Build[];
  };
}

interface setConfigSuccess {
  type: "SET_CONFIG_SUCCESS";
  payload: Config;
}

interface getConfigSuccess {
  type: "GET_CONFIG_SUCCESS";
  payload: Config;
}
