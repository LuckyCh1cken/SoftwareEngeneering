import express,{Application} from "express";
import routs from "./routes/routes";

class WebService{
    public app:Application;
    
    constructor(){
        this.app=express();
        this.config();
        this.app.use("/",routs);
        this.app.use("/findMatch",routs);
    }

    private config():void{
    }

}

export default new WebService().app;