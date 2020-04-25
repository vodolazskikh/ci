import * as express from "express";
import axios from "axios";
import * as https from "https";
import * as bodyParser from "body-parser";
import { EventEmitter } from "events";
import { checkNewCommits } from "./utils/checkNewCommits";
import { mainRoute } from "./routes/main";
import { getCurrentBuild } from "./routes/getCurrentBuild";
import { getSettings } from "./routes/getSettings";
import { postSettings } from "./routes/postSettings";
import { getBuilds } from "./routes/getBuilds";
import { getLogs } from "./routes/getLogs";
import { postBuild } from "./routes/postBuild";

const cors = require("cors");

const app = express() as any;
const agent = new https.Agent({ rejectUnauthorized: false });
const axiosInstance = axios.create({ httpsAgent: agent });

const myEventEmitter = new EventEmitter();

// Подключаем переменные окружения
require("dotenv").config();
const port = process.env.PORT;

app.use(cors());
// Используем мидлварку bodyParser для пасинга тел запроса
app.use((bodyParser as any).json());
app.use(
  (bodyParser as any).urlencoded({
    extended: true,
  })
);

// Подключаем роуты
mainRoute(app, axiosInstance);
getSettings(app, axiosInstance);
postSettings(app, axiosInstance);
getBuilds(app, axiosInstance);
getCurrentBuild(app, axiosInstance);
getLogs(app, axiosInstance);
postBuild(app, axiosInstance, myEventEmitter);

// Раз в 10 секунд проверяем, есть ли новые коммиты
setInterval(function () {
  checkNewCommits(myEventEmitter);
}, 10000);

app.listen(port, function () {
  console.log(`Сервер запущен на ${port} порту!`);
});

module.exports = { app, axiosInstance };
