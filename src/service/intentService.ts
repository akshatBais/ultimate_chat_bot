/**
 * Service file is made to add out business logic. 
 * From where external API call will be made and db queries if any
 */

import axios from "axios";
import { ChatResponse, InputMessage, IntentObject, IntentResponse } from "../../types/intentTypes";

export const getIntent = async (messageData : InputMessage) => {
    const headers =  {
        'Content-Type' : 'application/json',
        'Authorization' : process.env.API_KEY,
    }
    let chatResponse : ChatResponse = {
        status : 200,
        reply : 'AI could not give the correct answer'
    };
    try {
        //STEP 1 : Make the AI API call
        let response : IntentResponse = await axios.post(process.env.CHAT_API + "/intents", messageData, { headers });

        if(response.status === 200 && response.data.intents) {
            
            //STEP 2 : Get the relevant intent based on confidence using our fUnction : getRelevantIntent()
            const relevantIntent = getRelevantIntent(response.data.intents);

            //STEP 3 : Make the DB Call and get the reply based on the relevant data found from STEP 2
            



            return chatResponse;

        } else {
            return chatResponse;
        }
    } catch(error) {
        chatResponse.status = 500;
        return chatResponse;
    }
    

}

/**
 * Following function uses reduce to get the most relevant intent which has the highest confidence
 * @param intents 
 * @returns 
 */
function getRelevantIntent(intents : IntentObject[]) {
    if(intents.length) {
        return intents.reduce(function(prev, current) {
            return (prev.confidence > current.confidence) ? prev : current
        });
    } 
    return null;
}