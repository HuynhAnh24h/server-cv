import Education from "../models/Education.js"

// Create
export const createEducation = async (req,res)=>{
    try{
        const {name,slug,eduDesc,credential} = req.body
        if(!name || !slug || !eduDesc || !credential){
            return res.status(400).json({
                success: false,
                message: "Thiếu thông tin khởi tạo"
            })
        }
        const exsited = await Education.findOne({name})
        if(exsited){
            return res.status(400).json({
                success: false,
                message: `Tên trường ${name} đã tồn tại`
            })
        }
        const newEducation = await Education.create({
            name,slug,eduDesc,credential
        })
        if(newEducation){
            return res.status(200).json({
                success: true,
                message: `Tạo trường ${name} thành công`,
                data: newEducation
            })
        }
        return res.status(400).json({
            success: false,
            message: `Tạo trường ${name} thất bại`
        })
    }catch(error){
        console.log(error.message)
        return res.status(500).json({
            success: false,
            message: "Lỗi không xác định ở Server"
        })
    }
}

// Get all
export const getAllEducation = async (req,res) =>{
    try{    
        const listEducation = await Education.find()
        if(listEducation){
            return res.status(200).json({
                success: true,
                message: "Lấy danh sách thành công",
                data: listEducation
            })
        }
        return res.status(400).json({
            success: false,
            message: "Lấy danh sách thất bại"
        })

    }catch(error){
        console.log(error.message)
        return res.status(500).json({
            success: false,
            message:"Lỗi không xác định ở Server"
        })
    }
}

// Get By Id
export const getEducationById = async (req,res) =>{
    try{
        const {edu_id} = req.params
        const getOneEducation = await Education.findById(edu_id)
        if( getOneEducation){
            return res.status(200).json({
                success: true,
                message: ` Lấy ${getOneEducation.name} thành công`,
                data: getOneEducation
            })
        }
        return res.status(400).json({
            success: false,
            message: "Không tìm thấy danh mục theo Id",
            id: edu_id
        })
    }catch(error){
        console.log(error.message)
        return res.status(500).json({
            success: false,
            message: 'Lỗi không xác định ở Server'
        })
    }
}

// Update
export const updateEducation = async (req,res) =>{
    try{
        const {edu_id} = req.params
        const {name,slug,eduDesc,credential} = req.body
        const updateEducation = await Education.findByIdAndUpdate(edu_id,{name,slug,eduDesc,credential},{new:true})
        if(updateEducation){
            return res.status(200).json({
                success: true,
                message: `Cập nhật ${updateEducation.name} thành công`,
                data: updateEducation
            })
        }
        return res.status(400).json({
            success: false,
            message: `Cập nhật ${name} thất bại`
        })
    }catch(error){
        console.log(error.message)
        return res.status(500).json({
            success: false,
            message: "Lỗi không xác định ở Server"
        })
    }
}

// Delete
export const deleteEducation = async (req,res) =>{
    try{
        const {edu_id} = req.params
        const deleteEducation = await Education.findByIdAndDelete(edu_id)
        if(deleteEducation){
            return res.status(200).json({
                success: true,
                message: `Xóa ${deleteEducation.name} thành công`
            })
        }
        return res.status(400).json({
            success: false,
            message: "Không thể xóa học vấn",
            id: edu_id
        })
    }catch(error){
        console.log(error.message)
        return res.status(500).json({
            success: false,
            message: "Lỗi không xác đinh ở Server"
        })
    }
}