import { getIntent } from '../src/service/intentService';
import {mockUserMessage, expectedMessageReply, mockUserMessageWrong,  expectedFailedReply} from './mockData'
import { dbSetup } from '../config/DBConfig';


describe('this checks the AI service call which gives reposne based on the user message', () => {


    // const OLD_ENV = process.env;

    beforeEach(() => {
      dbSetup();
    });


    /**
     * Calls an AI API and gets relevant reply from db based on the intent of user
     */
    it('Should return the response as expected for a standard set of data', async () => {
      const result  = await getIntent(mockUserMessage);
      if(result) {
        expect(result.status).toEqual(expectedMessageReply.status);
        expect(result.reply).toEqual(expectedMessageReply.reply);
      }
      
    });

    it('Should return the standard response as expected for a message which AI doesnt recognise or in case of any error', async () => {
      const result  = await getIntent(mockUserMessageWrong);
      if(result) {
        expect(result.status).toEqual(expectedFailedReply.status);
        expect(result.reply).toEqual(expectedFailedReply.reply);
      }
      
    });
  
  });