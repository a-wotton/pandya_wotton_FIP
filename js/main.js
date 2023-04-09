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

function toggleDiv(id) {
    var x = document.getElementById(id);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  
$('.toggle-btn').on('click', function() {
  $(this).toggleClass('active')
});