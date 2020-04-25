/*
 * Здесь мы храним все нужные нам данные, которые получаем после запроса за списком билдов и конфигом;
 * Наш стейт мутабельный. Мы знаем об этом, и как-то с этим живём.
 */
interface State {
  builds: Build[];
  branch: string;
  repo: string | undefined;
}

export type Build = {
  commitHash: string;
  id?: string;
  configurationId?: string;
  buildNumber?: number;
  commitMessage?: string;
  branchName?: string;
  authorName?: string;
  status?: string;
  start?: string;
  duration?: number;
};

export const state: State = {
  builds: [],
  branch: "master",
  repo: undefined,
};
