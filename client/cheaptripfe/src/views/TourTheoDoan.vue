<template>
  <div class="tour-category-page">
    <div class="page-header">
      <h1>Tour Theo Đoàn</h1>
      <p>Bạn có thể tham gia tour ghép đoàn cùng các du khách khác để tiết kiệm chi phí, hoặc đăng ký theo nhóm riêng từ 10 người trở lên để được thiết kế lịch trình phù hợp và ưu đãi đặc biệt!</p>
    </div>
    <div v-if="loading" class="loading-container">
      <div class="loader"></div>
      <p>Đang tải dữ liệu tour...</p>
    </div>
    <div v-else-if="tours.length === 0" class="no-tours-container">
      <p>Hiện tại không có tour nào thuộc danh mục này.</p>
    </div>
    <div v-else class="tours-grid">
      <div v-for="tour in paginatedTours" :key="tour.tour_id || tour._id || tour.id" class="tour-card-home">
        <div v-if="Number(tour.discount_percent) > 0" class="discount-ribbon">
          <span>Giảm giá -{{ tour.discount_percent }}%</span>
        </div>
        <img :src="tour.image_url || '/img/articles/baibien.jpg'" class="tour-image-home" alt="Tour Image" />
        <div class="tour-body-home">
          <div class="tour-title-home">{{ tour.name }}</div>
          <div class="starandcmt-home">
            <div class="star-home">
              <span class="numberstar-home">{{ (tour.average_rating || 0).toFixed(1) }}</span>
              <img v-for="(star, index) in showStar(tour.average_rating || 0)" :key="index" :src="star" alt="star" class="star-icon-home" />
            </div>
            <div class="cmt-home">
              ({{ tour.review_count || 0 }} Bình luận)
            </div>
          </div>
          <div class="tour-price-home">
            {{ formatCurrency(tour.price_per_adult) }}
          </div>
        </div>
      </div>
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

function formatCurrency(value) {
  if (value == null) return 'Liên hệ';
  const numberValue = Number(value);
  if (isNaN(numberValue)) return 'Giá không hợp lệ';
  return numberValue.toLocaleString('vi-VN') + ' ₫';
}
function showStar(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;
  const stars = [];
  for (let i = 0; i < fullStars; i++) stars.push('/img/starfull.png');
  if (halfStar) stars.push('/img/starhalf.png');
  for (let i = 0; i < emptyStars; i++) stars.push('/img/stargrey.png');
  return stars;
}

async function fetchTours() {
  loading.value = true;
  try {
    const [tourRes, discountRes] = await Promise.all([
      fetch('http://localhost:3000/api/tours/type/tour_doan'),
      fetch('http://localhost:3000/api/discounts')
    ]);
    if (!tourRes.ok) throw new Error('Lỗi khi lấy dữ liệu tours');
    if (!discountRes.ok) throw new Error('Lỗi khi lấy dữ liệu discounts');
    const toursData = await tourRes.json();
    const discounts = await discountRes.json();
    // Merge discount giống HomeView
    tours.value = toursData.map(tour => {
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
    console.log('Tour API data:', tours.value);
  } catch (err) {
    console.error("Lỗi khi lấy dữ liệu tour theo đoàn:", err);
    tours.value = [];
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
.tour-card-home {
  width: 277px;
  min-width: 277px;
  max-width: 277px;
  height: 294px;
  min-height: 294px;
  max-height: 294px;
  background: #fff;
  border-radius: 12px;
  border: 1.5px solid #e0f3fa;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0,0,0,0.13);
  position: relative;
  transition: box-shadow 0.4s, transform 0.4s;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.tour-card-home:hover {
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
  transform: translateY(-4px) scale(1.025);
}
.discount-ribbon {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: #FF6200;
  color: #fff;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  padding: 4px 0;
  z-index: 2;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}
.tour-image-home {
  width: 100%;
  height: 128px;
  object-fit: cover;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background: #eaf6fa;
}
.tour-body-home {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 18px 18px 0 18px;
  width: 100%;
}
.tour-title-home {
  font-size: 1.08rem;
  font-weight: 400;
  color: #222;
  text-align: left;
  margin-bottom: 10px;
  min-height: 40px;
  line-height: 1.35;
  width: 100%;
}
.starandcmt-home {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
  font-size: 15px;
  width: 100%;
}
.star-home {
  display: flex;
  align-items: center;
  gap: 2px;
}
.numberstar-home {
  color: #444;
  font-weight: 500;
  margin-right: 3px;
  font-size: 1rem;
}
.star-icon-home {
  width: 16px;
  height: 15px;
}
.cmt-home {
  color: #222;
  font-size: 15px;
  margin-left: 8px;
}
.tour-price-home {
  width: 100%;
  text-align: center;
  color: #FF6200;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 0;
  font-size: 20px;
  letter-spacing: 0.5px;
}
@media (max-width: 900px) {
  .tour-card-home { width: 100%; min-width: unset; max-width: unset; min-height: 220px; height: 220px; max-height: 220px; }
  .tour-image-home { height: 80px; }
}
@media (max-width: 600px) {
  .tour-card-home { width: 100%; min-width: unset; max-width: unset; min-height: 180px; height: 180px; max-height: 180px; }
  .tour-image-home { height: 60px; }
  .tour-body-home { padding: 6px 2px 0 2px; }
  .tour-price-home { font-size: 15px; }
}
</style>
