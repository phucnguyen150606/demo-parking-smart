function openPage(page) {
    window.location.href = page;
}
var swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 3000,
    },
});

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

    const items = document.querySelectorAll(".card");

    items.forEach(item => {
        let text = removeVietnamese(item.innerText.toLowerCase());
        item.style.display = text.includes(keyword) ? "block" : "none";
    });
}


// Bộ lọc tìm kiếm
function filterLot() {
    let input = document.getElementById("search").value.toLowerCase();
    let items = document.querySelectorAll(".card");

    items.forEach(item => {
        let text = item.innerText.toLowerCase();
        item.style.display = text.includes(input) ? "block" : "none";
    });
}