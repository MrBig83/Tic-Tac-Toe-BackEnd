import * as express from "express";
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
async function getPlayer(req: express.Request, res: express.Response): Promise<void> {
  try {
    const player = await ScoreModel.findOne(req.params).exec(); 
    if(!player){
        res.status(404).send("Player not found")
    } 
    console.log(player);
    res.status(200).json(player); 
  } catch (error) { 
    console.error(error);
    res.status(500).send('Internal server error');
  }
}

async function postScore(req: express.Request, res: express.Response){
    console.log("req.body")
    console.log(req.body)
    try{
        const score = await new ScoreModel(req.body)
        await score.save()
        
        return res.status(201).json("Sparad användare")
    } catch (error){
        console.log(error);
        
        res.status(401).json(req.body.player + " - username already exists")
        return;
    }   
    return res.status(200).json("Detta är utanför Try-Catch")
}

async function updateScore(req: express.Request, res: express.Response){
    try{
        await ScoreModel.findOneAndUpdate(req.params, req.body)
        const uppdatedScore = await ScoreModel.findOne(req.params).exec();
        if(!uppdatedScore){
            return res.status(404).json("Player doesnt exist")
        }
        return res.status(201).json(uppdatedScore)
    } catch (error) {
        console.log(error)
        return res.status(401).json("Bad creds")
    }
}

module.exports = { getScoreList, postScore, getPlayer, updateScore };