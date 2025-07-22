<template>
  <div class='blocklogin'>
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
            <div class="forgot-password-link" style="text-align:center; margin-top:10px;">
              <a href="#" @click.prevent="showForgotPassword = true">Quên mật khẩu?</a>
            </div>
          </form>
        </div>
       
      </div>
    </div>
    <!-- Popup quên mật khẩu -->
    <div v-if="showForgotPassword" class="forgot-password-modal">
      <div class="forgot-password-content">
        <h4>Quên mật khẩu</h4>
        <div v-if="!otpSent">
          <label>Email tài khoản:</label>
          <input v-model="forgotEmail" type="email" class="form-control" placeholder="Nhập email của bạn">
          <div v-if="forgotError" class="form-text text-danger">{{ forgotError }}</div>
          <div class="forgot-btn-group">
            <button class="btn btn-primary sendOTP" @click="sendOtp">Gửi mã OTP</button>
            <button class="btn btn-secondary" @click="closeForgotPassword">Hủy</button>
          </div>
        </div>
        <div v-else-if="!otpVerified">
          <label>Nhập mã OTP đã gửi về email:</label>
          <input v-model="otp" type="text" class="form-control" maxlength="6" placeholder="Nhập mã OTP">
          <div v-if="otpError" class="form-text text-danger">{{ otpError }}</div>
          <div class="forgot-btn-group">
            <button class="btn btn-primary xacthuOTP" @click="verifyOtp">Xác thực OTP</button>
            <button class="btn btn-secondary" @click="closeForgotPassword">Hủy</button>
          </div>
        </div>
        <div v-else>
          <label>Mật khẩu mới:</label>
          <div class="input-group">
            <input v-model="newPassword" :type="showNewPassword ? 'text' : 'password'" class="form-control" placeholder="Nhập mật khẩu mới">
            <button type="button" class="btn btn-outline-secondary" @click="showNewPassword = !showNewPassword" tabindex="-1">
              <i :class="showNewPassword ? 'fa fa-eye-slash' : 'fa fa-eye'"></i>
            </button>
          </div>
          <div v-if="resetError" class="form-text text-danger">{{ resetError }}</div>
          <div class="forgot-btn-group">
            <button class="btn btn-success capNhat" @click="confirmResetPassword">Cập nhật</button>
            <button class="btn btn-secondary" @click="closeForgotPassword">Hủy</button>
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
            showPassword: false,
            showForgotPassword: false,
            forgotEmail: '',
            forgotError: '',
            otpSent: false,
            otp: '',
            otpError: '',
            otpVerified: false,
            newPassword: '',
            resetError: '',
            showNewPassword: false
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
        async sendOtp() {
          this.forgotError = '';
          if (!this.forgotEmail) {
            this.forgotError = 'Vui lòng nhập email.';
            return;
          }
          try {
            const res = await fetch('http://localhost:3000/api/auth/request-reset-otp', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email: this.forgotEmail })
            });
            const data = await res.json();
            if (res.ok) {
              this.otpSent = true;
              alert('Đã gửi mã OTP về email!');
            } else {
              this.forgotError = data.message || 'Không gửi được OTP!';
            }
          } catch (err) {
            this.forgotError = 'Lỗi gửi OTP!';
          }
        },
        async verifyOtp() {
          this.otpError = '';
          if (!this.otp || this.otp.length !== 6) {
            this.otpError = 'Vui lòng nhập đủ 6 số OTP.';
            return;
          }
          try {
            const res = await fetch('http://localhost:3000/api/auth/verify-reset-otp', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email: this.forgotEmail, otp: this.otp })
            });
            const data = await res.json();
            if (res.ok) {
              this.otpVerified = true;
              alert('OTP hợp lệ!');
            } else {
              this.otpError = data.message || 'OTP không đúng!';
            }
          } catch (err) {
            this.otpError = 'Lỗi xác thực OTP!';
          }
        },
        async confirmResetPassword() {
          this.resetError = '';
          if (!this.newPassword || this.newPassword.length < 6) {
            this.resetError = 'Mật khẩu mới phải từ 6 ký tự trở lên.';
            return;
          }
          if (!confirm('Bạn có thực sự muốn đổi mật khẩu?')) return;
          try {
            const res = await fetch('http://localhost:3000/api/auth/reset-password', {
              method: 'PATCH',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email: this.forgotEmail, newPassword: this.newPassword, otp: this.otp })
            });
            const data = await res.json();
            if (res.ok) {
              alert('Đổi mật khẩu thành công!');
              this.closeForgotPassword();
            } else {
              this.resetError = data.message || 'Đổi mật khẩu thất bại!';
            }
          } catch (err) {
            this.resetError = 'Lỗi đổi mật khẩu!';
          }
        },
        closeForgotPassword() {
          this.showForgotPassword = false;
          this.forgotEmail = '';
          this.forgotError = '';
          this.otpSent = false;
          this.otp = '';
          this.otpError = '';
          this.otpVerified = false;
          this.newPassword = '';
          this.resetError = '';
          this.showNewPassword = false;
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
   .forgot-password-modal {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  }

  .sendOTP, .xacthuOTP, .capNhat {
    height: 38px !important;
  }

  .capNhat{
    margin-top: 10px;
  }
  .forgot-password-content {
    background: #fff;
    padding: 32px 24px;
    border-radius: 12px;
    min-width: 480px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.15);
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: stretch;
  }
  .forgot-password-content h4 {
    margin-bottom: 12px;
    color: #1BC6E8;
    text-align: center;
  }
  .forgot-password-link a {
    color: #1BC6E8;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    transition: color 0.2s;
  }
  .forgot-password-link a:hover {
    color: #FF6200;
  }
  .forgot-password-content .btn {
    min-height: 32px;
    padding-top: 0;
    padding-bottom: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 0.98rem;
  }
  .forgot-password-content .forgot-btn-group {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    margin-top: 12px;
  }
  .forgot-password-content .btn.btn-primary {
    background: #ff6200;
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 0 20px;
    font-size: 0.98rem;
    font-weight: bold;
    min-width: 110px;
    margin-top: 12px;
    margin-bottom: 0;
    box-shadow: 0 2px 8px rgba(255,98,0,0.08);
    transition: background 0.2s;
  }
  .forgot-password-content .btn.btn-primary:hover {
    background: #ef7c35;
  }
  .forgot-password-content .btn.btn-secondary {
    background: #757e85;
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 0 20px;
    font-size: 0.98rem;
    font-weight: bold;
    min-width: 80px;
    margin-top: 12px;
    margin-left: 8px;
    min-height: 38px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;
  }
  .forgot-password-content .btn.btn-secondary:hover {
    background: #5a6268;
  }
</style>