import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    image:{
        type: String
    },
    skillProgressBar:{
        type: String,
        required: true
    },
    slug:{
        type: String,
        required: true
    }
})

const Skill = mongoose.model("Skill", skillSchema)

export default Skill