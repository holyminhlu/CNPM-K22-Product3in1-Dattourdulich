<template>
  <div class="about-page">
    <!-- Parallax background -->
    <div class="parallax-bg"></div>
    
    <!-- Floating elements -->
    <div class="floating-elements">
      <div class="floating-icon" v-for="i in 8" :key="i" :style="{ animationDelay: `${i * 0.3}s` }">
        <i class="fas fa-plane"></i>
      </div>
    </div>

    <!-- Hero section with enhanced effects -->
    <section class="hero-section" :style="heroBackgroundStyle">
      <div class="hero-overlay"></div>
      <div class="container">
        <div class="hero-content" data-aos="fade-up" data-aos-duration="1000">
          <h1 class="hero-title">
            <span class="title-line">CheapTrip</span>
            <span class="title-sub">Đặt tour du lịch thông minh trong thời đại số</span>
          </h1>
          <p class="hero-subtitle">Giải pháp toàn diện cho mọi chuyến đi của bạn</p>
          <div class="hero-stats">
            <div class="stat-item" data-aos="fade-up" data-aos-delay="200">
              <div class="stat-number">{{ counters.customers.toLocaleString() }}</div>
              <div class="stat-label">{{ statsConfig.customers.label }}</div>
            </div>
            <div class="stat-item" data-aos="fade-up" data-aos-delay="400">
              <div class="stat-number">{{ counters.destinations.toLocaleString() }}</div>
              <div class="stat-label">{{ statsConfig.destinations.label }}</div>
            </div>
            <div class="stat-item" data-aos="fade-up" data-aos-delay="600">
              <div class="stat-number">{{ counters.satisfaction }}</div>
              <div class="stat-label">{{ statsConfig.satisfaction.label }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="scroll-indicator">
        <div class="scroll-arrow"></div>
      </div>
    </section>

    <!-- Intro section with enhanced styling -->
    <section class="intro-section">
      <div class="container">
        <div class="intro-content" data-aos="fade-up">
          <h2 class="section-title">
            <span class="title-icon">🌟</span>
            Vì sao nên chọn CheapTrip?
          </h2>
          <div class="intro-text-container">
            <p class="intro-text" data-aos="fade-up" data-aos-delay="200">
              Trong thời đại công nghệ 4.0, Internet đã trở thành công cụ không thể thiếu khi lên kế hoạch du lịch. 
              CheapTrip ra đời như một giải pháp đột phá, kết nối mọi trải nghiệm du lịch chỉ với vài thao tác chạm.
            </p>
            <p class="intro-text" data-aos="fade-up" data-aos-delay="400">
              Chúng tôi không chỉ là website đặt tour thông thường, mà là nền tảng tổng hợp đa dịch vụ từ vé máy bay, 
              khách sạn, đến các trải nghiệm địa phương độc đáo với mức giá ưu đãi nhất.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits section with enhanced cards -->
    <section class="benefits-section">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">
          <span class="title-icon">🚀</span>
          Lợi ích khi sử dụng CheapTrip
        </h2>
        <div class="benefits-grid">
          <div class="benefit-card" data-aos="fade-up" data-aos-delay="100">
            <div class="card-glow"></div>
            <div class="benefit-icon">
              <i class="fas fa-bolt"></i>
            </div>
            <h3 class="benefit-title">Đặt tour nhanh chóng</h3>
            <p class="benefit-text">Quy trình đơn giản chỉ trong 3 bước, thanh toán đa dạng và nhận xác nhận ngay lập tức</p>
            <div class="card-hover-effect"></div>
          </div>

          <div class="benefit-card" data-aos="fade-up" data-aos-delay="200">
            <div class="card-glow"></div>
            <div class="benefit-icon">
              <i class="fas fa-percentage"></i>
            </div>
            <h3 class="benefit-title">Giá cả cạnh tranh</h3>
            <p class="benefit-text">Cam kết giá tốt nhất thị trường với hệ thống so sánh giá tự động và ưu đãi độc quyền</p>
            <div class="card-hover-effect"></div>
          </div>

          <div class="benefit-card" data-aos="fade-up" data-aos-delay="300">
            <div class="card-glow"></div>
            <div class="benefit-icon">
              <i class="fas fa-shield-alt"></i>
            </div>
            <h3 class="benefit-title">Bảo mật tuyệt đối</h3>
            <p class="benefit-text">Hệ thống bảo mật đa lớp, mã hóa thông tin và chính sách hoàn tiền minh bạch</p>
            <div class="card-hover-effect"></div>
          </div>

          <div class="benefit-card" data-aos="fade-up" data-aos-delay="400">
            <div class="card-glow"></div>
            <div class="benefit-icon">
              <i class="fas fa-headset"></i>
            </div>
            <h3 class="benefit-title">Hỗ trợ 24/7</h3>
            <p class="benefit-text">Đội ngũ chuyên viên tư vấn nhiệt tình, sẵn sàng hỗ trợ mọi lúc mọi nơi</p>
            <div class="card-hover-effect"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission section with enhanced styling -->
    <section class="mission-section">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">
          <span class="title-icon">🎯</span>
          Sứ mệnh của chúng tôi
        </h2>
        <div class="mission-content" data-aos="fade-up" data-aos-delay="200">
          <p class="mission-intro">CheapTrip không ngừng nỗ lực mang đến trải nghiệm du lịch hoàn hảo bằng cách:</p>
          <ul class="mission-list">
            <li data-aos="fade-left" data-aos-delay="300">
              <i class="fas fa-check-circle"></i>
              <span>Kết nối mọi điểm đến với chi phí tối ưu</span>
            </li>
            <li data-aos="fade-left" data-aos-delay="400">
              <i class="fas fa-check-circle"></i>
              <span>Cung cấp thông tin minh bạch, đánh giá chân thực</span>
            </li>
            <li data-aos="fade-left" data-aos-delay="500">
              <i class="fas fa-check-circle"></i>
              <span>Phát triển công nghệ đặt chỗ thông minh, tiện lợi</span>
            </li>
            <li data-aos="fade-left" data-aos-delay="600">
              <i class="fas fa-check-circle"></i>
              <span>Xây dựng cộng đồng du lịch chia sẻ kinh nghiệm</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- CTA section with enhanced effects -->
    <section class="cta-section">
      <div class="cta-bg-pattern"></div>
      <div class="container">
        <div class="cta-content" data-aos="zoom-in">
          <h2 class="cta-title">Sẵn sàng cho chuyến đi tiếp theo?</h2>
          <p class="cta-text">Đăng ký ngay để nhận ưu đãi đặc biệt dành cho thành viên mới</p>
          <button class="cta-button" @click="scrollToTop">
            <i class="fas fa-plane"></i>
            <span>Khám phá ngay</span>
            <div class="button-glow"></div>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'GioiThieu',
  data() {
    return {
      counters: {
        customers: 0,
        destinations: 0,
        satisfaction: 0
      },
      targetCounts: {
        customers: 0,
        destinations: 0,
        satisfaction: 0
      },
      statsConfig: {
        customers: {
          label: 'Khách hàng',
          suffix: '',
          prefix: ''
        },
        destinations: {
          label: 'Điểm đến',
          suffix: '',
          prefix: ''
        },
        satisfaction: {
          label: '% Hài lòng',
          suffix: '%',
          prefix: ''
        }
      }
    };
  },
  metaInfo: {
    title: 'Giới thiệu - CheapTrip',
    meta: [
      {
        name: 'description',
        content:
          'Giới thiệu về CheapTrip - Nền tảng đặt tour du lịch trực tuyến hàng đầu với giá ưu đãi và dịch vụ chuyên nghiệp',
      },
    ],
  },
  mounted() {
    this.initAnimations();
    this.loadStatistics();
    this.initParallax();
  },
  methods: {
    async loadStatistics() {
      try {
        // Thay thế URL này bằng API endpoint thực tế của bạn
        const response = await fetch('/api/statistics');
        if (response.ok) {
          const data = await response.json();
          this.updateStatistics(data);
        } else {
          // Fallback data nếu API không khả dụng
          this.updateStatistics({
            customers: 15000,
            destinations: 750,
            satisfaction: 98
          });
        }
      } catch (error) {
        console.log('Không thể load statistics từ API, sử dụng dữ liệu mặc định');
        // Dữ liệu mặc định khi không có API
        this.updateStatistics({
          customers: 12000,
          destinations: 600,
          satisfaction: 97
        });
      }
    },
    updateStatistics(data) {
      this.targetCounts = {
        customers: data.customers || 0,
        destinations: data.destinations || 0,
        satisfaction: data.satisfaction || 0
      };
      
      // Cập nhật config nếu có
      if (data.config) {
        this.statsConfig = { ...this.statsConfig, ...data.config };
      }
    },
    // Method để cập nhật statistics từ admin panel
    updateStatisticsManually(newStats) {
      this.targetCounts = { ...this.targetCounts, ...newStats };
      // Reset counters để trigger animation lại
      this.counters = {
        customers: 0,
        destinations: 0,
        satisfaction: 0
      };
      // Trigger animation
      this.animateCounters();
    },
    // Method để refresh statistics từ server
    async refreshStatistics() {
      await this.loadStatistics();
      // Reset và animate lại
      this.counters = {
        customers: 0,
        destinations: 0,
        satisfaction: 0
      };
      this.animateCounters();
    },
    initAnimations() {
      // Custom scroll animations without AOS dependency
      this.initScrollAnimations();
    },
    initScrollAnimations() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            
            // Trigger counter animation when stats section is visible
            if (entry.target.classList.contains('hero-stats')) {
              this.animateCounters();
            }
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      // Observe all elements with data-aos attributes
      document.querySelectorAll('[data-aos]').forEach(el => {
        observer.observe(el);
      });
    },
    animateCounters() {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      const animate = (counter, target, property) => {
        let current = 0;
        const increment = target / steps;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          this.counters[property] = Math.floor(current);
        }, stepDuration);
      };

      animate(this.counters.customers, this.targetCounts.customers, 'customers');
      animate(this.counters.destinations, this.targetCounts.destinations, 'destinations');
      animate(this.counters.satisfaction, this.targetCounts.satisfaction, 'satisfaction');
    },
    initParallax() {
      window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.parallax-bg');
        if (parallax) {
          parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
      });
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  },
  computed: {
    heroBackgroundStyle() {
      const imageUrl = '/img/articles/anhbiendep.jpg';
      return {
        background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: 'white',
        padding: '120px 0',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      };
    },
  },
};
</script>

<style scoped>
.about-page {
  font-family: 'Poppins', sans-serif;
  color: #333;
  line-height: 1.6;
  position: relative;
  overflow-x: hidden;
}

/* Parallax background */
.parallax-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  opacity: 0.1;
  z-index: -1;
}

/* Floating elements */
.floating-elements {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.floating-icon {
  position: absolute;
  color: rgba(255, 255, 255, 0.1);
  font-size: 1.5rem;
  animation: float 8s ease-in-out infinite;
}

.floating-icon:nth-child(1) { top: 10%; left: 10%; animation-delay: 0s; }
.floating-icon:nth-child(2) { top: 20%; right: 15%; animation-delay: 1s; }
.floating-icon:nth-child(3) { top: 60%; left: 5%; animation-delay: 2s; }
.floating-icon:nth-child(4) { top: 70%; right: 10%; animation-delay: 3s; }
.floating-icon:nth-child(5) { top: 40%; left: 20%; animation-delay: 4s; }
.floating-icon:nth-child(6) { top: 80%; right: 5%; animation-delay: 5s; }
.floating-icon:nth-child(7) { top: 30%; left: 30%; animation-delay: 6s; }
.floating-icon:nth-child(8) { top: 90%; right: 25%; animation-delay: 7s; }

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-30px) rotate(180deg); }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
}

/* Hero section enhancements */
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(0,0,0,0.3), rgba(0,0,0,0.1));
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
}

.hero-title {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  font-weight: 800;
  line-height: 1.2;
}

.title-line {
  display: block;
  background: linear-gradient(45deg, #fff, #f0f0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: titleGlow 3s ease-in-out infinite alternate;
}

.title-sub {
  display: block;
  font-size: 0.6em;
  font-weight: 400;
  opacity: 0.9;
  margin-top: 0.5rem;
}

@keyframes titleGlow {
  0% { filter: drop-shadow(0 0 5px rgba(255,255,255,0.3)); }
  100% { filter: drop-shadow(0 0 20px rgba(255,255,255,0.6)); }
}

.hero-subtitle {
  font-size: 1.8rem;
  opacity: 0.9;
  margin-bottom: 3rem;
  font-weight: 300;
}

/* Hero stats */
.hero-stats {
  display: flex;
  justify-content: center;
  gap: 4rem;
  margin-top: 3rem;
}

.stat-item {
  text-align: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}

.scroll-arrow {
  width: 30px;
  height: 30px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-top: none;
  border-left: none;
  transform: rotate(45deg);
  animation: scrollBounce 2s infinite;
}

@keyframes scrollBounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0) rotate(45deg); }
  40% { transform: translateY(-10px) rotate(45deg); }
  60% { transform: translateY(-5px) rotate(45deg); }
}

/* Section enhancements */
.intro-section,
.benefits-section,
.mission-section {
  padding: 100px 0;
  position: relative;
}

.intro-section {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.section-title {
  font-size: 2.5rem;
  color: #1a73e8;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.title-icon {
  font-size: 2rem;
  animation: iconBounce 2s ease-in-out infinite;
}

@keyframes iconBounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.section-title:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: linear-gradient(to right, #1a73e8, #34a853);
  border-radius: 2px;
}

.intro-content {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.intro-text-container {
  display: grid;
  gap: 2rem;
  margin-top: 3rem;
}

.intro-text {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #555;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: transform 0.3s ease;
}

.intro-text:hover {
  transform: translateY(-5px);
}

/* Benefits section */
.benefits-section {
  background: white;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;
}

.benefit-card {
  background: white;
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.05);
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.benefit-card:hover {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.card-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, transparent, rgba(26, 115, 232, 0.1), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.benefit-card:hover .card-glow {
  opacity: 1;
}

.benefit-icon {
  font-size: 2.5rem;
  color: #1a73e8;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  display: inline-block;
}

.benefit-card:hover .benefit-icon {
  transform: scale(1.1) rotate(5deg);
  color: #34a853;
}

.benefit-title {
  font-size: 1.1rem;
  margin-bottom: 0.8rem;
  color: #2c3e50;
  font-weight: 600;
}

.benefit-text {
  color: #666;
  line-height: 1.5;
  font-size: 0.9rem;
}

.card-hover-effect {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(to right, #1a73e8, #34a853);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.benefit-card:hover .card-hover-effect {
  transform: scaleX(1);
}

/* Mission section */
.mission-section {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.mission-content {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.mission-intro {
  font-size: 1.3rem;
  color: #555;
  margin-bottom: 3rem;
  font-weight: 500;
}

.mission-list {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
  display: inline-block;
}

.mission-list li {
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  position: relative;
  padding: 1rem 1rem 1rem 3rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
}

.mission-list li:hover {
  transform: translateX(10px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.mission-list i {
  color: #34a853;
  position: absolute;
  left: 1rem;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.mission-list li:hover i {
  transform: scale(1.2);
  color: #1a73e8;
}

/* CTA section */
.cta-section {
  background: linear-gradient(135deg, #1a73e8 0%, #34a853 100%);
  color: white;
  padding: 100px 0;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.cta-bg-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="80" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="50" cy="50" r="1" fill="rgba(255,255,255,0.05)"/></svg>');
  opacity: 0.3;
  animation: patternMove 20s linear infinite;
}

@keyframes patternMove {
  0% { transform: translateX(0) translateY(0); }
  100% { transform: translateX(-100px) translateY(-100px); }
}

.cta-content {
  position: relative;
  z-index: 2;
}

.cta-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.cta-text {
  font-size: 1.3rem;
  margin-bottom: 3rem;
  opacity: 0.9;
}

.cta-button {
  background: white;
  color: #1a73e8;
  border: none;
  padding: 1.2rem 3rem;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.cta-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.button-glow {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  transition: left 0.5s ease;
}

.cta-button:hover .button-glow {
  left: 100%;
}

/* Custom animations to replace AOS */
[data-aos] {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

[data-aos].animate-in {
  opacity: 1;
  transform: translateY(0);
}

[data-aos="fade-up"] {
  transform: translateY(30px);
}

[data-aos="fade-up"].animate-in {
  transform: translateY(0);
}

[data-aos="fade-left"] {
  transform: translateX(-30px);
}

[data-aos="fade-left"].animate-in {
  transform: translateX(0);
}

[data-aos="zoom-in"] {
  transform: scale(0.8);
}

[data-aos="zoom-in"].animate-in {
  transform: scale(1);
}

/* Animation delays */
[data-aos-delay="200"] { transition-delay: 0.2s; }
[data-aos-delay="300"] { transition-delay: 0.3s; }
[data-aos-delay="400"] { transition-delay: 0.4s; }
[data-aos-delay="500"] { transition-delay: 0.5s; }
[data-aos-delay="600"] { transition-delay: 0.6s; }

/* Animation durations */
[data-aos-duration="1000"] { transition-duration: 1s; }

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.3rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .benefits-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .benefit-card {
    padding: 1rem;
    min-height: 180px;
  }

  .benefit-icon {
    font-size: 2rem;
  }

  .benefit-title {
    font-size: 1rem;
  }

  .benefit-text {
    font-size: 0.8rem;
  }

  .hero-stats {
    flex-direction: column;
    gap: 2rem;
  }

  .stat-item {
    width: 200px;
    margin: 0 auto;
  }
}

@media (max-width: 480px) {
  .benefits-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .benefit-card {
    min-height: 160px;
  }
}
</style>
