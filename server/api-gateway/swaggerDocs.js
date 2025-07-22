/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - fullName
 *         - email
 *         - passWord
 *       properties:
 *         fullName:
 *           type: string
 *           example: "Nguyễn Văn A"
 *         email:
 *           type: string
 *           format: email
 *           example: "user@example.com"
 *         passWord:
 *           type: string
 *           example: "Password123@"
 *     Customer:
 *       type: object
 *       properties:
 *         fullName:
 *           type: string
 *           example: "Nguyễn Văn A"
 *         email:
 *           type: string
 *           format: email
 *           example: "user@example.com"
 *         phone:
 *           type: string
 *           example: "0123456789"
 *         address:
 *           type: string
 *           example: "123 Đường ABC, Quận 1, TP.HCM"
 *         gender:
 *           type: string
 *           example: "Nam"
 *     Booking:
 *       type: object
 *       required:
 *         - tour_id
 *         - email
 *         - adult
 *         - departure_date
 *         - total_amount
 *       properties:
 *         tour_id:
 *           type: string
 *           example: "T001"
 *         email:
 *           type: string
 *           format: email
 *           example: "user@example.com"
 *         adult:
 *           type: number
 *           example: 2
 *         children:
 *           type: number
 *           example: 1
 *         departure_date:
 *           type: string
 *           format: date
 *           example: "2024-02-15"
 *         total_amount:
 *           type: number
 *           example: 1500000
 *     Tour:
 *       type: object
 *       properties:
 *         tour_id:
 *           type: string
 *           example: "T001"
 *         name:
 *           type: string
 *           example: "Tour Đà Lạt 3 ngày 2 đêm"
 *         price:
 *           type: number
 *           example: 1500000
 *         type:
 *           type: string
 *           example: "tour_thuong"
 *     Discount:
 *       type: object
 *       properties:
 *         discount_id:
 *           type: string
 *           example: "D001"
 *         tour_id:
 *           type: string
 *           example: "T001"
 *         discount_percent:
 *           type: number
 *           example: 10
 */

/**
 * @swagger
 * /auth/createaccount:
 *   post:
 *     summary: Tạo tài khoản mới
 *     description: Đăng ký tài khoản mới và gửi email xác thực
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Tạo tài khoản thành công, vui lòng kiểm tra email
 *       400:
 *         description: Email đã tồn tại
 *       500:
 *         description: Lỗi server
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Đăng nhập
 *     description: Đăng nhập vào hệ thống
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - passWord
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "user@example.com"
 *               passWord:
 *                 type: string
 *                 example: "Password123@"
 *     responses:
 *       200:
 *         description: Đăng nhập thành công
 *       401:
 *         description: Email hoặc mật khẩu không đúng
 */

/**
 * @swagger
 * /auth/customer:
 *   get:
 *     summary: Lấy thông tin customer
 *     description: Lấy thông tin chi tiết của customer theo email
 *     tags: [Auth]
 *     parameters:
 *       - in: query
 *         name: email
 *         required: true
 *         schema:
 *           type: string
 *           format: email
 *         example: "user@example.com"
 *     responses:
 *       200:
 *         description: Thông tin customer
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Customer'
 *       400:
 *         description: Thiếu email
 *       404:
 *         description: Không tìm thấy customer
 */

/**
 * @swagger
 * /auth/customer/update:
 *   put:
 *     summary: Cập nhật thông tin customer (PUT)
 *     description: Cập nhật thông tin cá nhân của customer
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Customer'
 *     responses:
 *       200:
 *         description: Cập nhật thành công
 *       400:
 *         description: Dữ liệu không hợp lệ
 *       404:
 *         description: Không tìm thấy customer
 */

/**
 * @swagger
 * /auth/customer/update:
 *   patch:
 *     summary: Cập nhật thông tin customer (PATCH)
 *     description: Cập nhật một phần thông tin của customer
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Customer'
 *     responses:
 *       200:
 *         description: Cập nhật thành công
 *       400:
 *         description: Dữ liệu không hợp lệ
 *       404:
 *         description: Không tìm thấy customer
 */

/**
 * @swagger
 * /auth/request-reset-otp:
 *   post:
 *     summary: Yêu cầu OTP reset mật khẩu
 *     description: Gửi OTP về email để reset mật khẩu
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "user@example.com"
 *     responses:
 *       200:
 *         description: Đã gửi OTP về email
 *       404:
 *         description: Email không tồn tại
 */

/**
 * @swagger
 * /auth/verify-reset-otp:
 *   post:
 *     summary: Xác thực OTP reset mật khẩu
 *     description: Xác thực OTP để reset mật khẩu
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - otp
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "user@example.com"
 *               otp:
 *                 type: string
 *                 example: "123456"
 *     responses:
 *       200:
 *         description: OTP hợp lệ
 *       400:
 *         description: OTP không đúng
 */

/**
 * @swagger
 * /auth/reset-password:
 *   patch:
 *     summary: Reset mật khẩu
 *     description: Đổi mật khẩu sau khi xác thực OTP
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - newPassword
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "user@example.com"
 *               newPassword:
 *                 type: string
 *                 example: "NewPassword123@"
 *     responses:
 *       200:
 *         description: Reset mật khẩu thành công
 *       400:
 *         description: Dữ liệu không hợp lệ
 */

/**
 * @swagger
 * /auth/checkemail:
 *   post:
 *     summary: Kiểm tra email đã tồn tại
 *     description: Kiểm tra xem email đã được đăng ký chưa
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "user@example.com"
 *     responses:
 *       200:
 *         description: Kết quả kiểm tra
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 exists:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Email đã tồn tại"
 */

/**
 * @swagger
 * /auth/verify:
 *   get:
 *     summary: Xác thực email
 *     description: Xác thực email khi đăng ký tài khoản
 *     tags: [Auth]
 *     parameters:
 *       - in: query
 *         name: token
 *         required: true
 *         schema:
 *           type: string
 *         description: Token xác thực từ email
 *     responses:
 *       200:
 *         description: Xác thực thành công
 *       400:
 *         description: Token không hợp lệ
 */

/**
 * @swagger
 * /bookings:
 *   post:
 *     summary: Tạo booking mới
 *     description: Tạo booking mới cho tour
 *     tags: [Bookings]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Booking'
 *     responses:
 *       201:
 *         description: Tạo booking thành công
 *       400:
 *         description: Dữ liệu không hợp lệ
 */

/**
 * @swagger
 * /bookings/{email}:
 *   get:
 *     summary: Lấy booking theo email
 *     description: Lấy tất cả booking của user theo email
 *     tags: [Bookings]
 *     parameters:
 *       - in: path
 *         name: email
 *         required: true
 *         schema:
 *           type: string
 *           format: email
 *         example: "user@example.com"
 *     responses:
 *       200:
 *         description: Danh sách booking
 *       400:
 *         description: Thiếu email
 */

/**
 * @swagger
 * /bookings/{booking_id}:
 *   delete:
 *     summary: Xóa booking
 *     description: Xóa booking chỉ khi chưa thanh toán và chưa bị hủy
 *     tags: [Bookings]
 *     parameters:
 *       - in: path
 *         name: booking_id
 *         required: true
 *         schema:
 *           type: string
 *         example: "B001"
 *     responses:
 *       200:
 *         description: Xóa booking thành công
 *       400:
 *         description: Không thể xóa booking
 *       404:
 *         description: Không tìm thấy booking
 */

/**
 * @swagger
 * /tours:
 *   get:
 *     summary: Lấy tất cả tours
 *     description: Lấy danh sách tất cả tours
 *     tags: [Tours]
 *     responses:
 *       200:
 *         description: Danh sách tours
 */

/**
 * @swagger
 * /tours/{tour_id}:
 *   get:
 *     summary: Lấy thông tin tour theo ID
 *     description: Lấy thông tin chi tiết của tour theo ID
 *     tags: [Tours]
 *     parameters:
 *       - in: path
 *         name: tour_id
 *         required: true
 *         schema:
 *           type: string
 *         example: "T001"
 *     responses:
 *       200:
 *         description: Thông tin tour
 *       404:
 *         description: Không tìm thấy tour
 */

/**
 * @swagger
 * /tours/type/tour_thuong:
 *   get:
 *     summary: Lấy tours thường
 *     description: Lấy danh sách tours thường (tour cá nhân, nhóm nhỏ)
 *     tags: [Tours]
 *     responses:
 *       200:
 *         description: Danh sách tours thường
 */

/**
 * @swagger
 * /tours/type/tour_doan:
 *   get:
 *     summary: Lấy tours đoàn
 *     description: Lấy danh sách tours đoàn (tour cá nhân, nhóm nhỏ)
 *     tags: [Tours]
 *     responses:
 *       200:
 *         description: Danh sách tours đoàn
 */

/**
 * @swagger
 * /discounts:
 *   get:
 *     summary: Lấy tất cả discounts
 *     description: Lấy danh sách tất cả discounts
 *     tags: [Discounts]
 *     responses:
 *       200:
 *         description: Danh sách discounts
 */

/**
 * @swagger
 * /discounts/by-tour/{tour_id}:
 *   get:
 *     summary: Lấy discount cho tour
 *     description: Lấy discount cho tour cụ thể
 *     tags: [Discounts]
 *     parameters:
 *       - in: path
 *         name: tour_id
 *         required: true
 *         schema:
 *           type: string
 *         example: "T001"
 *     responses:
 *       200:
 *         description: Thông tin discount
 *       404:
 *         description: Không tìm thấy discount
 */