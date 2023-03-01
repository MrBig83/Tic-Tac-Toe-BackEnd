import { Document, Schema, model } from "mongoose";

export interface IBoard extends Document {
    a: string,
    b: string,
    c: string,
    d: string,
    e: string,
    f: string,
    g: string,
    h: string,
    i: string,
}

export const BoardSchema = new Schema<IBoard>({ 
    a: { type: String },
    b: { type: String },
    c: { type: String },
    d: { type: String },
    e: { type: String },
    f: { type: String },
    g: { type: String },
    h: { type: String },
    i: { type: String },
});

export const BoardModel = model<IBoard>('Board', BoardSchema);

export default BoardModel