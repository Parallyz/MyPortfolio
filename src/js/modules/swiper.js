import Swiper from "swiper/bundle";

const swiper = new Swiper(".swiper__work", {
  direction: "horizontal",
  spaceBetween: 40,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' +
        className +
        '"> <span>' +
        +(index + 1) +
        "</span></span>"
      );
    },
  },
  autoHeight: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  watchOverflow: true,
  loop: true,
  autoplay: {
    delay: 3000,
    stopOnLastSlide: true,
    pauseOnMouseEnter: true,
  },
});
