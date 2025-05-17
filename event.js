// Sticky Navigation Bar
const stickyBar = document.querySelector('.topbar');
window.addEventListener('scroll', function(){
    if(this.scrollY > 500){
        stickyBar.classList.add('slidedown');
    }
    else{
        stickyBar.classList.remove('slidedown');
    }
})

// Tesitimonial Swiper

const swiper = new Swiper('.swiper', {
  loop: true,
  spaceBetween:30, 
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
  breakpoints:{
    0:{
      slidesPerView: 1,
    },
    768:{
      slidesPerView: 2,
    },
    1024:{
      slidesPerView: 3,
    },
  }
});

// Animation on Scroll
const observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) =>{
    console.log(entry);
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
});

const hiddenElement = document.querySelectorAll('.hidden');
hiddenElement.forEach((el) => observer.observe(el));


