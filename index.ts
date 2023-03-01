import mongoose from "mongoose";
const { app } = require("./app")
const port:number = 3000;

main().catch((err) => console.log(err))
async function main(){
    console.log("Connected to DB & Webserver");
    mongoose.set("strictQuery", true);
    await mongoose.connect("mongodb://127.0.0.1:27017/TicTacToe")
    app.listen(port, () => {
        console.log(`TypeScript with Express http://localhost:${port}`); 
    });
};