import { State } from "../types/state";

export const getBuildById = (state: State, id?: string) => {
  if (!id) {
    return;
  }
  // Достаточно сравнить первые 4 символа хэша коммита
  return state.builds.find(
    (build) => build.commitHash.slice(0, 4) === id.slice(0, 4)
  );
};
