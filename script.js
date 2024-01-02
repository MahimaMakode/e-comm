var swiper = new Swiper(".mySwiper", {
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


var swiper = new Swiper(".mySwiper", {
  // spaceBetween: 24,
  // loop:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    loop: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1400: {
      slidesPerView: 6,
      spaceBetween: 24,
    },
  },
});


const tabs = document.querySelectorAll('[data-target]'),
  tabContents = document.querySelectorAll('[content]');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('active-tab');
    });
    target.classList.add('active-tab');

    tabs.forEach((tab) => {
      tab.classList.remove('active-tab');
    });
    tab.classList.add('active-tab');
  });
});



// let navbar = document.querySelector('.nav--list');

// document.querySelector('.menu-nav').onclick = () =>{
//     navbar.classList.toggle('active');
// }

// there is me
let navbar = document.querySelector('.nav--list');
let menu = document.querySelector('.menu-nav');

menu.addEventListener('click',()=>{
  navbar.classList.toggle('act')
})
