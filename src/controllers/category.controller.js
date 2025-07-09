import CategoryBlog from "../models/CategoryBlog.js";
import CategoryProject from "../models/CategoryProject.js";

// === CONTROLLER CATEGORY BLOG ===

// Create
export const createCteBlog = async (req, res) => {
    try {
        const { name, slug } = req.body;
        const existed = await CategoryBlog.findOne({ name });
        if (existed) {
            return res.status(400).json({
                success: false,
                message: "Danh mục Blog đã tồn tại",
            });
        }
        const newCategory = await CategoryBlog.create({ name, slug });
        return res.status(201).json({
            success: true,
            message: `Tạo danh mục ${name} thành công`,
            data: newCategory,
        });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            success: false,
            message: "Lỗi không xác định ở Server",
        });
    }
};

// Get By ID
export const getCteBlogById = async (req, res) => {
    try {
        const { cte_blog_id } = req.params;
        const categoryBlog = await CategoryBlog.findById(cte_blog_id);
        if (!categoryBlog) {
            return res.status(404).json({
                success: false,
                message: "Không tìm thấy danh mục",
            });
        }
        return res.status(200).json({
            success: true,
            data: categoryBlog,
        });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            success: false,
            message: "Lỗi không xác định ở Server",
        });
    }
};

// Get All
export const getAllCteBlog = async (req, res) => {
    try {
        const listCategoryBlog = await CategoryBlog.find();
        return res.status(200).json({
            success: true,
            data: listCategoryBlog,
        });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            success: false,
            message: "Lỗi không xác định ở Server",
        });
    }
};

// Update
export const updateCteBlog = async (req, res) => {
    try {
        const { name, slug, image } = req.body;
        const { cte_blog_id } = req.params;
        const updatedCategory = await CategoryBlog.findByIdAndUpdate(
            cte_blog_id,
            { name, slug, image },
            { new: true }
        );
        if (!updatedCategory) {
            return res.status(404).json({
                success: false,
                message: "Không tìm thấy danh mục để cập nhật",
            });
        }
        return res.status(200).json({
            success: true,
            message: `Danh mục ${name} đã được cập nhật`,
            data: updatedCategory,
        });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            success: false,
            message: "Lỗi không xác định ở Server",
        });
    }
};

// Delete
export const deleteCteBlog = async (req, res) => {
    try {
        const { cte_blog_id } = req.params;
        const deletedCategory = await CategoryBlog.findByIdAndDelete(cte_blog_id);
        if (!deletedCategory) {
            return res.status(404).json({
                success: false,
                message: "Không tìm thấy danh mục để xóa",
            });
        }
        return res.status(200).json({
            success: true,
            message: `Xóa danh mục ${deletedCategory.name} thành công`,
            data: deletedCategory,
        });
    } catch (error) {
        console.error("Log Error:", error.message);
        return res.status(500).json({
            success: false,
            message: "Lỗi không xác định ở Server",
        });
    }
};

// === CONTROLLER CATEGORY PROJECT ===

// Create
export const createCteProject = async (req, res) => {
    try {
        const { name, slug } = req.body;
        const existed = await CategoryProject.findOne({ name });
        if (existed) {
            return res.status(400).json({
                success: false,
                message: `Danh mục ${name} đã tồn tại`,
            });
        }
        const newCategory = await CategoryProject.create({ name, slug });
        return res.status(201).json({
            success: true,
            message: `Danh mục ${name} đã được tạo`,
            data: newCategory,
        });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            success: false,
            message: "Lỗi không xác định ở Server",
        });
    }
};

// Get By ID
export const getCteProjectById = async (req, res) => {
    try {
        const { cte_project_id } = req.params;
        const category = await CategoryProject.findById(cte_project_id);
        if (!category) {
            return res.status(404).json({
                success: false,
                message: `Không tìm thấy danh mục ${cte_project_id}`,
            });
        }
        return res.status(200).json({
            success: true,
            data: category,
        });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            success: false,
            message: "Lỗi không xác định ở Server",
        });
    }
};

// Get All
export const getAllCteProject = async (req, res) => {
    try {
        const listCategoryProject = await CategoryProject.find();
        return res.status(200).json({
            success: true,
            message: "Lấy danh mục thành công",
            data: listCategoryProject,
        });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            success: false,
            message: "Không thể tải danh sách",
        });
    }
};

// Update
export const updateCteProject = async (req, res) => {
    try {
        const { name, slug, image } = req.body;
        const { cte_project_id } = req.params;
        const updatedCategory = await CategoryProject.findByIdAndUpdate(
            cte_project_id,
            { name, slug, image },
            { new: true }
        );
        if (!updatedCategory) {
            return res.status(404).json({
                success: false,
                message: "Cập nhật thất bại, vui lòng kiểm tra lại ID",
            });
        }
        return res.status(200).json({
            success: true,
            message: `Cập nhật danh mục ${name} thành công`,
            data: updatedCategory,
        });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            success: false,
            message: "Lỗi không xác định ở Server",
        });
    }
};

// Delete
export const deleteCteProject = async (req, res) => {
    try {
        const { cte_project_id } = req.params;
        const deletedCategory = await CategoryProject.findByIdAndDelete(cte_project_id);
        if (!deletedCategory) {
            return res.status(404).json({
                success: false,
                message: "Không thể xóa, kiểm tra lại ID",
            });
        }
        return res.status(200).json({
            success: true,
            message: `Xóa danh mục ${deletedCategory.name} thành công`,
            data: deletedCategory,
        });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            success: false,
            message: "Lỗi không xác định ở Server",
        });
    }
};
