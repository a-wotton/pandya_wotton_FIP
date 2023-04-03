let menu = document.querySelector("#hamburger-menu"),
    mobileNav = document.querySelector("#dropdown-nav"); 

function toggleMenu() {
    if (mobileNav.classList.contains("hidden")) {
        mobileNav.classList.remove("hidden");
    } else {
        mobileNav.classList.add("hidden");
    }
}

menu.addEventListener("click", toggleMenu);