function goReset(event) {
    event.preventDefault(); // ❗ Ngăn form submit để tránh lỗi 405

    const email = document.querySelector(".email").value.trim();

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

    // ✔ Nếu hợp lệ → chuyển sang trang login
    window.location.href = "../new_password/newpass.html";
}