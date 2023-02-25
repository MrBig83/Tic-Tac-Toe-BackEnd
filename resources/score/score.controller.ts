import express from "express";

function hello(_req: express.Request , res: express.Response){
    return res.status(200).json("Här finns det HighScore.")   
}
module.exports = { hello };
