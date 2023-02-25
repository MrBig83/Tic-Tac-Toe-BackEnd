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

        return res.status(200).json("New board created")
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



module.exports = { getBoard, createBoard }

