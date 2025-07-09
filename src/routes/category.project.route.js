import { Router } from "express"
import {createCteProject,getAllCteProject,getCteProjectById,updateCteProject, deleteCteProject} from "../controllers/category.controller.js"

const categoryProjectRoute = Router()

categoryProjectRoute.post("/create-cte-project", createCteProject)
categoryProjectRoute.get("/get-all-cte-project", getAllCteProject)
categoryProjectRoute.get("/get-cte-project-id/:cte_project_id", getCteProjectById)
categoryProjectRoute.put("/update-cte-project/:cte_project_id",updateCteProject)
categoryProjectRoute.delete("/delete-cte-project/:cte_project_id", deleteCteProject)

export default categoryProjectRoute