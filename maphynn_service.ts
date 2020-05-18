import service from "./app"
import { prototype } from "events";

const https = require('https')
const options = {
  hostname: 'api.maphynn.de',
  port: 443,
  path: '/local/matchmaking/player',
  method: 'GET'
}

const req = https.request(options, (res: { statusCode: any; on: (arg0: string, arg1: (d: any) => void) => void; }) => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', (error: any) => {
  console.error(error)
})

req.end()


const PORT = 3000;



service.listen(PORT,()=>console.log("maphynn webservice started on Port "+PORT+""));
