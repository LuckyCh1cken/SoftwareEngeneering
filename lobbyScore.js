"use strict";
//import user rank, trust;
Object.defineProperty(exports, "__esModule", { value: true });
class LobbyScore {
    constructor() {
        this.trust = 100;
        this.time = 0;
        this.rank = 10;
        this.userCount = 1;
        //abfrage an lobbysys für lobbyanzahl
        this.lobbyID = 0;
    }
    trustCalc() {
        var trust1 = 2;
        var trust2 = 2;
        var trust3 = 0;
        var trust4 = 1;
        //  var trust5 = 8;
        this.trust = (trust1 + trust2 + trust3 + trust4) / 4;
        return this.trust;
    }
    rankCalc() {
        var rank1 = 2;
        var rank2 = 2;
        var rank3 = 0;
        var rank4 = 1;
        this.rank = (rank1 + rank2 + rank3 + rank4) / 4;
        return this.rank;
    }
}
exports.LobbyScore = LobbyScore;
