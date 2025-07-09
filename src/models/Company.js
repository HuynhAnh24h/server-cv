import mongoose, { Mongoose } from "mongoose"

const companyShcema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    slug:{
        type: String,
        required: true
    },
    image:{
        type: String
    },
    managerName: {
        type: String,
        required: true
    },
    managerPhone:{
        type: String,
        required: true
    },
    webCompaney:{
        type: String,
    },
    faceBook: {
        type: String
    }
})

const Company = mongoose.model("Company", companyShcema)

export default Company