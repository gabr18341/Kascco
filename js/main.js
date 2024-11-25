// scroll
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const activeLink = window.location.pathname


header.innerHTML = `
      <div class="d-flex py-2 justify-content-between align-items-center container">
        <div class="logo-container">
            <a href="index.html">
                <img src="assets/images/KASCCO-logo.png" height="50" alt="Kascco">
            </a>
        </div>
        <nav class="d-flex align-items-center gap-3">
            <a class="${activeLink === "/" && "active" || activeLink.includes("index.html") && "active"}" href="index.html">Home</a>
            <a href="about.html" class="${activeLink.includes("about.html") && "active"}" >About Us</a>
            <div class="dropdown">
                <span class=" dropdown-toggle ${activeLink.includes("manpower-supply") && "active" || activeLink.includes("industries")  && "active"} " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Services
                </span>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="manpower-supply.html">Manpower Supply</a></li>
                    <li><a class="dropdown-item" href="industries.html"> Industries</a></li>
                </ul>
            </div>
            <div class="dropdown">
                <span class=" dropdown-toggle ${activeLink.includes("kascco-s-anniversary.html") && "active" || activeLink.includes("gallery-founding-day.html")  && "active"} " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Gallery
                </span>

                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="kascco-s-anniversary.html">Kascco's Anniversary</a></li>
                    <li><a class="dropdown-item" href="gallery-founding-day.html">Founding Day</a></li>
                </ul>
            </div>
            <a href="contact.html" class="${activeLink.includes("contact.html") && "active"}" >Contacts</a>

        </nav>
        <div class="contact-btns">
            <button class="btn btn-primary">Contact Us</button>
            <button class="btn btn-outline-primary">Sign In</button>
        </div>
        <button class="menu-btn text-body"><i class='bx bx-menu' ></i></button>
      </div>
`

footer.innerHTML = `
  <div class="container row">
            <div class="footer-col">
                <div>
                    <img src="assets/images/Logo Kascco complet.svg" alt="">
                </div>
            </div>
            <div class="footer-col">
                <h4>Gallery</h4>
                <ul>
                    <li><a href="kascco-s-anniversary.html">Kascco's Anniversary</a></li>
                    <li><a href="gallery-founding-day.html">Founding Day</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>company</h4>
                <ul>
                    <li><a href="index.html">home</a></li>
                    <li><a href="about.html">about us</a></li>
                    <li><a href="manpower-supply.html">manpower supply</a></li>
                    <li><a href="industries.html">industries</a></li>
                    <li><a href="contact.html">contact us</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>follow us</h4>
                <div class="social-links">
                    <a target="_blank" href="https://kascco.sa/website/social/facebook"><i class='bx bxl-facebook' ></i></a>
                    <a target="_blank" href="https://kascco.sa/website/social/twitter"><i class='bx bxl-twitter'></i></a>
                    <a target="_blank" href="https://kascco.sa/website/social/instagram"><i class='bx bxl-instagram'></i></a>
                    <a target="_blank" href="https://kascco.sa/website/social/linkedin"><i class='bx bxl-linkedin'></i></a>
                    <a target="_blank" href="https://kascco.sa/website/social/youtube"><i class='bx bxl-youtube' ></i></a>
                    <a target="_blank" href="https://www.tiktok.com/@kascco"><i class='bx bxl-tiktok' ></i></a>
                </div>
            </div>
        </div>
        <p class="text-white-50 text-center m-0 py-2">Copyright © KASCCO</p>
`

window.addEventListener("scroll", function () {
  // header
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

AOS.init();

const countSliders = window.innerWidth > 992 ? 4 : window.innerWidth > 489 ? 2 : 1;

//   swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: countSliders,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// mobile menu *********

const menuToggle = document.querySelector(".menu-btn");
const menu = document.querySelector("header nav"); 

menuToggle.addEventListener("click", function () {
  menuToggle.classList.toggle("active");
  menu.classList.toggle("show");
});
