const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bookingRoutes = require('./routes/bookingRoute');
require('dotenv').config();


const app = express();
const PORT = 3004;
const BILLS_URI = process.env.BILLS_URI;

// Middleware log mọi request tới backend
app.use((req, res, next) => {
  console.log(`[BOOKING-SERVICE] ${req.method} ${req.originalUrl}`);
  next();
});

// Middlewares
app.use(cors({
  origin: 'http://localhost:8080',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true // Nếu frontend có gửi cookie hoặc Authorization
}));

app.use(express.json());

// Swagger UI


// Routes
app.use('/', bookingRoutes);

// Các route test và lấy dữ liệu cơ bản
app.get('/api/test-mongo', async (req, res) => {
  try {
    const Bill = require('./models/billModel');
    const count = await Bill.countDocuments();
    res.json({ success: true, message: 'Kết nối MongoDB thành công!', billCount: count });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Kết nối MongoDB thất bại!', error: err.message });
  }
});

app.get('/api/all-bills', async (req, res) => {
  try {
    const Bill = require('./models/billModel');
    const bills = await Bill.find({});
    res.json(bills);
  } catch (err) {
    res.status(500).json({ success: false, message: 'Lỗi truy vấn BillsCollection!', error: err.message });
  }
});

const bookingToursConnection = mongoose.createConnection(process.env.BOOKING_TOURS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const bookingSchema = new mongoose.Schema({}, { strict: false, collection: 'bookingtourscollections' });
const BookingTours = bookingToursConnection.model('BookingTours', bookingSchema, 'bookingtourscollections');

app.get('/api/all-bookings', async (req, res) => {
  try {
    const bookings = await BookingTours.find({});
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ success: false, message: 'Lỗi truy vấn bookingtourscollections!', error: err.message });
  }
});

// MongoDB Connection
mongoose.connect(BILLS_URI)
  .then(() => {
    console.log('Connected to BookingToursCheapTripDB');
    app.listen(PORT, () => {
      console.log(`Booking service is running on port ${PORT}`);
     
    });
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });
