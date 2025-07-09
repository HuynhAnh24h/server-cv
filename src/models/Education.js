import mongoose from "mongoose"

const educationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slug:{
        type: String,
        required: true
    },
    image:{
        type: String,
    },
    eduDesc: {
        type: String,
        required: true
    },
    eduLink:{
        type:String,
        required: true
    },
    credential:{
        type:[String]
    }
})

const Education = mongoose.model("Education", educationSchema)

export default Education