<template>
 <div class="HomeView" > <!--Thẻ div cho toàn bộ trang home-->

    <!-- Search -->
    <div class="search">
        
        <div class="searchbox">

            <div class="noikhoihanh">
                <i class="fa-solid fa-location-dot"></i>
                <div class="noikhoihanhbox">
                    <select v-model="selectedDeparture" name="departure" id="departure">
                      <option value="">Chọn nơi khởi hành...</option>
                      <option value="TP.HCM">TP.HCM</option>
                      <option value="Hà Nội">Hà Nội</option>
                    </select>
               
                </div>
            </div>

            <div class="loaitour">
                 <i class="fa-solid fa-suitcase-rolling"></i>
                <div class="noikhoihanhbox">
                    
                    <select v-model="selectedType" name="type" id="type">
                      <option value="">Chọn loại tour...</option>
                      <option value="tour_thuong">Tour thường</option>
                      <option value="tour_doan">Tour theo đoàn</option>
                    </select>
               
                </div>
            </div>

            <div class="loaitour">
                <i class="fa-solid fa-calendar-days calendar-icon" style="padding-right: 0px"></i>
                <div class="chonthoigian" style="font-size: 12pt">
                  <div class="chonthoigianbx">
                    <VueDatePicker
                      v-model="selectedDate"
                      placeholder="Chọn ngày khởi hành..."
                      :format="'dd/MM/yyyy'"
                      :enable-time-picker="false"
                      :clearable="true"
                      :auto-apply="true"
                      ref="datepicker"
                    />
                  <i class="fa-solid fa-calendar-week" @click="openDatePicker"></i>
                  </div>
                   
                </div>
            </div>

            <div class="noiden">
                 <i class="fa-solid fa-location-dot"></i>
                <div class="noikhoihanhbox">
                    
                    <select v-model="selectedDestination" name="destination" id="destination">
                      <option value="">Chọn nơi đến...</option>
                      <option value="An Giang">An Giang</option>
                      <option value="Bà Rịa - Vũng Tàu">Bà Rịa - Vũng Tàu</option>
                      <option value="Bắc Giang">Bắc Giang</option>
                      <option value="Bắc Kạn">Bắc Kạn</option>
                      <option value="Bạc Liêu">Bạc Liêu</option>
                      <option value="Bắc Ninh">Bắc Ninh</option>
                      <option value="Bến Tre">Bến Tre</option>
                      <option value="Bình Định">Bình Định</option>
                      <option value="Bình Dương">Bình Dương</option>
                      <option value="Bình Phước">Bình Phước</option>
                      <option value="Bình Thuận">Bình Thuận</option>
                      <option value="Cà Mau">Cà Mau</option>
                      <option value="Cần Thơ">Cần Thơ</option>
                      <option value="Cao Bằng">Cao Bằng</option>
                      <option value="Đà Nẵng">Đà Nẵng</option>
                      <option value="Đắk Lắk">Đắk Lắk</option>
                      <option value="Đắk Nông">Đắk Nông</option>
                      <option value="Điện Biên">Điện Biên</option>
                      <option value="Đồng Nai">Đồng Nai</option>
                      <option value="Đồng Tháp">Đồng Tháp</option>
                      <option value="Gia Lai">Gia Lai</option>
                      <option value="Hà Giang">Hà Giang</option>
                      <option value="Hà Nam">Hà Nam</option>
                      <option value="Hà Nội">Hà Nội</option>
                      <option value="Hà Tĩnh">Hà Tĩnh</option>
                      <option value="Hải Dương">Hải Dương</option>
                      <option value="Hải Phòng">Hải Phòng</option>
                      <option value="Hậu Giang">Hậu Giang</option>
                      <option value="Hòa Bình">Hòa Bình</option>
                      <option value="Hưng Yên">Hưng Yên</option>
                      <option value="Khánh Hòa">Khánh Hòa</option>
                      <option value="Kiên Giang">Kiên Giang</option>
                      <option value="Kon Tum">Kon Tum</option>
                      <option value="Lai Châu">Lai Châu</option>
                      <option value="Lâm Đồng">Lâm Đồng</option>
                      <option value="Lạng Sơn">Lạng Sơn</option>
                      <option value="Lào Cai">Lào Cai</option>
                      <option value="Long An">Long An</option>
                      <option value="Nam Định">Nam Định</option>
                      <option value="Nghệ An">Nghệ An</option>
                      <option value="Ninh Bình">Ninh Bình</option>
                      <option value="Ninh Thuận">Ninh Thuận</option>
                      <option value="Phú Thọ">Phú Thọ</option>
                      <option value="Phú Yên">Phú Yên</option>
                      <option value="Quảng Bình">Quảng Bình</option>
                      <option value="Quảng Nam">Quảng Nam</option>
                      <option value="Quảng Ngãi">Quảng Ngãi</option>
                      <option value="Quảng Ninh">Quảng Ninh</option>
                      <option value="Quảng Trị">Quảng Trị</option>
                      <option value="Sóc Trăng">Sóc Trăng</option>
                      <option value="Sơn La">Sơn La</option>
                      <option value="Tây Ninh">Tây Ninh</option>
                      <option value="Thái Bình">Thái Bình</option>
                      <option value="Thái Nguyên">Thái Nguyên</option>
                      <option value="Thanh Hóa">Thanh Hóa</option>
                      <option value="Thừa Thiên Huế">Thừa Thiên Huế</option>
                      <option value="Tiền Giang">Tiền Giang</option>
                      <option value="TP Hồ Chí Minh">TP Hồ Chí Minh</option>
                      <option value="Trà Vinh">Trà Vinh</option>
                      <option value="Tuyên Quang">Tuyên Quang</option>
                      <option value="Vĩnh Long">Vĩnh Long</option>
                      <option value="Vĩnh Phúc">Vĩnh Phúc</option>
                      <option value="Yên Bái">Yên Bái</option>
                    </select>
                
                </div>
            </div>

            <div class="btntimkiem">
                <button @click="searchTours">Tìm kiếm</button>
            </div>


        </div>
       
    </div>
    <!-- Search -->

    <!-- Kết quả tìm kiếm -->
    <div class="search-results" v-if="hasSearchCriteria">
        <div class="results-header">
            <h2>Tìm được {{ filteredTours.length }} kết quả</h2>
            <div class="search-criteria">
                <span v-if="selectedDeparture">Nơi khởi hành: {{ selectedDeparture }}</span>
                <span v-if="selectedType"> | Loại tour: {{ selectedType }}</span>
                <span v-if="selectedDestination"> | Nơi đến: {{ selectedDestination }}</span>
                <span v-if="selectedDate"> | Ngày khởi hành: {{ formatDate(selectedDate) }}</span>
            </div>
        </div>
    </div>

    <!-- Danh mục bài  -->
    <div class="danhmucbai">
        <!-- Line và title -->
        <div class="lineandtitle">
             <!-- <div style="margin-top: 0px; height: 1.5px; width: 633px" class="line1">

            </div> -->
            <div style="color: black; font-weight: bold;">
              <img src="/img/img_titleSearchResult.png" alt="" style="width: 120px; height: 60px">
            </div>

            <!-- <div style="margin-top: 0px; height: 1.5px; width: 633px" class="line2"></div> -->
        </div>

        <div class="tours">
            <div v-for="tour in paginatedTours" :key="tour._id" class="article">
              <router-link 
                :to="`/tour/${tour.tour_id}`"
                style="text-decoration: none;"
              >
                <div class="card" style="width: 20rem;">
                    <img :src="tour.image_url" style="height: 130px; border-radius: 5px 5px 0px 0px" class="card-img-top" alt="">
                    <div class="card-body">
                       <div class="card-title" style="font-size: 12pt;">{{ tour.name }}</div>
                    </div>
                    <div class="starandcmt">
                      <!-- Sao đánh giá -->
                        <div style="width: 125px" class="star">
                          <div class="numberstar" style="margin-right:5px;">{{ tour.average_rating }}</div>
                          <img v-for="(star, index) in ShowStar(tour.average_rating)" :key="index" :src="star" alt="star" style="width: 15px; height: 14px"/>
                        </div>
                      <!-- Số lượt bình luận -->
                        <div class="cmt">
                          ({{ tour.review_count }} Bình luận)
                        </div>
                    </div>
                    <div style="text-align:center; color: #FF6200; font-weight: bold; margin-top: 10px; margin-bottom: 10px; font-size: 14pt" class="price">{{ formatCurrency(tour.price_per_adult) }}</div>
                </div>
              </router-link>
            </div>

            <!-- nút chuyển -->
            <div class="control" v-if="totalPages > 1" style="width: 100%; height: 20px;margin-bottom: 10px; display: flex; justify-content: center">
                <nav aria-label="Page navigation example">
                  <ul class="pagination justify-content-center">
                    <li class="page-item" :class="{ disabled: currentPage === 1 }">
                      <a class="page-link" href="#" @click.prevent="changePage(currentPage - 1)">Previous</a>
                    </li>
                    <li v-for="pageNumber in totalPages" :key="pageNumber" class="page-item" :class="{ active: currentPage === pageNumber }">
                        <a class="page-link" href="#" @click.prevent="changePage(pageNumber)">{{ pageNumber }}</a>
                    </li>
                    <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                      <a class="page-link" href="#" @click.prevent="changePage(currentPage + 1)">Next</a>
                    </li>
                  </ul>
                </nav>
            </div>
        </div>
    </div>
     <!-- Danh mục bài  -->

</div>

  <!-- Nút lên đầu trang -->
  
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

export default {
  name: 'SearchResults',
  components: {
    VueDatePicker
  },
  data() {
    return {
      selectedDate: null,
      selectedDeparture: '',
      selectedType: '',
      selectedDestination: '',
      tours: [],
      currentPage: 1,
      toursPerPage: 8,
      hasSearchCriteria: false,
      filteredTours: [],
    };
  },
  computed: {
    paginatedTours() {
      const startIndex = (this.currentPage - 1) * this.toursPerPage;
      const endIndex = startIndex + this.toursPerPage;
      return this.filteredTours.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.filteredTours.length / this.toursPerPage);
    }
  },
  mounted() {
    this.fetchTours();
    this.loadSearchParams();
  },
  methods: {
    openDatePicker() {
      this.$refs.datepicker.openMenu();
    },
    async fetchTours() {
      try {
        const response = await fetch('http://localhost:3000/api/tours');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        this.tours = await response.json();
        this.applySearchFilters();
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu tour:', error);
      }
    },
    loadSearchParams() {
      // Lấy tham số tìm kiếm từ URL
      const query = this.$route.query;
      this.selectedDeparture = query.departure || '';
      this.selectedType = query.type || '';
      this.selectedDestination = query.destination || '';
      this.selectedDate = query.date ? new Date(query.date) : null;
      
      // Kiểm tra xem có tham số tìm kiếm nào không
      this.hasSearchCriteria = !!(this.selectedDeparture || this.selectedType || this.selectedDestination || this.selectedDate);
    },
    applySearchFilters() {
      if (!this.hasSearchCriteria) {
        this.filteredTours = this.tours;
        return;
      }

      this.filteredTours = this.tours.filter(tour => {
        let matches = true;

        // Lọc theo nơi khởi hành
        if (this.selectedDeparture && tour.departure_location) {
          matches = matches && tour.departure_location.toLowerCase().includes(this.selectedDeparture.toLowerCase());
        }

        // Lọc theo loại tour
        if (this.selectedType && tour.type) {
          matches = matches && tour.type.toLowerCase().includes(this.selectedType.toLowerCase());
        }

        // Lọc theo nơi đến (sử dụng trường destination mới)
        if (this.selectedDestination && tour.destination) {
          matches = matches && tour.destination.toLowerCase().includes(this.selectedDestination.toLowerCase());
        }

        // Lọc theo ngày khởi hành
        if (this.selectedDate && tour.departure_date) {
          const tourDate = new Date(tour.departure_date).toISOString().split('T')[0];
          const searchDate = this.selectedDate.toISOString().split('T')[0];
          matches = matches && tourDate === searchDate;
        }

        return matches;
      });
    },
    searchTours() {
      // Tạo object chứa các điều kiện tìm kiếm
      const searchCriteria = {
        departure: this.selectedDeparture,
        type: this.selectedType,
        destination: this.selectedDestination,
        date: this.selectedDate ? this.selectedDate.toISOString().split('T')[0] : null
      };
      
      console.log('Tìm kiếm với điều kiện:', searchCriteria);
      
      // Cập nhật URL với tham số tìm kiếm mới
      this.$router.push({
        path: '/search-results',
        query: {
          departure: searchCriteria.departure || '',
          type: searchCriteria.type || '',
          destination: searchCriteria.destination || '',
          date: searchCriteria.date || ''
        }
      });

      // Áp dụng bộ lọc
      this.hasSearchCriteria = true;
      this.applySearchFilters();
      this.currentPage = 1; // Reset về trang đầu
    },
    formatCurrency(value) {
      if (typeof value !== "number") {
        return value;
      }
      return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    },
    ShowStar(rating) {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStar;
        
        const stars = [];
        for (let i = 0; i < fullStars; i++) {
            stars.push('/img/starfull.png');
        }
        if (halfStar) {
            stars.push('/img/starhalf.png');
        }
        for (let i = 0; i < emptyStars; i++) {
            stars.push('/img/stargrey.png');
        }
        return stars;
    },
    changePage(pageNumber) {
        if (pageNumber >= 1 && pageNumber <= this.totalPages) {
            this.currentPage = pageNumber;
            window.scrollTo({ top: document.querySelector('.danhmucbai').offsetTop, behavior: 'smooth' });
        }
    },
    formatDate(date) {
      if (!date) return '';
      return date.toLocaleDateString('vi-VN');
    },
  }
};
</script>




<style>
   
    /* TÌM KIẾM */
    .HomeView{
        width: 100%;
        height: 100%;
    }

    /* Kết quả tìm kiếm */
    .search-results {
        width: 100%;
        padding: 20px 0;
        background-color: #f8f9fa;
        border-bottom: 1px solid #e9ecef;
    }

    .results-header {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
        text-align: center;
    }

    .results-header h2 {
        color: #FF6200;
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    .search-criteria {
        color: #666;
        font-size: 14px;
        line-height: 1.5;
    }

    .search-criteria span {
        display: inline-block;
        margin: 0 5px;
    }

    .search-criteria span:first-child {
        margin-left: 0;
    }

    /* Responsive cho search results */
    @media (max-width: 768px) {
        .results-header h2 {
            font-size: 20px;
        }
        
        .search-criteria {
            font-size: 12px;
        }
        
        .search-criteria span {
            display: block;
            margin: 2px 0;
        }
    }

  

   
    

   
    
    /* Tùy chỉnh pagination */
    .pagination {
      gap: 5px;
    }

    .page-item {
      margin: 0 3px;
    }

    .page-link {
      width: 30px;
      height: 30px;
      border-radius: 50% !important;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 500;
      color: #666;
      border: none;
      background-color: #f0f0f0;
      transition: all 0.3s ease;
      padding: 0;
      font-size: 12px;
    }

    .page-link:hover {
      background-color: #FF6200;
      color: white;
      transform: translateY(-2px);
      box-shadow: 0 3px 6px rgba(255, 98, 0, 0.3);
    }

    .page-item.active .page-link {
      background-color: #FF6200;
      color: white;
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(255, 98, 0, 0.3);
    }

    .page-item.disabled .page-link {
      background-color: #f8f8f8;
      color: #aaa;
      cursor: not-allowed;
      opacity: 0.7;
    }

    /* Previous/Next buttons */
    .page-item:first-child .page-link,
    .page-item:last-child .page-link {
      width: auto;
      padding: 0 12px;
      border-radius: 20px !important;
      font-weight: normal;
      font-size: 11px;
    }

    .page-item:first-child {
      margin-right: 5px;
    }

    .page-item:last-child {
      margin-left: 5px;
    }

    /* Hover effect for Previous/Next */
    .page-item:not(.disabled):first-child .page-link:hover,
    .page-item:not(.disabled):last-child .page-link:hover {
      background-color: #FF6200;
      color: white;
    }

    /* Active state animation */
    .page-item.active .page-link {
      animation: pulse 1.5s infinite;
    }

    @keyframes pulse {
      0% {
        box-shadow: 0 4px 8px rgba(255, 98, 0, 0.3);
      }
      50% {
        box-shadow: 0 4px 12px rgba(255, 98, 0, 0.5);
      }
      100% {
        box-shadow: 0 4px 8px rgba(255, 98, 0, 0.3);
      }
    }

    marquee {
      display: flex;
      align-items: center;
      width: 100%;
    }

    /* Custom styles for datepicker */
    .dp__main {
        font-family: inherit;
    }

    .dp__input {
        width: 100%;
        height: 100%;
        border: none !important;
        outline: none;
        padding: 0 10px;
        border-radius: 5px;
        background-color: rgba(255, 255, 255, 0.9) !important;
        color: #333;
        font-size: 14px;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .dp__input:hover {
        background-color: rgba(255, 255, 255, 1) !important;
        box-shadow: 0 2px 8px rgba(27, 198, 232, 0.2);
    }

    .dp__input:focus {
        background-color: white !important;
        box-shadow: 0 2px 8px rgba(27, 198, 232, 0.3);
    }

    .dp__calendar_header {
        color: #FF6200;
        font-weight: bold;
    }

    .dp__active_date {
        background-color: #1BC6E8 !important;
        color: white !important;
    }

    .dp__today {
        border: 1px solid #1BC6E8 !important;
    }

    .dp__arrow_bottom {
        display: none;
    }

    .dp__menu {
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .dp__overlay_cell_active {
        background-color: #1BC6E8 !important;
        color: white !important;
    }

    .dp__range_end, .dp__range_start, .dp__active_date {
        background: #1BC6E8 !important;
    }

    .dp__cell_offset {
        color: #ccc;
    }

    .dp__cell:hover {
        background-color: rgba(27, 198, 232, 0.1) !important;
        color: #1BC6E8 !important;
    }

    .dp__clear_icon {
        color: #FF6200;
    }

    .dp__month_year_select {
        color: #333;
    }

    .dp__overlay_cell:hover {
        background-color: rgba(27, 198, 232, 0.1) !important;
        color: #1BC6E8 !important;
    }

    .dp__overlay_cell_active {
        background-color: #1BC6E8 !important;
        color: white !important;
    }

    .dp__button {
        color: #1BC6E8 !important;
    }

    .dp__button:hover {
        background-color: rgba(27, 198, 232, 0.1) !important;
    }

    .dp__now_default {
        color: #FF6200 !important;
    }

    .noikhoihanhbox .dp__main {
        width: 100%;
        height: 100%;
    }

    .noikhoihanhbox .dp__input {
        width: 100%;
        height: 100%;
        padding: 0 10px;
        border: none;
        border-radius: 5px;
        background-color: rgba(255, 255, 255, 0.9);
        color: #333;
        font-size: 14px;
        cursor: pointer;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23FF6200' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-position: right 10px center;
        background-size: 15px;
        transition: all 0.3s ease;
    }

    .dp__input:hover {
        background-color: rgba(255, 255, 255, 1);
        box-shadow: 0 2px 8px rgba(27, 198, 232, 0.2);
    }

    .dp__input:focus {
        background-color: white;
        box-shadow: 0 2px 8px rgba(27, 198, 232, 0.3);
    }

    .dp__calendar_header {
        color: #FF6200;
        font-weight: bold;
    }

    .dp__active_date {
        background-color: #1BC6E8 !important;
        color: white !important;
    }

    .dp__today {
        border: 1px solid #1BC6E8 !important;
    }

    .dp__menu {
        z-index: 9999;
    }

    /* Thêm style cho container */
    .loaitour {
        position: relative;
        z-index: 1;
    }

    /* Đảm bảo popup hiển thị trên cùng */
    .dp__outer_menu {
        z-index: 999999 !important;
    }

    .calendar-icon {
        font-size: 18px;
        cursor: pointer;
        color: #FF6200;
        transition: transform 0.3s ease;
        padding: 8px;
        z-index: 2;
    }

    .calendar-icon:hover {
        transform: scale(1.1);
    }

    .hidden-input {
        display: none !important;
    }

    /* Thêm style cho popup calendar */
    :deep(.dp__calendar_header) {
        color: #FF6200;
        font-weight: bold;
    }

    :deep(.dp__active_date) {
        background-color: #1BC6E8 !important;
        color: white !important;
    }

    :deep(.dp__today) {
        border: 1px solid #1BC6E8 !important;
    }

    :deep(.dp__cell_offset) {
        color: #ccc !important;
    }

    :deep(.dp__cell:hover) {
        background-color: rgba(27, 198, 232, 0.1) !important;
        color: #1BC6E8 !important;
    }

    :deep(.dp__range_end), :deep(.dp__range_start) {
        background: #1BC6E8 !important;
    }

    :deep(.dp__overlay_cell_active) {
        background-color: #1BC6E8 !important;
        color: white !important;
    }

    /* Ẩn hoàn toàn icon mặc định */
    :deep(.dp__pointer),
    :deep(.dp__arrow_bottom),
    :deep(.dp__input_icon),
    :deep(.dp__clear_icon) {
        display: none !important;
        width: 0 !important;
        margin: 0 !important;
    }

    :deep(.dp__input_wrap) {
        margin: 0 !important;
        padding: 0 !important;
    }

    :deep(.dp__input) {
        padding: 0 8px !important;
        margin: 0 !important;
        width: 100% !important;
        font-size: 12pt !important;
        color: #666 !important;
        appearance: none !important;
        -webkit-appearance: none !important;
        -moz-appearance: none !important;
        background-image: none !important;
        cursor: default !important;
        pointer-events: none !important;
    }

    :deep(.dp__input)::placeholder {
        color: #666 !important;
        opacity: 1 !important;
        font-size: 14px !important;
    }

    :deep(.dp__pointer) {
        display: none !important;
    }

    /* Ẩn text khi đã chọn ngày */
    :deep(.dp__input_wrap) {
        position: relative;
    }

    :deep(.dp__input_wrap::after) {
        /* content: "Chọn ngày khởi hành..."; */ /* Đã bị vô hiệu hóa */
        position: absolute;
        left: 8px;
        top: 50%;
        transform: translateY(-50%);
        color: #666;
        font-size: 14px;
        pointer-events: none;
        opacity: 1;
    }

    :deep(.dp__input_wrap.dp__input_has_value::after) {
        opacity: 0 !important;
        transition: opacity 0.2s ease-in-out;
    }

    /* Style riêng cho ngày đã chọn */
    :deep(.dp__input_wrap.dp__input_has_value) input {
        font-size: 12pt !important;
    }

    .noikhoihanhbox {
        width: 80%;
        height: 80%;
        position: relative;
        display: flex;
        align-items: center;
    }

    /* VIẾT RESPONSIVE */
    @media (max-width: 480px){  /*Ở màn hình mobile (nhỏ hơn 479px)*/ 
        .HomeView{
          overflow: hidden !important;
        }
        /* <=======SEARCH=======> */
       .search {
          width: 100%;
          height: 280px; /* Tăng chiều cao để chứa các phần tử xuống dòng */
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          margin: 0 !important;
          background-color: rgb(227, 252, 255);
        }

        .searchbox {
          width: 90%; /* Thu hẹp chiều rộng để có khoảng cách hai bên */
          height: 260px; /* Chiều cao tự động để chứa nội dung */
          flex-wrap: wrap; /* Cho phép các phần tử xuống dòng */
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(250deg, #dd490f, #13c0e7); 
          border-radius: 10px; /* Bo tròn nhẹ để đẹp hơn */
          padding: 5px 10px; /* Thêm padding để tạo không gian bên trong */
          gap: 0px; /* Khoảng cách giữa các phần tử */
          box-shadow: 0 4px 15px rgba(27, 198, 232, 0.2); /* Giữ shadow */
          margin: 0 auto; /* Căn giữa */
        }

        .noikhoihanh, .loaitour, .noiden {
          width: 100%; /* Chiếm toàn bộ chiều rộng của searchbox */
          height: 45px; /* Chiều cao cố định */
          display: flex;
          justify-content: flex-start; /* Căn trái cho đồng bộ */
          align-items: center;
          margin: 0px 0; /* Khoảng cách trên dưới giữa các phần tử */
          background-color: rgba(255, 255, 255, 0.9); /* Nền trắng nhẹ */
          border-radius: 10px; /* Bo tròn nhẹ */
          padding: 0 10px; /* Padding bên trong */
          
        }


        .noikhoihanh i, .loaitour i, .noiden i {
          font-size: 16px; /* Tăng kích thước icon để dễ nhìn */
          margin-right: 10px; /* Khoảng cách giữa icon và select */
          color: #FF6200; /* Màu cam đặc trưng */
        }

        .chonthoigian i{
          font-size: 16px; /* Tăng kích thước icon để dễ nhìn */
          margin-right: 10px; /* Khoảng cách giữa icon và select */
          color: #FF6200; /* Màu cam đặc trưng */
        }

        .noikhoihanhbox {
          width: 100%; /* Chiếm toàn bộ chiều rộng của phần tử cha */
          height: 100%; /* Chiều cao bằng với phần tử cha */
          display: flex;
          align-items: center;
        }

        .noikhoihanhbox select, .noikhoihanhbox .dp__input {
          width: 100%; /* Chiếm toàn bộ chiều rộng */
          height: 35px; /* Chiều cao nhỏ hơn để gọn gàng */
          border: none; /* Bỏ viền */
          outline: none; /* Bỏ outline khi focus */
          padding: 0 30px 0 10px; /* Padding để chứa mũi tên dropdown */
          border-radius: 8px; /* Bo tròn nhẹ */
          background-color: white; /* Nền trắng */
          color: #333; /* Màu chữ */
          font-size: 14px; /* Kích thước chữ vừa phải */
          cursor: pointer;
          appearance: none; /* Bỏ giao diện mặc định của select */
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23FF6200' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 10px center;
          background-size: 12px; /* Kích thước mũi tên nhỏ hơn */
        }

        .chonthoigianbx{
         width: 80%;
          height: 80%;
          position: relative;
          display: flex;
          align-items: center;
        }

        .chonthoigianbx  {
         width: 264px;
         height: 35px;
         border: none;
         border-radius: 5px;
         display: flex;
         justify-content: center;
         align-items: center;
         gap: 10px;
         color: #FF6200;
         background-color: white;
         transition: all 0.3s ease;
         cursor: pointer;
      }

      .chonthoigianbx select{
         width: 100%; /* Chiếm toàn bộ chiều rộng */
          height: 35px; /* Chiều cao nhỏ hơn để gọn gàng */
          border: none; /* Bỏ viền */
          outline: none; /* Bỏ outline khi focus */
          padding: 0 30px 0 10px; /* Padding để chứa mũi tên dropdown */
          border-radius: 8px; /* Bo tròn nhẹ */
          background-color: white; /* Nền trắng */
          color: #333; /* Màu chữ */
          font-size: 14px; /* Kích thước chữ vừa phải */
          cursor: pointer;
          appearance: none; /* Bỏ giao diện mặc định của select */
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23FF6200' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 10px center;
          background-size: 12px; /* Kích thước mũi tên nhỏ hơn */
      }
      .fa-calendar-week{
        font-size: 12px !important;
        margin-right: 10px !important;
      }

      
      .dp__input_wrap::after {
        /* content: "Chọn ngày khởi hành..."; */ /* Đã bị vô hiệu hóa */
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        color: black;
        font-size: 14px;
        pointer-events: none;
        opacity: 1;
      }

      .dp__input_icon{
        display: none !important; /* Ẩn icon mặc định */
      }

     
      .calendar-icon{
        padding-left: 0px;
      }

    
      .btntimkiem {
        width: 30%; /* Chiếm toàn bộ chiều rộng */
        height: 10%; /* Đồng bộ với các input khác */
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0px; /* Khoảng cách dưới */
      }

      .btntimkiem button{
        font-size: 12px !important;
        background-color: #FF6200;
        border: #FF6200;
        border-radius: 5px;
        width: 100%;
        height: 100%;
        color: white;
        font-weight: bold;
      }

      .btntimkiem button:hover {
        background-color: #f58f4f; /* Màu cam nhạt khi hover */
        transform: scale(1.05); /* Phóng to nhẹ */
      }

      /* Datepicker adjustments */
      .noikhoihanhbox .dp__input {
        background-color: white; /* Nền trắng */
        border-radius: 8px; /* Bo tròn */
        padding: 0 10px; /* Padding đồng bộ */
        font-size: 14px; /* Kích thước chữ */
        cursor: pointer;
      }

      :deep(.dp__input_wrap::after) {
        font-size: 14px; /* Kích thước chữ placeholder */
        left: 10px; /* Căn chỉnh vị trí */
      }
  
      /* <=======SEARCH=======> */


      /* TOURS */
      .danhmucbai{
        margin-top: 0px !important;
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
      }

      .tours {
        width: 90%;
        max-width: 1200px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 0px !important;
        gap: 10px;
      }

      .lineandtitle img{
        width: 80px!important;
        height: 40px!important;
        margin-bottom: 20px!important;
        margin-top: 10px!important;
      }

      .article {
        width: calc(50% - 5px);
        min-width: 140px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .card {
        width: 100% !important;
        height: 140px !important;
        display: flex;
        flex-direction: column;
        gap: 2px;
        background-color: #fff;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }

      .card:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
      }

      .card img {
        width: 100% !important;
        height: 70px !important;
        object-fit: cover;
        border-radius: 12px 12px 0 0;
      }

      .card-body {
        background-color: transparent;
        padding: 2px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: auto;
      }

      .card-title {
        font-size: 7pt !important;
        color: #333;
        background-color: transparent;
        width: 100% !important;
        line-height: 1.1;
        margin-bottom: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        height: 22px;
      }

      .starandcmt {
        background-color: transparent;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0 0px; /* Giảm từ 0 2px xuống 0 1px */
        margin-bottom: 0!important; /* Giảm từ 5px xuống 0px */
        gap: 40px; /* Thêm gap để điều chỉnh khoảng cách giữa sao và bình luận */
      
      }

      .star {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px!important; /* Thu gọn theo nội dung */
      }

      .numberstar, .cmt {
        font-size: 8px !important; /* Giảm từ 6pt xuống 5pt */
        color: #666;
      }

      .star img {
        width: 8px !important; /* Giảm từ 6px xuống 5px */
        height: 8px !important;
        margin-left: 0.3px; /* Giảm từ 0.5px xuống 0.3px */
      }

      .price {
        font-size: 8pt !important;
        color: #FF6200;
        font-weight: bold;
        text-align: center;
        margin-top: 0px !important; /* Giảm từ 5px xuống 0px */
      }
        /* <=======TOUR=======> */
    }
/* Responsive màn hình lớn hơn 480px và nhỏ hơn 767px */

    @media(min-width:480px) and (max-width: 767px){
        .HomeView{
          overflow: hidden !important;
        }
        /* <=======SEARCH=======> */
       .search {
          width: 100%;
          height: 280px; /* Tăng chiều cao để chứa các phần tử xuống dòng */
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          margin: 0 !important;
          background-color: rgb(227, 252, 255);
        }

        .searchbox {
          width: 90%; /* Thu hẹp chiều rộng để có khoảng cách hai bên */
          height: 260px; /* Chiều cao tự động để chứa nội dung */
          flex-wrap: wrap; /* Cho phép các phần tử xuống dòng */
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(250deg, #dd490f, #13c0e7); 
          border-radius: 10px; /* Bo tròn nhẹ để đẹp hơn */
          padding: 5px 10px; /* Thêm padding để tạo không gian bên trong */
          gap: 0px; /* Khoảng cách giữa các phần tử */
          box-shadow: 0 4px 15px rgba(27, 198, 232, 0.2); /* Giữ shadow */
          margin: 0 auto; /* Căn giữa */
        }

        .noikhoihanh, .loaitour, .noiden {
          width: 100%; /* Chiếm toàn bộ chiều rộng của searchbox */
          height: 45px; /* Chiều cao cố định */
          display: flex;
          justify-content: flex-start; /* Căn trái cho đồng bộ */
          align-items: center;
          margin: 0px 0; /* Khoảng cách trên dưới giữa các phần tử */
          background-color: rgba(255, 255, 255, 0.9); /* Nền trắng nhẹ */
          border-radius: 10px; /* Bo tròn nhẹ */
          padding: 0 10px; /* Padding bên trong */
          
        }


        .noikhoihanh i, .loaitour i, .noiden i {
          font-size: 16px; /* Tăng kích thước icon để dễ nhìn */
          margin-right: 10px; /* Khoảng cách giữa icon và select */
          color: #FF6200; /* Màu cam đặc trưng */
        }

        .chonthoigian i{
          font-size: 16px; /* Tăng kích thước icon để dễ nhìn */
          margin-right: 10px; /* Khoảng cách giữa icon và select */
          color: #FF6200; /* Màu cam đặc trưng */
        }

        .noikhoihanhbox {
          width: 100%; /* Chiếm toàn bộ chiều rộng của phần tử cha */
          height: 100%; /* Chiều cao bằng với phần tử cha */
          display: flex;
          align-items: center;
        }

        .noikhoihanhbox select, .noikhoihanhbox .dp__input {
          width: 100%; /* Chiếm toàn bộ chiều rộng */
          height: 35px; /* Chiều cao nhỏ hơn để gọn gàng */
          border: none; /* Bỏ viền */
          outline: none; /* Bỏ outline khi focus */
          padding: 0 30px 0 10px; /* Padding để chứa mũi tên dropdown */
          border-radius: 8px; /* Bo tròn nhẹ */
          background-color: white; /* Nền trắng */
          color: #333; /* Màu chữ */
          font-size: 14px; /* Kích thước chữ vừa phải */
          cursor: pointer;
          appearance: none; /* Bỏ giao diện mặc định của select */
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23FF6200' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 10px center;
          background-size: 12px; /* Kích thước mũi tên nhỏ hơn */
        }

        .chonthoigian{
          width: 100%;
        }

        

        .chonthoigianbx  {
         width: 100%;
         height: 35px;
         border: none;
         border-radius: 5px;
         display: flex;
         justify-content: center;
         align-items: center;
         gap: 10px;
         color: #FF6200;
         background-color: white;
         transition: all 0.3s ease;
         cursor: pointer;
      }

      .chonthoigianbx select{
         width: 100%; /* Chiếm toàn bộ chiều rộng */
          height: 35px; /* Chiều cao nhỏ hơn để gọn gàng */
          border: none; /* Bỏ viền */
          outline: none; /* Bỏ outline khi focus */
          padding: 0 30px 0 10px; /* Padding để chứa mũi tên dropdown */
          border-radius: 8px; /* Bo tròn nhẹ */
          background-color: white; /* Nền trắng */
          color: #333; /* Màu chữ */
          font-size: 14px; /* Kích thước chữ vừa phải */
          cursor: pointer;
          appearance: none; /* Bỏ giao diện mặc định của select */
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23FF6200' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 10px center;
          background-size: 12px; /* Kích thước mũi tên nhỏ hơn */
      }
      .fa-calendar-week{
        font-size: 12px !important;
        margin-right: 10px !important;
      }

      
      .dp__input_wrap::after {
        /* content: "Chọn ngày khởi hành..."; */ /* Đã bị vô hiệu hóa */
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        color: black;
        font-size: 14px;
        pointer-events: none;
        opacity: 1;
      }

      .dp__input_icon{
        display: none !important; /* Ẩn icon mặc định */
      }

     
      .calendar-icon{
        padding-left: 0px;
      }

    
      .btntimkiem {
        width: 30%; /* Chiếm toàn bộ chiều rộng */
        height: 10%; /* Đồng bộ với các input khác */
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0px; /* Khoảng cách dưới */
      }

      .btntimkiem button{
        font-size: 12px !important;
        background-color: #FF6200;
        border: #FF6200;
        border-radius: 5px;
        width: 100%;
        height: 100%;
        color: white;
        font-weight: bold;
      }

      .btntimkiem button:hover {
        background-color: #f58f4f; /* Màu cam nhạt khi hover */
        transform: scale(1.05); /* Phóng to nhẹ */
      }

      /* Datepicker adjustments */
      .noikhoihanhbox .dp__input {
        background-color: white; /* Nền trắng */
        border-radius: 8px; /* Bo tròn */
        padding: 0 10px; /* Padding đồng bộ */
        font-size: 14px; /* Kích thước chữ */
        cursor: pointer;
      }

      :deep(.dp__input_wrap::after) {
        font-size: 14px; /* Kích thước chữ placeholder */
        left: 10px; /* Căn chỉnh vị trí */
      }
  
      /* <=======SEARCH=======> */


      /* TOURS */
      .danhmucbai{
        margin-top: 0px !important;
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
      }

      .tours {
        width: 90%;
        max-width: 1200px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 0px !important;
        gap: 10px;
      }

      .lineandtitle img{
        width: 80px!important;
        height: 40px!important;
        margin-bottom: 20px!important;
        margin-top: 10px!important;
      }

      .article {
        width: calc(50% - 5px);
        min-width: 140px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .card {
        width: 100% !important;
        height: 100% !important;
        display: flex;
        flex-direction: column;
        gap: 2px;
        background-color: #fff;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }

      .card:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
      }

      .card img {
        width: 100% !important;
        height: 70px !important;
        object-fit: cover;
        border-radius: 12px 12px 0 0;
      }

      .card-body {
        background-color: transparent;
        padding: 2px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: auto;
      }

      .card-title {
        font-size: 7pt !important;
        color: #333;
        background-color: transparent;
        width: 100% !important;
        line-height: 1.1;
        margin-bottom: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        height: 22px;
      }

      .starandcmt {
        background-color: transparent;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0 0px; /* Giảm từ 0 2px xuống 0 1px */
        margin-bottom: 0!important; /* Giảm từ 5px xuống 0px */
        gap: 40px; /* Thêm gap để điều chỉnh khoảng cách giữa sao và bình luận */
      
      }

      .star {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px!important; /* Thu gọn theo nội dung */
      }

      .numberstar, .cmt {
        font-size: 8px !important; /* Giảm từ 6pt xuống 5pt */
        color: #666;
      }

      .star img {
        width: 8px !important; /* Giảm từ 6px xuống 5px */
        height: 8px !important;
        margin-left: 0.3px; /* Giảm từ 0.5px xuống 0.3px */
      }

      .price {
        font-size: 8pt !important;
        color: #FF6200;
        font-weight: bold;
        text-align: center;
        margin-top: 0px !important; /* Giảm từ 5px xuống 0px */
      }
        /* <=======TOUR=======> */
    }
/* Responsive màn hình lớn hơn 767px và nhỏ hơn 991px*/
    @media(min-width:767px) and (max-width:991px){
      .HomeView{
        overflow: hidden !important;
        background-color: rgb(227, 252, 255); 
      }

      
      /* <=======SEARCH=======> */
       .search {
          width: 100%;
          height: 160px; /* Tăng chiều cao để chứa các phần tử xuống dòng */
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          margin-top: 10px !important;
          background-color: rgb(227, 252, 255); 
        }

        .searchbox {
          width: 90%; /* Thu hẹp chiều rộng để có khoảng cách hai bên */
          height: 150px; /* Chiều cao tự động để chứa nội dung */
          flex-wrap: wrap; /* Cho phép các phần tử xuống dòng */
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(250deg, #dd490f, #13c0e7); 
          border-radius: 10px; /* Bo tròn nhẹ để đẹp hơn */
          padding: 5px 10px; /* Thêm padding để tạo không gian bên trong */
          gap: 10px; /* Khoảng cách giữa các phần tử */
          box-shadow: 0 4px 15px rgba(27, 198, 232, 0.2); /* Giữ shadow */
          margin: 0 auto; /* Căn giữa */

        }

        .noikhoihanh, .loaitour, .noiden {
          width: 48%; /* Chiếm toàn bộ chiều rộng của searchbox */
          height: 45px; /* Chiều cao cố định */
          display: flex;
          justify-content: flex-start; /* Căn trái cho đồng bộ */
          align-items: center;
          margin: 0px 0; /* Khoảng cách trên dưới giữa các phần tử */
          background-color: rgba(255, 255, 255, 0.9); /* Nền trắng nhẹ */
          border-radius: 10px; /* Bo tròn nhẹ */
          padding: 0 10px; /* Padding bên trong */
        }


        .noikhoihanh i, .loaitour i, .noiden i {
          font-size: 16px; /* Tăng kích thước icon để dễ nhìn */
          margin-right: 10px; /* Khoảng cách giữa icon và select */
          color: #FF6200; /* Màu cam đặc trưng */
        }

        .chonthoigian i{
          font-size: 16px; /* Tăng kích thước icon để dễ nhìn */
          margin-right: 10px; /* Khoảng cách giữa icon và select */
          color: #FF6200; /* Màu cam đặc trưng */
        }

        .noikhoihanhbox {
          width: 100%; /* Chiếm toàn bộ chiều rộng của phần tử cha */
          height: 100%; /* Chiều cao bằng với phần tử cha */
          display: flex;
          align-items: center;
        }

        .noikhoihanhbox select, .noikhoihanhbox .dp__input {
          width: 100%; /* Chiếm toàn bộ chiều rộng */
          height: 35px; /* Chiều cao nhỏ hơn để gọn gàng */
          border: none; /* Bỏ viền */
          outline: none; /* Bỏ outline khi focus */
          padding: 0 30px 0 10px; /* Padding để chứa mũi tên dropdown */
          border-radius: 8px; /* Bo tròn nhẹ */
          background-color: white; /* Nền trắng */
          color: #333; /* Màu chữ */
          font-size: 14px; /* Kích thước chữ vừa phải */
          cursor: pointer;
          appearance: none; /* Bỏ giao diện mặc định của select */
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23FF6200' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 10px center;
          background-size: 12px; /* Kích thước mũi tên nhỏ hơn */
        }

        .chonthoigianbx{
         width: 100% !important;
          height: 80%;
          position: relative;
          display: flex;
          align-items: center;
          
        }

        .chonthoigianbx  {
         width: 264px;
         height: 35px;
         border: none;
         border-radius: 5px;
         display: flex;
         justify-content: center;
         align-items: center;
         gap: 10px;
         color: #FF6200;
         background-color: white;
         transition: all 0.3s ease;
         cursor: pointer;
      }

      .chonthoigianbx select{
         width: 100%; /* Chiếm toàn bộ chiều rộng */
          height: 35px; /* Chiều cao nhỏ hơn để gọn gàng */
          border: none; /* Bỏ viền */
          outline: none; /* Bỏ outline khi focus */
          padding: 0 30px 0 10px; /* Padding để chứa mũi tên dropdown */
          border-radius: 8px; /* Bo tròn nhẹ */
          background-color: white; /* Nền trắng */
          color: #333; /* Màu chữ */
          font-size: 14px; /* Kích thước chữ vừa phải */
          cursor: pointer;
          appearance: none; /* Bỏ giao diện mặc định của select */
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23FF6200' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 10px center;
          background-size: 12px; /* Kích thước mũi tên nhỏ hơn */
      }
      .fa-calendar-week{
        font-size: 12px !important;
        margin-right: 10px !important;
      }

      
      .dp__input_wrap::after {
        /* content: "Chọn ngày khởi hành..."; */ /* Đã bị vô hiệu hóa */
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        color: black;
        font-size: 14px;
        pointer-events: none;
        opacity: 1;
      }

      .dp__input_icon{
        display: none !important; /* Ẩn icon mặc định */
      }

     
      .calendar-icon{
        padding-left: 0px;
      }

    
        .btntimkiem {
          width: 40%; /* Chiếm toàn bộ chiều rộng */
          height: 30px; /* Đồng bộ với các input khác */
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0px; /* Khoảng cách dưới */
        }

        .btntimkiem button{
          font-size: 12px !important;
          
        }

        .btntimkiem button:hover {
          background-color: #f58f4f; /* Màu cam nhạt khi hover */
          transform: scale(1.05); /* Phóng to nhẹ */
        }

        /* Datepicker adjustments */
        .noikhoihanhbox .dp__input {
          background-color: white; /* Nền trắng */
          border-radius: 8px; /* Bo tròn */
          padding: 0 10px; /* Padding đồng bộ */
          font-size: 14px; /* Kích thước chữ */
          cursor: pointer;
        }

        :deep(.dp__input_wrap::after) {
          font-size: 14px; /* Kích thước chữ placeholder */
          left: 10px; /* Căn chỉnh vị trí */
        }
    
        /* <=======SEARCH=======> */

        /* TOURS */
      .danhmucbai{
        margin-top: 0px !important;
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
      }

      .tours {
        width: 90%;
        max-width: 1200px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 0px !important;
        gap: 10px;
      }

      .lineandtitle img{
        width: 80px!important;
        height: 40px!important;
        margin-bottom: 20px!important;
        margin-top: 10px!important;
      }

      .article {
        width: calc(50% - 5px);
        min-width: 140px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .card {
        width: 100% !important;
        height: 100% !important;
        display: flex;
        flex-direction: column;
        gap: 2px;
        background-color: #fff;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }

      .card:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
      }

      .card img {
        width: 100% !important;
        height: 70px !important;
        object-fit: cover;
        border-radius: 12px 12px 0 0;
      }

      .card-body {
        background-color: transparent;
        padding: 2px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: auto;
      }

      .card-title {
        font-size: 7pt !important;
        color: #333;
        background-color: transparent;
        width: 100% !important;
        line-height: 1.1;
        margin-bottom: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        height: 22px;
      }

      .starandcmt {
        background-color: transparent;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0 0px; /* Giảm từ 0 2px xuống 0 1px */
        margin-bottom: 0!important; /* Giảm từ 5px xuống 0px */
        gap: 40px; /* Thêm gap để điều chỉnh khoảng cách giữa sao và bình luận */
      
      }

      .star {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px!important; /* Thu gọn theo nội dung */
      }

      .numberstar, .cmt {
        font-size: 8px !important; /* Giảm từ 6pt xuống 5pt */
        color: #666;
      }

      .star img {
        width: 8px !important; /* Giảm từ 6px xuống 5px */
        height: 8px !important;
        margin-left: 0.3px; /* Giảm từ 0.5px xuống 0.3px */
      }

      .price {
        font-size: 8pt !important;
        color: #FF6200;
        font-weight: bold;
        text-align: center;
        margin-top: 0px !important; /* Giảm từ 5px xuống 0px */
      }
        /* <=======TOUR=======> */
    }

    @media(min-width:991px) and (max-width:1200px){
       .HomeView{
        overflow: hidden !important;
        background-color: rgb(227, 252, 255); 
        width: 100%;
      }

       /* TÌM KIỂM  */
      .search{
        width: 100%;
        height:80px;
        margin-top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
      }

      .searchbox{
        width: 90%;
        height: 70%;
        background: linear-gradient(135deg, #1BC6E8, #0D9DBF);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        border-radius: 50px;
        box-shadow: 0 4px 15px rgba(27, 198, 232, 0.2);
        padding: 0 20px;
      }

      .noikhoihanh, .loaitour, .noiden{
        width: 250px;
        height: 40px;
        margin-left: 10px;
        border: none;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        color: #FF6200;
        background-color: rgba(255, 255, 255, 0.9);
        transition: all 0.3s ease;
        cursor: pointer;
      }

      .noikhoihanh:hover, .loaitour:hover, .noiden:hover {
        background-color: rgba(255, 255, 255, 1);
        box-shadow: 0 2px 8px rgba(255, 98, 0, 0.2);
      }

      .noikhoihanh i, .loaitour i, .noiden i {
        font-size: 16px;
        color: #FF6200;
      }

      .btntimkiem{
        width: 120px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .noikhoihanhbox{
        width: 80%;
        height: 80%;
        position: relative;
      }

      .btntimkiem button{
        width: 150px;
        height: 80%;
        border-radius: 5px;
        background-color: #FF6200;
        border: none;
        color: white;
      }

      .noikhoihanhbox select {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        padding: 0 10px;
        border-radius: 5px;
        background-color: rgba(255, 255, 255, 0.9);
        color: #333;
        font-size: 14px;
        cursor: pointer;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23FF6200' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-position: right 10px center;
        background-size: 15px;
        transition: all 0.3s ease;
      }

      .noikhoihanhbox select:hover {
        background-color: rgba(255, 255, 255, 1);
        box-shadow: 0 2px 8px rgba(27, 198, 232, 0.2);
      }

      .noikhoihanhbox select:focus {
        background-color: white;
        box-shadow: 0 2px 8px rgba(27, 198, 232, 0.3);
      }

      .noikhoihanhbox select option {
        background-color: white;
        color: #333;
        padding: 10px;
      }

      .noikhoihanhbox select option:hover {
        background-color: #1BC6E8;
        color: white;
      }

      .btntimkiem button:hover{
        background-color: #f58f4f;
      }

    /* <=======SEARCH=======> */
      .search {
        width: 100%;
        height: 140px; /* Tăng chiều cao để chứa các phần tử xuống dòng */
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        margin-top: 10px !important;
        background-color: rgb(227, 252, 255);  
      }

      .searchbox {
        width: 90%; /* Thu hẹp chiều rộng để có khoảng cách hai bên */
        height: 120px; /* Chiều cao tự động để chứa nội dung */
        flex-wrap: wrap; /* Cho phép các phần tử xuống dòng */
        display: flex;
        justify-content: center;
        align-items: center;
          background: linear-gradient(250deg, #dd490f, #13c0e7); 
        border-radius: 10px; /* Bo tròn nhẹ để đẹp hơn */
        padding: 5px 10px; /* Thêm padding để tạo không gian bên trong */
        gap: 10px; /* Khoảng cách giữa các phần tử */
        box-shadow: 0 4px 15px rgba(27, 198, 232, 0.2); /* Giữ shadow */
        margin: 0 auto; /* Căn giữa */

      }

      .noikhoihanh, .loaitour, .noiden {
        width: 23%; /* Chiếm toàn bộ chiều rộng của searchbox */
        height: 45px; /* Chiều cao cố định */
        display: flex;
        justify-content: flex-start; /* Căn trái cho đồng bộ */
        align-items: center;
        margin: 0px 0; /* Khoảng cách trên dưới giữa các phần tử */
        /* background-color: rgba(255, 255, 255, 0.9); Nền trắng nhẹ */
        border-radius: 10px; /* Bo tròn nhẹ */
        padding: 0 10px; /* Padding bên trong */
      }

      .noikhoihanh i, .loaitour i, .noiden i {
        font-size: 16px; /* Tăng kích thước icon để dễ nhìn */
        margin-right: 10px; /* Khoảng cách giữa icon và select */
        color: #FF6200; /* Màu cam đặc trưng */
      }

      .chonthoigian i{
        font-size: 16px; /* Tăng kích thước icon để dễ nhìn */
        margin-right: 10px; /* Khoảng cách giữa icon và select */
        color: #FF6200; /* Màu cam đặc trưng */
      }

      .noikhoihanhbox {
        width: 100%; /* Chiếm toàn bộ chiều rộng của phần tử cha */
        height: 100%; /* Chiều cao bằng với phần tử cha */
        display: flex;
        align-items: center;
      }

      .noikhoihanhbox select, .noikhoihanhbox .dp__input {
        width: 100%; /* Chiếm toàn bộ chiều rộng */
        height: 35px; /* Chiều cao nhỏ hơn để gọn gàng */
        border: none; /* Bỏ viền */
        outline: none; /* Bỏ outline khi focus */
        padding: 0 30px 0 10px; /* Padding để chứa mũi tên dropdown */
        border-radius: 8px; /* Bo tròn nhẹ */
        background-color: white; /* Nền trắng */
        color: #333; /* Màu chữ */
        font-size: 14px; /* Kích thước chữ vừa phải */
        cursor: pointer;
        appearance: none; /* Bỏ giao diện mặc định của select */
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23FF6200' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-position: right 10px center;
        background-size: 12px; /* Kích thước mũi tên nhỏ hơn */
      }

      .chonthoigianbx  {
        width: 100% !important;
        height: 35px;
        border: none;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        color: #FF6200;
        background-color: white; 
        transition: all 0.3s ease;
        cursor: pointer;
      
      }

      .chonthoigianbx select{
        width: 100%; /* Chiếm toàn bộ chiều rộng */
          height: 35px; /* Chiều cao nhỏ hơn để gọn gàng */
          border: none; /* Bỏ viền */
          outline: none; /* Bỏ outline khi focus */
          padding: 0 30px 0 10px; /* Padding để chứa mũi tên dropdown */
          border-radius: 8px; /* Bo tròn nhẹ */
          background-color: white; /* Nền trắng */
          color: #333; /* Màu chữ */
          font-size: 10px !important; /* Kích thước chữ vừa phải */
          cursor: pointer;
          appearance: none; /* Bỏ giao diện mặc định của select */
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23FF6200' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 10px center;
          background-size: 12px; /* Kích thước mũi tên nhỏ hơn */
      }
      .fa-calendar-week{
        font-size: 12px !important;
        margin-right: 10px !important;
      }

      .dp__input_wrap::after {
        /* content: "Chọn ngày khởi hành..."; */ /* Đã bị vô hiệu hóa */
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        color: black;
        font-size: 14px;
        pointer-events: none;
        opacity: 1;
      }

      .dp__input_icon{ display: none !important; /* Ẩn icon mặc định */}

      .calendar-icon{ padding-left: 0px; }

      .btntimkiem {
        width: 40%; /* Chiếm toàn bộ chiều rộng */
        height: 40%; /* Đồng bộ với các input khác */
        display: flex;
        justify-content: center !important;
        align-items: center !important;
      }

      .btntimkiem button{ font-size: 15px !important; }

      .btntimkiem button:hover {
        background-color: #f58f4f; /* Màu cam nhạt khi hover */
        transform: scale(1.05); /* Phóng to nhẹ */
      }

      /* Datepicker adjustments */
      .noikhoihanhbox .dp__input {
        background-color: white; /* Nền trắng */
        border-radius: 8px; /* Bo tròn */
        padding: 0 10px; /* Padding đồng bộ */
        font-size: 14px; /* Kích thước chữ */
        cursor: pointer;
      }

      :deep(.dp__input_wrap::after) {
        font-size: 14px; /* Kích thước chữ placeholder */
        left: 10px; /* Căn chỉnh vị trí */
      }
      /* <=======SEARCH=======> */

      /* TOUR */
      .danhmucbai{
        margin-top: 0;
        width: 100%;
        height: 90%;
        max-height: 1000px;
        display: flex;
        flex-direction: column; /* ✅ Các con (lineandtitle và tours) xếp dọc */
        align-items: center; 
        background-color: rgb(227, 252, 255) ; 
      }

      .lineandtitle{
          width: 100%;
          height: 30px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          margin-top: 10px;
          margin-bottom: 10px;
      }

      .tours{
          width: 100%;
          max-width: 1200px;
          display: flex;
          flex-wrap: wrap; /* Cho phép xuống hàng khi đầy */
          justify-content: center; /* Căn giữa theo chiều ngang */
          margin: 10px 0px;
          gap: 20px;
      }

      .article{
          /*width: calc(20% - 15px);  25% cho 4 card một hàng, trừ đi gap */
          width: 22% !important;
          display: flex;
          flex-direction: column;
          justify-content: center;
      }

      .card {
          width: 100% !important;
          transition: transform 0.6s ease;
          cursor: pointer;
          border: none;
          height: 280px;
          box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
          border-radius: 10px !important;
      }

      .card-img-top {
          height: 130px !important;
          border-radius: 10px 10px 0px 0px !important;
          object-fit: cover;
      }

      .card-body {
          padding: 15px;
      }

      .card-title {
          margin-bottom: 10px;
          line-height: 1.4;
          height: 40px;
          overflow: hidden;
      }

      .starandcmt{
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 20px;
      }

      .star{
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .card:hover {
        transform: scale(1.05); /* Phóng to nhẹ */
        z-index: 2; /* Đảm bảo nổi lên trên khi phóng to */
      }

      /* TOUR */
    }

    @media(min-width: 1200px){
      .HomeView{
        overflow: hidden !important;
        background-color: rgb(227, 252, 255); 
        width: 100%;
      }

       /* TÌM KIỂM  */
      .search{
        width: 100%;
        height:80px;
        margin-top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
      }

      .searchbox{
        width: 90%;
        height: 70%;
        background: linear-gradient(135deg, #1BC6E8, #0D9DBF);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        border-radius: 50px;
        box-shadow: 0 4px 15px rgba(27, 198, 232, 0.2);
        padding: 0 20px;
      }

      .noikhoihanh, .loaitour, .noiden{
        width: 250px;
        height: 40px;
        margin-left: 10px;
        border: none;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        color: #FF6200;
        background-color: rgba(255, 255, 255, 0.9);
        transition: all 0.3s ease;
        cursor: pointer;
      }

      .noikhoihanh:hover, .loaitour:hover, .noiden:hover {
        background-color: rgba(255, 255, 255, 1);
        box-shadow: 0 2px 8px rgba(255, 98, 0, 0.2);
      }

      .noikhoihanh i, .loaitour i, .noiden i {
        font-size: 16px;
        color: #FF6200;
      }

      .btntimkiem{
        width: 120px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .noikhoihanhbox{
        width: 80%;
        height: 80%;
        position: relative;
      }

      .btntimkiem button{
        width: 150px;
        height: 80%;
        border-radius: 5px;
        background-color: #FF6200;
        border: none;
        color: white;
      }

      .noikhoihanhbox select {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        padding: 0 10px;
        border-radius: 5px;
        background-color: rgba(255, 255, 255, 0.9);
        color: #333;
        font-size: 14px;
        cursor: pointer;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23FF6200' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-position: right 10px center;
        background-size: 15px;
        transition: all 0.3s ease;
      }

      .noikhoihanhbox select:hover {
        background-color: rgba(255, 255, 255, 1);
        box-shadow: 0 2px 8px rgba(27, 198, 232, 0.2);
      }

      .noikhoihanhbox select:focus {
        background-color: white;
        box-shadow: 0 2px 8px rgba(27, 198, 232, 0.3);
      }

      .noikhoihanhbox select option {
        background-color: white;
        color: #333;
        padding: 10px;
      }

      .noikhoihanhbox select option:hover {
        background-color: #1BC6E8;
        color: white;
      }

      .btntimkiem button:hover{
        background-color: #f58f4f;
      }

    /* <=======SEARCH=======> */
      .search {
        width: 100%;
        height: 140px; /* Tăng chiều cao để chứa các phần tử xuống dòng */
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        margin-top: 10px !important;
        background-color: rgb(227, 252, 255);  
      }

      .searchbox {
        width: 90%; /* Thu hẹp chiều rộng để có khoảng cách hai bên */
        height: 120px; /* Chiều cao tự động để chứa nội dung */
        flex-wrap: wrap; /* Cho phép các phần tử xuống dòng */
        display: flex;
        justify-content: center;
        align-items: center;
          background: linear-gradient(250deg, #dd490f, #13c0e7); 
        border-radius: 10px; /* Bo tròn nhẹ để đẹp hơn */
        padding: 5px 10px; /* Thêm padding để tạo không gian bên trong */
        gap: 10px; /* Khoảng cách giữa các phần tử */
        box-shadow: 0 4px 15px rgba(27, 198, 232, 0.2); /* Giữ shadow */
        margin: 0 auto; /* Căn giữa */

      }

      .noikhoihanh, .loaitour, .noiden {
        width: 23%; /* Chiếm toàn bộ chiều rộng của searchbox */
        height: 45px; /* Chiều cao cố định */
        display: flex;
        justify-content: flex-start; /* Căn trái cho đồng bộ */
        align-items: center;
        margin: 0px 0; /* Khoảng cách trên dưới giữa các phần tử */
        /* background-color: rgba(255, 255, 255, 0.9); Nền trắng nhẹ */
        border-radius: 10px; /* Bo tròn nhẹ */
        padding: 0 10px; /* Padding bên trong */
      }

      .noikhoihanh i, .loaitour i, .noiden i {
        font-size: 16px; /* Tăng kích thước icon để dễ nhìn */
        margin-right: 10px; /* Khoảng cách giữa icon và select */
        color: #FF6200; /* Màu cam đặc trưng */
      }

      .chonthoigian i{
        font-size: 16px; /* Tăng kích thước icon để dễ nhìn */
        margin-right: 10px; /* Khoảng cách giữa icon và select */
        color: #FF6200; /* Màu cam đặc trưng */
      }

      .noikhoihanhbox {
        width: 100%; /* Chiếm toàn bộ chiều rộng của phần tử cha */
        height: 100%; /* Chiều cao bằng với phần tử cha */
        display: flex;
        align-items: center;
      }

      .noikhoihanhbox select, .noikhoihanhbox .dp__input {
        width: 100%; /* Chiếm toàn bộ chiều rộng */
        height: 35px; /* Chiều cao nhỏ hơn để gọn gàng */
        border: none; /* Bỏ viền */
        outline: none; /* Bỏ outline khi focus */
        padding: 0 30px 0 10px; /* Padding để chứa mũi tên dropdown */
        border-radius: 8px; /* Bo tròn nhẹ */
        background-color: white; /* Nền trắng */
        color: #333; /* Màu chữ */
        font-size: 14px; /* Kích thước chữ vừa phải */
        cursor: pointer;
        appearance: none; /* Bỏ giao diện mặc định của select */
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23FF6200' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-position: right 10px center;
        background-size: 12px; /* Kích thước mũi tên nhỏ hơn */
      }

      .chonthoigianbx  {
        width: 100% !important;
        height: 35px;
        border: none;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        color: #FF6200;
        background-color: white; 
        transition: all 0.3s ease;
        cursor: pointer;
      
      }

      .chonthoigianbx select{
        width: 100%; /* Chiếm toàn bộ chiều rộng */
          height: 35px; /* Chiều cao nhỏ hơn để gọn gàng */
          border: none; /* Bỏ viền */
          outline: none; /* Bỏ outline khi focus */
          padding: 0 30px 0 10px; /* Padding để chứa mũi tên dropdown */
          border-radius: 8px; /* Bo tròn nhẹ */
          background-color: white; /* Nền trắng */
          color: #333; /* Màu chữ */
          font-size: 10px !important; /* Kích thước chữ vừa phải */
          cursor: pointer;
          appearance: none; /* Bỏ giao diện mặc định của select */
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23FF6200' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 10px center;
          background-size: 12px; /* Kích thước mũi tên nhỏ hơn */
      }
      .fa-calendar-week{
        font-size: 12px !important;
        margin-right: 10px !important;
      }

      .dp__input_wrap::after {
        /* content: "Chọn ngày khởi hành..."; */ /* Đã bị vô hiệu hóa */
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        color: black;
        font-size: 14px;
        pointer-events: none;
        opacity: 1;
      }

      .dp__input_icon{ display: none !important; /* Ẩn icon mặc định */}

      .calendar-icon{ padding-left: 0px; }

      .btntimkiem {
        width: 40%; /* Chiếm toàn bộ chiều rộng */
        height: 40%; /* Đồng bộ với các input khác */
        display: flex;
        justify-content: center !important;
        align-items: center !important;
      }

      .btntimkiem button{ font-size: 15px !important; }

      .btntimkiem button:hover {
        background-color: #f58f4f; /* Màu cam nhạt khi hover */
        transform: scale(1.05); /* Phóng to nhẹ */
      }

      /* Datepicker adjustments */
      .noikhoihanhbox .dp__input {
        background-color: white; /* Nền trắng */
        border-radius: 8px; /* Bo tròn */
        padding: 0 10px; /* Padding đồng bộ */
        font-size: 14px; /* Kích thước chữ */
        cursor: pointer;
      }

      :deep(.dp__input_wrap::after) {
        font-size: 14px; /* Kích thước chữ placeholder */
        left: 10px; /* Căn chỉnh vị trí */
      }
      /* <=======SEARCH=======> */

      /* TOUR */
      .danhmucbai{
        margin-top: 0;
        width: 100%;
        height: 90%;
        max-height: 1000px;
        display: flex;
        flex-direction: column; /* ✅ Các con (lineandtitle và tours) xếp dọc */
        align-items: center; 
        background-color: rgb(227, 252, 255) ; 
      }

      .lineandtitle{
          width: 100%;
          height: 30px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          margin-top: 10px;
          margin-bottom: 10px;
      }

      .tours{
          width: 100%;
          max-width: 1200px;
          display: flex;
          flex-wrap: wrap; /* Cho phép xuống hàng khi đầy */
          justify-content: center; /* Căn giữa theo chiều ngang */
          margin: 10px 0px;
          gap: 20px;
      }

      .article{
          /*width: calc(20% - 15px);  25% cho 4 card một hàng, trừ đi gap */
          width: 22% !important;
          display: flex;
          flex-direction: column;
          justify-content: center;
      }

      .card {
          width: 100% !important;
          transition: transform 0.6s ease;
          cursor: pointer;
          border: none;
          height: 280px;
          box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
          border-radius: 10px !important;
      }

      .card-img-top {
          height: 130px !important;
          border-radius: 10px 10px 0px 0px !important;
          object-fit: cover;
      }

      .card-body {
          padding: 15px;
      }

      .card-title {
          margin-bottom: 10px;
          line-height: 1.4;
          height: 40px;
          overflow: hidden;
      }

      .starandcmt{
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 20px;
      }

      .star{
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .card:hover {
        transform: scale(1.05); /* Phóng to nhẹ */
        z-index: 2; /* Đảm bảo nổi lên trên khi phóng to */
      }

      /* TOUR */
    }
    
</style> 

<style>
.search {
  margin-top: 80px !important;
}
</style>

<style>
/* Áp dụng margin-top lớn chỉ cho trang kết quả tìm kiếm */
.HomeView.search-results-page .search, .search-results-page .search {
  margin-top: 80px !important;
}
</style>