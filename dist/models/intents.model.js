"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Intent = void 0;
const mongoose_1 = require("mongoose");
const IntentScehma = new mongoose_1.Schema({
    name: { type: String },
    description: { type: String },
    trainingData: {
        messages: [
            {
                text: String
            }
        ]
    },
    reply: {
        text: String
    }
});
exports.Intent = mongoose_1.model('Intent', IntentScehma);
