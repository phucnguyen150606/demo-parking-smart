<?php
// Luôn trả về JSON
header("Content-Type: application/json; charset=UTF-8");

include "../config/db.php";
include "../utils/response.php";

// Chỉ xử lý nếu là POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonResponse("error", "Chỉ chấp nhận phương thức POST");
}

// Nhận dữ liệu từ form
$full_name = trim($_POST['full_name'] ?? '');
$username  = trim($_POST['username'] ?? '');
$email     = trim($_POST['email'] ?? '');
$password  = trim($_POST['password'] ?? '');
$phone     = trim($_POST['phone'] ?? '');

// Kiểm tra dữ liệu rỗng
if ($full_name === '' || $username === '' || $email === '' || $password === '' || $phone === '') {
    jsonResponse("error", "Vui lòng điền đầy đủ thông tin");
}

// Kiểm tra email đã tồn tại
$check = $conn->prepare("SELECT id FROM users WHERE email = ?");
if (!$check) {
    jsonResponse("error", "Lỗi prepare khi kiểm tra email: " . $conn->error);
}
$check->bind_param("s", $email);
$check->execute();
$check->store_result();

if ($check->num_rows > 0) {
    jsonResponse("error", "Email đã tồn tại");
}

// Hash mật khẩu
$hashed = password_hash($password, PASSWORD_DEFAULT);

// Thêm người dùng
$stmt = $conn->prepare("INSERT INTO users(full_name, user_name, email, password, phone) VALUES (?, ?, ?, ?, ?)");
if (!$stmt) {
    jsonResponse("error", "Lỗi prepare khi thêm người dùng: " . $conn->error);
}
$stmt->bind_param("sssss", $full_name, $username, $email, $hashed, $phone);

if ($stmt->execute()) {
    jsonResponse("success", "Đăng ký thành công");
} else {
    jsonResponse("error", "Lỗi khi lưu dữ liệu: " . $stmt->error);
}
?>
