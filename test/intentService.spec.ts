import { getIntent } from '../src/service/intentService';
import {mockUserMessage, expectedMessageReply, expectedFailedReply} from './mockData'

describe('this checks the AI service call which gives reposne based on the user message', () => {

    it('Should return the response as expected for a standard set of data', async () => {
      let actualReply = await getIntent(mockUserMessage);
      console.log(actualReply);
      expect(actualReply).toMatchObject(expectedMessageReply);
    });

    it('should return the standard reposne if nothing matched from the data' , () => {
      
    });
  });