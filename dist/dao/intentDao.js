"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReplyForIntent = void 0;
const intents_model_1 = require("../models/intents.model");
function getReplyForIntent(message) {
    return __awaiter(this, void 0, void 0, function* () {
        let intentReply = yield intents_model_1.Intent.findOne({ name: message.name });
        return intentReply;
    });
}
exports.getReplyForIntent = getReplyForIntent;
