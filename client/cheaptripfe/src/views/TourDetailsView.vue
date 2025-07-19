<template>
  <div class="tour-detail">

        <div class="main">
            
            <!-- Tiêu đề + box phải -->
            <div class="top-row">
              <div class="right-col">
                <div class="right-info-box">
                  <div class="discount-info-box" v-if="discount">
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
                  <div class="rating-box" v-if="tour.average_rating">
                    <div class="stars">
                      <img v-for="i in 5" :key="i"
                        :src="i <= Math.floor(tour.average_rating) ? '/img/starfull.png' : 
                              i - tour.average_rating <= 0.5 ? '/img/starhalf.png' : '/img/stargrey.png'"
                        alt="star" />
                    </div>
                    <span class="rating-number">{{ tour.average_rating }}</span>
                    <span class="rating-count">({{ tour.review_count }} đánh giá)</span>
                  </div>
                </div>
                <div class="tour-actions">
                  <router-link :to="`/tour/booking/${tour.tour_id}`" class="booking-link">
                    <button class="booking-button" style="text-decoration: none;">
                      <i class="fa-solid fa-ticket"></i>
                      <span>Đặt tour</span>
                    </button>
                  </router-link>
                  <a :href="tour.file_info" class="download-button" target="_blank" rel="noopener">
                    <i class="fa-solid fa-download"></i>
                    <span>Download File Chương trình</span>
                  </a>
                </div>
              </div>
              <div class="left-col">
                <div class="tour-title">{{ tour.name }}</div>
                <div class="tour-info-box">
                  <div class="tour-info-row">
                    <div class="tour-info-label"><i class="fa-solid fa-tag"></i> Loại tour:</div>
                    <div class="tour-info-value">{{ getTourTypeName(tour.type) }}</div>
                  </div>
                  <div class="tour-info-row" v-if="tour.departure_date">
                    <div class="tour-info-label"><i class="fa-solid fa-calendar-day"></i> Ngày khởi hành:</div>
                    <div class="tour-info-value">{{ formatDate(tour.departure_date) }}</div>
                  </div>
                  <div class="tour-info-row">
                    <div class="tour-info-label"><i class="fa-solid fa-qrcode"></i> Mã tour:</div>
                    <div class="tour-info-value">{{ tour.tour_id }}</div>
                  </div>
                  <div class="tour-info-row">
                    <div class="tour-info-label"><i class="fa-regular fa-clock"></i> Thời gian:</div>
                    <div class="tour-info-value">{{ tour.duration }}</div>
                  </div>
                  <div class="tour-info-row">
                    <div class="tour-info-label"><i class="fa-solid fa-bed"></i> Khách sạn:</div>
                    <div class="tour-info-value">{{ tour.hotel }}</div>
                  </div>
                  <div class="tour-info-row">
                    <div class="tour-info-label"><i class="fa-solid fa-house"></i> Nơi khởi hành:</div>
                    <div class="tour-info-value">{{ tour.departure_location }}</div>
                  </div>
                  <div class="tour-info-row">
                    <div class="tour-info-label"><i class="fa-solid fa-car-side"></i> Phương tiện:</div>
                    <div class="tour-info-value">{{ tour.transportation }}</div>
                  </div>
                  <div class="tour-info-row">
                    <div class="tour-info-label"><i class="fa-solid fa-person-walking"></i> Số chỗ nhận:</div>
                    <div class="tour-info-value">{{ tour.available_slots }}</div>
                  </div>
                </div>
              </div>
            </div>

        <!-- <<<THONGTIN -->
        <!-- Đã xóa toàn bộ phần info-title-row và thongtintour cũ ở đây -->

        <!-- THONGTIN>>> -->
        <!-- DIEUKHOAN -->
        <div class="dieukhoan">
            <div class="control">
                <div class="giavebaogom" 
                     :class="{ 'active-tab': activeTab === 'baogom' }"
                     @click="switchTab('baogom')">
                    GIÁ VÉ BAO GỒM
                </div>
                <div class="giavekhongbaogom"
                     :class="{ 'active-tab': activeTab === 'khongbaogom' }"
                     @click="switchTab('khongbaogom')">
                    GIÁ VÉ KHÔNG BAO GỒM
                </div>
            </div>
            <div class="nddieukhoan">
                <div v-if="activeTab === 'baogom'">
                    <ul>
                        <li>Xe ô tô 7 đến 45 chỗ chất lượng cao (tùy số lượng khách thực tế) đưa đón theo chương trình</li>
                        <li>01 đêm khách sạn tại TP Cao Bằng (2 sao hoặc 3 sao tùy lựa chọn), 02 người/phòng (lẻ ghép ngủ 3)</li>
                        <li>01 đêm ngủ homestay tại bản Pác Ngòi, ngủ buồng riêng, 02 người/buồng (lẻ ghép ngủ 3)</li>
                        <li>Homestay buồng riêng sẽ sử dụng nhà vệ sinh chung. Trường hợp nâng cấp lên ngủ phòng nhà nghỉ riêng sẽ có điều hòa và vệ sinh khép kín</li>
                        <li>03 đêm ngủ khách sạn 3 sao Hà Nội</li>
                        <li>06 bữa ăn chính theo chương trình theo tiêu chuẩn của chương trình</li>
                        <li>02 bữa sáng theo lịch trình (bún, miến, phở...) và các bữa sáng tại khách sạn</li>
                        <li>Thuyền thăm quan khu vực Hồ Ba Bể</li>
                        <li>Vé thăm quan các điểm có trong chương trình</li>
                        <li>Hướng dẫn viên phục vụ nhiệt tình, thành thạo, chu đáo xuyên suốt tuyến du lịch</li>
                        <li>Nước uống phục vụ trên xe, mỗi ngày 01 chai 500ml</li>
                        <li>Vé máy bay khứ hồi tính theo giá tại thời điểm đặt</li>
                    </ul>
                </div>
                <div v-else>
                    <ul>
                        <li>Chi phí cá nhân: giặt ủi, điện thoại, đồ uống trong các bữa ăn</li>
                        <li>Phụ thu phòng đơn</li>
                        <li>Tiền tip cho HDV và lái xe</li>
                        <li>Chi phí chụp ảnh tại các điểm tham quan</li>
                        <li>Thuế VAT</li>
                        <li>Các chi phí không được đề cập trong mục bao gồm</li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- DIEUKHOAN --> 
        </div>

        <!-- PHẦN BÌNH LUẬN & ĐÁNH GIÁ -->
        
  </div>
</template>

<script>
export default {
  name: 'TourDetailView',
  data() {
    return {
      tour: {}, // Dữ liệu tour sẽ được lấy từ API
      discount: null, // Dữ liệu discount nếu có
      activeTab: 'baogom', // Tab mặc định là "GIÁ VÉ BAO GỒM"
      newComment: '', // Nội dung bình luận
      userCommentRating: 0 // Số sao người dùng chọn cho bình luận
    };
  },
  created() {
    // Lấy tourId từ route params
    const tourId = this.$route.params.tourId;
    // Gọi hàm để lấy dữ liệu tour từ API
    this.fetchTourDetails(tourId);
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
          throw new Error('Lỗi khi lấy dữ liệu tour');
        }
        this.tour = await tourResponse.json();

        // Xử lý dữ liệu discount, không gây lỗi nếu API discount có vấn đề
        if (discountResponse.ok) {
            const discountData = await discountResponse.json();
            if (discountData) {
                this.discount = discountData;
            }
        }

      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu chi tiết:', error);
        // Fallback to hardcoded data if API fails
        this.tour = {
          tour_id: tourId,
          name: 'Tour không tìm thấy',
          average_rating: 0,
          review_count: 0,
          duration: '5 ngày',
          hotel_standard: '3 sao',
          departure_location: 'TP. Hồ Chí Minh',
          transportation: 'Hàng Không VietJet Air',
          available_seats: 0
        };
      }
    },
    switchTab(tab) {
      this.activeTab = tab;
    },
    formatDate(dateString) {
      if (!dateString) return '';
      const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
      return new Date(dateString).toLocaleDateString('vi-VN', options);
    },
    setUserCommentRating(star) {
      this.userCommentRating = star;
    },
    postComment() {
      // Xử lý gửi bình luận và số sao lên server hoặc thêm vào danh sách bình luận
      // TODO: Gửi userCommentRating và newComment lên backend nếu cần
      alert(`Bạn đã gửi bình luận: ${this.newComment} với số sao: ${this.userCommentRating}`);
      this.newComment = '';
      this.userCommentRating = 0;
    },
    getTourTypeName(type) {
      if (type === 'tour_thuong') return 'Tour thường';
      if (type === 'tour_doan') return 'Tour theo đoàn';
      // Thêm các loại khác nếu có
      return type || 'Không xác định';
    }
  },
};
</script>


<style scoped>
    .tour-detail {
  width: 100vw;
  min-height: 100vh;
  margin-top: 70px;
  display: flex;
  justify-content: center;
  background: #f7f7f7;
}
.main {
  width: 100%;
  max-width: 1100px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  padding: 32px 40px;
  margin: 32px 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.top-row {
  display: flex;
  flex-direction: row;
  gap: 32px;
  align-items: flex-start;
  width: 100%;
}
.right-col {
  flex: 1 1 320px;
  min-width: 260px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.left-col {
  flex: 2 1 400px;
  min-width: 260px;
}
.tour-title {
  font-size: 2rem;
  font-weight: bold;
  color: #ff6200;
  margin-bottom: 18px;
  line-height: 1.2;
}
.tour-info-box {
  background: #eaf8fa;
  border-radius: 12px;
  padding: 18px 18px 12px 18px;
  margin-bottom: 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.tour-info-row {
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
}
.tour-info-label {
  min-width: 120px;
  color: #222;
  font-weight: 500;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 6px;
}
.tour-info-value {
  color: #333;
  font-size: 1rem;
  font-weight: 400;
}
.tour-actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
}
.booking-link, .download-button {
  width: 100%;
}
.booking-button, .download-button {
  width: 100%;
  padding: 10px 0;
  border-radius: 6px;
  border: none;
  font-size: 1.08rem;
  font-weight: bold;
  background: #ff6200;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: background 0.2s;
  text-decoration: none;
}
.booking-button:hover {
  background: #ff8c42;
}
.booking-button span {
  text-decoration: none !important;
}
.download-button {
  background: #1bc6e8;
  color: #fff;
  text-decoration: none;
}
.download-button:hover {
  background: #0d9dbf;
  text-decoration: none;
}
.right-info-box {
  width: 100%;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.discount-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.2rem;
  font-weight: bold;
  color: #222;
  margin-bottom: 4px;
}
.discount-title {
  margin: 0;
  font-size: 1.18rem;
  color: #222;
}
.discount-description {
  margin: 0 0 4px 0;
  color: #444;
  font-size: 1rem;
}
.discount-details {
  font-size: 1rem;
  color: #222;
  margin-bottom: 4px;
}
.discount-percent {
  color: #ff6200;
  font-weight: bold;
  margin-right: 8px;
}
.discount-dates strong {
  color: #222;
  font-weight: bold;
}
.rating-box {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 1.08rem;
  justify-content: flex-start;
}
.stars img {
  width: 18px;
  height: 17px;
  margin-right: 1px;
}
.rating-number {
  font-weight: bold;
  color: #ffb400;
  margin-left: 4px;
  font-size: 1.1rem;
}
.rating-count {
  color: #888;
  font-size: 1rem;
  margin-left: 6px;
}

/* Responsive */
@media (max-width: 900px) {
  .main {
    max-width: 98vw;
    padding: 16px 4vw;
  }
  .top-row {
    gap: 16px;
  }
  .tour-title {
    font-size: 1.3rem;
  }
  .right-info-box {
    padding: 12px 10px;
    font-size: 0.98rem;
  }
}
@media (max-width: 600px) {
  .main {
    max-width: 100vw;
    padding: 8px 2vw;
    border-radius: 0;
    box-shadow: none;
  }
  .top-row {
    flex-direction: column;
    gap: 18px;
  }
  .right-col, .left-col {
    min-width: 0;
    width: 100%;
  }
  .tour-title {
    font-size: 1.1rem;
    margin-bottom: 10px;
  }
  .tour-info-box {
    padding: 10px 4px;
    font-size: 0.98rem;
  }
  .right-info-box {
    padding: 10px 4px;
    font-size: 0.98rem;
    box-shadow: none;
    border-radius: 8px;
  }
}

.nddieukhoan {
  background: #fff;
  border: 1.5px solid #ff6200;
  border-radius: 10px;
  padding: 18px 18px 18px 24px;
  margin-top: 8px;
  font-size: 1.08rem;
  color: #222;
  line-height: 1.7;
  box-shadow: 0 2px 8px rgba(255,98,0,0.06);
}

.nddieukhoan > div {
  margin-bottom: 10px;
}

.nddieukhoan strong,
.nddieukhoan b {
  color: #ff6200;
  font-size: 1.12rem;
  letter-spacing: 0.5px;
  display: block;
  margin-bottom: 8px;
}

.nddieukhoan br {
  display: none;
}

.nddieukhoan ul {
  padding-left: 18px;
  margin: 0;
}

.nddieukhoan li {
  margin-bottom: 7px;
  list-style: disc inside;
  font-size: 1.05rem;
}

@media (max-width: 600px) {
  .nddieukhoan {
    padding: 10px 6px 10px 12px;
    font-size: 0.98rem;
  }
  .nddieukhoan strong,
  .nddieukhoan b {
    font-size: 1.02rem;
    margin-bottom: 6px;
  }
  .nddieukhoan li {
    font-size: 0.98rem;
    margin-bottom: 5px;
  }
}

.control {
  display: flex;
  width: 100%;
  margin-bottom: 0;
  border-bottom: 2px solid #ff6200;
  background: #fff;
}

.giavebaogom, .giavekhongbaogom {
  flex: 1 1 0;
  text-align: center;
  padding: 12px 0;
  font-size: 1.08rem;
  font-weight: bold;
  color: #ff6200;
  background: #fff;
  border: none;
  border-radius: 10px 10px 0 0;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  border-bottom: 2px solid transparent;
}

.giavebaogom.active-tab,
.giavekhongbaogom.active-tab {
  background: #ff6200;
  color: #fff;
  border-bottom: 2px solid #ff6200;
  z-index: 2;
}

@media (max-width: 600px) {
  .giavebaogom, .giavekhongbaogom {
    font-size: 1rem;
    padding: 10px 0;
  }
}

</style>