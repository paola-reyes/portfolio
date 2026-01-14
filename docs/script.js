// Elements for displaying mobile sidebar menu
const menuSymbol = document.querySelector(".menu-symbol");
const sidebar = document.querySelector(".sidebar-menu");
const sidebarLinks = document.querySelectorAll(".sidebar-menu .nav-link");
const opaqueBackground = document.querySelector(".opaque-overlay");
const closeSymbol = document.querySelector(".close-symbol");

// Function to show sidebar menu
function showSidebar() {
    sidebar.classList.remove("hidden");
    opaqueBackground.classList.remove("hidden");
}

// Function to hide sidebar menu
function hideSidebar() {
    sidebar.classList.add("hidden");
    opaqueBackground.classList.add("hidden");
}

menuSymbol.addEventListener('click', showSidebar);
closeSymbol.addEventListener('click', hideSidebar);

for (let i = 0; i < sidebarLinks.length; i++) {
    sidebarLinks[i].addEventListener("click", hideSidebar());
}