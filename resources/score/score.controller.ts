import * as express from "express";
//import { Document } from "mongoose";
//import type DocumentQuery from 'mongoose';

import { IScore } from "./score.model"; 
import ScoreModel from "./score.model"; 


async function getScoreList(_req: express.Request, res: express.Response): Promise<void> {
  try {

    const scoreList: IScore[] = await ScoreModel.find().exec();
    console.log(scoreList);
    res.status(200).json(scoreList); 
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
}

async function postScore(req: express.Request, res: express.Response){
    try{
        const score = await new ScoreModel(req.body)
        await score.save()
        console.log(req.body);
        console.log(score);
        
        return res.status(201).json("Sparad användare")
    } catch (error){
        console.log(error);
        
        res.status(401).json(req.body.player + " - username already exists")
        return;
    }   
    return res.status(200).json("Detta är utanför Try-Catch")
}



module.exports = { getScoreList, postScore };
