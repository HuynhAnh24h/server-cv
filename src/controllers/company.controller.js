import Company from "../models/Company.js"

// Create
export const createCompany = async (req, res) => {
    try {
        const { name,
            slug,
            managerName,
            managerPhone,
            webCompaney,
            faceBook
        } = req.body
        const existed = await Company.findOne({ name })
        if (existed) {
            return res.status(400).json({
                success: false,
                message: `Công ty ${name} đã tồn tại`
            })
        }
        const createCompany = await Company.create({
            name,
            slug,
            managerName,
            managerPhone,
            webCompaney,
            faceBook
        })
        return res.status(200).json({
            success: true,
            message: "Thêm công ty thành công",
            data: createCompany
        })
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            success: false,
            message: "Lỗi không xác định ở Server"
        })
    }
}

// Get All
export const getAllCompany = async (req, res) => {
    try {
        const listCompany = await Company.find()
        if (listCompany) {
            return res.status(200).json({
                success: true,
                message: "Lấy danh sách thành công",
                data: listCompany
            })
        }
        return res.status(400).json({
            success: false,
            message: "Lấy danh sách thất bại"
        })
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            success: false,
            message: "Lỗi không xác định ở Server"
        })
    }
}

// Get by Id
export const getCompanyById = async (req, res) => {
    try {
        const { company_id } = req.params
        const findCompany = await Company.findById(company_id)
        if (findCompany) {
            return res.status(200).json({
                success: true,
                message: "Lấy Công ty thành công",
                data: findCompany
            })
        }
        return res.status(400).json({
            success: false,
            message: "Không thể lấy Company"
        })
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            success: false,
            message: "Lỗi không xác định ở Server"
        })
    }
}

// Update Company
export const updateCompany = async () => {
    try {
        const { company_id } = req.params
        const { name,
            slug,
            managerName,
            managerPhone,
            webCompaney,
            faceBook
        } = req.body
        const updateCompany = await Company.findByIdAndUpdate(company_id,{ name,
            slug,
            managerName,
            managerPhone,
            webCompaney,
            faceBook}, {new: true})
        if (updateCompany){
            return res.status(200).json({
                success: true,
                message: `Ca65p nhật công ty ${updateCompany.name} thành công`,
                data: updateCompany
            })
        }
        return res.status(400).json({
            success: false,
            message: ` Cập nhật công ty ${name} thất bại `
        })
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            success: false,
            message: "Lỗi không xác định ở Server"
        })
    }
}

// Delete 
export const deleteCompany = async (req,res) =>{
    try{
        const {company_id} = req.params
        const deleteCompany = await Company.findByIdAndDelete(company_id)
        if(deleteCompany){
            return res.status(200).json({
                success: true,
                message: `Xóa công ty ${deleteCompany.name} thành công`
            })
        }
    }catch(error){
        console.log(error.message)
        return res.status(500).json({
            success: false,
            message: "Lỗi không xác định ở Server"
        })
    }
}