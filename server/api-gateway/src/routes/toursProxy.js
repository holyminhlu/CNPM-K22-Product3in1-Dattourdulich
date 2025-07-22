const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = createProxyMiddleware({
  target: process.env.TOURS_SERVICE_URL,
  changeOrigin: true,
  // Không cần pathRewrite, giữ nguyên path
});