import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'font-awesome/css/font-awesome.css';
import router from './routes';
import 'aos/dist/aos.css'; // Import CSS AOS
import AOS from 'aos';     // Import thư viện JS
import gsap from 'gsap';
import './assets/main.css';

createApp(App).use(router).mount('#app')
AOS.init();
gsap.to("body", { backgroundColor: "#fff", duration: 1 });