"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const https = require('https');
const options = {
    hostname: 'api.maphynn.de',
    port: 443,
    path: '/local/matchmaking/player',
    method: 'GET'
};
const req = https.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`);
    res.on('data', d => {
        process.stdout.write(d);
    });
});
req.on('error', (error) => {
    console.error(error);
});
req.end();
const PORT = 3000;
app_1.default.listen(PORT, () => console.log("maphynn webservice started on Port " + PORT + ""));
