import { Router } from "express"
import {createService,getAllServices,getServiceById,updateService,deleteService} from "../controllers/service.controller.js"
import { verifyToken } from "../middlewares/verifyToken.js"

const servicesRoute = Router()

servicesRoute.post("/create-service",createService)
servicesRoute.get("/get-all-services", verifyToken,  getAllServices)
servicesRoute.get("/get-service-id/:service_id", verifyToken, getServiceById)
servicesRoute.put("/update-services/:service_id", verifyToken, updateService)
servicesRoute.delete("/delete-services/:service_id", verifyToken, deleteService)


export default servicesRoute