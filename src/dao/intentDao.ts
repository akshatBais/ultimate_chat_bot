import { Intent } from "../models/intents.model";
import { IntentObject } from "../types/intentTypes";

export async function getReplyForIntent(message : IntentObject) {
    let intentReply = await Intent.findOne({ name : message.name });
    return intentReply;
}