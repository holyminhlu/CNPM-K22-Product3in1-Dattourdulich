<template>
  <div class="user-info-container">
    <div class="user-info-view">
      <div class="view-header">
        <i class="fa-solid fa-user-circle"></i>
        <h2>Thông tin cá nhân</h2>
      </div>

      <div v-if="loading" class="loading-placeholder">Đang tải thông tin...</div>

      <!-- Chế độ hiển thị thông tin -->
      <div v-else-if="!isEditing" class="info-display">
        <div class="info-grid">
          <div class="info-item">
            <i class="fa-solid fa-user"></i>
            <div>
              <span class="info-label">Họ tên</span>
              <span class="info-value">{{ user.fullName || 'Chưa cập nhật' }}</span>
            </div>
          </div>
          <div class="info-item">
            <i class="fa-solid fa-envelope"></i>
            <div>
              <span class="info-label">Email</span>
              <span class="info-value">{{ user.email }}</span>
            </div>
          </div>
          <div class="info-item">
            <i class="fa-solid fa-phone"></i>
            <div>
              <span class="info-label">Số điện thoại</span>
              <span class="info-value">{{ user.phone || 'Chưa cập nhật' }}</span>
            </div>
          </div>
          <div class="info-item">
            <i class="fa-solid fa-location-dot"></i>
            <div>
              <span class="info-label">Địa chỉ</span>
              <span class="info-value">{{ user.address || 'Chưa cập nhật' }}</span>
            </div>
          </div>
          <div class="info-item wide-item">
            <i class="fa-solid fa-venus-mars"></i>
            <div>
              <span class="info-label">Giới tính</span>
              <span class="info-value">{{ user.gender || 'Chưa cập nhật' }}</span>
            </div>
          </div>
        </div>
        <div class="actions">
          <button type="button" @click="startEdit" class="btn btn-primary">
            <i class="fa-solid fa-pencil"></i> Chỉnh sửa
          </button>
        </div>
      </div>
      
      <!-- Chế độ chỉnh sửa thông tin -->
      <form v-else @submit.prevent="submitInfo" class="edit-form">
        <div class="form-group">
          <label for="fullName">Họ tên</label>
          <input id="fullName" v-model="user.fullName" type="text" disabled />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input id="email" v-model="user.email" type="email" disabled />
        </div>
        <div class="form-group">
          <label for="phone">Số điện thoại</label>
          <input id="phone" v-model="user.phone" type="tel" placeholder="Nhập số điện thoại" required />
        </div>
        <div class="form-group">
          <label for="address">Địa chỉ</label>
          <input id="address" v-model="user.address" type="text" placeholder="Nhập địa chỉ" required />
        </div>
        <div class="form-group">
          <label for="gender">Giới tính</label>
          <select id="gender" v-model="user.gender" required>
            <option value="" disabled>Chọn giới tính</option>
            <option value="Nam">Nam</option>
            <option value="Nữ">Nữ</option>
            <option value="Khác">Khác</option>
          </select>
        </div>
        <div class="form-actions">
          <button type="submit" class="btn-save">Lưu thay đổi</button>
          <button type="button" @click="cancelEdit" class="btn-cancel">Hủy</button>
        </div>
      </form>
    </div>

    <!-- Danh sách tour đã đặt -->
    <div class="booked-tours-view">
      <h2>Tour đã đặt</h2>
      <div v-if="bookingsLoading">Đang tải danh sách...</div>
      <div v-else-if="bookedTours.length === 0" class="no-tours">
        <p>Bạn chưa đặt tour nào.</p>
      </div>
      <div v-else class="tours-list">
        <div v-for="booking in bookedTours" :key="booking.booking_id" class="tour-card">
          <img :src="booking.tourDetails?.image_url || '/img/articles/baibien.jpg'" alt="Tour Image" class="tour-image"/>
          <div class="tour-info">
            <h3>{{ booking.tourDetails?.name || 'Thông tin tour không có sẵn' }}</h3>
            <p><strong>Mã đặt tour:</strong> {{ booking.booking_id }}</p>
            <p><strong>Ngày đặt:</strong> {{ formatDate(booking.time_booking) }}</p>
            <p><strong>Khởi hành:</strong> {{ formatDate(booking.departure_date) }}</p>
            <p><strong>Trạng thái:</strong> <span :class="`status-${booking.payment_status.replace(/\s+/g, '-').toLowerCase()}`">{{ booking.payment_status }}</span></p>
            <p class="total-amount"><strong>Tổng tiền:</strong> {{ formatCurrency(booking.total_amount.$numberDecimal) }}</p>
            <button v-if="booking.payment_status === 'chưa thanh toán'" class="payment-btn" @click="payWithVietQR(booking)">
              Thanh toán ngay
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="showVietQR" class="vietqr-modal">
      <div class="vietqr-content vietqr-row">
        <div class="vietqr-img-col">
          <h3>Quét mã VietQR để thanh toán</h3>
          <img :src="qrImageUrl + (selectedBooking?.total_amount?.$numberDecimal || selectedBooking?.total_amount || '')" alt="VietQR" class="vietqr-img" />
        </div>
        <div class="vietqr-info-col">
          <p><strong>Ngân hàng:</strong> MB Bank</p>
          <p><strong>Số tài khoản:</strong> 123456789</p>
          <p><strong>Tên người nhận:</strong> NGUYEN VAN A</p>
          <p><strong>Nội dung chuyển khoản:</strong> {{ selectedBooking?.booking_id }} - {{ selectedBooking?.email }}</p>
          <p class="vietqr-note"><em>Lưu ý: Sau khi được xác nhận bởi quản trị viên, hóa đơn sẽ được gửi qua email.</em></p>
          <button @click="showVietQR = false">Đóng</button>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const user = ref({ fullName: '', email: '', phone: '', address: '', gender: '' });
const originalUser = ref({}); // Lưu trạng thái gốc khi bắt đầu sửa
const loading = ref(true);
const needEdit = ref(false);
const isEditing = ref(false);
const bookedTours = ref([]);
const bookingsLoading = ref(true);
const showVietQR = ref(false);
const selectedBooking = ref(null);
const qrImageUrl = ref('https://img.vietqr.io/image/MB-123456789-compact2.png?amount='); // Có thể thêm amount động nếu muốn

const email = localStorage.getItem('userEmail') || '';

async function fetchUserInfo() {
  loading.value = true;
  try {
    const res = await axios.get('http://localhost:3000/api/auth/customer', { params: { email } });
    user.value = res.data;
    originalUser.value = { ...res.data }; // Tạo một bản sao
    needEdit.value = !user.value.phone || !user.value.address || !user.value.gender;
    isEditing.value = needEdit.value; // Nếu thiếu thì tự động vào chế độ chỉnh sửa
  } catch (err) {
    alert('Không lấy được thông tin người dùng!');
  }
  loading.value = false;
}

async function fetchBookedTours(showAlert = false) {
  bookingsLoading.value = true;
  try {
    const res = await axios.get(`http://localhost:3000/api/bookings/${email}`);
    bookedTours.value = res.data;
    // Kiểm tra trạng thái booking vừa thanh toán
    if (showAlert) {
      const lastBookingId = localStorage.getItem('lastBookingId');
      if (lastBookingId) {
        const justPaid = bookedTours.value.find(b => b.booking_id === lastBookingId);
        if (justPaid && justPaid.payment_status === 'đã thanh toán') {
          alert('Trạng thái booking đã được cập nhật thành "đã thanh toán"!');
          localStorage.removeItem('lastBookingId');
        }
      }
    }
  } catch (err) {
    console.error("Không lấy được danh sách tour đã đặt:", err);
  }
  bookingsLoading.value = false;
}

async function submitInfo() {
  try {
      await axios.post('http://localhost:3000/api/auth/customer/update', {
      email: user.value.email,
      phone: user.value.phone,
      address: user.value.address,
      gender: user.value.gender
    });
    needEdit.value = false;
    isEditing.value = false;
    alert('Cập nhật thông tin thành công!');
  } catch (err) {
    alert('Cập nhật thất bại!');
  }
}

function startEdit() {
  originalUser.value = { ...user.value }; // Sao lưu trạng thái hiện tại trước khi sửa
  isEditing.value = true;
}

function cancelEdit() {
  user.value = { ...originalUser.value }; // Khôi phục lại từ bản sao
  isEditing.value = false;
}

function payWithVietQR(booking) {
  selectedBooking.value = booking;
  showVietQR.value = true;
}

function formatDate(dateString) {
  if (!dateString) return 'N/A';
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  return new Date(dateString).toLocaleDateString('vi-VN', options);
}

function formatCurrency(value) {
    if (value == null) return "0 ₫";
    // Chuyển đổi giá trị sang số, đảm bảo an toàn
    const numberValue = Number(value);
    if (isNaN(numberValue)) return "Giá không hợp lệ";

    // Sử dụng Intl.NumberFormat để định dạng tiền tệ
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0
    }).format(numberValue);
}

onMounted(() => {
  if (!email) {
    alert('Không tìm thấy email đăng nhập!');
    return;
  }
  fetchUserInfo();
  fetchBookedTours(true); // truyền true để kiểm tra trạng thái booking vừa thanh toán
});
</script>

<style scoped>
.user-info-container {
  max-width: 900px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.user-info-view {
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  padding: 30px 35px;
  transition: box-shadow 0.3s;
}

.view-header {
  display: flex;
  align-items: center;
  gap: 15px;
  color: #1a9cb8;
  margin-bottom: 25px;
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 20px;
}
.view-header i {
  font-size: 2.2rem;
}
.view-header h2 {
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
}

/* Chế độ hiển thị */
.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
}
.info-item {
  display: flex;
  align-items: center;
  gap: 15px;
}
.info-item i {
  font-size: 1.2rem;
  color: #1a9cb8;
  width: 20px;
  text-align: center;
}
.info-label {
  font-size: 0.9rem;
  color: #888;
  display: block;
}
.info-value {
  font-size: 1.1rem;
  color: #333;
  font-weight: 500;
}
.wide-item {
  grid-column: 1 / -1;
}
.actions {
  margin-top: 30px;
  text-align: right;
}

/* Form chỉnh sửa */
.edit-form .form-group {
  margin-bottom: 18px;
}
.edit-form label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #333;
}
.edit-form input, .edit-form select {
  width: 100%;
  padding: 12px 15px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.edit-form input:focus, .edit-form select:focus {
  border-color: #1a9cb8;
  outline: none;
  box-shadow: 0 0 0 3px rgba(26, 156, 184, 0.15);
}
.edit-form input:disabled {
  background-color: #f5f5f5;
  cursor: not-allowed;
  color: #777;
}
.form-actions {
  display: flex;
  gap: 16px;
  margin-top: 24px;
  justify-content: flex-start;
}

.btn-save {
  background: #ff6200;
  color: #fff;
  border: none;
  border-radius: 12px;
  padding: 14px 36px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
  box-shadow: 0 2px 8px rgba(255,98,0,0.08);
}

.btn-save:hover {
  background: #ef7c35;
}

.btn-cancel {
  background: #f3f3f3;
  color: #444;
  border: none;
  border-radius: 12px;
  padding: 14px 36px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}

.btn-cancel:hover {
  background: #e0e0e0;
  color: #ff6200;
}

/* Nút bấm chung */
.btn {
  border: none;
  padding: 10px 25px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.btn:hover {
  transform: translateY(-2px);
}
.btn-primary {
  background: #FF6200;
  color: #fff;
  box-shadow: 0 2px 8px rgba(255, 98, 0, 0.2);
}
.btn-primary:hover {
  background: #e65a00;
  box-shadow: 0 4px 12px rgba(255, 98, 0, 0.3);
}
.btn-secondary {
  background-color: #f0f0f0;
  color: #555;
}
.btn-secondary:hover {
  background-color: #e0e0e0;
}

/* Responsive */
@media (max-width: 600px) {
  .info-grid {
    grid-template-columns: 1fr;
  }
  .view-header {
    gap: 10px;
  }
  .view-header i {
    font-size: 1.8rem;
  }
  .view-header h2 {
    font-size: 1.5rem;
  }
  .form-actions {
    flex-direction: column;
  }
  .btn {
    width: 100%;
    justify-content: center;
  }
}

h2 {
  color: #1BC6E8;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 18px;
  text-align: center;
}

.booked-tours-view {
  width: 100%;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(27, 198, 232, 0.10), 0 1.5px 6px rgba(0,0,0,0.06);
  padding: 36px 32px;
  font-family: 'Segoe UI', Arial, sans-serif;
}

.tours-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 18px;
}

.tour-card {
  display: flex;
  gap: 20px;
  border: 1px solid #e9e9e9;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  transition: box-shadow 0.3s;
}

.tour-card:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.tour-image {
  width: 180px;
  height: 140px;
  object-fit: cover;
  border-radius: 8px;
}

.tour-info {
  flex-grow: 1;
}

.tour-info h3 {
  margin: 0 0 8px 0;
  color: #007a9b;
}

.tour-info p {
  margin: 4px 0;
  color: #555;
  font-size: 0.95rem;
}

.total-amount {
  font-size: 1.1rem !important;
  font-weight: bold;
  color: #d9534f !important;
  margin-top: 8px !important;
}

.payment-btn {
  margin-top: 12px;
  background: #FF6200;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
}
.payment-btn:hover {
  background: #e65c00;
  transform: translateY(-1px);
}

.status-chưa-thanh-toán {
  color: #f0ad4e;
  font-weight: bold;
}

.status-đã-thanh-toán {
  color: #5cb85c;
  font-weight: bold;
}

.no-tours p {
  text-align: center;
  color: #777;
  font-size: 1.1rem;
  padding: 20px;
}

@media (max-width: 768px) {
  .tour-card {
    flex-direction: column;
  }
  .tour-image {
    width: 100%;
    height: 180px;
  }
}
.vietqr-modal {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}
.vietqr-content {
  background: #fff;
  border-radius: 12px;
  padding: 32px 24px;
  min-width: 320px;
  max-width: 90vw;
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
  text-align: center;
}
.vietqr-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 32px;
}
.vietqr-img-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.vietqr-img {
  width: 220px;
  height: 220px;
  margin: 16px auto;
  display: block;
}
.vietqr-info-col {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-width: 260px;
  font-size: 18px;
  gap: 10px;
  width: 100%;
}
.vietqr-info-col button {
  margin-top: 18px;
  padding: 10px 30px;
  background: #1BC6E8;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  align-self: center;
  display: block;
}
.vietqr-info-col button:hover {
  background: #159bb8;
}
.vietqr-note {
  color: #888;
  font-size: 15px;
  margin-top: 8px;
  margin-bottom: 0;
  max-width: none;
  white-space: normal;
  text-align: left;
  display: block;
}
@media (max-width: 700px) {
  .vietqr-row {
    flex-direction: column;
    gap: 12px;
  }
  .vietqr-info-col {
    min-width: unset;
    align-items: center;
    font-size: 16px;
  }
  .vietqr-content {
    padding: 18px 6px;
  }
}
</style> 