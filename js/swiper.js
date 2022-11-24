new Swiper('.custom-kitchen__slider', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 2.8,
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.custom-kitchen__button-next',
        prevEl: '.custom-kitchen__button-prev',
    },

    breakpoints: {
        1810: {
            slidesPerView: 2.8,
        },
        1630: {
            slidesPerView: 2.5,
        },
        1440: {
            slidesPerView: 2.2,
        },
        1250: {
            slidesPerView: 1.99,
        },
        991: {
            slidesPerView: 1.5,
        },
        767: {
            slidesPerView: 1.4,
        },
        575: {
            slidesPerView: 1.8,
        },
        320: {
            slidesPerView: 1.1,
        }
    },
});

new Swiper('.feedback__slider', {
// Optional parameters
direction: 'horizontal',
slidesPerView: 2,
spaceBetween: 20,
// Navigation arrows
navigation: {
    nextEl: '.feedback__button-next',
    prevEl: '.feedback__button-prev',
},

breakpoints: {
    1810: {
        slidesPerView: 2,
    },
    1630: {
        slidesPerView: 2,
    },
    1440: {
        slidesPerView: 1.5,
    },
    1250: {
        slidesPerView: 1.5,
    },
    991: {
        slidesPerView: 2,
    },
    767: {
        slidesPerView: 1.7,
    },
    575: {
        slidesPerView: 1,
    },
    320: {
        slidesPerView: 1,
        spaceBetween: 20,
    }
},

// And if we need scrollbar
scrollbar: {
    el: '.feedback__scrollbar',
},
});

new Swiper('.technic__slider', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 5,
    breakpoints: {
        1810: {
            slidesPerView: 5,
        },
        1630: {
            slidesPerView: 4.3,
        },
        1440: {
            slidesPerView: 3.7,
        },
        1250: {
            slidesPerView: 3.2,
        },
        991: {
            slidesPerView: 2.4,
        },
        767: {
            slidesPerView: 2.2,
        },
        575: {
            slidesPerView: 1.6,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        }
        
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.technic__scrollbar',
    },
});