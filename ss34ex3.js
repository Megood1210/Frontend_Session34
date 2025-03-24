// Chức năng nút 
document.getElementById("loginForm").addEventListener("submit", function (event) { //Truy cập loginForm khi bấm nút
    event.preventDefault();
    let email = document.getElementById("email").value; //Lấy nội dung nhập vào ô email.
    let password = document.getElementById("password").value; //Lấy nội dung nhập vào ô mật khẩu. 
    let users = JSON.parse(localStorage.getItem("users")) || [];//Lấy dữ liệu từ localStorage và biến nó thành mảng
    let user = users.find(user => user.email === email && user.password === password);// Kiểm tra xem email & mật khẩu trùng khớp không qua find để duyệt qua mảng
    if (user) { // Nếu có
        alert("Đăng nhập thành công");
        window.location.href = "welcome.html"; 
    } else {//Nếu không
        alert("Email hoặc mật khẩu không đúng");
    }
});
