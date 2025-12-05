// Lấy dữ liệu từ query string
const params = new URLSearchParams(window.location.search);
const parking = params.get("parking");
const slot = params.get("slot");
const plate = params.get("plate");

document.getElementById("info").textContent =
    `Bãi đỗ: ${parking}, Ô: ${slot}, Biển số: ${plate}`;

const updateBtn = document.getElementById("updatePrice");
const priceDisplay = document.getElementById("priceDisplay");
const paymentMethods = document.getElementById("paymentMethods");
const payBtn = document.getElementById("payBtn");

let selectedMethod = null;

updateBtn.addEventListener("click", function() {
    const time = document.getElementById("parkingTime").value;
    if (time && time > 0) {
        const price = time * 5000; // 5k / h
        priceDisplay.textContent = price.toLocaleString("vi-VN") + " VND";
        paymentMethods.style.display = "block";
    } else {
        priceDisplay.textContent = "Vui lòng nhập thời gian hợp lệ";
    }
});

// Chọn phương thức bằng click logo
document.querySelectorAll(".method").forEach(div => {
    div.addEventListener("click", function() {
        document.querySelectorAll(".method").forEach(m => m.classList.remove("active"));
        this.classList.add("active");
        selectedMethod = this.dataset.method;
        payBtn.disabled = false;
    });
});

payBtn.addEventListener("click", function() {
    if (selectedMethod) {
        alert(`Thanh toán thành công qua ${selectedMethod.toUpperCase()}!`);
    }
});

function goHome() {
    window.location.href = "../Main_UI/main.html";
}