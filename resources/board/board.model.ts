
import { Document, Schema, model } from "mongoose"; //, models

export interface IBoard extends Document {
    1: string,
    2: string,
    3: string,
    4: string,
    5: string,
    6: string,
    7: string,
    8: string,
    9: string,
}

export const BoardSchema = new Schema<IBoard>({ 
    1: { type: String },
    2: { type: String },
    3: { type: String },
    4: { type: String },
    5: { type: String },
    6: { type: String },
    7: { type: String },
    8: { type: String },
    9: { type: String },
    
        
    //categories: { type: [Schema.Types.ObjectId], ref: "category" , //Detta är en FK, mer jobb krävs. 

});

export const BoardModel = model<IBoard>('Board', BoardSchema);

export default BoardModel