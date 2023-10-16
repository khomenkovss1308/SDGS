$(document).ready(function () {
    var fullScreenSwiper;

    function openFullScreenSlider() {
        // Показываем слайдер с задержкой для плавного появления
        $('.full-screen-slider').show().css('opacity', 1);

        // Пересоздаем слайдеры
        var mainSwiper = new Swiper('.mySwiper2', {
            spaceBetween: 10,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            thumbs: {
                swiper: thumbsSwiper,
            },
        });

        var thumbsSwiper = new Swiper('.mySwiper', {
            spaceBetween: 10,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
        });

        // Синхронизируем основной и миниатюрный слайдеры
        mainSwiper.controller.control = thumbsSwiper;
        thumbsSwiper.controller.control = mainSwiper;

        // Добавим функциональность для смены активной картинки при клике на элемент списка
        $('.photo-inner__list__item').click(function () {
            var index = $(this).index(); // Получаем индекс нажатого элемента
            mainSwiper.slideTo(index); // Переключаем основной слайдер
            mainSwiper.update(); // Обновляем слайдер
        });
    }

    $('.photo-inner__list__item').click(function () {
        openFullScreenSlider();
    });

    $('.close-slider').click(function () {
        // Скрываем слайдер с задержкой для плавного исчезновения
        $('.full-screen-slider').css('opacity', 0);
        setTimeout(function () {
            $('.full-screen-slider').hide();
        }, 300);

        // Очищаем и уничтожаем слайдеры
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