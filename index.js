let nav = document.getElementById("nav");
let header = document.getElementById("header");

header.onclick = function() {
    if (nav.className === "navigation" && document.body.clientWidth <= 550) {
        nav.classList.add("navigation_active");
        header.style.height = "100%";
    } else {
        nav.classList.remove("navigation_active");
        header.style.height = "";
    }
};