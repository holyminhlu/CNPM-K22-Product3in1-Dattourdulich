const Tour = require('../models/tourModel');

// Lấy tất cả các tour
exports.getAllTours = async (req, res) => {
    try {
        const tours = await Tour.find({});
        res.status(200).json(tours);
    } catch (error) {
        console.error("Lỗi khi lấy dữ liệu tour:", error);
        res.status(500).json({ message: "Đã có lỗi xảy ra ở phía server." });
    }
};

// Lấy một tour theo tour_id
exports.getTourById = async (req, res) => {
    try {
        const tour = await Tour.findOne({ tour_id: req.params.tour_id });
        if (!tour) {
            return res.status(404).json({ message: "Không tìm thấy tour." });
        }
        res.status(200).json(tour);
    } catch (error) {
        console.error("Lỗi khi lấy dữ liệu tour:", error);
        res.status(500).json({ message: "Đã có lỗi xảy ra ở phía server." });
    }
};

// Get tours by type
exports.getToursByType = async (req, res) => {
  try {
    const tourType = req.params.type;
    const tours = await Tour.find({ type: tourType });
    if (!tours || tours.length === 0) {
      return res.status(404).json({ message: 'No tours found for this type' });
    }
    res.json(tours);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}; 