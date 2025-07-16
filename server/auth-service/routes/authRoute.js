const express = require('express');
const router = express.Router();
const {CreateAccount, LoginAccount, getCustomerByEmail, updateCustomerInfo, checkEmailExists, verifyEmail} = require('../controllers/authController')

router.post('/createaccount',CreateAccount);
router.post('/login',LoginAccount);
router.get('/customer', getCustomerByEmail);
router.post('/customer/update', updateCustomerInfo);
router.put('/customer/update', require('../controllers/authController').updateCustomerPut);
router.patch('/customer/update', require('../controllers/authController').updateCustomerPatch);
router.patch('/reset-password', require('../controllers/authController').resetPassword);
router.post('/checkemail', checkEmailExists);
router.get('/verify', verifyEmail);
router.post('/request-reset-otp', require('../controllers/authController').requestResetOtp);
router.post('/verify-reset-otp', require('../controllers/authController').verifyResetOtp);


module.exports = router;