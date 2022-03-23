const mySwiper1 = new Swiper('.idc-swiper1', {
    // Default parameters
    loop: false,
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 25,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    touchReleaseOnEdges: true,
    allowTouchMove: true,
    /*    grabCursor: true, */
    watchOverflow: true,
    grabCursor: true,

    pagination: {
        el: ".idc-swiper1 .idc-swiper-pagination",
        type: "bullets",
        clickable: true,
    },
    navigation: {
        nextEl: ".idc-swiper1 .idc-swiper-button-next",
        prevEl: ".idc-swiper1 .idc-swiper-button-prev",
    },
});

const mySwiper2 = new Swiper('.idc-swiper2', {
    // Default parameters
    loop: false,
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 25,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    touchReleaseOnEdges: true,
    allowTouchMove: true,
    /*    grabCursor: true, */
    watchOverflow: true,
    grabCursor: true,

    pagination: {
        el: ".idc-values .idc-swiper-pagination",
        type: "bullets",
        clickable: true,
    },
    navigation: {
        nextEl: ".idc-values .idc-swiper-button-next",
        prevEl: ".idc-values .idc-swiper-button-prev",
    },
});

const mySwiper3 = new Swiper('.idc-swiper3', {
    // Default parameters
    loop: false,
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 25,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    touchReleaseOnEdges: true,
    allowTouchMove: true,
    /*    grabCursor: true, */
    watchOverflow: true,
    grabCursor: true,

    pagination: {
        el: ".idc-career .idc-swiper-pagination",
        type: "bullets",
        clickable: true,
    },
    navigation: {
        nextEl: ".idc-career .idc-swiper-button-next",
        prevEl: ".idc-career .idc-swiper-button-prev",
    },
});

