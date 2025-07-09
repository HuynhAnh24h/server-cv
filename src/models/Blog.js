import mongoose from "mongoose"

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    slug:{
        type: String,
        required: true
    },
    blogDesc:{
        type: String,
        required: true
    },
    blogThumbnail:{
        type: String
    }
})

const Blog = mongoose.model("Blog", blogSchema)

export default Blog