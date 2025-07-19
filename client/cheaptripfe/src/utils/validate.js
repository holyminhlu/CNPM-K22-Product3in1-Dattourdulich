// /src/utils/validate.js

import bus from './eventBus'

// Kiểm tra email
export function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return {
        isValid: re.test(email),
        message: 'Email không hợp lệ'
    };
}

// Kiểm tra mật khẩu (tối thiểu 6 ký tự)
export function validatePassword(password) {
    const minLength = 8;
    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (!password || password.length < minLength) {
        return {
            isValid: false,
            message: 'Mật khẩu phải có ít nhất 8 ký tự'
        };
    }

    if (!hasLowerCase) {
        return {
            isValid: false,
            message: 'Mật khẩu phải có ít nhất 1 chữ thường'
        };
    }

    if (!hasUpperCase) {
        return {
            isValid: false,
            message: 'Mật khẩu phải có ít nhất 1 chữ hoa'
        };
    }

    if (!hasNumber) {
        return {
            isValid: false,
            message: 'Mật khẩu phải có ít nhất 1 chữ số'
        };
    }

    if (!hasSpecialChar) {
        return {
            isValid: false,
            message: 'Mật khẩu phải có ít nhất 1 ký tự đặc biệt'
        };
    }

    return {
        isValid: true,
        message: ''
    };
}


// Kiểm tra họ và tên (chỉ chứa chữ cái và khoảng trắng)
export function validateFullName(name) {
    if (!name || name.trim() === '') {
        return { isValid: false, message: 'Họ và tên không được để trống' };
    }
    if (name.length < 3 || name.length > 50) {
        return { isValid: false, message: 'Họ và tên phải từ 3 đến 50 ký tự' };
    }
    const pattern = /^[a-zA-ZÀ-ỹ\s]+$/;
    if (!pattern.test(name)) {
        return { isValid: false, message: 'Họ và tên chỉ được chứa chữ cái và khoảng trắng' };
    }
    return { isValid: true, message: '' };
}

export async function checkEmailExists(email) {
    try {
        const res = await fetch('http://localhost:3000/api/auth/checkemail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        });

        const result = await res.json();
        return result.exists;
    } catch (error) {
        console.error('Lỗi kiểm tra email:', error);
        return false;
    }
}



// Kiểm tra mật khẩu xác nhận
export function validateConfirmPassword(password, confirmPassword) {
    return {
        isValid: password === confirmPassword,
        message: 'Mật khẩu xác nhận không khớp'
    };
}

export function validateAcceptTerms(acceptTerms) {
    return acceptTerms === true;
}

//Hàm để lưu dữ liệu
export async function CreateAccount(username, email, password) {
    try {
        console.log('Đang gửi dữ liệu đăng ký:', {
            fullName: username,
            email: email,
            passWord: password
        });

        const response = await fetch("http://localhost:3000/api/auth/createaccount", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                fullName: username,
                email: email,
                passWord: password,
            }),
        });

        const result = await response.json();
        console.log('Kết quả từ server đăng ký:', result);

        if (response.ok) {
            console.log("Vui lòng kiểm tra email để xác nhận đăng ký!", result);
            alert("Vui lòng kiểm tra email để xác nhận đăng ký!");
            return { success: true };
        } else {
            console.error("Lỗi từ server:", result);
            alert(result.message || "Đăng ký thất bại!");
            return { success: false };
        }
    } catch (error) {
        console.error("Lỗi:", error);
        alert("Có lỗi xảy ra khi đăng ký");
        return { success: false };
    }
}

//Hàm kiểm tra đăng nhập
export async function KiemTraDangNhap(email, password, router) {
    try {
        const res = await fetch("http://localhost:3000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                passWord: password, // <-- đúng với backend nếu backend nhận "passWord"
            }),
        });

        const result = await res.json();

        if (res.ok && result.message === 'Đăng nhập thành công!') {
            // Lưu thông tin người dùng vào localStorage
            localStorage.setItem('token', result.token);
            localStorage.setItem('userFullName', result.user.fullName);
            localStorage.setItem('userEmail', result.user.email);
            localStorage.setItem('isLoggedIn', 'true');
            if (result.user._id) {
                localStorage.setItem('userId', result.user._id);
            } else if (result.user.id) {
                localStorage.setItem('userId', result.user.id);
            }
            // Emit event đăng nhập thành công
            bus.emit('login-success', {
                fullName: result.user.fullName,
                email: result.user.email,
                isLoggedIn: true
            });
            
            // Thông báo thành công
            alert("Đăng nhập thành công");
            
            // Chuyển hướng về trang chủ
            if (router) {
                router.push('/');
            }
            
            return { success: true, fullName: result.user.fullName };
        } else {
            console.error("Lỗi từ server:", result);
            alert(result.error || result.message || "Email hoặc mật khẩu không đúng");
            return { success: false };
        }
    } catch (error) {
        console.log("Lỗi:", error);
        alert("Có lỗi xảy ra khi đăng nhập");
        return { success: false };
    }
}

// Thêm hàm đăng xuất
export function DangXuat(router) {
    // Xóa thông tin người dùng khỏi localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('userFullName');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('isLoggedIn');
    
    // Emit event đăng xuất
    bus.emit('logout');
    
    // Chuyển hướng về trang chủ
    if (router) {
        router.push('/');
    }
    
    // Reload trang để cập nhật UI
    window.location.reload();
}