<template>
  <div class="hot-news-page" :class="{ 'is-detail-view': selectedNews }">

    <div class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="title-highlight">Tin Tức</span> Du Lịch
        </h1>
        <p class="hero-subtitle">Khám phá những câu chuyện du lịch thú vị và cập nhật thông tin mới nhất</p>
      </div>
      <div class="hero-decoration">
        <div class="floating-icon" v-for="i in 5" :key="i" :style="{ animationDelay: `${i * 0.3}s` }">
          <i class="fas fa-plane"></i>
        </div>
      </div>
    </div>

    <!-- Enhanced Search Section -->
    <div class="search-section" v-if="!selectedNews">
      <div class="search-container">
        <div class="search-box">
          <i class="fas fa-search search-icon"></i>
          <input 
            type="text" 
            v-model="searchQuery" 
            placeholder="Tìm kiếm tin tức..." 
            class="search-input"
            @keyup.enter="performSearch"
          />
          <button class="search-btn" @click="performSearch">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- News List Section -->
    <section class="news-section" v-if="!selectedNews">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Tin Tức Nổi Bật</h2>
          <div class="section-decoration">
            <div class="decoration-line"></div>
            <i class="fas fa-star"></i>
            <div class="decoration-line"></div>
          </div>
        </div>

        <div class="news-grid">
          <article 
            class="news-card" 
            v-for="(news, index) in filteredNews" 
            :key="news.id" 
            @click="showNewsDetail(news)"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="card-image">
              <img :src="news.image" :alt="news.title" />
              <div class="card-overlay">
                <div class="card-badge">Tin Mới</div>
                <div class="card-actions">
                  <button class="action-btn" @click.stop="shareNews(news)">
                    <i class="fas fa-share-alt"></i>
                  </button>
                </div>
              </div>
            </div>
            
            <div class="card-content">
              <div class="card-meta">
                <span class="meta-date">
                  <i class="fas fa-calendar"></i>
                  {{ formatTime(news.date) }}
                </span>
                <span class="meta-views">
                  <i class="fas fa-eye"></i>
                  {{ formatNumber(news.views) }}
                </span>
              </div>
              
              <h3 class="card-title">{{ news.title }}</h3>
              <p class="card-description">{{ news.description }}</p>
              
              <div class="card-footer">
                <button class="read-more-btn">
                  Đọc thêm
                  <i class="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </article>
        </div>

        <!-- No Results -->
        <div v-if="filteredNews.length === 0 && searchQuery" class="no-results">
          <div class="no-results-icon">
            <i class="fas fa-search"></i>
          </div>
          <h3>Không tìm thấy kết quả</h3>
          <p>Không có bài viết nào phù hợp với từ khóa "{{ searchQuery }}"</p>
          <button @click="clearSearch" class="clear-search-btn">
            <i class="fas fa-times"></i>
            Xóa tìm kiếm
          </button>
        </div>
      </div>
    </section>

    <!-- Enhanced News Detail -->
    <section class="news-detail-section" v-else>
      <div class="container">
        <nav class="breadcrumb-nav">
          <router-link to="/" class="breadcrumb-link">
            <i class="fas fa-home"></i>
            Trang chủ
          </router-link>
          <i class="fas fa-chevron-right"></i>
          <router-link to="/hot-news" class="breadcrumb-link">
            <i class="fas fa-newspaper"></i>
            Tin tức
          </router-link>
          <i class="fas fa-chevron-right"></i>
          <span class="current-page">{{ selectedNews.title }}</span>
        </nav>

        <article class="detail-article">
          <header class="article-header">
            <div class="article-meta">
              <span class="meta-item">
                <i class="fas fa-calendar-alt"></i>
                {{ formatTime(selectedNews.date) }}
              </span>
              <span class="meta-item">
                <i class="fas fa-eye"></i>
                {{ formatNumber(selectedNews.views) }} lượt xem
              </span>
              <span class="meta-item">
                <i class="fas fa-user"></i>
                Admin
              </span>
            </div>
            
            <h1 class="article-title">{{ selectedNews.title }}</h1>
            
            <div class="article-actions">
              <button class="action-btn like-btn" @click="toggleLike(selectedNews)">
                <i :class="selectedNews.liked ? 'fas fa-heart' : 'far fa-heart'"></i>
                <span>{{ selectedNews.likes || 0 }}</span>
              </button>
              <button class="action-btn share-btn" @click="shareNews(selectedNews)">
                <i class="fas fa-share-alt"></i>
                Chia sẻ
              </button>
              <button class="action-btn bookmark-btn" @click="toggleBookmark(selectedNews)">
                <i :class="selectedNews.bookmarked ? 'fas fa-bookmark' : 'far fa-bookmark'"></i>
              </button>
            </div>
          </header>

          <div class="article-content">
            <p class="article-lead">{{ selectedNews.description }}</p>
            <div v-html="selectedNews.fullContent" class="article-body"></div>
          </div>

          <aside class="related-news" v-if="relatedArticles && relatedArticles.length > 0">
            <h3 class="related-title">Tin tức liên quan</h3>
            <div class="related-list">
              <div 
                v-for="article in relatedArticles" 
                :key="article.id"
                class="related-item"
                @click="showNewsDetail(article)"
              >
                <span class="related-text">{{ article.title }}</span>
              </div>
            </div>
          </aside>

          <footer class="article-footer">
            <button class="back-btn" @click="backToList">
              <i class="fas fa-arrow-left"></i>
              Quay lại danh sách
            </button>
          </footer>
        </article>
      </div>
    </section>

    <!-- Floating Action Button -->
    <div class="fab-container">
      <button class="fab-btn" @click="scrollToTop" v-show="showScrollTop">
        <i class="fas fa-arrow-up"></i>
      </button>
    </div>
  </div>
</template>

<script>
import newsData from './data/news.js'

export default {
  name: 'HotNews',
  data() {
    return {
      news: newsData,
      selectedNews: null,
      searchQuery: '',
      showScrollTop: false,
      relatedArticles: []
    }
  },
  computed: {
    filteredNews() {
      if (!this.news || !Array.isArray(this.news)) {
        return []
      }
      if (!this.searchQuery) {
        return this.news
      }
      const query = this.searchQuery.toLowerCase()
      return this.news.filter(news => 
        news.title.toLowerCase().includes(query) ||
        news.description.toLowerCase().includes(query)
      )
    }
  },
  mounted() {
    this.addScrollListener()
  },
  beforeUnmount() {
    this.removeScrollListener()
  },
  methods: {
    showNewsDetail(news) {
      this.selectedNews = { ...news }
      this.generateRelatedArticles()
      this.scrollToTop()
    },
    backToList() {
      this.selectedNews = null
      this.relatedArticles = []
      this.scrollToTop()
    },
    shareNews(news) {
      if (navigator.share) {
        navigator.share({
          title: news.title,
          text: news.description,
          url: window.location.href
        })
      } else {
        this.showShareModal(news)
      }
    },
    showShareModal(news) {
      const shareData = {
        title: news.title,
        text: news.description,
        url: window.location.href
      }
      
      const shareText = `${shareData.title}\n\n${shareData.text}\n\n${shareData.url}`
      
      if (navigator.clipboard) {
        navigator.clipboard.writeText(shareText).then(() => {
          alert('Đã sao chép link vào clipboard!')
        })
      } else {
        const textArea = document.createElement('textarea')
        textArea.value = shareText
        document.body.appendChild(textArea)
        textArea.select()
        document.execCommand('copy')
        document.body.removeChild(textArea)
        alert('Đã sao chép link vào clipboard!')
      }
    },
    toggleLike(news) {
      if (!news.likes) news.likes = 0
      if (!news.liked) {
        news.likes++
        news.liked = true
      } else {
        news.likes--
        news.liked = false
      }
    },
    toggleBookmark(news) {
      news.bookmarked = !news.bookmarked
      if (news.bookmarked) {
        alert('Đã thêm vào bookmark!')
      } else {
        alert('Đã xóa khỏi bookmark!')
      }
    },
    generateRelatedArticles() {
      if (!this.selectedNews || !this.news || !Array.isArray(this.news)) return
      
      this.relatedArticles = this.news
        .filter(news => news.id !== this.selectedNews.id)
        .slice(0, 6)
    },
    performSearch() {
      // Search functionality is handled by computed property
      console.log('Searching for:', this.searchQuery)
    },
    clearSearch() {
      this.searchQuery = ''
    },
    formatTime(dateString) {
      const date = new Date(dateString)
      const now = new Date()
      const diffTime = Math.abs(now - date)
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      
      if (diffDays === 1) {
        return 'Hôm nay'
      } else if (diffDays === 2) {
        return 'Hôm qua'
      } else if (diffDays <= 7) {
        return `${diffDays - 1} ngày trước`
      } else {
        return date.toLocaleDateString('vi-VN')
      }
    },
    formatNumber(num) {
      if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M'
      } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K'
      }
      return num.toString()
    },
    addScrollListener() {
      window.addEventListener('scroll', this.handleScroll)
    },
    removeScrollListener() {
      window.removeEventListener('scroll', this.handleScroll)
    },
    handleScroll() {
      this.showScrollTop = window.pageYOffset > 300
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style scoped>
/* Import font hiện đại */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

body {
  font-family: 'Poppins', sans-serif;
  font-size: 1.125rem;
}

.hot-news-page {
  padding: 2rem;
  background: linear-gradient(135deg, #f0f4f8 0%, #ffffff 100%);
  min-height: 100vh;
}

.hero-section {
  background: linear-gradient(135deg, #FF6200, #1BC6E8);
  padding: 1.2rem 1rem;
  border-radius: 12px;
  margin-bottom: 0.2rem;
  position: relative;
  overflow: hidden;
  margin-top: 50px;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="white" opacity="0.1"/><circle cx="10" cy="60" r="0.5" fill="white" opacity="0.1"/><circle cx="90" cy="40" r="0.5" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  opacity: 0.3;
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.title-highlight {
  background: linear-gradient(45deg, #ffd700, #ffed4e);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: none;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: #f0f4f8;
  margin-bottom: 2rem;
  text-shadow: 0 1px 2px rgba(0,0,0,0.3);
}

.hero-decoration {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.floating-icon {
  font-size: 2rem;
  color: #ffd700;
  margin: 0 1rem;
  animation: float 3s ease-in-out infinite;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(5deg); }
}

.search-section {
  background: #f8fafc;
  padding: 0.5rem;
  border-radius: 12px;
  margin-bottom: 0.2rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

.search-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  background: white;
  padding: 0.75rem;
  border-radius: 30px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.search-container:focus-within {
  box-shadow: 0 6px 20px rgba(26, 115, 232, 0.2);
}

.search-box {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
}

.search-icon {
  font-size: 1.5rem;
  color: #718096;
}

.search-input {
  border: none;
  outline: none;
  font-size: 1rem;
  width: 100%;
  padding: 0.5rem 0;
}

.search-btn {
  background: linear-gradient(90deg,#FF6200, #1BC6E8 );
  color: white;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
}

.search-btn:hover {
  background: linear-gradient(90deg,#FF6200, #1BC6E8);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(26, 115, 232, 0.3);
}

.news-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.1rem 0 1.2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 1.2rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1rem;
  position: relative;
}

.section-decoration {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.decoration-line {
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #FF6200, #1BC6E8);
  border-radius: 2px;
}

.section-decoration i {
  color: #ff6f61;
  font-size: 1.5rem;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px 24px;
}
@media (max-width: 1024px) {
  .news-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 600px) {
  .news-grid {
    grid-template-columns: 1fr;
  }
}

.news-card {
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  animation: fadeInUp 0.6s ease forwards;
  opacity: 0;
  transform: translateY(30px);
}

.news-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.15);
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.news-card:hover .card-image img {
  transform: scale(1.1);
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0,0,0,0.3), rgba(0,0,0,0.1));
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.news-card:hover .card-overlay {
  opacity: 1;
}

.card-badge {
  background: linear-gradient(45deg, #FF6200);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(255, 111, 97, 0.3);
}

.card-actions {
  display: flex;
  gap: 0.5rem;
}

.action-btn {
  background: rgba(255, 255, 255, 0.9);
  border: none;
  padding: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #2c3e50;
}

.action-btn:hover {
  background: white;
  transform: scale(1.1);
  color: #ff6f61;
}

.card-content {
  padding: 1.5rem;
}

.card-meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  color: #718096;
  margin-bottom: 1rem;
}

.meta-date, .meta-views {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 1rem;
  line-height: 1.4;
  transition: color 0.3s ease;
  text-align: left;
}

.news-card:hover .card-title {
  color: #FF6200;
}

.card-description {
  font-size: 1rem;
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-align: left;
}

.card-footer {
  display: flex;
  justify-content: flex-end;
}

.read-more-btn {
  background: linear-gradient(90deg, #FF6200, #1BC6E8);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.read-more-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(26, 115, 232, 0.3);
}

.no-results {
  grid-column: 1 / -1;
  text-align: center;
  padding: 4rem 2rem;
  color: #718096;
}

.no-results-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  color: #cbd5e0;
}

.no-results h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.clear-search-btn {
  background: #e2e8f0;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem auto 0;
}

.clear-search-btn:hover {
  background: #cbd5e0;
  transform: translateY(-2px);
}

.news-detail-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 0 2rem;
}

.breadcrumb-nav {
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  font-size: 0.875rem;
  color: #718096;
}

.breadcrumb-link {
  color: #1a73e8;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s ease;
}

.breadcrumb-link:hover {
  color: #ff6f61;
}

.current-page {
  font-weight: 600;
  color: #2c3e50;
}

.detail-article {
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

.article-header {
  padding: 2rem;
  border-bottom: 1px solid #e2e8f0;
  background: linear-gradient(135deg, #f8fafc, #ffffff);
}

.article-meta {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #718096;
  font-size: 0.875rem;
}

.meta-item i {
  color: #ff6f61;
}

.article-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  line-height: 1.3;
  margin-bottom: 1.5rem;
  text-align: left;
}

.article-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.action-btn {
  background: none;
  border: 1px solid #e2e8f0;
  padding: 0.75rem 1rem;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
}

.action-btn:hover {
  border-color: #ff6f61;
  color: #ff6f61;
  transform: translateY(-2px);
}

.like-btn {
  color: #e53e3e;
}

.like-btn:hover {
  background: #fed7d7;
}

.share-btn {
  color: #3182ce;
}

.share-btn:hover {
  background: #bee3f8;
}

.bookmark-btn {
  color: #d69e2e;
}

.bookmark-btn:hover {
  background: #fef5e7;
}

.article-content {
  padding: 2rem;
}

.article-lead {
  font-size: 1.25rem;
  font-weight: 500;
  color: #4a5568;
  margin-bottom: 2rem;
  line-height: 1.7;
  padding: 1.5rem;
  background: #f8fafc;
  border-left: 4px solid #ff6f61;
  border-radius: 0 8px 8px 0;
  text-align: left;
}

.article-body {
  font-size: 1.125rem;
  color: #4a5568;
  line-height: 1.8;
  text-align: left;
}

.article-body p, .article-body ul {
  text-align: left;
}

.article-body ::v-deep(.content-image) {
  width: 70%;
  margin: 2rem auto;
  text-align: center;
}

.article-body ::v-deep(.content-image img) {
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.article-body ::v-deep(.content-image figcaption) {
  margin-top: 1rem;
  font-size: 1rem;
  color: #718096;
  font-style: italic;
  text-align: center;
}

.article-body h1, .article-body h2, .article-body h3, .article-body h4 {
  color: #2c3e50;
  margin: 2rem 0 1rem;
  font-weight: 600;
  text-align: left;
}

.related-news {
  margin-top: 3rem;
  padding: 2rem;
  background: #f8fafc;
  border-radius: 12px;
}

.related-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  text-align: center;
}

.related-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.related-item {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.related-item:hover {
  background: #1a73e8;
  border-color: #1a73e8;
  transform: translateX(5px);
}

.related-text {
  font-size: 1rem;
  font-weight: 500;
  color: #2c3e50;
  transition: color 0.3s ease;
}

.related-item:hover .related-text {
  color: #ffffff;
}

.article-footer {
  padding: 2rem;
  border-top: 1px solid #e2e8f0;
  display: flex;
  justify-content: flex-end;
}

.back-btn {
  background: #e2e8f0;
  border: none;
  padding: 1rem 2rem;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
}

.back-btn:hover {
  background: #cbd5e0;
  transform: translateY(-2px);
}

.fab-container {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
}

.fab-btn {
  background: linear-gradient(135deg, #FF6200, #1BC6E8);
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
}

.fab-btn:hover {
  transform: scale(1.1) translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
}

/* Responsive Design */
@media (max-width: 768px) {
  .hot-news-page {
    padding: 1rem;
  }
  
  .hero-section {
    padding: 2rem 1rem;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1.125rem;
  }
  
  .search-section {
    padding: 1rem;
  }
  
  .search-container {
    flex-direction: column;
    gap: 1rem;
  }
  
  .news-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .article-title {
    font-size: 2rem;
  }
  
  .article-meta {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
  
  .article-actions {
    justify-content: center;
  }
  
  .fab-container {
    bottom: 1rem;
    right: 1rem;
  }
  
  .fab-btn {
    width: 50px;
    height: 50px;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 1.75rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .floating-icon {
    font-size: 1.5rem;
    margin: 0 0.5rem;
  }
  
  .card-content {
    padding: 1rem;
  }
  
  .card-title {
    font-size: 1.25rem;
  }
  
  .article-header {
    padding: 1rem;
  }
  
  .article-content {
    padding: 1rem;
  }
  
  .article-lead {
    font-size: 1.125rem;
    padding: 1rem;
  }
}
</style>