import User from "../models/User.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

export const createUser = async (req, res) => {
    try {
        const { userName, password, email, phone } = req.body
        const exitsted = await User.findOne({ email })
        if (exitsted) {
            return res.status(401).json({
                success: false,
                message: "Tài khoảng đã tồn tại"
            })
        }
        const newUser = await User.create({ userName, password, email, phone })
        // Convert document to plain object nếu dùng Mongoose
        const userObject = newUser.toObject();

        // Xoá trường password
        delete userObject.password;
        delete userObject.role;

        if (newUser) {
            return res.status(200).json({
                success: true,
                message: "Đăng ký tài khoản thành công",
                data: userObject,
            })
        }
        return res.status(402).json({
            success: false,
            message: "Tạo user không thành công"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Lỗi không xác định ở Server"
        })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        const SECRET_KEY = process.env.JWT_KEY
        if (!user) {
            return res.status(409).json({
                success: false,
                message: "Tài khoàn không tồn tại"
            })
        } else {
            const isPasswordMatch = await bcrypt.compare(password, user.password);
            if (!isPasswordMatch) {
                return res.status(401).json({ success: false, message: 'Mật khẩu không đúng' });
            }

             // Tạo payload cho Token
             const tokenPayload ={
                id: user.id,
                userName: user.userName,
                role: user.role
             } 
             const token = await jwt.sign(tokenPayload, SECRET_KEY, { expiresIn: '1d' })

             const userData = user.toObject()
             // Xoá trường password
                delete userData.password;
                delete userData.role;

             return res.status(200).json({
                success: true,
                message: "Đăng nhập thành công",
                token: token,
                data: userData
             })
        }
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            success: false,
            message: "Lỗi không xác định ở Server"
        })
    }
}