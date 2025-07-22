
const express = require('express');
const router = express.Router();
const discountController = require('../controllers/discountController');

// Route GET /api/discounts/ trả về danh sách discount
router.get('/', discountController.getAllDiscounts);

// Route GET /api/discounts/by-tour/:tourId trả về discount cho 1 tour cụ thể
router.get('/by-tour/:tourId', discountController.getDiscountByTourId);

module.exports = router;
