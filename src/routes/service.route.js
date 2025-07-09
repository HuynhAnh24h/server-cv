import { Router } from "express"
import {createService,getAllServices,getServiceById,updateService,deleteService} from "../controllers/service.controller.js"

const servicesRoute = Router()

servicesRoute.post("/create-service",createService)
servicesRoute.get("/get-all-services", getAllServices)
servicesRoute.get("/get-service-id/:service_id",getServiceById)
servicesRoute.put("/update-services/:service_id",updateService)
servicesRoute.delete("/delete-services/:service_id",deleteService)


export default servicesRoute