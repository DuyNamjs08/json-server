const jsonServer = require("json-server");

// Khởi tạo server JSON
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
console.log(1);

// Lấy cổng từ biến môi trường hoặc mặc định là 8080
const PORT = process.env.PORT || 8080;

// Sử dụng middleware mặc định
server.use(middlewares);

// Sử dụng router JSON Server
server.use(router);

// Lắng nghe trên cổng được chỉ định và xử lý lỗi
server
  .listen(PORT, () => {
    console.log(`🚀 JSON Server đang chạy tại http://localhost:${PORT}`);
  })
  .on("error", (err) => {
    console.error("❌ Lỗi khi khởi động server:", err);
  });
