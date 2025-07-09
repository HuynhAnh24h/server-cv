import mongoose from "mongoose"
const categoryProjectSchema = new mongoose.Schema({
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
    }
})

const CategoryProject = mongoose.model("CategoryProject", categoryProjectSchema)

export default CategoryProject