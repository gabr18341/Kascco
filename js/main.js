// scroll
window.addEventListener('scroll', function() {
    // header
    const header = document.querySelector('header');
    if (window.scrollY > 100) { 
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  AOS.init();