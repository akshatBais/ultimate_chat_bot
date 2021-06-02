export interface InputMessage {
        botId : string,
        message : string
}

export interface IntentObject {
        confidence : number,
        name : string
}



export interface IntentResponse {
        data : {
                intents? : IntentObject[],
                entities? : any[],
                text? : string,
        }
        status : number
}

export interface ChatResponse {
        status : number,
        reply : string
}
