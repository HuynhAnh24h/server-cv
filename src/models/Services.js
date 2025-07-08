import mongoose from "mongoose"

const serviceSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    slug:{
        type: String,
        required: true
    }
})

const Service = mongoose.model("Service", serviceSchema)
export default Service