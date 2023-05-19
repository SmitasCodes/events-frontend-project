const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://events-80pg.onrender.com",
      changeOrigin: true,
    })
  );
};
