import Service from "../models/Services.js";

// Create
export const createService = async (req, res) => {
  try {
    const { name, slug } = req.body;
    if (!name || !slug) {
      return res.status(400).json({
        success: false,
        message: "Thiếu thông tin tên hoặc slug dịch vụ"
      });
    }

    const existedService = await Service.findOne({ name });
    if (existedService) {
      return res.status(400).json({
        success: false,
        message: `Dịch vụ '${name}' đã tồn tại`
      });
    }

    const newService = await Service.create({ name, slug });
    return res.status(200).json({
      success: true,
      message: "Tạo dịch vụ thành công",
      data: newService
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      success: false,
      message: "Lỗi không xác định ở Server"
    });
  }
};

// Get All
export const getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    return res.status(200).json({
      success: true,
      message: "Lấy danh sách dịch vụ thành công",
      data: services
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      success: false,
      message: "Lỗi không xác định ở Server"
    });
  }
};

// Get by ID
export const getServiceById = async (req, res) => {
  try {
    const { service_id } = req.params;
    const service = await Service.findById(service_id);
    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Không tìm thấy dịch vụ",
        id: service_id
      });
    }

    return res.status(200).json({
      success: true,
      message: `Lấy dịch vụ '${service.name}' thành công`,
      data: service
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      success: false,
      message: "Lỗi không xác định ở Server"
    });
  }
};

// Update
export const updateService = async (req, res) => {
  try {
    const { service_id } = req.params;
    const { name, slug } = req.body;
    const updatedService = await Service.findByIdAndUpdate(
      service_id,
      { name, slug },
      { new: true }
    );

    if (!updatedService) {
      return res.status(400).json({
        success: false,
        message: `Cập nhật dịch vụ '${name}' thất bại`
      });
    }

    return res.status(200).json({
      success: true,
      message: `Cập nhật dịch vụ '${updatedService.name}' thành công`,
      data: updatedService
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      success: false,
      message: "Lỗi không xác định ở Server"
    });
  }
};

// Delete
export const deleteService = async (req, res) => {
  try {
    const { service_id } = req.params;
    const deletedService = await Service.findByIdAndDelete(service_id);

    if (!deletedService) {
      return res.status(400).json({
        success: false,
        message: "Không thể xóa dịch vụ",
        id: service_id
      });
    }

    return res.status(200).json({
      success: true,
      message: `Xóa dịch vụ '${deletedService.name}' thành công`
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      success: false,
      message: "Lỗi không xác định ở Server"
    });
  }
};
