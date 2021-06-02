"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbSetup = void 0;
const mongoose = require("mongoose");
const dbSetup = () => {
    const uri = process.env.DB_URL;
    if (uri)
        mongoose.connect(uri, { useNewUrlParser: true }).then(() => {
            console.log('connected');
        }).catch(err => {
            console.log(err);
        });
};
exports.dbSetup = dbSetup;
