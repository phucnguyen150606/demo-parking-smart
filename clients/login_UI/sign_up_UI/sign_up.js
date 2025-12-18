function goLogin(e) {
    e.preventDefault(); // Ngăn form tự reload

    // Lấy dữ liệu từ form
    let fullname = document.querySelector(".fullname").value.trim();
    let username = document.querySelector(".username").value.trim();
    let email = document.querySelector(".email").value.trim();
    let phone = document.querySelector(".phone").value.trim();
    let password = document.querySelector(".password").value.trim();
    let confirm = document.querySelector(".confirm").value.trim();

    // Kiểm tra mật khẩu nhập lại
    if (password !== confirm) {
        alert("Mật khẩu nhập lại không khớp");
        return;
    }

    // Tạo formData gửi sang server
    let formData = new FormData();
    formData.append("full_name", fullname);
    formData.append("username", username);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("password", password);

    // Gửi request đến API PHP
    fetch("http://localhost/demo-parking-smart/server/auth/register.php", {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            alert(data.message);

            if (data.status === "success") {
                // Chuyển sang trang đăng nhập
                window.location.href = "../login/login.html";
            }
        })
        .catch(err => {
            console.error("Lỗi:", err);
            alert("Không thể kết nối server");
        });
}