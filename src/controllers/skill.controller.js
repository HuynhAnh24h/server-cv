import Skill from "../models/Skill.js"

export const createSkill = async (req,res) =>{
    try{
        const {name,slug,skillProgressBar} = req.body
        const exitsted = await Skill.findOne({name})
        if(exitsted){
            return res.status(401).json({
                success: false,
                message: "Skill đã tồn tại"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Tạo kỹ năng thành công",
            data: exitsted
        })
    }catch(error){
        return res.status(500).json({
            success: false,
            message: "Lỗi không xác định ở Server"
        })
    }
}

export const getSkillById = async (req,res)=>{
    try{
        const {skill_id} = req.params
        const exitsted = await Skill.findById(skill_id)
        if(exitsted){
            return res.status(200).json({
                success: true,
                data: exitsted
            })
        }
        return res.status(400).json({
            success: false,
            message: "Skill không hợp lệ"
        })
    }catch(error){
        return res.status(500).json({
            success: false,
            message: "Lỗi không xác định ở Server"
        })
    }
}

export const getAllSkill = async (req,res)=>{
    try{
        const allSkill = await Skill.find()
        if(allSkill){
            return res.status(200).json({
                success: true,
                data: allSkill
            })
        }
        return res.status(400).json({
            success: false,
            message: "Không thể tải danh sách"
        })
    }catch(error){
        return res.status(500).json({
            success: false,
            message: "Lỗi không xác định ở Server"
        })
    }
}

export const updateSkill = async (req,res) =>{
    try{
        const {name,slug,skillProgressBar} = req.body
        const {skill_id} = req.params
        const updateSkill = await Skill.findByIdAndUpdate(skill_id,{name,slug,skillProgressBar},{new: true})
        if(updateSkill){
            return res.status(200).json({
                success: true,
                message:"Cập nhật Skill thành công",
                data: updateSkill
            })
        }
        return res.status(400).json({
            success: false,
            message: "Không thể cập nhật Skill"
        })
    }catch(error){
        return res.status(500).json({
            success: false,
            error: error.message,
            message: "Lỗi không xác định ở Server"
        })
    }
}

export const deleteSkill = async (req,res)=>{
    try{

    }catch(error){
        console.log("Log Error:",error.message)
        return res.status(5000).json({
            success: false,
            message: "Lỗi không xác định ở Server"
        })
    }
}