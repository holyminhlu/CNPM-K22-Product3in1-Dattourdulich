<template>
  <div class="booking-page">
    <div v-if="errorMessage" class="error-message">
      <h2>{{ errorMessage }}</h2>
    </div>
    <div v-else>
      <div v-if="!isLoggedIn" class="login-required">
        <h2>Vui lòng đăng nhập để đặt tour</h2>
        <router-link to="/signin" class="login-btn">Đăng nhập ngay</router-link>
      </div>
      <div v-else class="booking-container">
        <!-- Thông tin tour -->
        <div class="tour-info">
          <h2>Thông tin tour</h2>
          <!-- Hộp thông tin giảm giá -->
          <div v-if="discount" class="discount-info-box">
            <div class="discount-header">
              <i class="fa-solid fa-tags"></i>
              <h4 class="discount-title">{{ discount.title }}</h4>
            </div>
            <p class="discount-description">{{ discount.description }}</p>
            <div class="discount-details">
              <span class="discount-percent">-{{ discount.discount_percent }}%</span>
              <span class="discount-dates">
                Áp dụng từ <strong>{{ formatDate(discount.start_date) }}</strong> đến <strong>{{ formatDate(discount.end_date) }}</strong>
              </span>
            </div>
          </div>
          <div class="info-grid">
            <div class="info-item">
              <i class="fa-solid fa-qrcode"></i>
              <div>
                <span class="label">Mã tour:</span>
                <span class="value">{{tour.tour_id}}</span>
              </div>
            </div>
            <div class="info-item">
              <i class="fa-regular fa-clock"></i>
              <div>
                <span class="label">Thời gian:</span>
                <span class="value">{{tour.duration || '5 ngày'}}</span>
              </div>
            </div>
            <div class="info-item">
              <i class="fa-solid fa-bed"></i>
              <div>
                <span class="label">Khách sạn:</span>
                <span class="value">{{tour.hotel_standard || '3 sao'}}</span>
              </div>
            </div>
            <div class="info-item">
              <i class="fa-solid fa-location-dot"></i>
              <div>
                <span class="label">Khởi hành từ:</span>
                <span class="value">{{tour.departure_location || 'TP. Hồ Chí Minh'}}</span>
              </div>
            </div>
            <div class="info-item">
              <i class="fa-solid fa-car-side"></i>
              <div>
                <span class="label">Phương tiện:</span>
                <span class="value">{{tour.transportation || 'Hàng Không VietJet Air'}}</span>
              </div>
            </div>
            <div class="info-item">
              <i class="fa-solid fa-users"></i>
              <div>
                <span class="label">Số chỗ còn nhận:</span>
                <span class="value">{{tour.available_seats || '9'}}</span>
              </div>
            </div>
            <div class="info-item">
              <i class="fa-solid fa-money-bill-wave"></i>
              <div>
                <span class="label">Giá người lớn:</span>
                <span class="value price-value">{{formatCurrency(tour.price_per_adult)}}</span>
              </div>
            </div>
            <div class="info-item">
              <i class="fa-solid fa-child"></i>
              <div>
                <span class="label">Giá trẻ em:</span>
                <span class="value price-value">{{formatCurrency(tour.price_per_child || tour.price_per_adult * 0.7)}}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Form đặt tour -->
        <div class="booking-form">
          <h2>Thông tin đặt tour</h2>
          <form>
            <div class="form-group">
              <label>Họ và tên:</label>
              <input 
                type="text" 
                v-model="bookingInfo.fullName" 
                required 
                readonly
                class="readonly-input">
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label>Email:</label>
                <input 
                  type="email" 
                  v-model="bookingInfo.email" 
                  required 
                  readonly
                  class="readonly-input">
              </div>
              <div class="form-group">
                <label>Số điện thoại:</label>
                <input type="tel" v-model="bookingInfo.phone" required placeholder="Nhập số điện thoại">
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label>Ngày khởi hành:</label>
                <input type="date" :value="tour.departure_date ? tour.departure_date.split('T')[0] : bookingInfo.departureDate" readonly required class="readonly-input">
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label>Số người lớn:</label>
                <input type="number" v-model="bookingInfo.numberOfAdults" min="1" max="20" required>
              </div>
              <div class="form-group">
                <label>Số trẻ em:</label>
                <input type="number" v-model="bookingInfo.numberOfChildren" min="0" max="20">
              </div>
            </div>

            <div class="form-group">
              <label>Ghi chú:</label>
              <textarea v-model="bookingInfo.notes" placeholder="Nhập ghi chú nếu có"></textarea>
            </div>

            <div class="price-summary">
              <div class="price-row">
                <span>Giá người lớn:</span>
                <span class="price">{{formatCurrency(tour.price_per_adult)}} × {{bookingInfo.numberOfAdults}}</span>
              </div>
              <div class="price-row" v-if="bookingInfo.numberOfChildren > 0">
                <span>Giá trẻ em:</span>
                <span class="price">{{formatCurrency(tour.price_per_child || tour.price_per_adult * 0.7)}} × {{bookingInfo.numberOfChildren}}</span>
              </div>
              <div class="price-row discount-row" v-if="discountAmount > 0">
                <span>Giảm giá ({{ discount.discount_percent }}%):</span>
                <span class="price">-{{ formatCurrency(discountAmount) }}</span>
              </div>
              <div class="price-row total">
                <span>Tổng tiền:</span>
                <span class="price">{{ formatCurrency(totalPrice) }}</span>
              </div>
            </div>

            <div class="payment-buttons">
              <button type="button" class="submit-btn" @click="bookTour" :disabled="isLoadingPayment">
                {{ isLoadingPayment ? 'Đang xử lý...' : 'Đặt tour' }}
              </button>
            </div>
          </form>
        </div>
      </div>

      
    </div>
  </div>
  
  <!-- ==================== KHU VỰC BÌNH LUẬN MỚI ==================== -->
 
</template>

<script>
export default {
  name: 'BookingView',
  data() {
    return {
      tour: {},
      discount: null,
      isLoggedIn: false,
      errorMessage: '', // Thêm biến này để lưu thông báo lỗi
      bookingInfo: {
        fullName: '',
        email: '',
        phone: '',
        departureDate: '',
        numberOfAdults: 1,
        numberOfChildren: 0,
        notes: ''
      },
      comments: [], // Mảng để chứa các bình luận
      newComment: '',  // Model cho textarea bình luận mới
      isLoadingPayment: false, // Loading state cho thanh toán
      userCommentRating: 0, // Số sao người dùng chọn cho bình luận
      showThankYouPopup: false,
    }
  },
  computed: {
    // Tính tổng tiền gốc trước khi giảm giá
    baseTotal() {
      if (!this.tour.price_per_adult) return 0;
      
      const adultPrice = Number(this.tour.price_per_adult) || 0;
      const childPrice = Number(this.tour.price_per_child) || (adultPrice * 0.7);
      
      const numAdults = Number(this.bookingInfo.numberOfAdults) || 0;
      const numChildren = Number(this.bookingInfo.numberOfChildren) || 0;

      return (adultPrice * numAdults) + (childPrice * numChildren);
    },
    // Tính số tiền được giảm giá
    discountAmount() {
      if (!this.discount || !this.discount.discount_percent) {
        return 0;
      }
      return this.baseTotal * (this.discount.discount_percent / 100);
    },
    // Tính tổng tiền cuối cùng
    totalPrice() {
      return this.baseTotal - this.discountAmount;
    }
  },
  created() {
    // Kiểm tra trạng thái đăng nhập
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    
    if (this.isLoggedIn) {
      // Tự động điền thông tin từ localStorage
      this.bookingInfo.fullName = localStorage.getItem('userFullName') || '';
      this.bookingInfo.email = localStorage.getItem('userEmail') || '';
    }

    // Nếu tour đã có ngày khởi hành thì dùng luôn, nếu không thì lấy ngày mai
    if (this.tour && this.tour.departure_date) {
      this.bookingInfo.departureDate = this.tour.departure_date.split('T')[0];
    } else {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      this.bookingInfo.departureDate = tomorrow.toISOString().split('T')[0];
    }

    const tourId = this.$route.params.tourId;
    this.fetchTourDetails(tourId);
    this.fetchComments(tourId); // Tải bình luận khi component được tạo
    this.checkPaymentStatus();
  },
  methods: {
    async fetchTourDetails(tourId) {
      try {
        // Lấy dữ liệu tour và discount cùng lúc
        const [tourResponse, discountResponse] = await Promise.all([
          fetch(`http://localhost:3000/api/tours/${tourId}`),
          fetch(`http://localhost:3000/api/discounts/by-tour/${tourId}`)
        ]);
        if (!tourResponse.ok) {
          throw new Error('Không thể tải thông tin tour');
        }
        this.tour = await tourResponse.json();
        if (discountResponse.ok) {
          const discountData = await discountResponse.json();
          if (discountData) {
            this.discount = discountData;
          }
        }
      } catch (error) {
        console.error("Lỗi khi fetch tour details:", error);
        this.errorMessage = "Không thể tải thông tin tour. Vui lòng thử lại sau.";
        // Không tự động chuyển về home nữa
      }
    },

    async bookTour() {
      this.isLoadingPayment = true;
      try {
        const bookingData = {
          tour_id: this.tour.tour_id,
          fullName: this.bookingInfo.fullName,
          email: this.bookingInfo.email,
          phone: this.bookingInfo.phone,
          departureDate: this.bookingInfo.departureDate,
          numberOfAdults: this.bookingInfo.numberOfAdults,
          numberOfChildren: this.bookingInfo.numberOfChildren,
          notes: this.bookingInfo.notes,
          totalPrice: this.totalPrice
        };
        const res = await fetch('http://localhost:3004/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(bookingData)
        });
        const contentType = res.headers.get('content-type');
        if (res.ok && contentType && contentType.includes('application/json')) {
          alert('Đặt tour thành công! Vui lòng kiểm tra email để xác nhận.');
          // Reset form nếu muốn
          // this.bookingInfo = { ... };
        } else {
          const text = await res.text();
          alert('Có lỗi khi đặt tour: ' + text);
        }
      } catch (err) {
        alert('Có lỗi khi đặt tour: ' + err.message);
      } finally {
        this.isLoadingPayment = false;
      }
    },
    
    formatCurrency(value) {
      if (typeof value !== "number") {
        return 'N/A';
      }
      return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    },
    formatDate(dateString) {
      if (!dateString) return '';
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('vi-VN', options);
    },
    
    // --- CÁC HÀM XỬ LÝ BÌNH LUẬN ---
    fetchComments(tourId) {
      // GIẢ LẬP API: Trong thực tế, bạn sẽ gọi API để lấy bình luận từ server
      // Ví dụ: const response = await fetch(`/api/tours/${tourId}/comments`);
      // const data = await response.json();
      // this.comments = data;
      
      console.log(`Đang tải bình luận cho tour ID: ${tourId}`);
      
      // Dữ liệu mẫu để hiển thị
      this.comments = [
        {
          id: 1,
          text: "Chuyến đi thật tuyệt vời, hướng dẫn viên rất nhiệt tình và chuyên nghiệp. Phong cảnh hùng vĩ, trải nghiệm đáng nhớ. Cảm ơn CheapTrip!",
          date: "2 ngày trước",
          author: {
            name: "Trần Thị Bích Trâm",
            avatar: "/img/perfil.jpg" 
          }
        },
        {
          id: 2,
          text: "Dịch vụ rất tốt, khách sạn sạch sẽ và tiện nghi. Tuy nhiên bữa ăn có thể đa dạng hơn một chút. Nhìn chung rất hài lòng và sẽ quay lại.",
          date: "5 ngày trước",
          author: {
            name: "Lê Văn Hùng",
            avatar: "/img/perfil.jpg"
          }
        }
      ];
    },
    async checkPaymentStatus() {
      const email = this.bookingInfo.email;
      const res = await fetch(`http://localhost:3000/api/booking/bookings/user/${email}`);
      const bookings = await res.json();
      const b002 = bookings.find(b => b.booking_id === 'B002');
      if (b002 && b002.payment_status === 'đã thanh toán') {
        alert('Thanh toán thành công! Trạng thái booking đã được cập nhật.');
      }
    }
  }
};
</script>

<style scoped>
.booking-page {
  width: 100%;
  min-height: 100vh;
  padding: 100px 0;
  background-color: #f5f5f5;
}

.booking-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.tour-info, .booking-form {
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #333;
  margin-bottom: 25px;
  font-size: 24px;
  border-bottom: 2px solid #FF6200;
  padding-bottom: 10px;
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 15px;
}

.info-item i {
  color: #1BC6E8;
  font-size: 20px;
  width: 24px;
}

.label {
  color: #666;
  font-size: 14px;
  display: block;
}

.value {
  color: #333;
  font-weight: 500;
  font-size: 16px;
  display: block;
}

.form-group {
  margin-bottom: 20px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  color: #333;
  font-weight: 500;
}

input, textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
}

input:focus, textarea:focus {
  outline: none;
  border-color: #1BC6E8;
}

textarea {
  height: 100px;
  resize: vertical;
}

.price-summary {
  margin: 25px 0;
  padding: 15px;
  background: #f8f8f8;
  border-radius: 5px;
}

.price-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 16px;
}

.price-row.total {
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid #ddd;
  font-weight: bold;
  font-size: 18px;
}

.price {
  color: #FF6200;
  font-weight: 500;
}

.price-value {
  color: #FF6200;
  font-weight: bold;
  font-size: 16px;
}

.submit-btn {
  width: 100%;
  padding: 15px;
  background: #FF6200;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  background: #ff7b2e;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(255, 98, 0, 0.2);
}

.payment-buttons {
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

.payment-buttons .submit-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 16px;
  padding: 15px 20px;
}

.zalopay-btn {
  background: #1BC6E8 !important;
}

.zalopay-btn:hover {
  background: #15a8c4 !important;
  box-shadow: 0 4px 8px rgba(27, 198, 232, 0.2) !important;
}

.momo-btn {
  background: #A50064 !important;
}

.momo-btn:hover {
  background: #8a0054 !important;
  box-shadow: 0 4px 8px rgba(165, 0, 100, 0.2) !important;
}

.payment-buttons .submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none !important;
  box-shadow: none !important;
}

.payment-buttons .submit-btn:disabled:hover {
  transform: none !important;
  box-shadow: none !important;
}

@media (max-width: 768px) {
  .booking-container {
    grid-template-columns: 1fr;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
}

.login-required {
  width: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: white;
  margin: 20px;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.login-required h2 {
  color: #333;
  margin-bottom: 20px;
}

.login-btn {
  display: inline-block;
  padding: 12px 30px;
  background: #FF6200;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.login-btn:hover {
  background: #ff7b2e;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(255, 98, 0, 0.2);
}

/* Make fullName and email inputs readonly */
input[readonly] {
  background-color: #f5f5f5;
  cursor: not-allowed;
}

.readonly-input {
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  color: #666;
  cursor: not-allowed;
}

.readonly-input:focus {
  border-color: #ddd;
  box-shadow: none;
}

/* ==================== CSS CHO KHU VỰC BÌNH LUẬN ==================== */
.custom-comments-section {
  max-width: 1200px;
  margin: 40px auto;
  padding: 30px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.custom-comments-section h2 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
  font-size: 24px;
  border-bottom: 2px solid #FF6200;
  padding-bottom: 10px;
}

/* --- Form bình luận --- */
.comment-form {
  margin-bottom: 30px;
}

.comment-form textarea {
  width: 100%;
  min-height: 100px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  line-height: 1.6;
  resize: vertical;
  transition: border-color 0.3s;
}

.comment-form textarea:focus {
  outline: none;
  border-color: #FF6200;
}

.comment-form button {
  display: block;
  margin-top: 15px;
  margin-left: auto;
  padding: 10px 25px;
  border: none;
  background-color: #FF6200;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.comment-form button:hover:not(:disabled) {
  background-color: #e65a00;
}

.comment-form button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.comment-login-prompt {
  text-align: center;
  font-size: 16px;
  color: #666;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.comment-login-prompt a {
  color: #FF6200;
  font-weight: bold;
  text-decoration: none;
}

/* --- Danh sách bình luận --- */
.comments-list {
  margin-top: 20px;
}

.no-comments {
  text-align: center;
  color: #888;
  padding: 20px;
}

.comment-item {
  display: flex;
  gap: 15px;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
}

.comment-item:last-child {
  border-bottom: none;
}

.comment-author .author-avatar {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
}

.comment-content {
  flex: 1;
}

.comment-content p {
  margin: 0 0 10px;
  font-size: 16px;
  line-height: 1.7;
  color: #333;
}

.author-name {
  display: block;
  font-weight: bold;
  font-size: 16px;
  color: #333;
  margin-bottom: 5px;
  /* Dùng chung font với .comment-content p */
}

.comment-date {
  font-size: 13px;
  color: #999;
}

.discount-info-box {
  background-color: #fff5f5;
  border: 1px dashed #ff4d4f;
  border-radius: 8px;
  padding: 15px;
  margin-top: 15px;
  margin-bottom: 5px;
  animation: fadeIn 0.5s ease-in-out;
}
.discount-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}
.discount-header .fa-tags {
  color: #ff4d4f;
  font-size: 20px;
}
.discount-title {
  margin: 0;
  font-size: 16pt;
  color: #d9363e;
  font-weight: bold;
}
.discount-description {
  font-size: 11pt;
  color: #555;
  margin-bottom: 15px;
  padding-left: 5px;
}
.discount-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffe8e8;
  padding: 10px;
  border-radius: 6px;
}
.discount-percent {
  font-size: 18pt;
  font-weight: bold;
  color: #cf1322;
  background-color: #fff;
  padding: 2px 10px;
  border-radius: 4px;
}
.discount-dates {
  font-size: 10pt;
  color: #333;
}
.discount-dates strong {
  color: #000;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

.discount-row {
  color: #d9363e;
  font-weight: bold;
}

.vietqr-btn {
  background: #1BC6E8 !important;
}
.vietqr-btn:hover {
  background: #159bb8 !important;
  box-shadow: 0 4px 8px rgba(27, 198, 232, 0.2) !important;
}
.thank-you-popup {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}
.thank-you-content {
  background: #fff;
  border-radius: 12px;
  padding: 32px 48px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.18);
  text-align: center;
  font-size: 1.3rem;
  font-weight: 500;
  color: #FF6200;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}
.thank-you-content span {
  font-size: 2.5rem;
}
.rating-center-block {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 32px 0 32px 0;
}
.comment-rating-block {
  display: flex;
  align-items: center;
  gap: 24px;
}
.rating-label {
  font-size: 1.25rem;
  color: #222;
  margin-right: 10px;
}
.user-rating-stars .big-star {
  width: 38px;
  height: 38px;
  margin-right: 4px;
  cursor: pointer;
  transition: transform 0.18s;
}
.big-rating-btn {
  margin-left: 24px;
  padding: 14px 36px;
  background: #FF6200;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1.25rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.18s;
}
.big-rating-btn:disabled {
  background: #ccc;
  color: #fff;
  cursor: not-allowed;
}
</style>