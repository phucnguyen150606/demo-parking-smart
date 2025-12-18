const filterButtons = document.querySelectorAll(".filter-btn");
const notifications = document.querySelectorAll(".notification-item");

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {

        // active button
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter;

        notifications.forEach(item => {
            if (filter === "all" || item.dataset.time === filter) {
                item.style.display = "flex";
            } else {
                item.style.display = "none";
            }
        });
    });
});