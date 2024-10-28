function toggleAccountMenu() {
    const menu = document.getElementById("accountMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Close menu if clicked outside
document.addEventListener("click", function(event) {
    const menu = document.getElementById("accountMenu");
    const icon = document.querySelector(".account-icon");
    if (!menu.contains(event.target) && !icon.contains(event.target)) {
        menu.style.display = "none";
    }
});
