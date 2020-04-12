const express = require("express");
const app = express();
const axios = require("axios");
const https = require("https");
const cors = require("cors");

const agent = new https.Agent({ rejectUnauthorized: false });
const axiosInstance = axios.create({ httpsAgent: agent });
const bodyParser = require("body-parser");
const EventEmitter = require("events");
const checkNewCommits = require("./utils/checkNewCommits");

const myEventEmitter = new EventEmitter();

// Подключаем переменные окружения
require("dotenv").config();
const port = process.env.PORT;

app.use(cors());
// Используем мидлварку bodyParser для пасинга тел запроса
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Подключаем роуты
require("./routes/main")(app, axiosInstance);
require("./routes/getSettings")(app, axiosInstance);
require("./routes/postSettings")(app, axiosInstance);
require("./routes/getBuilds")(app, axiosInstance);
require("./routes/getCurrentBuild")(app, axiosInstance);
require("./routes/getLogs")(app, axiosInstance);
require("./routes/postBuild")(app, axiosInstance, myEventEmitter);

// Раз в 10 секунд проверяем, есть ли новые коммиты
setInterval(function () {
  checkNewCommits(myEventEmitter);
}, 10000);

app.listen(port, function () {
  console.log(`Сервер запущен на ${port} порту!`);
});

module.exports = { app, axiosInstance };
