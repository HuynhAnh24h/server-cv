import mongoose, { Mongoose } from "mongoose"

const companyShcema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    slug:{
        type: String,
        require: true
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