const express = require('express');
const router = express.Router();

const toursProxy = require('./toursProxy');
const authProxy = require('./authProxy');
 const bookingProxy = require('./bookingProxy'); // Đã mount ở index.js, không cần ở đây
const discountsProxy = require('./discountsProxy');
const ratingProxy = require('./ratingProxy');

router.use('/auth', authProxy);         // ✅ Dùng biến đã require
router.use('/tours', toursProxy);
router.use('/bookings', bookingProxy); // Đã mount ở index.js, không cần ở đây
router.use('/discounts', discountsProxy);
router.use('/rating', ratingProxy);

module.exports = router;
