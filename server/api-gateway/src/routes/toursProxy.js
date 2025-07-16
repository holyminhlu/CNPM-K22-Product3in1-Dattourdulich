const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = createProxyMiddleware({
  target: 'http://localhost:3002',
  changeOrigin: true,
  // Không cần pathRewrite, giữ nguyên path
});