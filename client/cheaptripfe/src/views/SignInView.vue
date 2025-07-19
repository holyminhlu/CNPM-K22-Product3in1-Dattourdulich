<template>
  <div class='blocklogin'>
    <div class='btnexit'><a href=""><i class="fa-solid fa-arrow-left"></i></a></div>
    <div class="d-flex justify-content-center">
    <div class="khunglogin">
        <div class="titledn">
            ĐĂNG NHẬP TÀI KHOẢN
        </div>
        <div class="khungformlogin">
            <!-- Đây là khung đăng nhập -->
            <form @submit.prevent="DangNhap">

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label"><font style="color: #1BC6E8;">Email</font><font style="color: red; font-weight: bold">*</font></label>
                    <input v-model="email"  type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ví dụ: 1234abc@gmail.com">
                    <div v-if="emailError" class="form-text text-danger">{{ emailError }}</div>
                </div>
               
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                        <font style="color: #1BC6E8;">Mật khẩu</font>
                        <font style="color: red;font-weight: bold">*</font>
                    </label>
                    <div class="input-group">
                        <input
                            v-model="password"
                            :type="showPassword ? 'text' : 'password'"
                            class="form-control"
                            id="exampleInputPassword1"
                            placeholder="Mật khẩu tối thiểu 6 kí tự"
                        >
                        <button
                            type="button"
                            class="btn btn-outline-secondary"
                            @click="showPassword = !showPassword"
                            tabindex="-1"
                        >
                            <i :class="showPassword ? 'fa fa-eye-slash' : 'fa fa-eye'"></i>
                        </button>
                    </div>
                    <div v-if="passwordError" class="form-text text-danger">{{ passwordError }}</div>
                </div>
               
                <div class="d-flex justify-content-center">
                    <button type="submit" class="btn btn-primary">ĐĂNG NHẬP</button>
                </div>
            </form>
        </div>

        <div class="ggfblogin">
            <div class="line1">

            </div>
            <div style="margin-left: 5px; margin-right: 5px; color: #bbbbbb">Đăng nhập với</div>

            <div class="line2"></div>
        </div>

        <div class="icongoogle_facebook">
            <div class="icongg">
                <a href="#"><img src="/img/Google__G__logo.svg.webp" alt=""></a>
            </div>
            <div class="iconfb">
                
                <a href="#"><img src="/img/images.png" alt=""></a>
            </div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
import { KiemTraDangNhap } from '../utils/validate.js'

export default {
    name: 'LoginView',
    data() {
        return {
            email: '',
            password: '',
            emailError: '',
            passwordError: '',
            showPassword: false // Thêm biến này
        }
    },
    methods: {
        async DangNhap() {
            this.resetErrors();
            
            if (!this.email) {
                this.emailError = 'Vui lòng nhập email';
                return;
            }
            
            if (!this.password) {
                this.passwordError = 'Vui lòng nhập mật khẩu';
                return;
            }

            try {
                const result = await KiemTraDangNhap(this.email, this.password, this.$router);
                if (result.success) {
                    this.resetForm();
                }
            } catch (error) {
                console.error('Lỗi đăng nhập:', error);
            }
        },

        resetForm() {
            this.email = '';
            this.password = '';
        },

        resetErrors() {
            this.emailError = '';
            this.passwordError = '';
        }
    }
}
</script>

<style>
  .blocklogin{
    display: flex;
    margin-top:  78px;
    background-color: #EAEAEA;
    max-width: 100%;
    height: 650px;
    flex-grow: 1; 
    position: relative;
    justify-content: center;
   }

     .khunglogin{
    width: 480px;
    height: 610px;
    margin-top: 30px;
    /* margin-left: 380px; */
    background-color: white;
    border-radius: 8px;
     box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
     display: flex;
     flex-direction: column;
     align-items: center;
    
   }

   .khungformlogin{
    height: 250px;
     width: 390px;
   }

   .ggfblogin{
    width: 400px;
    height: 25px;
    display: flex;
    justify-content: center;
    margin-top: 100px;
   }
   
</style>