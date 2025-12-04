function updatePassword(event) {
    event.preventDefault(); // Ngăn form load trang

    const password = document.getElementById("password").value.trim();
    const confirm = document.getElementById("confirm").value.trim();

    if (!password || !confirm) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    if (password.length < 6) {
        alert("Mật khẩu phải có ít nhất 6 ký tự!");
        return;
    }

    if (password !== confirm) {
        alert("Mật khẩu xác nhận không khớp!");
        return;
    }

    alert("Cập nhật mật khẩu thành công!");

    // Chuyển về trang đăng nhập
    window.location.href = "../login/login.html";
}