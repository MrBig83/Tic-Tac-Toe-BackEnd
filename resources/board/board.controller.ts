import * as express from "express";
import { IBoard } from "./board.model"; 
import BoardModel from "./board.model"; 

async function createBoard(req: express.Request, res: express.Response){
    try{
        const board = await new BoardModel(req.body)
        await board.save()
        return res.status(200).json(board._id)
    } catch (error) {
        console.log(error);
        return res.status(401).json("Cant create board")
    }
    return res.status(200).json("Detta är utanför Try-Catch")
}

async function getBoard(_req: express.Request, res: express.Response){
    try {
        const board: IBoard[] = await BoardModel.find().exec();
        res.status(200).json(board); 
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
      }
}

async function getSpecificBoard(req: express.Request, res: express.Response){
    try{
        const specificBoard = await BoardModel.findById(req.params)
        return res.status(200).json(specificBoard)
    } catch (error){
        console.log(error);
        return res.status(404).json("Bad request. Board not found")
    }
}

async function updateBoard(req: express.Request, res: express.Response){
    try{       
        const board:any = await BoardModel.findById(req.params)
        board[req.body.pos] = req.body.symbol
        await board.save();
        return res.status(200).json(board)
    } catch (error) {
        console.log(error);
        return res.status(401).json("Bad input")
    }
}

module.exports = { getBoard, createBoard, updateBoard, getSpecificBoard }