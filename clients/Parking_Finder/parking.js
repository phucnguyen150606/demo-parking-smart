function goHome() {
    window.location.href = "../Main_UI/main.html";
}
// Hàm bỏ dấu tiếng Việt
function removeVietnamese(str) {
    return str.normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d").replace(/Đ/g, "D");
}

function filterLot() {
    const keyword = removeVietnamese(
        document.getElementById("search").value.toLowerCase()
    );

    const items = document.querySelectorAll(".lot-item");

    items.forEach(item => {
        let text = removeVietnamese(item.innerText.toLowerCase());
        item.style.display = text.includes(keyword) ? "block" : "none";
    });
}

function viewDetail(lotId) {
    window.location.href = "../reservation/reservation.html?lot=" + lotId;
}

// Bộ lọc tìm kiếm
function filterLot() {
    let input = document.getElementById("search").value.toLowerCase();
    let items = document.querySelectorAll(".lot-item");

    items.forEach(item => {
        let text = item.innerText.toLowerCase();
        item.style.display = text.includes(input) ? "block" : "none";
    });
}