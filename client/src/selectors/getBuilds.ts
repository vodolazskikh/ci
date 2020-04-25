import { State, Build } from "../types/state";

export const getBuilds = (state: State): Build[] => state.builds;
