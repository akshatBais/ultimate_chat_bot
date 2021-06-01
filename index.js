"use strict";
exports.__esModule = true;
var dotenv = require("dotenv");
var express_1 = require("express");
var intentRouter_1 = require("./routes/intentRouter");
var app = express_1["default"]();
dotenv.config();
app.use(express_1["default"].urlencoded({
    extended: true
}));
app.use(express_1["default"].json());
app.use("/intents", intentRouter_1.intentRouter);
app.listen(process.env.PORT, function () {
    console.log("Node server started running");
});
