const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');

const authRoute = require('./routes/authRoute');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json()); // Thêm lại để parse body JSON
// Đã xoá app.use(express.json()) để tránh treo request khi dùng proxy

mongoose.connect('mongodb+srv://nguyenhuuluan19092004zz:DtZp6M56ZYgYqprV@clustercheaptrip.fct1xpg.mongodb.net/CheapTripDB')
    .then(()=>console.log('Kết nối MongoDB thành công'))
    .catch(err => console.error('Lỗi kết nối MongoDB',err));

app.use('/', require('./routes/authRoute'));

app.get('/', (req, res)=>{
    res.send('Server CheapTrip đang chạy');
});

app.listen(PORT, () =>{
    console.log(`Auth-Service đang lắng nghe tại http://localhost: ${PORT}`);
})


