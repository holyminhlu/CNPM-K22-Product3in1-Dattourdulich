<template>
     <header class="header">   <!--Chiều cao toàn bộ menu-->

        <a href="" class="header__logo"><font style="color:#FF6200; font-size: 20pt;">Cheap</font><font style="color:#FFFFFF; font-size: 20pt;">Trip</font></a>

         <div class="header__toggle" @click="toggleMenu">
            <i class="fa-solid fa-bars" id="header__toggle"></i> <!--Dấu 3 gạch-->
         </div>

         <nav class="nav" id="nav-menu"> <!--Đây là thẻ nav chứa toàn bộ menu và icon, tên web-->
            
            <div class="nav__content bd-grid">  <!--bd-grid là class tùy chỉnh được định nghĩa trong css  -->
                
               
               
                <a href="#" class="nav__perfil">                <!--Đây là thẻ a chứa icon và tên web là Clay Mitchell-->
                    <div class="nav__img">
                        <img src="/img/logo.png" alt="">
                    </div>

                    <div>
                        <span class="nav__name"><font style="color:#FF6200; font-size: 20pt;">Cheap</font><font style="color:#FFFFFF; font-size: 20pt;">Trip</font></span>
                        <span class="nav__name"></span>
                
                    </div>
                </a>                                            <!--Đây là thẻ a chứa icon và tên web là Clay Mitchell-->

                
                
                
                <div class="nav__menu"> <!--Đây là thẻ chứa các menu và submenu-->
                   
                   
                    <ul class="nav__list">  <!--Đây là list các menu -->
                        
                        
                        
                        <li class="nav__item"><router-link class="nav__link" to='/'> HOME</router-link></li>
                        
                       
                        <li class="nav__item"><router-link to="/hotnews" class="nav__link">TIN TỨC</router-link></li>
                       
                        <li class="nav__item dropdown">
                            
                            <a href="" class="nav__link dropdown__link">ĐẶT TOUR<i style="font-size: 10pt; margin-left: 5px" class='fa-solid fa-chevron-down dropdown__icon'></i></a> 
                           
                            <ul class="dropdown__menu">
                                <li class="dropdown__item"><router-link to="/tourtheodoan" class="nav__link">TOUR THEO ĐOÀN</router-link></li>
                                <li class="dropdown__item"><router-link to="/tourthuong" class="nav__link">TOUR RIÊNG</router-link></li>
                            </ul>
                        
                        </li>

                      
                        <li class="nav__item dropdown">
                            
                            <router-link to="/gioithieu" class="nav__link dropdown__link">GIỚI THIỆU</router-link>
                        
                        </li>

                        
                        
                        <li class="nav__item"><router-link to="/chinhsach" class="nav__link">CHÍNH SÁCH</router-link></li>

                        <!-- Đăng nhập, đăng kí -->
                        <li class="nav__item dropdown">
                            <div class="account"><i class="fa-solid fa-user"></i></div>
                            <ul class="dropdown__menu">
                                <template v-if="!isLoggedIn">
                                    <li class="dropdown__item"><router-link class="nav__link" to="/signin">ĐĂNG NHẬP</router-link></li>
                                    <li class="dropdown__item"><router-link class="nav__link" to="/signup">ĐĂNG KÝ</router-link></li>
                                </template>
                                <template v-else>
                                    <li class="dropdown__item">
                                        <a class="nav__link" href="#" @click.prevent="goToUserInfo">{{ userFullName }}</a>
                                    </li>
                                    <li class="dropdown__item">
                                        <a class="nav__link" href="#" @click.prevent="handleLogout">ĐĂNG XUẤT</a>
                                    </li>
                                </template>
                            </ul>
                        </li>

                        <!-- Hỗ trợ -->
                        <li class="nav__item dropdown">
                            <div class="hotline"><i class="fa-solid fa-phone"></i></div>

                             <ul class="dropdown__menu">
                                <li class="dropdown__item"><a href="" class="nav__link">Tổng Đài: 1900 2258</a></li>
                                <li class="dropdown__item"><a href="" class="nav__link">VP QUẬN 3 HCM: 0945 50 4848</a></li>
                                <li class="dropdown__item"><a href="" class="nav__link">VP HÀ NỘI: 0942 13 4848</a></li>
                            </ul>
                        </li>
                    
                    </ul>              <!--Đây là list các menu -->
               
               
                </div>
           
           
           
            </div>

         </nav>

    </header>
      <!-- MENU DỌC -->
  <div class="menudoc" :class="{ show: isMenuOpen, hide: !isMenuOpen }">
    <div class="menudoc__logo">
      <div class="menudoc__img">
        <img src="/img/logo.png" alt="CheapTrip Logo">
      </div>
      <div class="menudoc__name">
        <font style="color:#FF6200; font-size: 20pt;">Cheap</font>
        <font style="color:#FFFFFF; font-size: 20pt;">Trip</font>
      </div>
    </div>
    <ul>
      <li><router-link to="/" @click="closeMenu">HOME</router-link></li>
      <li><router-link to="/hotnews" class="nav__link">TIN TỨC</router-link></li>
      <li class="dropdown">
        <div class="menudoc__link dropdown__link" @click="toggleTourMenu">
          ĐẶT TOUR<i style="font-size: 10pt; margin-left: 5px" class='fa-solid fa-chevron-down dropdown__icon'></i>
        </div>
        <ul class="menudoc__submenu" v-show="isTourMenuOpen">
          <li class="dropdown__item"><router-link to="/tourtheodoan" class="nav__link">TOUR THEO ĐOÀN</router-link></li>
          <li class="dropdown__item"><router-link to="/tourthuong" class="nav__link">TOUR RIÊNG</router-link></li>
        </ul>
      </li>
      <li><router-link to='/gioithieu'  class="nav__link">GIỚI THIỆU</router-link></li>
      <li><router-link to="/chinhsach" class="nav__link">CHÍNH SÁCH</router-link></li>
      <li class="dropdown">
        <div class="menudoc__link dropdown__link" @click="toggleAccountMenu">
          <i class="fa-solid fa-user"></i>TÀI KHOẢN<i style="font-size: 10pt; margin-left: 5px" class='fa-solid fa-chevron-down dropdown__icon' :class="{ 'rotate': isAccountMenuOpen }"></i>
        </div>
        <ul class="menudoc__submenu" v-show="isAccountMenuOpen">
          <template v-if="!isLoggedIn">
            <li class="dropdown__item"><router-link class="nav__link" to="/signin">ĐĂNG NHẬP</router-link></li>
            <li class="dropdown__item"><router-link class="nav__link" to="/signup">ĐĂNG KÝ</router-link></li>
          </template>
          <template v-else>
            <li class="dropdown__item">
              <a class="nav__link" href="#" @click.prevent="goToUserInfo">{{ userFullName }}</a>
            </li>
            <li class="dropdown__item">
              <a class="nav__link" href="#" @click.prevent="handleLogout">ĐĂNG XUẤT</a>
            </li>
          </template>
        </ul>
      </li>
      <li class="dropdown">
        <div class="menudoc__link dropdown__link" @click="toggleContactMenu">
          <i class="fa-solid fa-phone"></i>LIÊN HỆ<i style="font-size: 10pt; margin-left: 5px" class='fa-solid fa-chevron-down dropdown__icon'></i>
        </div>
        <ul class="menudoc__submenu" v-show="isContactMenuOpen">
          <li class="dropdown__item"><a href="" class="nav__link">Tổng Đài: 1900 2258</a></li>
          <li class="dropdown__item"><a href="" class="nav__link">VP QUẬN 3 HCM: 0945 50 4848</a></li>
          <li class="dropdown__item"><a href="" class="nav__link">VP HÀ NỘI: 0942 13 4848</a></li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import bus from '../utils/eventBus'
import { DangXuat } from '../utils/validate.js'


const router = useRouter();
const isLoggedIn = ref(localStorage.getItem('isLoggedIn') === 'true');
const userFullName = ref(localStorage.getItem('userFullName') || '');
const isMenuOpen = ref(false);
const isTourMenuOpen = ref(false);
const isAccountMenuOpen = ref(false);
const isContactMenuOpen = ref(false);
const activeCard = ref(null);

function handleLogout() {
  DangXuat(router);
}

function goToUserInfo() {
  router.push('/userinfo');
}

function updateLoginState() {
  isLoggedIn.value = localStorage.getItem('isLoggedIn') === 'true';
  userFullName.value = localStorage.getItem('userFullName') || '';
}

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
  isMenuOpen.value = false;
}

async function toggleTourMenu() {
  isTourMenuOpen.value = !isTourMenuOpen.value;
  isAccountMenuOpen.value = false;
  isContactMenuOpen.value = false;
}

function toggleAccountMenu() {
  isAccountMenuOpen.value = !isAccountMenuOpen.value;
  isTourMenuOpen.value = false;
  isContactMenuOpen.value = false;
}

function toggleContactMenu() {
  isContactMenuOpen.value = !isContactMenuOpen.value;
  isTourMenuOpen.value = false;
  isAccountMenuOpen.value = false;
}

const handleClickOutside = (event) => {
  if (!event.target.closest('.card1')) {
    activeCard.value = null;
  }
};

onMounted(() => {
  bus.on('login-success', updateLoginState);
  bus.on('logout', updateLoginState);
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  bus.off('login-success', updateLoginState);
  bus.off('logout', updateLoginState);
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style>

:root{
  --header-height: 3.2rem;

  /* Colors */
  --first-color: #5fd0e7;
  --first-color-light: #424242;
  --dark-color: #424242;
  --white-color: #FF6200;

  /* Font and typography */ 
  /* typography liên quan đến kỹ thuật xếp chữ trong thiết kế */
  --body-font: 'Arial';
  --nav-name-font-size: 1.5rem;
  --normal-font-size: .938rem;

  /* z index */
  --z-fixed: 100;
}

/* VIẾT RESPONSIVE */
@media (max-width: 480px){
    :root{
    --nav-name-font-size: 1rem; /*giảm nav-name xuống còn 1rem  */
    --normal-font-size: 1rem;   /*tăng normal-font-size lên thành 1 rem*/
    }

    body {
      margin: 0;
    }

    .header {
      height: calc(var(--header-height) + 1rem);
    }

    /* Hiển thị nút toggle (icon ba gạch) */
    .header__toggle {
      display: block !important; /* Đảm bảo nút toggle hiển thị */
      font-size: 1.7rem;
      cursor: pointer;
    }

    /* Ẩn logo trong header nếu không cần thiết */
    .header__logo {
      display: block !important; /* Tùy chọn: ẩn logo nếu bạn muốn */
    }

    /* Ẩn menu ngang */
    .nav {
      display: none !important; /* Ẩn hoàn toàn menu ngang */
    }

    /* Đảm bảo menu dọc hiển thị */
    .menudoc {
      display: block;
      position: fixed;
      top: 0;
      left: -250px; /* Mặc định ẩn menu dọc */
      width: 250px;
      height: 100%;
      background: linear-gradient(180deg, #1BC6E8 0%, #0EA8C5 100%);
      z-index: var(--z-fixed);
      padding: 2rem 1rem;
      box-shadow: 4px 0 10px rgba(0, 0, 0, 0.15);
      overflow-y: auto;
      transition: all 0.3s ease;
    }

    .menudoc.show {
      left: 0; /* Hiển thị menu dọc khi có class 'show' */
    }

    .menudoc.hide {
      left: -250px; /* Ẩn menu dọc khi có class 'hide' */
    }
}


@media(min-width: 480px) and (max-width: 991px){
    :root{
    --nav-name-font-size: 1rem; /*giảm nav-name xuống còn 1rem  */
    --normal-font-size: 1rem;   /*tăng normal-font-size lên thành 1 rem*/
    }

    body {
      margin: 0;
    }

    .header {
      height: calc(var(--header-height) + 1rem);
    }

    /* Hiển thị nút toggle (icon ba gạch) */
    .header__toggle {
      display: block !important; /* Đảm bảo nút toggle hiển thị */
      font-size: 1.7rem;
      cursor: pointer;
    }

    /* Ẩn logo trong header nếu không cần thiết */
    .header__logo {
      display: block !important; /* Tùy chọn: ẩn logo nếu bạn muốn */
    }

    /* Ẩn menu ngang */
    .nav {
      display: none !important; /* Ẩn hoàn toàn menu ngang */
    }

    /* Đảm bảo menu dọc hiển thị */
    .menudoc {
      display: block;
      position: fixed;
      top: 0;
      left: -250px; /* Mặc định ẩn menu dọc */
      width: 250px;
      height: 100%;
      background: linear-gradient(180deg, #1BC6E8 0%, #0EA8C5 100%);
      z-index: var(--z-fixed);
      padding: 2rem 1rem;
      box-shadow: 4px 0 10px rgba(0, 0, 0, 0.15);
      overflow-y: auto;
      transition: all 0.3s ease;
    }

    .menudoc.show {
      left: 0; /* Hiển thị menu dọc khi có class 'show' */
    }

    .menudoc.hide {
      left: -250px; /* Ẩn menu dọc khi có class 'hide' */
    }
}












/* BASE */
*, ::before, ::after{ /*áp dụng tất cả các phần tử html*/
  box-sizing: border-box;  /*Giữ nguyên chiều rộng và chiều cao tổng cộng đã đặt, dù thêm padding hay border*/
}

body{
  margin: var(--header-height) 0 0 0;
  /* margin-top = 3 rem đã đặt trong :root
     margin-right= 0
     margin-bottom = 0
     margin-left = 0 */
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  font-weight: 600;
}

ul{
  padding: 0; /*xóa khoảng cách bên trong thẻ*/
  margin: 0; /*xóa khoảng cách bên ngoài thẻ*/
  list-style: none; /*bỏ dấu đầu dòng trong mỗi danh sách*/
}

a{
  text-decoration: none;
}

nav a {
  text-decoration: none;
}

/* CSS cho nav__content */
.bd-grid{ 
  max-width: 1224px;
  display: grid;
  grid-template-columns: 100%; /*Tạo một cột chiếm 100% của nav*/
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}

/* .HEADER */
.header{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  padding: 0 1rem; /*thiết lập khoảng cách nội dung bên trong header
  trên-dưới là 0, trái-phải là 1rem*/
  background-color: #1BC6E8;
  z-index: var(--z-fixed);
  display: flex;
  justify-content: space-between; /*Thuộc tính sử dụng trong flexbox giúp cho các
  phần tử cách đều nhau*/
  align-items: center;
  box-shadow: 0 2px 4px rgba(0,0,0,.1); /*0 là dịch chuyển bóng theo chiều ngang
   2 là dịch chuyển bóng theo chiều dọc
   4 là bán kích làm mờ bóng
   màu bóng là màu đen (rgb(0,0,0)) với độ mờ là 10% (0.1).
  */
}

.header__logo{
  color: var(--dark-color);
  text-decoration: none;
}

.header__toggle{  /*CSS cho icon*/
  font-size: 1.7rem;
  cursor: pointer;
}




/* NAV */


.nav__content{ /*chuyển làm cho các content trong menu dọc đứng theo chiều dọc*/
  display: flex;
  flex-direction: column;
}

.nav__perfil{ /*css cho phần icon và tên trang web*/
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 3rem;
}

.nav__img{
  display: flex;
  justify-content: center;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1rem;
}

.nav__name{  /*Sửa chữ Clay Mitchell */
  display: block;
  font-size: var(--nav-name-font-size);
  color: var(--white-color);
}

.nav__item{   /*Sửa lại khoảng cách bên dưới của các mục menu*/
  margin-bottom: 2rem;  
}

.nav__link{  /*Sửa lại màu của các mục menu*/
  color: var(--first-color-light);
  font-weight: 630;
}

.nav__link:hover{ /*Khi rê chuột vào thì các mục menu đổi màu*/
  color: var(--white-color); 
}

/* Show menu */
.show{
  left: 0;
}

/* Active link */
.active{
  color: var(--white-color);   /*Link nào được active thì sẽ hiện lên màu trắng, lúc nảy tôi đã để ở Home*/
}

/*Dropdown*/
.dropdown__link{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.dropdown__icon{
  font-size: 1.3rem;
  transition: 0.7s;
}

.dropdown__menu{
  margin: 1rem 0 0 1rem; /*top right bottom left*/
   display: none;
}

.dropdown__item{
  margin: 1rem 0;
}

.dropdown:hover > .dropdown__menu{  /*Hover vào parent menu thì submenu hiện ra*/
  display: block;
}

.dropdown:hover .dropdown__icon{ /*Khi hover vào parent menu thì icon sẽ xoay 180 độ*/
  transform: rotate(180deg);
  transition: 0.6s;  
}

/* MEDIA QUERIES */




/* MENU DỌC */
.menudoc {
  display: block;
  position: fixed;
  top: 0;
  left: -250px;
  width: 250px;
  height: 100%;
  background: linear-gradient(180deg, #1BC6E8 0%, #0EA8C5 100%);
  z-index: var(--z-fixed);
  padding: 2rem 1rem;
  box-shadow: 4px 0 10px rgba(0, 0, 0, 0.15);
  overflow-y: auto;
  transition: all 0.3s ease;
}

.menudoc a{
  text-decoration: none;
}

.menudoc__logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.menudoc__img {
  width: 80px;
  height: 80px;
  overflow: hidden;
  margin-bottom: 1rem;
  border: none;
  border-radius: 0;
}

.menudoc__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0;
}

.menudoc__name {
  text-align: center;
  font-weight: 500;
}

.menudoc ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

.menudoc li {
  margin: 0.5rem 0;
  border-radius: 8px;
  transition: all 0.3s ease;
}



.menudoc a {
  color: var(--dark-color);
  font-size: 1.2rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
  transition: all 0.3s ease;
}

/* Remove active state styles */
.menudoc a.active {
  background-color: transparent !important;
  color: var(--dark-color) !important;
  font-weight: 500;
  box-shadow: none !important;
}



.menudoc a i {
  margin-right: 0.8rem;
  font-size: 1.2rem;
  width: 24px;
  text-align: center;
}

.menudoc.show {
  left: 0;
  animation: none;
}

.menudoc.hide {
  left: -250px;
  animation: none;
}

.menudoc .dropdown__link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 1.2rem;
  cursor: pointer;
  color: var(--dark-color);
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.menudoc .dropdown__link:hover {
  background-color: transparent;
  color: var(--dark-color);
}

.menudoc .dropdown__link i:first-child {
  margin-right: 8px;
}

.menudoc .dropdown__icon {
  transition: none; /* Xóa hiệu ứng chuyển đổi */
  transform: none !important; /* Ngăn mọi thay đổi xoay */
}

.menudoc .dropdown:hover .dropdown__icon {
  transform: none !important; /* Ngăn xoay khi hover */
}



.menudoc__submenu {
  margin: 0.5 rem 0 0 1rem;
  padding: 0.5rem 0;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

/* .menudoc .dropdown__item {
  margin: 0  0;
  padding: 0 0;
} */

.menudoc .dropdown__item a {
  color: var(--dark-color);
  font-size: 1.1rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.menudoc .dropdown__item a:hover {
  color: var(--dark-color);
}

/* Custom scrollbar for menu */
.menudoc::-webkit-scrollbar {
  width: 6px;
}

.menudoc::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
}

.menudoc::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
}

.menudoc::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}





/* MENU DỌC */
.menudoc {
  display: block;
  position: fixed;
  top: 0;
  left: -250px;
  width: 250px;
  height: 100%;
  background: linear-gradient(180deg, #1BC6E8 0%, #0EA8C5 100%);
  z-index: var(--z-fixed);
  padding: 2rem 1rem;
  box-shadow: 4px 0 10px rgba(0, 0, 0, 0.15);
  overflow-y: auto;
  transition: all 0.3s ease;
}

.menudoc a{
  text-decoration: none;
}

.menudoc__logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.menudoc__img {
  width: 80px;
  height: 80px;
  overflow: hidden;
  margin-bottom: 1rem;
  border: none;
  border-radius: 0;
}

.menudoc__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0;
}

.menudoc__name {
  text-align: center;
  font-weight: 500;
}

.menudoc ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

.menudoc li {
  margin: 0.5rem 0;
  border-radius: 8px;
  transition: all 0.3s ease;
}



.menudoc a {
  color: var(--dark-color);
  font-size: 1.2rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
  transition: all 0.3s ease;
}

/* Remove active state styles */
.menudoc a.active {
  background-color: transparent !important;
  color: var(--dark-color) !important;
  font-weight: 500;
  box-shadow: none !important;
}



.menudoc a i {
  margin-right: 0.8rem;
  font-size: 1.2rem;
  width: 24px;
  text-align: center;
}

.menudoc.show {
  left: 0;
  animation: none;
}

.menudoc.hide {
  left: -250px;
  animation: none;
}

.menudoc .dropdown__link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 1.2rem;
  cursor: pointer;
  color: var(--dark-color);
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.menudoc .dropdown__link:hover {
  background-color: transparent;
  color: var(--dark-color);
}

.menudoc .dropdown__link i:first-child {
  margin-right: 8px;
}

.menudoc .dropdown__icon {
  transition: none; /* Xóa hiệu ứng chuyển đổi */
  transform: none !important; /* Ngăn mọi thay đổi xoay */
}

.menudoc .dropdown:hover .dropdown__icon {
  transform: none !important; /* Ngăn xoay khi hover */
}



.menudoc__submenu {
  margin: 0.5 rem 0 0 1rem;
  padding: 0.5rem 0;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

/* .menudoc .dropdown__item {
  margin: 0  0;
  padding: 0 0;
} */

.menudoc .dropdown__item a {
  color: var(--dark-color);
  font-size: 1.1rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.menudoc .dropdown__item a:hover {
  color: var(--dark-color);
}

/* Custom scrollbar for menu */
.menudoc::-webkit-scrollbar {
  width: 6px;
}

.menudoc::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
}

.menudoc::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
}

.menudoc::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}

@media screen and (max-width: 768px){   /*GIAO DIỆN DÀNH CHO MOBILE */
   /* Menu dọc */
  .nav{  
    position: fixed;
    top: 0;
    left: -100%;
    background-color: var(--first-color);
    width: 30%;
    height: 100vh;
    padding: 0rem 0;
    z-index: var(--z-fixed);
    transition: .5s;
    overflow-y: auto;
     display: block !important;
  }

    /* Ẩn menu ngang */
  .nav {
    display: none !important; /* Ẩn hoàn toàn menu ngang */
  }
 
}

@media screen and (min-width: 768px){ 
  /*Ở màn hình lớn hơn hoặc bằng 768px*/
  body{
    margin: 0;
  }
  .header{
     height: calc(var(--header-height) + 1rem);  /*Cho phép thực hiện phép toán giữa các giá trị, biến,...*/
     
  }

  .header__logo, .header__toggle{  /*nút ba gạch và chữ Clay biến mất*/
    display: none  
  }

  .nav{
    width: 100%;  /*nav phải chiếm toàn bộ màn hình, ở màn hình lớn hơn hoặc bằng 576px thì mới nhỏ lại(có màu xanh)*/
    
  }

  .nav__menu{
    margin-top: 15px;
    
  }

  .nav__content{    /*Bao gồm ảnh, Clay Mitchell, các menu cha, con */
    flex-direction: row;    /*Nằm ngang*/
    justify-content: space-between;  /*các phần tử cách đều nhau theo chiều ngang*/ 
    align-items: center;  /*Các phần tử sẽ ở giữa theo chiều dọc*/
  }

  .nav__perfil{   /*Đây là thẻ a chứa icon và tên web là Clay Mitchell*/
    flex-direction: row;  
    text-align: initial; /*nằm ở vị trí mặc định, thường là left*/
    margin-bottom: 0; 
  }

  .nav__img{
    margin-top: 3px;
    width: 95px;
    height: 95px;
    margin-right: .5rem;
    margin-bottom: 0;
  }

  .nav__img img{
    width: 100%;
    height: 100%;
    object-fit: cover; /* Giúp ảnh không bị méo nếu không tỷ lệ 1:1 */
  }

  .nav__name{
    color: var(--dark-color);   /*Từ màu trắng thành màu tối*/
  }

  .nav__list{             
    display: flex;
    align-items: center;
  }

  .nav__item{
    margin: 0 1.5rem;
    padding: 1.4rem 0;
  }

  .nav__link{
    color: var(--dark-color);
  }

  .nav__link:hover{
    color: var(--white-color);
  }

  .active{
    color: var(--white-color);
  }

  .dropdown{
    position: relative;
  }

  .dropdown__menu{
    position: fixed;
    margin: 0;
    top: calc(var(--header-height)+1rem);
    padding: .5rem 1.5rem;
    box-shadow: 0 2px 4px rgba(0,0,0,.5);
    border-radius: .5rem;
    background-color: #1bc6e8e7
  }

  .dropdown__item{
    margin: .5rem 0; 
  }

  .account{
    width: 30px;
    height: 30px;
    border-radius: 20px;
    background-color: #FF6200;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .hotline{
    width: 30px;
    height: 30px;
    border-radius: 20px;
    background-color: #FF6200;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  @media screen and (min-width: 1024px) {
    .bd-grid{
      margin-left: auto;
      margin-right: auto;
    }
  }
}




</style>


