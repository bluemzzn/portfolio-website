// Sticky Navigation Bar
const stickyBar = document.querySelector('.topbar');
window.addEventListener('scroll', function () {
  if (this.scrollY > 500) {
    stickyBar.classList.add('slidedown');
  }
  else {
    stickyBar.classList.remove('slidedown');
  }
})

//Show & Hide Nav bar for mobile phone
const navMenu = document.getElementById("nav-menu");
const navClose = document.getElementById("nav-close");
const navHamburger = document.getElementById("hamburger-icon");

if (navHamburger) {
  navHamburger.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
    navHamburger.style.opacity = '0';
  })
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
    navHamburger.style.opacity = '1';
  })
}


//Hide nav bar when click the link 
const navLink = document.querySelectorAll('.nav-link');

if (navLink.length > 0) {
  navLink.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
      navHamburger.style.opacity = '1';
    });
  });
}


// Tesitimonial Swiper

const swiper = new Swiper('.swiper', {
  loop: true,
  spaceBetween: 30,
  // pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //Responsive Breakpoint
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }
});

// Animation on Scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }

  });
});

const hiddenElement = document.querySelectorAll('.hidden');
hiddenElement.forEach((el) => observer.observe(el));



function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top < window.innerHeight - 100 // 100px before it enters
  );
}

