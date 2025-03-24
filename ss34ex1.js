document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let message = document.getElementById("message");
    // Kiểm tra các ô nhập liệu có bị trống không
    if (email === "" || password === "" || confirmPassword === "") {
        message.textContent = "O nhap khong duoc de trong";
        return;
    }
    // Kiểm tra mật khẩu nhập lại có khớp không
    if (password !== confirmPassword) {
        message.textContent = "Mat khau khong dung";
        return;
    }
    // Kiểm tra email đã tồn tại trong localStorage chưa
    let users = JSON.parse(localStorage.getItem("users")) || []; // [] tránh bị null
    let userExists = users.some(user => user.email === email);
    if (userExists) {
        message.textContent = "Email khong duoc trung";
        return;
    }
    // Lưu tài khoản vào localStorage
    let newUser = { 
        email: email, 
        password: password 
    };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    message.style.color = "green";
    message.textContent = "Đang ky thanh cong";
    // Xóa ô nhập liệu sau khi đăng ký
    document.getElementById("registerForm").reset(); // reset dùng để đặt lại tất cả các giá trị của form về trạng thái mặc định ban đầu trong HTML
});
