import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";
import { getRoutes } from "./routes";

const app = express();
const PORT = 8080;


app.use(cors());
app.use(bodyParser.json());
app.use(getRoutes());

app.get("/", (req, res) => {
  res.send("Healthy");
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
