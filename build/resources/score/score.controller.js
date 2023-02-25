"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function hello(_req, res) {
    return res.status(200).json("Här finns det HighScore.");
}
module.exports = { hello };
