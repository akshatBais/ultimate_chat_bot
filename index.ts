
import * as dotenv from "dotenv";
import express from "express";
import {intentController} from "./src/controller/intentController";

const app = express();
dotenv.config();

app.use(express.urlencoded({
    extended: true
  }));
app.use(express.json());


app.use("/intents", intentController);

app.listen(process.env.PORT, () => {
    console.log("Node server started running on Port : " , process.env.PORT);
});