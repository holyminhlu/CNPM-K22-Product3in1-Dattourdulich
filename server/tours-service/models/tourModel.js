const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
    tour_id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    type: { type: String },
    image_url: { type: String },
    price_per_adult: { type: Number, required: true },
    price_per_children: { type: Number },
    review_count: { type: Number, default: 0 },
    average_rating: { type: Number, default: 0 },
    duration: { type: String },
    departure_date: { type: Date, required: true },
    departure_location: { type: String },
    destination: { type: String },
    hotel: { type: String },
    transportation: { type: String },
    available_slots: { type: Number }
}, {
    timestamps: true,
    collection: 'ToursCollection' // Chỉ định tên collection
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour; 