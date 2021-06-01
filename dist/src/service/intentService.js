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
const getIntent = (messageData) => __awaiter(void 0, void 0, void 0, function* () {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': process.env.API_KEY,
    };
    let chatResponse = {
        status: 200,
        reply: ''
    };
    try {
        //Make the AI API call
        let response = yield axios_1.default.post(process.env.CHAT_API + "/intents", messageData, { headers });
        if (response.status === 200 && response.data.intents) {
            //Get the relevant intent based on confidence using our finction : getRelevantIntent()
            const relevantIntent = getRelevantIntent(response.data.intents);
            //Make the DB Call and get the reply based on the confidence and intent received.
            chatResponse.status = 200;
            chatResponse.reply = 'RESPONSE FROM DB ...HOLD ON';
            return chatResponse;
        }
        else {
            chatResponse.reply = 'AI could not give the correct answer';
            return chatResponse;
        }
    }
    catch (error) {
        chatResponse.status = 500;
        chatResponse.reply = 'AI could not give the correct answer';
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
