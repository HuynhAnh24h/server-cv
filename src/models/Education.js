import mongoose from "mongoose"

const educationSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    slug:{
        type: String,
        require: true
    },
    image:{
        type: String,
    },
    eduDesc: {
        type: String,
        require: true
    },
    eduLink:{
        type:String,
        require: true
    },
    credential:{
        type:[String]
    }
})

const Education = mongoose.model("Education", educationSchema)

export default Education