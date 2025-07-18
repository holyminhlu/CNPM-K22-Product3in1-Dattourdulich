const Booking = require('../models/bookingModel');
const axios = require('axios');
const Bill = require('../models/billModel');

// Hàm tạo booking_id duy nhất
async function generateBookingId() {
  try {
    const lastBooking = await Booking.findOne().sort({ time_booking: -1 });
    if (lastBooking && lastBooking.booking_id) {
      const lastId = parseInt(lastBooking.booking_id.substring(1));
      return 'B' + (lastId + 1).toString().padStart(3, '0');
    } else {
      return 'B001';
    }
  } catch (error) {
    console.error('Error generating booking ID:', error);
    // Trong trường hợp có lỗi, tạo một ID dựa trên timestamp để đảm bảo tính duy nhất
    return 'B' + Date.now().toString().slice(-6);
  }
}

// Hàm tạo bill_id duy nhất
async function generateBillId() {
  try {
    const lastBill = await Bill.findOne().sort({ created_at: -1 });
    if (lastBill && lastBill.bill_id) {
      const lastId = parseInt(lastBill.bill_id.substring(1));
      return 'L' + (lastId + 1).toString().padStart(3, '0');
    } else {
      return 'L001';
    }
  } catch (error) {
    return 'L' + Date.now().toString().slice(-6);
  }
}

// Tạo một booking mới
exports.createBooking = async (req, res) => {
  try {
    console.log('Bắt đầu nhận booking:', req.body);
    // Hỗ trợ cả hai kiểu tên trường từ FE và Postman
    const tour_id = req.body.tour_id;
    const email = req.body.email;
    const adult = req.body.adult || req.body.numberOfAdults;
    const children = req.body.children || req.body.numberOfChildren || 0;
    const note = req.body.note || req.body.notes || '';
    const departure_date = req.body.departure_date || req.body.departureDate;
    const total_amount = req.body.total_amount || req.body.totalPrice;
    console.log('Mapping xong:', { tour_id, email, adult, children, note, departure_date, total_amount });

    // Validate input cơ bản
    if (!tour_id || !email || !adult || !departure_date || !total_amount) {
      console.log('Thiếu trường bắt buộc');
      return res.status(400).json({ message: 'Vui lòng cung cấp đủ thông tin cần thiết.' });
    }

    const booking_id = await generateBookingId();
    console.log('Tạo booking_id:', booking_id);

    const newBooking = new Booking({
      booking_id,
      tour_id,
      email,
      adult,
      children,
      note,
      departure_date,
      total_amount,
    });

    await newBooking.save();
    console.log('Đã lưu booking thành công');

    // Tạo bill mới
    const bill_id = await generateBillId();
    const newBill = new Bill({
      bill_id,
      created_at: new Date().toISOString(),
      status: 'pending',
      tour_id: newBooking.tour_id,
      adult: newBooking.adult,
      child: newBooking.children,
      customer_email: newBooking.email,
      customer_name: newBooking.fullName || '',
      customer_phone: newBooking.phone || '',
      departure_date: newBooking.departure_date,
      total_amount: newBooking.total_amount,
      tour_name: newBooking.tour_name || '',
      // Các trường khác nếu cần
    });
    await newBill.save();
    console.log('Đã tạo bill thành công:', newBill);

    res.status(201).json({ message: 'Đặt tour thành công!', booking: newBooking });
    console.log('Đã trả response thành công');
  } catch (error) {
    console.error('Lỗi khi tạo booking:', error);
    res.status(500).json({ message: 'Đã có lỗi xảy ra phía server.' });
  }
};

// Lấy danh sách booking của người dùng qua email
exports.getBookingsByEmail = async (req, res) => {
  try {
    const userEmail = req.params.email;
    console.log('Tìm booking với email:', userEmail);

    if (!userEmail) {
      return res.status(400).json({ message: 'Vui lòng cung cấp email.' });
    }

    const bookings = await Booking.find({ email: userEmail }).sort({ time_booking: -1 });
    console.log('Kết quả truy vấn:', bookings);

    if (!bookings || bookings.length === 0) {
      return res.status(200).json([]); // Trả về mảng rỗng nếu không có booking
    }

    // Lấy thông tin chi tiết của từng tour tương ứng
    const populatedBookings = await Promise.all(
      bookings.map(async (booking) => {
        try {
          const tourResponse = await axios.get(`http://api-gateway:3000/api/tours/${booking.tour_id}`);
          return {
            ...booking.toObject(),
            tourDetails: tourResponse.data,
          };
        } catch (error) {
          // Nếu không lấy được thông tin tour, vẫn trả về booking
          console.error(`Không thể lấy thông tin cho tour_id: ${booking.tour_id}`, error.message);
          return {
            ...booking.toObject(),
            tourDetails: null, // hoặc một object rỗng {}
          };
        }
      })
    );

    res.status(200).json(populatedBookings);
  } catch (error) {
    console.error('Lỗi khi lấy danh sách booking:', error);
    res.status(500).json({ message: 'Đã có lỗi xảy ra phía server.' });
  }
};

// Xóa booking nếu chưa thanh toán
exports.deleteBookingIfUnpaid = async (req, res) => {
  try {
    const { booking_id } = req.params;
    if (!booking_id) {
      return res.status(400).json({ message: 'Thiếu booking_id.' });
    }
    const booking = await Booking.findOne({ booking_id });
    if (!booking) {
      return res.status(404).json({ message: 'Không tìm thấy booking.' });
    }
    if (booking.payment_status !== 'chưa thanh toán') {
      return res.status(400).json({ message: 'Chỉ có thể xóa booking chưa thanh toán.' });
    }
    await Booking.deleteOne({ booking_id });
    res.json({ message: 'Đã xóa booking thành công.' });
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi xóa booking.', error: error.message });
  }
};
