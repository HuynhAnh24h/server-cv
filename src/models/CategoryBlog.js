import mongoose from "mongoose"

const categoryBlogSchema = new mongoose.Schema({
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
const CategoryBlog = mongoose.model("CategoryBlog", categoryBlogSchema)

export default CategoryBlog