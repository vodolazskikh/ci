require("dotenv").config();
const token = process.env.TOKEN;
const dbApiUrl = process.env.DB_API_URL;

export function getCurrentBuild(app, axiosInstance) {
  app.get("/api/builds/:buildId", function (req, res) {
    const { buildId } = req.params;

    axiosInstance
      .get(`${dbApiUrl}api/build/details?buildId=${buildId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => res.send(response.data))
      .catch((error) => res.send(error));
  });
}
