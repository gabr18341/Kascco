// scroll
const header = document.querySelector("header");
header.innerHTML = `
    <div class="d-flex py-2 justify-content-between align-items-center container">
        <div class="logo-container">
            <a href="index.html">
                <img src="assets/images/KASCCO-logo.png" height="50" alt="Kascco">
            </a>
        </div>
        <nav class="d-flex align-items-center gap-3">
            <a class="active" href="index.html">Home</a>
            <a href="">About Us</a>
            <div class="dropdown">
                <a class=" dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Services
                </a>

                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Manpower Supply</a></li>
                    <li><a class="dropdown-item" href="#"> Industries</a></li>
                </ul>
            </div>
            <div class="dropdown">
                <a class=" dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Gallery
                </a>

                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="kascco-s-anniversary.html">Kascco's Anniversary</a></li>
                    <li><a class="dropdown-item" href="gallery-founding-day.html">Founding Day</a></li>
                </ul>
            </div>
            <a href="">Contacts</a>

        </nav>
        <div class="contact-btns">
            <button class="btn btn-primary">Contact Us</button>
            <button class="btn btn-outline-primary">Sign In</button>
        </div>
    </div>
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
