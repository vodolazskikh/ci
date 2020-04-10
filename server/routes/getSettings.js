const token = process.env.TOKEN;
const dbApiUrl = process.env.DB_API_URL;
const state = require("../state");

module.exports = function(app, axiosInstance) {
  app.get("/api/settings", function(req, res) {
    axiosInstance
      .get(`${dbApiUrl}api/conf`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(response => {
        state.branch = response.data.mainBranch;
        return res.send(response.data);
      })
      .catch(err => console.log("Ошибочка - ", err));
  });
};
