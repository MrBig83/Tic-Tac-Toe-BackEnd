import * as express from "express";
import { IBoard } from "./board.model"; 
import BoardModel from "./board.model"; 

// interface BoardData {
//     square: number;
//     content: string | null;
//   }
async function createBoard(req: express.Request, res: express.Response){
    console.log(req.body);
    try{
        const board = await new BoardModel(req.body)
        
        
        await board.save()

        return res.status(200).json(board._id)
    } catch (error) {
        console.log(error);
        return res.status(402).json("Cant create board")
    }
    return res.status(200).json("Detta är utanför Try-Catch")
}


async function getBoard(_req: express.Request, res: express.Response){
    try {
        const board: IBoard[] = await BoardModel.find().exec();
        console.log(board);
        res.status(200).json(board); 
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
      }

}

async function updateBoard(req: express.Request, res: express.Response){
    try{
        await BoardModel.findByIdAndUpdate(req.params, req.body)
        const updatedBoard = await BoardModel.findById(req.params).exec();
        if(!updatedBoard){
            return res.status(404).json("The board doesnt exist")
        }
        return res.status(201).json(updatedBoard)
    } catch (error) {
        console.log(error);
        return res.status(401).json("Bad input")
    }
}



module.exports = { getBoard, createBoard, updateBoard }

