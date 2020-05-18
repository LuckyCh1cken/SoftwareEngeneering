
export class Lobby{

public rankScore:number;
public trustScore:number;

    //abfrage an lobbysys für lobbyanzahl
public lobbyID:number = 0;

public trustCalc(trustScore:number):number{
        return trustScore/5;
}

public rankCalc(rankScore:number):number{
        return rankScore/5;
} 

constructor(trustScore: number, rankScore: number) {
        this.trustScore = this.trustCalc(trustScore);
        this.rankScore = this.rankCalc(rankScore); 
}

}