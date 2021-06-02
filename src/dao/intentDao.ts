import { IIntent, IMessage, Intent } from "../models/intents.model";
import { IntentObject } from "../types/intentTypes";

export async function getReplyForIntent(message : IntentObject) {
    let intentReply = await Intent.findOne({ name : message.name });
    console.log(intentReply);
    return intentReply;
}