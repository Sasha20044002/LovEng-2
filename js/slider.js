const swiper = new Swiper('.main__slider', {
    speed: 500,
    spaceBetween: 120,
    slidesPerView: 3,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    breakpoints: {
        320: {
            slidesPerView: 1.5
        },

        530:{
            slidesPerView: 2
        },

        710: {
            slidesPerView: 2.5
        },

        800: {
            slidesPerView: 3
        }
    }
});