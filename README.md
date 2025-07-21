# CheapTripApp

## Giới thiệu
CheapTripApp là nền tảng đặt tour du lịch trực tuyến, giúp người dùng dễ dàng tìm kiếm, đặt tour, xem thông tin chi tiết, đánh giá, nhận khuyến mãi và quản lý lịch sử đặt tour. Ứng dụng hướng tới trải nghiệm thân thiện, tối ưu chi phí và hỗ trợ đa dạng điểm đến.

## Tính năng chính
- Tìm kiếm tour du lịch theo điểm đến, loại tour, giá, thời gian
- Đặt tour trực tuyến, quản lý lịch sử đặt tour
- Đánh giá, nhận xét tour đã trải nghiệm
- Quản lý, áp dụng mã giảm giá, khuyến mãi
- Đăng ký, đăng nhập, quản lý thông tin cá nhân
- Quản trị viên quản lý tour, điểm đến, khuyến mãi

## Kiến trúc tổng quan
Dự án sử dụng kiến trúc microservices:
- **Frontend:** Vue.js (thư mục `client/cheaptripfe`)
- **Backend:** Node.js, chia thành các service nhỏ: Auth, Booking, Tours, Discounts, Rating (thư mục `server/`)
- **API Gateway:** Trung gian giữa frontend và các service backend, xử lý xác thực, định tuyến, logging

```
[Client (Vue.js)] <-> [API Gateway] <-> [Auth | Booking | Tours | Discounts | Rating Services]
```

## Cài đặt & Chạy dự án
### Yêu cầu
- Node.js >= 14.x
- npm >= 6.x

### 1. Cài đặt Backend
```bash
cd CheapTripApp - Copy/server
# Cài đặt cho từng service
cd api-gateway && npm install && cd ..
cd auth-service && npm install && cd ..
cd booking-service && npm install && cd ..
cd discounts-service && npm install && cd ..
cd rating-service && npm install && cd ..
cd tours-service && npm install && cd ..
```

### 2. Chạy tất cả các service backend
```bash
cd booking-service
node start-all-services.js
```

### 3. Cài đặt & chạy Frontend
```bash
cd CheapTripApp - Copy/client/cheaptripfe
npm install
npm run serve
```

### 4. Truy cập ứng dụng
- Frontend: http://localhost:8080
- API Gateway: http://localhost:3000

## Cấu trúc thư mục
```
CheapTripAppChinhThuc/
  └─ CheapTripApp - Copy/
      ├─ client/
      │   └─ cheaptripfe/      # Frontend Vue.js
      └─ server/
          ├─ api-gateway/      # API Gateway
          ├─ auth-service/     # Xác thực người dùng
          ├─ booking-service/  # Đặt tour & hóa đơn
          ├─ discounts-service/# Quản lý khuyến mãi
          ├─ rating-service/   # Đánh giá tour
          └─ tours-service/    # Quản lý tour
```

## Mô tả chi tiết các dịch vụ Backend
- **api-gateway**
  - Định tuyến request từ frontend đến các service backend
  - Xử lý xác thực, kiểm tra token, logging
  - Đảm bảo bảo mật và phân tán tải

- **auth-service**
  - Đăng ký, đăng nhập, xác thực người dùng bằng JWT
  - Quản lý thông tin tài khoản, đổi mật khẩu
  - Phân quyền người dùng (user, admin)

- **booking-service**
  - Đặt tour, tạo hóa đơn, lưu lịch sử đặt tour
  - Quản lý trạng thái booking (đã đặt, đã thanh toán, đã hủy)
  - Truy xuất thông tin hóa đơn, lịch sử giao dịch

- **discounts-service**
  - Tạo, cập nhật, xóa mã giảm giá, chương trình khuyến mãi
  - Kiểm tra, áp dụng mã giảm giá khi đặt tour
  - Quản lý hiệu lực, điều kiện sử dụng mã

- **rating-service**
  - Cho phép người dùng đánh giá, nhận xét tour đã trải nghiệm
  - Tính điểm trung bình, hiển thị nhận xét cho từng tour
  - Quản lý, kiểm duyệt nội dung đánh giá

- **tours-service**
  - Quản lý thông tin tour, điểm đến, lịch trình, giá cả
  - Thêm, sửa, xóa tour, cập nhật thông tin điểm đến
  - Tìm kiếm, lọc tour theo nhiều tiêu chí

## Frontend
- **Công nghệ:** Vue.js, Vue Router, HTML, CSS
- **Thư mục chính:** `client/cheaptripfe/src`
- **Các thành phần chính:**
  - `components/`: Header, Footer, TourCard, ...
  - `views/`: Các trang như Home, Booking, Search, SignIn, SignUp, TourDetails, UserInfo, ...
  - `routes/`: Định nghĩa các route
  - `utils/`: Các hàm tiện ích, event bus, validate

## Hướng dẫn phát triển
### Thêm mới dịch vụ Backend
- Tạo thư mục mới trong `server/`, cấu trúc gồm: `controllers/`, `models/`, `routes/`, `index.js`, `package.json`
- Đăng ký route tại API Gateway nếu muốn expose ra ngoài
- Đảm bảo mỗi service có thể chạy độc lập

### Thêm mới component Frontend
- Thêm file `.vue` vào `client/cheaptripfe/src/components/` hoặc `views/`
- Đăng ký route mới trong `src/routes/index.js` nếu là trang mới
- Sử dụng eventBus hoặc Vuex (nếu mở rộng) để quản lý trạng thái

### Chạy từng service riêng biệt
- Ví dụ: `cd server/auth-service && node index.js`
- Có thể debug từng service độc lập

### Quản lý môi trường
- Sử dụng file `.env` cho biến môi trường (port, secret, ...)
- Không commit thông tin nhạy cảm lên repository

## Đóng góp & Liên hệ
- Đóng góp: Tạo Pull Request, Issue trên repository để báo lỗi hoặc đề xuất tính năng mới
- Liên hệ: holyminhlu1@gmail.com (Minh Lữ) - Sđt: 0983149203
- Liên hệ: nguyenhuuluan19092004@gmail.com (Hữu Luân)
- Liên hệ: huynhkhai2062@gmail.com (Huỳnh Khải)
- Mọi ý kiến đóng góp đều được trân trọng để hoàn thiện sản phẩm

---
**Bản quyền thuộc về Nguyễn Hữu Luân, Hồ Lý Minh Lữ, Huỳnh Khải - sinh viên Công nghệ Thông Tin, Trường Kỹ thuật và Công nghệ, Trường Đại học Trà Vinh.** 