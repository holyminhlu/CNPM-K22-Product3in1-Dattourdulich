<template>
  <router-link :to="`/tour-details/${tour.tour_id}`" class="tour-card-link">
    <div class="tour-card-home">
      <div v-if="tour.discount_percent" class="discount-ribbon">
        <span>Giảm giá -{{ tour.discount_percent }}%</span>
      </div>
      <span v-if="tour.discount_percent" class="discount-mobile">-{{ tour.discount_percent }}%</span>
      <img :src="tour.image_url || '/img/articles/baibien.jpg'" class="tour-image-home" alt="Tour Image" />
      <div class="tour-body-home">
        <div class="tour-title-home">{{ tour.name }}</div>
        <div class="starandcmt-home">
          <div class="star-home">
            <span class="numberstar-home">{{ (tour.rating || tour.average_rating || 0).toFixed(1) }}</span>
            <img v-for="(star, index) in showStar(tour.rating || tour.average_rating || 0)" :key="index" :src="star" alt="star" class="star-icon-home" />
          </div>
          <div class="cmt-home">
            ({{ tour.comment_count || tour.review_count || 0 }} Bình luận)
          </div>
        </div>
        <div class="tour-price-home">
          {{ formatCurrency(tour.price_per_adult) }}
        </div>
      </div>
    </div>
  </router-link>
</template>

<script setup>
import { defineProps } from 'vue';
defineProps({
  tour: { type: Object, required: true }
});
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
</script>

<style scoped>
.tour-card-link {
  text-decoration: none;
  color: inherit;
  display: block;
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
.discount-label-home {
  color: #d9363e;
  font-size: 13px;
  margin-left: 4px;
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


@media (max-width: 480px) {
  .tour-card-home {
    width: 100%;
    min-width: unset;
    max-width: unset;
    height: auto;
    min-height: unset;
    max-height: unset;
    margin-bottom: 18px;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.10);
  }
  .tour-image-home {
    height: 100px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    object-fit: contain;
  }
  .tour-body-home {
    padding: 8px 8px 0 8px;
  }
  .tour-title-home {
    font-size: 10pt;
    min-height: 28px;
    margin-bottom: 6px;
  }
  .starandcmt-home {
    font-size: 13px;
    margin-bottom: 4px;
  }
  .tour-price-home {
    font-size: 16px;
    margin-top: 10px;
  }
  .discount-ribbon {
    display: none;
  }
  .discount-mobile {
    display: block;
    position: absolute;
    top: 8px;
    right: 12px;
    background: none;
    color: #FF6200;
    font-size: 1.1rem;
    font-weight: bold;
    z-index: 3;
    padding: 0;
    border-radius: 0;
    box-shadow: none;
  }
  .star-icon-home {
    width: 10px;
    height: 10px;
  }

   .numberstar-home {
    color: #444;
    margin-right: 3px;
    font-size: 8pt;
  }

  .cmt-home {
    color: #222;
    font-size: 10px;
    margin-left: 8px;
  }

  .tour-price-home {
    font-size: 12px;
    margin-top: 0px;
  }
}
@media (min-width:480px) and (max-width:767px) {
  .tour-card-home {
    width: 95%;
    min-width: unset;
    max-width: unset;
    height: auto;
    min-height: unset;
    max-height: unset;
    margin-bottom: 18px;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.12);
  }
  .tour-image-home {
    height: 120px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    object-fit: contain;
  }
  .tour-body-home {
    padding: 14px 14px 0 14px;
  }
  .tour-title-home {
    font-size: 10pt;
    min-height: 32px;
    margin-bottom: 8px;
  }

  .numberstar-home {
    color: #444;
    margin-right: 3px;
    font-size: 10pt;
  }
  .starandcmt-home {
    font-size: 10px;
    margin-bottom: 6px;
  }
  .tour-price-home {
    font-size: 18px;
    margin-top: 14px;
  }
  .discount-ribbon {
    font-size: 0.95rem;
    padding: 3px 0;
  }
  .discount-mobile {
    display: none;
  }

  .star-icon-home {
    width: 10px;
    height: 10px;
  }

  .cmt-home {
    color: #222;
    font-size: 12px;
    margin-left: 8px;
  }

  .tour-price-home {
    font-size: 12px;
    margin-top: 0px;
  }
}

@media (min-width: 767px) and (max-width: 900px){
   .tour-card-home {
    width: 90%;
    min-width: unset;
    max-width: unset;
    height: auto;
    min-height: unset;
    max-height: unset;
    margin-bottom: 18px;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.10);
  }

  .starandcmt-home{
    display: flex;
    justify-content: center;
    margin-bottom: 0px;
    margin-top: 0px;
  }

  .tour-price-home{
    margin-top: 0px;
  }

  .numberstar-home {
    color: #444;
    margin-right: 3px;
    font-size: 8pt;
  }

  
}


@media (min-width: 900px) and (max-width: 950px){
   .tour-card-home {
    width: 100%;
    min-width: unset;
    max-width: unset;
    height: auto;
    min-height: unset;
    max-height: unset;
    margin-bottom: 18px;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.10);
  }

  .starandcmt-home{
    display: flex;
    justify-content: center;
    margin-bottom: 0px;
    margin-top: 0px;
  }

  .tour-price-home{
    margin-top: 0px;
  }

  .tour-image-home { 
    height: 12%;
  }

  .tour-title-home{
    font-size: 10pt;
  }

  .star-icon-home {
    width: 10px;
    height: 10px;
  }

  .numberstar-home {
    color: #444;
    margin-right: 3px;
    font-size: 8pt;
  }

  .cmt-home {
    color: #222;
    font-size: 10px;
    margin-left: 8px;
  }

  .tour-price-home {
    font-size: 12px;
    margin-top: 10px;
  }

}



@media (min-width: 950px) and (max-width: 1200px){
  .tour-card-home {
    width: 100%;
    min-width: unset;
    max-width: unset;
    height: auto;
    min-height: unset;
    max-height: unset;
    margin-bottom: 18px;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.10);
  }

  .starandcmt-home{
    display: flex;
    justify-content: center;
    margin-bottom: 0px;
    margin-top: 0px;
  }

  .tour-price-home{
    margin-top: 0px;
  }

  .tour-image-home { 
    height: 12%;
  }

  .tour-title-home{
    font-size: 10pt;
  }

  .star-icon-home {
    width: 10px;
    height: 10px;
  }

  .numberstar-home {
    color: #444;
    margin-right: 3px;
    font-size: 8pt;
  }

  .cmt-home {
    color: #222;
    font-size: 10px;
    margin-left: 8px;
  }

  .tour-price-home {
    font-size: 12px;
    margin-top: 10px;
  }
}


</style> 