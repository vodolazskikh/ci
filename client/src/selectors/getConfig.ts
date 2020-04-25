import { State, Config } from "../types/state";

export const getConfig = (state: State): Config => state.config;
