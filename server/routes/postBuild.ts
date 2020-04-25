import { state } from "../state";
require("dotenv").config();
const token = process.env.TOKEN;
const dbApiUrl = process.env.DB_API_URL;

export function postBuild(app, axiosInstance, myEventEmitter) {
  myEventEmitter.on("newCommit", (commitData) => {
    state.builds.push({ commitHash: commitData.commit });
    console.log("Новый коммит добавлен в очередь");
    return makeReq(
      axiosInstance,
      commitData.comment,
      commitData.commit,
      state.branch,
      commitData.author
    );
  });

  app.post("/api/builds/:commitHash", function (req, res) {
    const { commitHash } = req.params;
    const { commitMessage, branchName, authorName } = req.body;

    makeReq(
      axiosInstance,
      commitMessage,
      commitHash,
      branchName,
      authorName,
      res
    );
  });
}

const makeReq = (
  axiosInstance,
  commitMessage: string,
  commitHash: string,
  branchName: string,
  authorName: string,
  res?: any
) =>
  axiosInstance
    .post(
      `${dbApiUrl}api/build/request`,
      {
        commitMessage,
        commitHash,
        branchName,
        authorName,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    )
    .then((response) => {
      if (!res) {
        return;
      }
      return res.send(response.data);
    })
    .catch((err) => console.log("Ошибочка - ", err));
