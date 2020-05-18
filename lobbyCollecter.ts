//import lobby rank, trust, time, lobbyID;
import { LobbyScore } from "./lobbyScore";
import { Lobby } from "./lobby";
//alle 5sec lobbys() aufrufen

 

//Main
var lobbyss = new LobbyScore();

var trustScore = lobbyss.trustCalc();
var rankScore = lobbyss.rankCalc(); 

class Matchmaker{
    trustScore: number;
    rankScore: number;
    lobbyCount: number;
    constructor(trustScore: number, rankScore: number) {
        this.trustScore = trustScore;
        this.rankScore = rankScore;
        this.lobbyCount = 1;
    }

    public lobbysLoopStart(rankScore: number, trustScore: number){

        while(this.lobbyCount < 0){

        }

    }

} 
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}