"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server = (0, express_1.default)();
const port = 3333;
// Deserialização
server.use(express_1.default.json());
server.listen(port, () => {
    return console.log(`Server is running on port ${port}`);
});
