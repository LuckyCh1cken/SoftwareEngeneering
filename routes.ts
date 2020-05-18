import {Router,Request,Response} from "express";


const routes:Router = Router();


routes.get("/", function(request:Request,response:Response){
    response.status(200).send("hi bruda");
})
routes.get("/test", function(request:Request,response:Response){
    response.status(400).send("Digga Fail");
})
routes.get("/findMatch", function(request:Request,response:Response){
    response.status(400).send("Hier leite ich später zu findMatch.ts");
})

export default routes;