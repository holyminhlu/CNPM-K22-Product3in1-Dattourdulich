const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = createProxyMiddleware({
  target: 'http://localhost:3005',
  changeOrigin: true,
  pathRewrite: { '^/api/rating': '' }
});