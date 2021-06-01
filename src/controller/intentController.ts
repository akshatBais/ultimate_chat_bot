/**
 * Following is the controller file for intent related APIs
 */
import express, {Request, Response } from 'express';
import { ChatResponse } from '../../types/intentTypes';
import { getIntent } from '../service/intentService';

const intentController = express.Router();


/**
 * POST method to get the intent and confidence in respect to a message 
 * sent by a user.
 */


intentController.post('/', async (req : Request, res : Response) => {
    const result : ChatResponse = await getIntent(req.body);
    res.send(result);
});


//APIs related to intent can be written here.


export {intentController}