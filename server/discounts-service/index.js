const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const discountRoute = require('./routes/discountRoute')
require('dotenv').config();


const app = express()
const PORT = 3003

// Middlewares
app.use(cors())
app.use(express.json())

// Swagger UI


// Kết nối tới MongoDB
mongoose.connect(process.env.DISCOUNTS_URI)
    .then(() => console.log('Kết nối tới DiscountsCheapTripDB thành công!'))
    .catch(err => console.error('Lỗi kết nối MongoDB:', err))

// Sử dụng routes
app.use('/', discountRoute)

app.get('/', (req, res) => {
    res.send('Discounts-Service của CheapTrip đang chạy')
})

app.listen(PORT, () => {
    console.log(`Discounts-Service đang lắng nghe tại http://discounts-service:${PORT}`)
    
})