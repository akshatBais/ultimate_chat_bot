import {Schema, model} from "mongoose";

export interface IMessage {
    text : string
}

export interface IIntent {
    id : String,
    name : string,
    description : string,
    trainingData : {
        messages : Array<IMessage>
    },
    reply : {
        text : string
    }
}

const IntentScehma : Schema = new Schema({  
    name: {type : String},
    description: {type : String},
    trainingData : {
        messages : [
            {
                text : String
            }
        ]
    },
    reply : {
        text : String
    }
});


export const Intent = model<IIntent>('Intent', IntentScehma);