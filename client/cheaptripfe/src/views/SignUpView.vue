<template>
  <div class='blocksignin'>
    <div class='btnexit'><a href=""><i class="fa-solid fa-arrow-left"></i></a></div>
    <div class="d-flex justify-content-center">
    <div class="khungdangnhap">
        <div class="titledn">
            ĐĂNG KÝ TÀI KHOẢN
        </div>
        <div class="khungform">
            <!-- Đây là khung đăng nhập -->
            <form @submit.prevent="handleSubmit">
                <div class="mb-3">
                    <label for="fullName" class="form-label">
                        <font style="color: #1BC6E8;">Họ và tên</font> 
                        <font style="color: red; font-weight: bold">*</font>
                    </label>
                    <input v-model="fullName" class="form-control" id="fullName" aria-describedby="fullNameHelp" placeholder="Ví dụ: Nguyễn Văn A">
                    <div v-if="fullNameError" class="form-text text-danger">{{ fullNameError }}</div>
                </div>

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
                 <div class="mb-3">
                    <label for="exampleInputPassword2" class="form-label">
                        <font style="color: #1BC6E8;">Nhập lại mật khẩu</font>
                        <font style="color: red;font-weight: bold">*</font>
                    </label>
                    <div class="input-group">
                        <input
                            v-model="confirmPassword"
                            :type="showConfirmPassword ? 'text' : 'password'"
                            class="form-control"
                            id="exampleInputPassword2"
                            placeholder="Nhập lại mật khẩu"
                        >
                        <button
                            type="button"
                            class="btn btn-outline-secondary"
                            @click="showConfirmPassword = !showConfirmPassword"
                            tabindex="-1"
                        >
                            <i :class="showConfirmPassword ? 'fa fa-eye-slash' : 'fa fa-eye'"></i>
                        </button>
                    </div>
                    <div v-if="confirmPasswordError" class="form-text text-danger">{{ confirmPasswordError }}</div>
                </div>
                <div class="mb-3 form-check">
                    <div>
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" v-model="acceptTerms">
                    <label class="form-check-label" for="exampleCheck1">Tôi đồng ý với tất cả điều kiện và điều khoản của CheapTrip</label>
                     <div v-if="acceptTermsError" class="form-text text-danger" style="margin-top: 0px !important">{{ acceptTermsError }}</div>
                    </div>
                    
                </div>
               
                <div class="d-flex justify-content-center">
                    <button type="submit" class="btn btn-primary">ĐĂNG KÝ</button>
                </div>

            </form>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
import { validateEmail, validatePassword, validateFullName, validateConfirmPassword, CreateAccount, checkEmailExists } from '@/utils/validate.js';

export default {
    name: 'SignInView',
    data() {
        return {
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
            acceptTerms: false,
            fullNameError: '',
            emailError: '',
            passwordError: '',
            confirmPasswordError: '',
            acceptTermsError: '', // Đừng quên biến này!
            showPassword: false,
            showConfirmPassword: false,
        };
    },
    methods: {
       async handleSubmit() {
            this.resetErrors();
            let isValid = true;

            // Kiểm tra họ và tên
            const fullNameCheck = validateFullName(this.fullName);
            if (!fullNameCheck.isValid) {
                this.fullNameError = fullNameCheck.message;
                isValid = false;
            }

            // Kiểm tra email
            const emailCheck = validateEmail(this.email);
            if (!emailCheck.isValid) {
                this.emailError = emailCheck.message;
                isValid = false;
            } else {
                const exists = await checkEmailExists(this.email);
                if (exists) {
                    this.emailError = 'Email đã tồn tại. Vui lòng chọn email khác.';
                    isValid = false;
                } else {
                    this.emailError = ''; // ✅ XÓA lỗi khi không trùng
                }
            }



            // Kiểm tra mật khẩu
            const passwordCheck = validatePassword(this.password);
            if (!passwordCheck.isValid) {
                this.passwordError = passwordCheck.message;
                isValid = false;
            }

            // Kiểm tra xác nhận mật khẩu
            const confirmPasswordCheck = validateConfirmPassword(this.password, this.confirmPassword);
            if (!confirmPasswordCheck.isValid) {
                this.confirmPasswordError = confirmPasswordCheck.message;
                isValid = false;
            }

            // Kiểm tra điều khoản
            if (!this.acceptTerms) {
                this.acceptTermsError = 'Bạn phải đồng ý với điều khoản.';
                isValid = false;
            }

            // Gửi dữ liệu nếu hợp lệ
            if (isValid) {
                try {
                    CreateAccount(this.fullName, this.email, this.password);
                    this.resetForm();
                } catch (error) {
                    console.error('Lỗi tạo tài khoản:', error);
                }
            }
        },
        resetErrors(){
            this.fullNameError = '';
            this.emailError = '';
            this.passwordError = '';
            this.confirmPasswordError = '';
            this.acceptTermsError = '';
        },

         resetForm() {    // 🛠️ Thêm hàm này
        this.fullName = '';
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
        this.acceptTerms = false;
    }
    }
};
</script>

<style>
   

    /* Thêm CSS cho checkbox khi chưa tick */
        .form-check {
        border: 2px solid transparent;
        padding: 10px;
        }

        .border-danger {
        border-color: red !important;
        }
     /*CSS thêm */
   .blocksignin{
    display: flex;
    margin-top:  78px;
    background-color: #EAEAEA;
    max-width: 100%;
    height: 850px;
    flex-grow: 1; 
    position: relative;
    justify-content: center;
   }
   .btnexit{
    width: 35px;
    height: 35px;
    background-color: #FF6200;
    border-radius: 24px;
    left: 140px;
    top: 20px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
   }

   a{
    color: white;
   }

   .khungdangnhap{
    width: 480px;
    min-height: 650px;
    height: auto;
    margin-top: 30px;
    /* margin-left: 380px; */
    background-color: white;
    border-radius: 8px;
     box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
     display: flex;
     flex-direction: column;
     align-items: center;
    
   }

   .titledn{
    width: 480px;
    height: 50px;
    margin-top: 40px;
    align-items: center;
    justify-content: center;
    display: flex;
    font-size: 18pt;
    font-weight: bold;
    color: #1BC6E8;
   }

   .khungform{
    width: 390px;
    height: 400px;
   
   }

   .btn-primary {
  width: 180px;
  height: 55px;         /* Tăng từ 45px lên 55px */
  background-color: #FF6200;
  font-weight: bold;
  border: none;
  font-size: 20px;      /* Tăng cỡ chữ nếu muốn */
  margin-top: 50px;
  padding-top: 10px;    /* Tăng padding nếu muốn nút dày hơn */
  padding-bottom: 10px;
}

   .btn-primary:hover{
    background-color: #ef7c35;
   }

   .btn-primary:active{
    background-color: #1BC6E8;
   }

   .ggfb{
   
    width: 400px;
    height: 25px;
    display: flex;
    justify-content: center;
    margin-top: 85px;
   }

   .line1 , .line2{
    height: 2px;
    width: 120px;
    background-color: #bbbbbb;
    margin-top: 10px;
   }

   .icongoogle_facebook{
    width: 200px;
    height: 60px;
    
    display: flex;
    justify-content: center;
    align-items: center;
   }

   .icongg{
    width: 50px;
    height: 50px;
 
    margin-right: 50px;
    background-size: contain;
   }

   .iconfb{
     width: 50px;
    height: 50px;
    
   }

   .icongg img{
    width: 50px;
    height: 50px;
   }

   .iconfb img{
    width: 50px;
    height: 50px;
   }

   input:focus{
       
        border: 2px solid #FF6200 !important; /* ví dụ: cam đậm */
        outline: none;
        box-shadow: none !important;
   }

   input{
    height: 45px;
    font-size: 15pt !important;
   }

   .form-text{
    color: red;
   }

   /* Thêm CSS cho checkbox */
    .form-check {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-left: 25px;
        flex-direction: column;
    }

    .form-check-input {
        margin-right: 10px;
    }

    .d-flex.justify-content-center {
      margin-bottom: 20px; /* Thêm khoảng cách dưới nút ĐĂNG KÝ */
    }

    .ggfb {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
    }

    .line1, .line2 {
      flex: 1;
      height: 2px;
      background: #bbbbbb;
      margin: 0 5px;
    }
    
</style>