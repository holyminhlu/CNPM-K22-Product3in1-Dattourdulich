const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = createProxyMiddleware({
  target: 'http://localhost:3003',
  changeOrigin: true,
});