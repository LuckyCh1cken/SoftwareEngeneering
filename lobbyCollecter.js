"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//alle 5sec lobbys() aufrufen
//Main
/* var lobbyss = new LobbyScore();

var trustScore = lobbyss.trustCalc();
var rankScore = lobbyss.rankCalc(); */
/*
class Matchmaker{
    trustScore: number;
    rankScore: number;
    constructor(trustScore: number, rankScore: number) {
        this.trustScore = trustScore;
        this.rankScore = rankScore;
    }

    public lobbysLoopStart(rankScore: number, trustScore: number){

        while(lobbyCount < 0){

        }
        trust = (trust1+trust2+trust3+trust4)/userCount
        return trust;
    }

    public rankCalc():number{
        rank = (rank1+rank2+rank3+rank4)/userCount
        return rank;
    }

    schicke rank, trust and time to lobby collecting threat
} */
class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
