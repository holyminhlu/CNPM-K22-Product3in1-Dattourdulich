// Import docs để Swagger scan
require('../swaggerDocs');
const express = require('express');
const cors = require('cors');
const proxyRoutes = require('./routes/proxyRoutes');
require('dotenv').config();
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('../swagger');

// const loggerMid = require('./middleware/loggerMid'); // Tạm thời bỏ logger để loại trừ lỗi

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
// app.use(express.json()); // Đã comment để không parse body ở API Gateway
// app.use(loggerMid); // Tạm thời bỏ logger

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
app.use('/api', proxyRoutes);  // Proxy sau cùng

app.listen(PORT, () => {
  console.log(`API Gateway chạy tại http://api-gateway:${PORT}`);
  console.log(`Swagger UI: http://localhost:${PORT}/api-docs`);
});
