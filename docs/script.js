// Elements for displaying mobile sidebar menu
const menuSymbol = document.querySelector(".menu-symbol");
const sidebar = document.querySelector(".sidebar-menu");
const sidebarLinks = document.querySelectorAll(".sidebar-menu .nav-link");
const opaqueBackground = document.querySelector(".opaque-overlay");
const closeSymbol = document.querySelector(".close-symbol");

// Function to show sidebar menu
function showSidebar() {
    if (sidebar.classList.contains("hidden"))
        sidebar.classList.remove("hidden");

    if (opaqueBackground.classList.contains("hidden"))
        opaqueBackground.classList.remove("hidden");
}

// Function to hide sidebar menu
function hideSidebar() {
    if (!sidebar.classList.contains("hidden")) 
        sidebar.classList.add("hidden");

    if (!opaqueBackground.classList.contains("hidden"))
        opaqueBackground.classList.add("hidden");
}

menuSymbol.addEventListener('click', showSidebar);
closeSymbol.addEventListener('click', hideSidebar);

// Hide sidebar when a nav link is clicked
for (let i = 0; i < sidebarLinks.length; i++) {
    sidebarLinks[i].addEventListener("click", hideSidebar());
}

// Elements for image close-up modal
const zoomImage = document.querySelectorAll(".zoomable");
const modal = document.querySelector(".modal");
const modalImage = document.querySelector(".modal img");
const closeModal = document.querySelector(".modal .close-symbol");

// Function to show close-up image
function showCloseup(e) {
    // Set close up image to selected image
    modalImage.src = e.target.src;

    // Ignore carousel cells that are not being viewed (to avoid accidental zoom)
    let clickedCell = e.target.closest(".zoomable");
    
    if (clickedCell.classList.contains("carousel-cell") && !clickedCell.classList.contains("is-selected")) {
        return ;
    }

    // Show modal + opaque background
    if (modal.classList.contains("hidden"))
        modal.classList.remove("hidden");

    if (opaqueBackground.classList.contains("hidden"))
        opaqueBackground.classList.remove("hidden");
};

// Function to hide close-up image
function hideCloseup() {
    // Reset to placeholder source
    modalImage.src = "#";

    if (!modal.classList.contains("hidden"))
        modal.classList.add("hidden");

    if (!opaqueBackground.classList.contains("hidden"))
        opaqueBackground.classList.add("hidden");
};

// Set closeup event listeners for zoomable images
for (let i = 0; i < zoomImage.length; i++) {
    zoomImage[i].addEventListener("click", showCloseup);
}

closeModal.addEventListener('click', hideCloseup);

// Hide popup when clicking outside of it
opaqueBackground.addEventListener('click', () => {
    if (!sidebar.classList.contains("hidden")) {
        hideSidebar();
    }

    if (!modal.classList.contains("hidden")) {
        hideCloseup();
    }
});