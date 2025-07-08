import mongoose from "mongoose"

const categoryBlogSchema = new mongoose.Schema({
    name:{
        tytpe: String,
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
const CategoryBlog = mongoose.model("CategoryBlog", categoryBlogSchema)

export default CategoryBlog