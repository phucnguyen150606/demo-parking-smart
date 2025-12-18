function goLogin(event) {
    event.preventDefault();

    let user_name = document.querySelector(".username").value.trim();
    let password = document.querySelector(".password").value.trim();

    let formData = new FormData();
    formData.append("user_name", user_name);
    formData.append("password", password);

    fetch("http://localhost/demo-parking-smart/server/auth/login.php", {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            alert(data.message);
            if (data.status === "success") {
                window.location.href = "../../Main_UI/main.html";
            }
        })
        .catch(err => {
            console.error("Lỗi:", err);
            alert("Không thể kết nối server");
        });
}