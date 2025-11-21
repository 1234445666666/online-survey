import WebSocket from "ws";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import "./db/database";
import { usersDB } from "./db/database";
import pull from "../src/routes/pull";

const app = express();
const Port = 6700;

app.use(express.json());
app.use(helmet());

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://redundantly-agile-redfish.cloudpub.ru/",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", pull);

app.get("/test", (req, res) => {
  res.json({
    id: 1,
    name: "nestor",
    role: "razrabotchik",
  });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(Port, () => {
  console.log(`Сервер запущен на порту ${Port}`);
});

// const wss = new WebSocket.Server({ port: 8080 });

// wss.on("connection", (ws) => {
//   console.log("Новый клиент подключился");

//   ws.on("message", (message) => {
//     console.log("Получено сообщение:", message.toString());
//     wss.clients.forEach((client) => {
//       if (client.readyState === WebSocket.OPEN) {
//         client.send(message.toString());
//       }
//     });
//   });
// });
