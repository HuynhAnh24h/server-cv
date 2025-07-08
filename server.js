import app from "./src/app.js"
import { configDotenv } from "dotenv"

const port = process.env.PORT || 6000

app.listen(port, ()=>{
    try{
        console.log("Sever running with port: ",port)
    }catch(error){
        console.log("Run server error: ", error.message)
    }
})
