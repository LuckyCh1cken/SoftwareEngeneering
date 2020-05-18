"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes/routes"));
class WebService {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.app.use("/", routes_1.default);
        this.app.use("/findMatch", routes_1.default);
    }
    config() {
    }
}
exports.default = new WebService().app;
