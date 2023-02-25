
import { Document, Schema, model } from "mongoose"; //, models

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

export const ScoreModel = model<IScore>('Score', ScoreSchema);

export default ScoreModel