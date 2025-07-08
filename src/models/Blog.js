import mongoose from "mongoose"

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    slug:{
        type: String,
        require: true
    },
    blogDesc:{
        type: String,
        require: true
    },
    blogThumbnail:{
        type: String
    }
})

const Blog = mongoose.model("Blog", blogSchema)

export default Blog