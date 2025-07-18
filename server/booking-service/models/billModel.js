const mongoose = require('mongoose');

const billSchema = new mongoose.Schema({
  bill_id: String,
  created_at: String,
  payment_date: String,
  payment_method: String,
  status: String,
  tour_id: String,
  adult: String,
  child: String,
  customer_email: String,
  customer_name: String,
  customer_phone: String,
  departure_date: String,
  discount_amount: String,
  file_info: String,
  number_of_people: String,
  pickup_location: String,
  promotion_code: String,
  total_amount: String,
  tour_name: String,
});

module.exports = mongoose.model('Bill', billSchema, 'BillsCollection'); 