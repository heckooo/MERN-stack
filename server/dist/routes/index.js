"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const decksRouter_1 = require("./decksRouter");
exports.routes = express_1.default.Router();
exports.routes.use(decksRouter_1.decksRouter);
//# sourceMappingURL=index.js.map