import { createRouter, createWebHistory } from "vue-router";
import SignInView from '../views/SignInView.vue';
import SignUpView from '../views/SignUpView.vue';
import HomeView from '../views/HomeView.vue';
import TourDetailsView from '../views/TourDetailsView.vue';
import BookingView from '../views/BookingView.vue'
import UserInfoView from '../views/UserInfoView.vue';
import SearchResults from '../views/SearchResults.vue';
// Phần Article
import GioiThieu from '../views/Articles/GioiThieu.vue';
import ChinhSach from '../views/Articles/ChinhSach.vue';
import HotNews from '../views/Articles/HotNews.vue';
import TourThuong from '../views/TourThuong.vue';
import TourTheoDoan from '../views/TourTheoDoan.vue';

// test

const routes = [
    {path: '/signup', component: SignUpView},
    {path: '/signin', component: SignInView},
    {path: '/', component: HomeView},
    {path: '/tour/booking/:tourId', component: BookingView},
    {path: '/tour/:tourId', component: TourDetailsView},
    {path: '/tour-details/:tourId', component: TourDetailsView},
    {path: '/userinfo', component: UserInfoView},
    {path: '/search-results', name: 'SearchResults', component: SearchResults},
    {path: '/gioithieu', name: 'GioiThieu', component: GioiThieu},
    {path: '/chinhsach', name: 'ChinhSach', component: ChinhSach},
    {path: '/hotnews', name: 'HotNews', component: HotNews},
    {path: '/tour-thuong', name: 'TourThuong', component: TourThuong},
    {path: '/tour-theo-doan', name: 'TourTheoDoan', component: TourTheoDoan},
    {path: '/tourtheodoan', name: 'TourTheoDoanAlias', component: TourTheoDoan},
    {path: '/tourthuong', name: 'TourThuongAlias', component: TourThuong},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router