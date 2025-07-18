const mongoose = require('mongoose');

// Kết nối riêng tới BookingToursCheapTripDB
const bookingToursConnection = mongoose.createConnection('mongodb+srv://nguyenhuuluan19092004zz:DtZp6M56ZYgYqprV@clustercheaptrip.fct1xpg.mongodb.net/BookingToursCheapTripDB');

const bookingSchema = new mongoose.Schema({
  booking_id: {
    type: String,
    required: true,
    unique: true,
  },
  tour_id: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  booking_type: {
    type: String,
    default: 'tour_thuong',
  },
  adult: {
    type: Number,
    required: true,
  },
  children: {
    type: Number,
    default: 0,
  },
  note: {
    type: String,
    default: '',
  },
  status: {
    type: String,
    default: 'pending', // pending, confirmed, cancelled
  },
  time_booking: {
    type: Date,
    default: Date.now,
  },
  departure_date: { // Thêm trường ngày khởi hành
    type: Date,
    required: true,
  },
  total_amount: {
    type: mongoose.Schema.Types.Decimal128,
    required: true,
  },
  payment_status: {
    type: String,
    default: 'chưa thanh toán', // chưa thanh toán, đã thanh toán
  },
}, { collection: 'bookingtourscollections' });

const Booking = bookingToursConnection.model('BookingToursCollection', bookingSchema);

module.exports = Booking;


