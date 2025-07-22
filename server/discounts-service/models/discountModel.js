const mongoose = require('mongoose');
const { Decimal128 } = mongoose.Schema.Types;

const discountSchema = new mongoose.Schema({
  discount_id: {
    type: String,
    required: true,
    unique: true
  },
  tour_id: {
    type: [String],
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  discount_percent: {
    type: Decimal128,
    required: true
  },
  start_date: {
    type: Date,
    required: true
  },
  end_date: {
    type: Date,
    required: true
  }
}, {
  // Chỉ định tên collection rõ ràng
  collection: 'DiscountsCollection' 
});

const Discount = mongoose.model('Discount', discountSchema);

module.exports = Discount;
