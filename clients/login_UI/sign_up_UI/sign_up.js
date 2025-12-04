function goLogin(event) {
    event.preventDefault();
    const fullname = document.getElementsByClassName("fullname")[0].value.trim();
    const username = document.getElementsByClassName("username")[0].value.trim();
    const email = document.getElementsByClassName("email")[0].value.trim();
    const password = document.getElementsByClassName("password")[0].value.trim();
    const confirm = document.getElementsByClassName("confirm")[0].value.trim();

    // Kiểm tra trống
    if (!fullname || !username || !email || !password || !confirm) {
        alert("Vui lòng điền đầy đủ thông tin!");
        return; // 🔥 Dừng hàm
    }

    // Kiểm tra mật khẩu nhập lại
    if (password !== confirm) {
        alert("Mật khẩu và xác nhận mật khẩu không khớp!");
        return; // 🔥 Dừng hàm
    }

    if (!email) {
        alert("Vui lòng nhập email!");
        return;
    }

    // Kiểm tra email hợp lệ (cơ bản)
    const regexEmail = /\S+@\S+\.\S+/;
    if (!regexEmail.test(email)) {
        alert("Email không hợp lệ!");
        return;
    }

    // Chuyển trang
    window.location.href = "../login/login.html";

}