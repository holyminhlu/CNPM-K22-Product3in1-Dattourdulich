const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bookingRoutes = require('./routes/bookingRoute');

const app = express();
const PORT = 3004;
const MONGO_URI = 'mongodb+srv://nguyenhuuluan19092004zz:DtZp6M56ZYgYqprV@clustercheaptrip.fct1xpg.mongodb.net/BillsCheapTripDB';

// Middleware log mọi request tới backend
app.use((req, res, next) => {
  console.log(`[BOOKING-SERVICE] ${req.method} ${req.originalUrl}`);
  next();
});

// Middlewares
app.use(cors());
app.use(express.json());

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

const bookingToursConnection = mongoose.createConnection('mongodb+srv://nguyenhuuluan19092004zz:DtZp6M56ZYgYqprV@clustercheaptrip.fct1xpg.mongodb.net/BookingToursCheapTripDB', {
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
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to BookingToursCheapTripDB');
    app.listen(PORT, () => {
      console.log(`Booking service is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });
