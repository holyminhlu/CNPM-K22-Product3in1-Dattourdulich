
const express = require('express');
const router = express.Router();
const { getAllTours, getTourById, getToursByType } = require('../controllers/tourController');

// Route để lấy tất cả các tour
router.get('/', getAllTours);

// Route để lấy một tour cụ thể bằng tour_id
router.get('/:tour_id', getTourById);

// Route để lấy tour theo loại
router.get('/type/:type', getToursByType);

module.exports = router;