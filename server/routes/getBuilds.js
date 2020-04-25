const token = process.env.TOKEN;
const dbApiUrl = process.env.DB_API_URL;
const state = require("../state");

module.exports = function (app, axiosInstance) {
  app.get("/api/builds", function (req, res) {
    console.log("token", `${dbApiUrl}api/build/list?limit=25`);
    axiosInstance
      .get(`${dbApiUrl}api/build/list?limit=25`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        // Выполняя getBuilds - положим в стейт информацию о билдах, которые там хранятся
        state.builds = response.data.data;
        return res.send(response.data);
      })
      .catch((err) => res.send(`Ошибка ${err}`));
  });
};
