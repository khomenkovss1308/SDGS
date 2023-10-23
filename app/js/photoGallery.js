$(document).ready(function () {
    let fullScreenSwiper;

    function openFullScreenSlider() {
        $('.full-screen-slider').show().css('opacity', 1);

        let mainSwiper = new Swiper('.mySwiper2', {
            spaceBetween: 10,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            thumbs: {
                swiper: thumbsSwiper,
            },
        });

        let thumbsSwiper = new Swiper('.mySwiper', {
            spaceBetween: 10,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
        });

        mainSwiper.controller.control = thumbsSwiper;
        thumbsSwiper.controller.control = mainSwiper;

        $('.photo-inner__list__item').click(function () {
            let index = $(this).index();
            mainSwiper.slideTo(index);
            mainSwiper.update();
        });
    }

    $('.photo-inner__list__item').click(function () {
        openFullScreenSlider();
    });

    $('.close-slider').click(function () {
        $('.full-screen-slider').css('opacity', 0);
        setTimeout(function () {
            $('.full-screen-slider').hide();
        }, 300);

        mainSwiper.removeAllSlides();
        thumbsSwiper.removeAllSlides();

        if (mainSwiper) {
            mainSwiper.destroy();
        }

        if (thumbsSwiper) {
            thumbsSwiper.destroy();
        }
    });
});