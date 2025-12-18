<?php
header("Content-Type: application/json");

include "../config/db.php";
include "../utils/response.php";

// Chỉ xử lý nếu là POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonResponse("error", "Chỉ chấp nhận phương thức POST");
}

// Nhận dữ liệu từ form
$user_name = trim($_POST['user_name'] ?? '');
$password  = trim($_POST['password'] ?? '');

// Kiểm tra dữ liệu rỗng
if ($user_name === '' || $password === '') {
    jsonResponse("error", "Vui lòng nhập tên đăng nhập và mật khẩu");
}

// Truy vấn người dùng theo user_name
$stmt = $conn->prepare("SELECT id, password, full_name FROM users WHERE user_name = ?");
if (!$stmt) {
    jsonResponse("error", "Lỗi truy vấn: " . $conn->error);
}
$stmt->bind_param("s", $user_name);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 0) {
    jsonResponse("error", "Tên đăng nhập không tồn tại");
}

$user = $result->fetch_assoc();

// So sánh mật khẩu
if (!password_verify($password, $user['password'])) {
    jsonResponse("error", "Mật khẩu không đúng");
}

// Đăng nhập thành công
jsonResponse("success", "Đăng nhập thành công", [
    "user_id"   => $user['id'],
    "full_name" => $user['full_name'],
    "user_name" => $user_name
]);
?>
