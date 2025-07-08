import mongoose from "mongoose";

const Database = async () =>{
    try{
        const conn = await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}${process.env.DB_CONNECT_STRING}`)
        if(conn.connection.readyState === 1){
            console.log("Connect DB Success")
        }else{
            console.log("Connect False")
        }
    }catch(error){
        console.log("Connect DB Error: ",error.message)
    }
}

export default Database