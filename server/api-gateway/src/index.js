const express = require('express');
const cors = require('cors');
const proxyRoutes = require('./routes/proxyRoutes');
// const loggerMid = require('./middleware/loggerMid'); // Tạm thời bỏ logger để loại trừ lỗi

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
// app.use(express.json()); // Đã comment để không parse body ở API Gateway
// app.use(loggerMid); // Tạm thời bỏ logger
app.use('/api', proxyRoutes);  // Proxy sau cùng

app.listen(PORT, () => {
  console.log(`API Gateway chạy tại http://localhost:${PORT}`);
});
