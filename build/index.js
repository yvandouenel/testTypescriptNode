"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_json_1 = __importDefault(require("./services/mocks/user.json"));
console.log('Hello world!');
console.log("Hello ".concat(user_json_1.default.lastname));
