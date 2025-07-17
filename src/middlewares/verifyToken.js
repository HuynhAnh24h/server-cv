import jwt from "jsonwebtoken"

export const verifyToken = (req, res, next) => {
  try {
    // 🔎 Kiểm tra header Authorization
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Không có token hoặc token sai định dạng",
      })
    }

    // 🧨 Tách token ra khỏi "Bearer xxx"
    const token = authHeader.split(" ")[1]
    const SECRET_KEY = process.env.JWT_KEY

    // ✅ Giải mã token
    const decoded = jwt.verify(token, SECRET_KEY)

    // 🧠 Gắn payload vào req
    req.user = decoded

    next()
  } catch (err) {
    console.error("⚠️ Token error:", err.message)
    return res.status(403).json({
      success: false,
      message: "Token không hợp lệ hoặc đã hết hạn",
    })
  }
}