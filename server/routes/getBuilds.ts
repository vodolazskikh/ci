import { state } from "../state";
require("dotenv").config();
const token = process.env.TOKEN;
const dbApiUrl = process.env.DB_API_URL;

export function getBuilds(app, axiosInstance) {
  app.get("/api/builds", function (req, res) {
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
}
