let nav = document.getElementById("nav");
let header = document.getElementById("header");

header.onclick = function() {
    if (nav.className === "navigation" && document.body.clientWidth <= 550) {
        nav.classList.add("nav_active");
        header.style.height = "290px";
    } else {
        nav.classList.remove("nav_active");
        header.style.height = "80px";
    }
};