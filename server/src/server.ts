import WebSocket from "ws";
import express from "express";
import cors from "cors";

const app = express();
const Port = 6700;

app.use(express.json());

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

app.use((err, req, res, next) => {
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
