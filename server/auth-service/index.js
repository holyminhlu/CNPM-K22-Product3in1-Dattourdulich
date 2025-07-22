const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');


const authRoute = require('./routes/authRoute');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json()); // Thêm lại để parse body JSON
// Đã xoá app.use(express.json()) để tránh treo request khi dùng proxy

// Swagger UI


mongoose.connect(process.env.MONGODB_URI)
    .then(()=>console.log('Kết nối MongoDB thành công'))
    .catch(err => console.error('Lỗi kết nối MongoDB',err));

app.use('/', require('./routes/authRoute'));

app.get('/', (req, res)=>{
    res.send('Server CheapTrip đang chạy');
});

app.listen(PORT, () =>{
    console.log(`Auth-Service đang lắng nghe tại http://auth-service: ${PORT}`);
    
})


