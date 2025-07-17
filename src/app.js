import express from "express"
import { configDotenv } from "dotenv"
import Database from "./configs/database.js"
import AppRouters from "./routes/index.js"
import cors from "cors"

configDotenv()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
AppRouters(app)

Database()

export default app