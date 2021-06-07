"use strict";
/**
 * Service file is made to add out business logic.
 * From where external API call will be made and db queries if any
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIntent = void 0;
const axios_1 = __importDefault(require("axios"));
const intentDao_1 = require("../dao/intentDao");
const getIntent = (messageData) => __awaiter(void 0, void 0, void 0, function* () {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': process.env.API_KEY,
    };
    let chatResponse = {
        status: 200,
        reply: 'AI could not give the correct answer'
    };
    try {
        //STEP 1 : Make the AI API call
        const url = process.env.CHAT_API + "/intents";
        const response = yield axios_1.default.post(url, messageData, { headers });
        if (response && response.status === 200 && response.data.intents) {
            //STEP 2 : Get the relevant intent based on confidence using our fUnction : getRelevantIntent()
            const relevantIntent = getRelevantIntent(response.data.intents);
            //STEP 3 : Make the DB Call and get the reply based on the relevant data found from STEP 2
            let intentReply;
            if (relevantIntent)
                intentReply = yield intentDao_1.getReplyForIntent(relevantIntent);
            if (intentReply && intentReply.reply)
                chatResponse.reply = intentReply.reply.text;
            return chatResponse;
        }
        else {
            return chatResponse;
        }
    }
    catch (error) {
        console.error('error occurred while getting intent : ', error);
        chatResponse.status = 500;
        return chatResponse;
    }
});
exports.getIntent = getIntent;
/**
 * Following function uses reduce to get the most relevant intent which has the highest confidence
 * @param intents
 * @returns
 */
function getRelevantIntent(intents) {
    if (intents.length) {
        return intents.reduce(function (prev, current) {
            return (prev.confidence > current.confidence) ? prev : current;
        });
    }
    return null;
}
