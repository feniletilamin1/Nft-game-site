// Открытие видеоплеера

$('#show-video').click(function () {
    $('body').addClass('body-fixed');
    $('#bg').fadeIn(800);
    $('#video').fadeIn(800);
});

$('#bg').click(function () {
    $('body').removeClass('body-fixed');    
    $('#bg').fadeOut(800);
    $('#video').fafeOut(800);
});

// Бургем-меню 

$('#burger-menu').click(function () {
    $('body').addClass('body-fixed');
    $('.header__menu').addClass('header__menu--active');
    $('.black-bg').addClass('black-bg--active');
});

$('#burger-cross').click(function () {
    $('body').removeClass('body-fixed');    
    $('.header__menu').removeClass('header__menu--active');
    $('.black-bg').removeClass('black-bg--active');
});

$('.black-bg').click(function () {
    $('body').removeClass('body-fixed');    ы
    $('.header__menu').removeClass('header__menu--active');
    $('.black-bg').removeClass('black-bg--active');
});


$( window ).resize(function() {
    if(window.innerWidth >= 991) {
        $('.header__menu').removeClass('header__menu--active');
        $('.black-bg').removeClass('black-bg--active');
    }
});



// Слайдер 

new Swiper('.cars-photo-slider', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView:3,
    grabCursor: true,
    scrollbar: {
        el: '.cars-photo-slider__scroll-bar',
      },
    breakpoints: {
        
        1400: {
            slidesPerView: 3,
            centeredSlides: true,
            centeredSlidesBounds: true,
        },

        1199: {
            slidesPerView: 2.3,
            spaceBetween: 0,
        },

        991: {
            slidesPerView: 2,
            spaceBetween: 180,
        },

        767: {
            slidesPerView: 1.7,
        },

        575: {
            slidesPerView: 1.3,
            spaceBetween: 0,
        },

        320: {
            slidesPerView: 1,
            spaceBetween: 40,
        }
    }
    // // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
});