"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = 3333;
const server = (0, express_1.default)();
server.get('/', (req, res) => {
    return res.send('Hello World!');
});
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
