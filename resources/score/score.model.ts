
import { Document, Schema, model } from "mongoose"; //, models
//import * as mongoose from 'mongoose';

// interface IHighScore {
//     player: string,
//     score: number,
//     bio: string,   
// }

export interface IScore extends Document {
    player: string,
    score: number,
    bio: string,  
}

export const ScoreSchema = new Schema<IScore>({  
    player: { type: String, required: true, unique: true },
    score: { type: Number, required: true },
    bio: { type: String, required: true },
        
    //categories: { type: [Schema.Types.ObjectId], ref: "category", required: true}, //Detta är en FK, mer jobb krävs. 

});
//const CardModel = models<ICard>("Card", cardSchema) || model("card", cardSchema);




export const ScoreModel = model<IScore>('Score', ScoreSchema);
//export const ScoreModel = models['score'] || model("score", scoreSchema);  

export default ScoreModel

//module.exports = ScoreModel;
//module.exports = CardModel;