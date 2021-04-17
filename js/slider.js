const wheelSwiper = new Swiper('.wheel-slider', {
  slidesPerView: 1,
  speed: 600,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1500: {
      slidesPerView: 3,
    },
  }
});

const squadSwiper = new Swiper('.squad-slider', {
  centeredSlides: true,
  speed: 600,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});