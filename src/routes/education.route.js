import { Router } from "express"
import {createEducation,getAllEducation,getEducationById,updateEducation, deleteEducation} from "../controllers/education.controller.js"
const educationRoute = Router()

educationRoute.post("/create-education",createEducation)
educationRoute.get("/get-all-education",getAllEducation)
educationRoute.get("/get-education-by-id/:edu_id",getEducationById)
educationRoute.put("/update-education/:edu_id",updateEducation)
educationRoute.delete("/delete-education/:edu_id",deleteEducation)

export default educationRoute