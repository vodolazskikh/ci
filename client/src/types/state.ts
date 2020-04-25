export type Build = {
  id: string;
  configurationId: string;
  buildNumber: number;
  commitMessage: string;
  commitHash: string;
  branchName: string;
  authorName: string;
  status: string;
  start: string;
  duration: number;
};

export type Config = {
  repoName: string;
  buildCommand: string;
  mainBranch: string;
  period: number;
};

export interface State {
  builds: Build[];
  config: Config;
}
