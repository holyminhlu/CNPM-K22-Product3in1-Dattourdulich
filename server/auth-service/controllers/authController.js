const CreateAccount = require('../models/authModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const NodeCache = require('node-cache');
const otpCache = new NodeCache({ stdTTL: 300 }); // TTL 5 phút

exports.CreateAccount = async (req, res) => {
    try {
        const { fullName, email, passWord } = req.body;

        // Kiểm tra email đã tồn tại chưa
        const existing = await CreateAccount.findOne({ email });
        if (existing) {
            return res.status(400).json({ message: 'Email đã tồn tại!' });
        }

        // Băm password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(passWord, salt);

        // Sinh token xác thực chứa thông tin user
        const token = jwt.sign(
            { fullName, email, passWord: hashedPassword },
            'your_secret_key',
            { expiresIn: '1d' }
        );

        // Gửi email xác thực
        const verifyUrl = `http://localhost:3000/api/auth/verify?token=${token}`;
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'cheaptriptravelsp@gmail.com',
                pass: 'qwnizhwwxasikeri'
            }
        });

        await transporter.sendMail({
            from: '"CheapTrip" <cheaptriptravelsp@gmail.com>',
            to: email,
            subject: 'Xác thực tài khoản CheapTrip',
            html: `<p>Nhấn vào nút bên dưới để xác thực tài khoản:</p>
                   <a href="${verifyUrl}" style="padding:10px 20px;background:#FF6200;color:#fff;text-decoration:none;border-radius:5px;">Xác nhận tài khoản</a>`
        });

        res.status(201).json({ message: 'Vui lòng kiểm tra email để xác nhận tài khoản!' });
    } catch (error) {
        console.log('Lỗi tạo tài khoản: ', error);
        res.status(500).json({ error: 'Đã có lỗi xảy ra' });
    }
};

exports.checkEmailExists = async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ exists: false, message: 'Thiếu email để kiểm tra' });
        }

        const user = await CreateAccount.findOne({ email });

        if (user) {
            return res.status(200).json({ exists: true, message: 'Email đã tồn tại' });
        }

        return res.status(200).json({ exists: false });
    } catch (error) {
        console.error('Lỗi kiểm tra email:', error);
        return res.status(500).json({ exists: false, message: 'Lỗi máy chủ khi kiểm tra email' });
    }
};


exports.LoginAccount = async (req, res) => {
    console.log('BODY LOGIN:', req.body); // Thêm log để debug
    try {
        const { email, passWord } = req.body;
        // Tìm user theo email
        const user = await CreateAccount.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: 'Email hoặc mật khẩu không đúng' });
        }
        // So sánh mật khẩu (nếu đã hash)
        const isMatch = await bcrypt.compare(passWord, user.passWord);
        if (!isMatch) {
            return res.status(401).json({ error: 'Email hoặc mật khẩu không đúng' });
        }
        // Đăng nhập thành công
        // Sinh token nếu muốn (ví dụ dùng JWT)
        const token = jwt.sign({ email: user.email, id: user._id }, 'your_secret_key', { expiresIn: '1d' });
        res.status(200).json({
            success: true,
            message: 'Đăng nhập thành công!',
            user: {
                id: user._id,
                fullName: user.fullName,
                email: user.email,
            },
            token
        });
    } catch (error) {
        res.status(500).json({ error: 'Đã có lỗi xảy ra khi đăng nhập' });
    }
}

exports.getCustomerByEmail = async (req, res) => {
    try {
        const { email } = req.query;
        if (!email) return res.status(400).json({ error: 'Email is required' });
        const user = await CreateAccount.findOne({ email });
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.json({
            fullName: user.fullName,
            email: user.email,
            phone: user.phone || '',
            address: user.address || '',
            gender: user.gender || ''
        });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.updateCustomerInfo = async (req, res) => {
    try {
        const { email, phone, address, gender } = req.body;
        if (!email) return res.status(400).json({ error: 'Email is required' });
        const user = await CreateAccount.findOneAndUpdate(
            { email },
            { phone, address, gender },
            { new: true }
        );
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.json({ message: 'Cập nhật thông tin thành công', user });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// PUT: Cập nhật toàn bộ thông tin
exports.updateCustomerPut = async (req, res) => {
  const { email, phone, address, gender } = req.body;
  if (!email || !phone || !address || !gender) {
    return res.status(400).json({ message: 'Thiếu thông tin cập nhật!' });
  }
  try {
    const user = await CreateAccount.findOneAndUpdate(
      { email },
      { phone, address, gender },
      { new: true }
    );
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'Cập nhật thông tin thành công (PUT)', user });
  } catch (err) {
    res.status(500).json({ message: 'Lỗi cập nhật!', error: err.message });
  }
};

// PATCH: Cập nhật một phần thông tin
exports.updateCustomerPatch = async (req, res) => {
  const { email, ...fieldsToUpdate } = req.body;
  if (!email || Object.keys(fieldsToUpdate).length === 0) {
    return res.status(400).json({ message: 'Thiếu thông tin cập nhật!' });
  }
  try {
    const user = await CreateAccount.findOneAndUpdate(
      { email },
      { $set: fieldsToUpdate },
      { new: true }
    );
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'Cập nhật thông tin thành công (PATCH)', user });
  } catch (err) {
    res.status(500).json({ message: 'Lỗi cập nhật!', error: err.message });
  }
};

// Gửi OTP về email khi quên mật khẩu
exports.requestResetOtp = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: 'Thiếu email.' });
    const user = await CreateAccount.findOne({ email });
    if (!user) return res.status(404).json({ message: 'Không tìm thấy tài khoản với email này.' });
    // Sinh OTP 6 số
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    otpCache.set(email, otp);
    // Gửi OTP qua email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'cheaptriptravelsp@gmail.com',
        pass: 'qwnizhwwxasikeri'
      }
    });
    await transporter.sendMail({
      from: 'CheapTrip <cheaptriptravelsp@gmail.com>',
      to: email,
      subject: 'Mã OTP đặt lại mật khẩu CheapTrip',
      html: `<p>Mã OTP của bạn là: <b>${otp}</b>. Mã có hiệu lực trong 5 phút.</p>`
    });
    res.json({ message: 'Đã gửi OTP về email!' });
  } catch (err) {
    res.status(500).json({ message: 'Lỗi gửi OTP!', error: err.message });
  }
};

// Xác thực OTP
exports.verifyResetOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp) return res.status(400).json({ message: 'Thiếu email hoặc OTP.' });
    const cachedOtp = otpCache.get(email);
    if (!cachedOtp) return res.status(400).json({ message: 'OTP đã hết hạn hoặc không tồn tại.' });
    if (cachedOtp !== otp) return res.status(400).json({ message: 'OTP không đúng.' });
    res.json({ message: 'OTP hợp lệ!' });
  } catch (err) {
    res.status(500).json({ message: 'Lỗi xác thực OTP!', error: err.message });
  }
};

// PATCH: Đổi mật khẩu khi quên mật khẩu (có OTP)
exports.resetPassword = async (req, res) => {
  try {
    const { email, newPassword, otp } = req.body;
    if (!email || !newPassword || !otp) {
      return res.status(400).json({ message: 'Thiếu email, mật khẩu mới hoặc OTP.' });
    }
    const cachedOtp = otpCache.get(email);
    if (!cachedOtp) return res.status(400).json({ message: 'OTP đã hết hạn hoặc không tồn tại.' });
    if (cachedOtp !== otp) return res.status(400).json({ message: 'OTP không đúng.' });
    const user = await CreateAccount.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'Không tìm thấy tài khoản với email này.' });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    user.passWord = hashedPassword;
    await user.save();
    otpCache.del(email); // Xóa OTP sau khi đổi mật khẩu thành công
    res.json({ message: 'Đổi mật khẩu thành công!' });
  } catch (err) {
    res.status(500).json({ message: 'Lỗi đổi mật khẩu!', error: err.message });
  }
};

exports.verifyEmail = async (req, res) => {
    let { token } = req.query;
    try {
        // Giải mã token nếu bị encode
        token = decodeURIComponent(token || '');
        const decoded = jwt.verify(token, 'your_secret_key');
        const { fullName, email, passWord } = decoded;

        // Kiểm tra email đã tồn tại chưa
        const existing = await CreateAccount.findOne({ email });
        if (existing) {
            return res.send('Email đã được đăng ký!');
        }

        // Lưu user vào DB
        const newAccount = new CreateAccount({ fullName, email, passWord });
        await newAccount.save();

        res.send('Đăng ký thành công! Bạn có thể đăng nhập.');
    } catch (err) {
        console.error('Lỗi xác thực email:', err);
        if (err.name === 'TokenExpiredError') {
            return res.status(400).send('Token đã hết hạn. Vui lòng đăng ký lại.');
        }
        if (err.name === 'JsonWebTokenError') {
            return res.status(400).send('Token không hợp lệ.');
        }
        res.status(400).send('Token không hợp lệ hoặc đã hết hạn.');
    }
};