const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const tourRoute = require('./routes/tourRoute')
require('dotenv').config()


const app = express()
const PORT = 3002

// Middleware log mọi request
app.use((req, res, next) => {
  console.log('Tours-Service nhận request:', req.method, req.url);
  next();
});

// Middlewares
app.use(cors())
app.use(express.json())



// Kết nối tới MongoDB
mongoose.connect(process.env.TOURS_URI)
    .then(() => console.log('Kết nối tới ToursCheapTripDB thành công!'))
    .catch(err => console.error('Lỗi kết nối MongoDB:', err))

// Sử dụng routes
app.use('/', require('./routes/tourRoute'));

app.get('/', (req, res) => {
    res.send('Tours-Service của CheapTrip đang chạy')
})

app.listen(PORT, () => {
    console.log(`Tours-Service đang lắng nghe tại http://tours-service:${PORT}`)
    
})