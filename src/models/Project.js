import mongoose from "mongoose"

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    projectDesc:{
        type: String,
        require: true
    },
    projectLink:{
        type: String,
        require: true
    },
    role:{
        type: String,
        required: true
    },
    technical:{
        type: [String]
    },
    projectImage: {
        type: [String],
    },
    projetCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CategoryProject",
        require: true
    }
})

const Project = mongoose.model("Project", projectSchema)

export default Project