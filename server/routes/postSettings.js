const token = process.env.TOKEN;
const dbApiUrl = process.env.DB_API_URL;
const state = require("../state");
const path = require("path");
const { execSync } = require("child_process");

module.exports = function (app, axiosInstance) {
  app.post("/api/settings", function (req, res) {
    const { repoName, buildCommand, mainBranch, period } = req.body;
    axiosInstance
      .post(
        `${dbApiUrl}api/conf`,
        {
          repoName,
          buildCommand,
          mainBranch,
          period: Number(period),
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => {
        // Запустим СИНХРОННЫЙ дочерний процесс, который склонирует репозиторий
        // Пока репо клонируется - ничего не делаем!
        state.repo = repoName;
        try {
          execSync(`git clone ${repoName}`, {
            stdio: [0, 1, 2],
            cwd: path.resolve(__dirname, "../"),
          });
        } catch (error) {
          console.log(
            "Произошла ошибка или такой репозиторий уже склонирован!"
          );
        }
        return res.send(`Данные обновлены - ${response.config.data}`);
      })
      .catch((err) => console.log("Ошибочка - ", err.response));
  });
};
