export function mainRoute(app, axiosInstance) {
  app.get("/", function (req, res) {
    res.send("Добрейший вечерочек - API функционирует!");
  });
}
