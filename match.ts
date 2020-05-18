import { Lobby } from "./lobby";

export class Match {

    lobby1: Lobby = new Lobby(11,11);
    lobby2: Lobby = new Lobby(22,22);

    constructor(lobby1: Lobby,lobby2: Lobby){
        this.lobby1 = lobby1;
        this.lobby2 = lobby2;
    }
}