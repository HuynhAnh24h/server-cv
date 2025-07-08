import mongoose from "mongoose"
const categoryProjectSchema = new mongoose.Schema({
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
    }
})

const CategoryProject = mongoose.model("CategoryProject", categoryProjectSchema)

export default CategoryProject