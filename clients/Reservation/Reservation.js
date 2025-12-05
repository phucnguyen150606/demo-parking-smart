const slotsArea = document.getElementById("slotsArea");
let selectedSlot = null;

// Fake data slot từng bãi
const parkingData = {
    "P1": ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8"],
    "P2": ["B1", "B2", "B3", "B4"],
    "P3": ["C1", "C2", "C3", "C4", "C5"],
};

// Slot đang bận
const busySlots = ["A3", "A5", "B2"];

document.getElementById("parkingSelect").addEventListener("change", function() {
    const parkingId = this.value;
    slotsArea.innerHTML = "";
    selectedSlot = null;

    if (!parkingId) return;

    parkingData[parkingId].forEach(slot => {
        const div = document.createElement("div");
        div.classList.add("slot");
        div.innerText = slot;

        if (busySlots.includes(slot)) {
            div.classList.add("busy");
        } else {
            div.onclick = () => selectSlot(div, slot);
        }

        slotsArea.appendChild(div);
    });
});

// Lấy tham số bãi từ URL → auto chọn
const urlParams = new URLSearchParams(window.location.search);
const initialParking = urlParams.get("parking");

if (initialParking) {
    document.getElementById("parkingSelect").value = initialParking;
    document.getElementById("parkingSelect").dispatchEvent(new Event("change"));
}

function selectSlot(div, slot) {
    const all = document.querySelectorAll(".slot");
    all.forEach(s => s.classList.remove("active"));

    selectedSlot = slot;
    div.classList.add("active");
}

function reserveSlot() {
    const plate = document.getElementById("plate").value.trim();
    const parkingId = document.getElementById("parkingSelect").value;

    if (!parkingId) return alert("Vui lòng chọn bãi đỗ xe!");
    if (!selectedSlot) return alert("Vui lòng chọn ô đỗ xe!");
    if (!plate) return alert("Vui lòng nhập biển số xe!");

    // Thông báo đặt chỗ thành công
    alert(
        "Đặt chỗ thành công!\n" +
        "Bãi: " + parkingId + "\n" +
        "Ô: " + selectedSlot + "\n" +
        "Biển số: " + plate
    );

    // Chuyển sang trang thanh toán, truyền dữ liệu qua URL
    const url = `../Payment/payment.html?parking=${parkingId}&slot=${selectedSlot}&plate=${encodeURIComponent(plate)}`;
    window.location.href = url;
}

function goHome() {
    window.location.href = "../Main_UI/main.html";
}