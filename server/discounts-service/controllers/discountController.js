const Discount = require('../models/discountModel');

// Lấy tất cả các discounts
exports.getAllDiscounts = async (req, res) => {
    try {
        const discountsFromDb = await Discount.find({});
        
        // Chuyển đổi dữ liệu để frontend dễ sử dụng hơn
        const discounts = discountsFromDb.map(doc => {
            const discountObject = doc.toObject(); // Chuyển Mongoose doc thành object thuần
            // Ghi đè trường discount_percent bằng một con số đơn giản
            return {
                ...discountObject,
                discount_percent: discountObject.discount_percent ? parseFloat(discountObject.discount_percent.toString()) : undefined
            };
        });

        res.status(200).json(discounts);
    } catch (error) {
        console.error("Lỗi khi lấy dữ liệu discount:", error);
        res.status(500).json({ message: "Đã có lỗi xảy ra ở phía server." });
    }
};

// Lấy discount theo tour_id
exports.getDiscountByTourId = async (req, res) => {
    try {
        const { tourId } = req.params;
        // Sửa lại để hỗ trợ tour_id là mảng
        const discountFromDb = await Discount.findOne({ tour_id: { $in: [tourId] } });

        if (!discountFromDb) {
            // Không tìm thấy discount, trả về null để frontend biết
            return res.status(200).json(null);
        }

        // Chuyển đổi dữ liệu trước khi gửi đi
        const discountObject = discountFromDb.toObject();
        const discount = {
            ...discountObject,
            discount_percent: discountObject.discount_percent ? parseFloat(discountObject.discount_percent.toString()) : undefined
        };

        res.status(200).json(discount);

    } catch (error) {
        console.error("Lỗi khi lấy dữ liệu discount theo tour_id:", error);
        res.status(500).json({ message: "Đã có lỗi xảy ra ở phía server." });
    }
};
