import { Router } from "express"
import {createSkill,getAllSkill,getSkillById,updateSkill,deleteSkill } from "../controllers/skill.controller.js"
import { verifyToken } from "../middlewares/verifyToken.js"

const skillRouter = Router()

skillRouter.post("/create-skill", verifyToken ,createSkill)
skillRouter.get("/get-all-skill", getAllSkill)
skillRouter.get("/get-skill-by-id/:skill_id", getSkillById)
skillRouter.put("/update-skill/:skill_id", verifyToken, updateSkill)
skillRouter.delete("/delete-skill/:skill_id", verifyToken, deleteSkill )

export default skillRouter