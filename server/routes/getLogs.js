const token = process.env.TOKEN;
const dbApiUrl = process.env.DB_API_URL;

module.exports = function (app, axiosInstance) {
  app.get("/api/builds/:buildId/logs", function (req, res) {
    const { buildId } = req.params;

    axiosInstance
      .get(`${dbApiUrl}api/build/log?buildId=${buildId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => res.text(response))
      .catch((error) => res.send(error));
  });
};
