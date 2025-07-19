<template>
  <div class="tour-category-page">
    <div class="page-header">
      <h1>Tour du lịch cá nhân, gia đình, nhóm nhỏ</h1>
      <p>Khám phá những điểm đến hấp dẫn với các tour phù hợp cho cá nhân, gia đình hoặc nhóm nhỏ, được thiết kế linh hoạt và tiện lợi.</p>
    </div>
    <div v-if="loading" class="loading-container">
      <div class="loader"></div>
      <p>Đang tải dữ liệu tour...</p>
    </div>
    <div v-else-if="tours.length === 0" class="no-tours-container">
      <p>Hiện tại không có tour nào thuộc danh mục này.</p>
    </div>
    <div v-else class="tours-grid">
      <TourCard v-for="tour in paginatedTours" :key="tour.tour_id" :tour="tour" />
    </div>
    <!-- Pagination Controls -->
    <div class="pagination" style="display: flex; justify-content: center; align-items: center; margin: 24px 0 0 0; gap: 6px; flex-wrap: wrap;">
      <button
        class="page-link"
        :disabled="currentPage === 1"
        @click="changePage(currentPage - 1)"
        style="min-width: 32px; min-height: 32px; border-radius: 50%; border: none; background: #f0f0f0; color: #666; font-weight: bold; margin: 0 2px; cursor: pointer;"
      >
        &lt;
      </button>
      <button
        v-for="page in totalPages"
        :key="page"
        class="page-link"
        :class="{ active: page === currentPage }"
        @click="changePage(page)"
        :disabled="page === currentPage"
        style="min-width: 32px; min-height: 32px; border-radius: 50%; border: none; background: #f0f0f0; color: #666; font-weight: bold; margin: 0 2px; cursor: pointer;"
      >
        {{ page }}
      </button>
      <button
        class="page-link"
        :disabled="currentPage === totalPages"
        @click="changePage(currentPage + 1)"
        style="min-width: 32px; min-height: 32px; border-radius: 50%; border: none; background: #f0f0f0; color: #666; font-weight: bold; margin: 0 2px; cursor: pointer;"
      >
        &gt;
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import TourCard from '../components/TourCard.vue';

const tours = ref([]);
const loading = ref(true);

// Pagination
const currentPage = ref(1);
const toursPerPage = 8;
const paginatedTours = computed(() => {
  const start = (currentPage.value - 1) * toursPerPage;
  return tours.value.slice(start, start + toursPerPage);
});
const totalPages = computed(() => Math.ceil(tours.value.length / toursPerPage));
function changePage(page) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    // Scroll lên đầu danh sách tour
    const el = document.querySelector('.tours-grid');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

async function fetchTours() {
  loading.value = true;
  try {
    // Lấy cả tour và discount cùng lúc
    const [tourRes, discountRes] = await Promise.all([
      axios.get('http://localhost:3000/api/tours/type/tour_thuong'),
      axios.get('http://localhost:3000/api/discounts')
    ]);
    const discounts = discountRes.data;
    // Gộp discount vào từng tour
    tours.value = tourRes.data.map(tour => {
      const discount = discounts.find(d => {
        if (Array.isArray(d.tour_id)) return d.tour_id.includes(tour.tour_id);
        return d.tour_id === tour.tour_id;
      });
      if (discount && discount.discount_percent) {
        return { ...tour, discount_percent: discount.discount_percent };
      }
      return tour;
    });
    // Reset về trang 1 nếu dữ liệu thay đổi
    currentPage.value = 1;
  } catch (err) {
    console.error("Lỗi khi lấy dữ liệu tour thường:", err);
    if (err.response && err.response.status === 404) {
      tours.value = [];
    }
  }
  loading.value = false;
}

onMounted(() => {
  fetchTours();
});
</script>

<style scoped>
.tour-category-page {
  max-width: 1200px;
  margin: 40px auto;
  padding: 100px 20px 0 20px;
}

.page-header {
  text-align: center;
  margin-bottom: 40px;
}
.page-header h1 {
  font-size: 2.5rem;
  color: #1a9cb8;
  font-weight: 700;
}
.page-header p {
  font-size: 1.1rem;
  color: #666;
  max-width: 600px;
  margin: 10px auto 0;
}

.tours-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
  padding: 0;
  margin: 0;
  justify-items: center;
  align-items: stretch;
}

.tour-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  transition: transform 0.3s, box-shadow 0.3s;
}
.tour-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.12);
}
.tour-card a {
  text-decoration: none;
  color: inherit;
}

.tour-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.tour-info {
  padding: 20px;
}

.tour-name {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 10px 0;
  min-height: 55px;
}

.tour-duration {
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 15px;
}
.tour-duration i {
  margin-right: 5px;
}

.tour-price {
  font-size: 1.4rem;
  font-weight: bold;
  color: #FF6200;
  text-align: right;
}

.loading-container, .no-tours-container {
  text-align: center;
  padding: 50px;
  color: #777;
  font-size: 1.2rem;
}
.loader {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #1a9cb8;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 0 auto 20px;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
