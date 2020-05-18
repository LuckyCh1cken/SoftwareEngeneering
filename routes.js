"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes = express_1.Router();
routes.get("/", function (request, response) {
    response.status(200).send("hi bruda");
});
routes.get("/test", function (request, response) {
    response.status(400).send("Digga Fail");
});
routes.get("/findMatch", function (request, response) {
    response.status(400).send("Hier leite ich später zu findMatch.ts");
});
exports.default = routes;
