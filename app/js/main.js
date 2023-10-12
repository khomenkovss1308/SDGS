$(document).ready(function () {
    const menu = $(".header__burger-menu");
    const closeButton = $(".header__close-btn");
    const overlay = $(".header__burger-overlay");
    const burgerButton = $(".header__burger-btn");

    burgerButton.click(function () {
        menu.css("transform", "translateY(0)");
        overlay.addClass("active");

        setTimeout(function () {
            menu.addClass("active");
        }, 0);
    });

    closeButton.click(function () {
        menu.css("transform", "translateY(-100%)");
        overlay.removeClass("active");

        setTimeout(function () {
            menu.removeClass("active");
        }, 300);
    });

    overlay.click(function () {
        menu.css("transform", "translateY(-100%)");
        overlay.removeClass("active");
        
        setTimeout(function () {
            menu.removeClass("active");
        }, 300);
    });
});

$(document).ready(function () {
    $(".target-block__link").hover(
        function () {
            let $content = $(this).find(".target-block__content");
            $content.css({ transform: "scale(1)", opacity: 1 });
        },
        function () {
            let $content = $(this).find(".target-block__content");
            $content.css({ transform: "scale(0)", opacity: 0 });
        }
    );
});

$(document).ready(function () {
    $(".header__nav__top-list__item").hover(
        function () {
            $(this).find(".header__nav__top-list__content").slideDown(400);
        },
        function () {
            $(this).find(".header__nav__top-list__content").slideUp(100);
        }
    );
});

$(document).ready(function () {
    $(".header__nav__top-list__content__item").mouseenter(function () {
        $(this).find(".header__nav__top-list__content__sub-list").show(400);
    }).mouseleave(function () {
        $(this).find(".header__nav__top-list__content__sub-list").hide(100);
    });
});

$(document).ready(function() {
    $('.question__list__header').click(function() {
        const $header = $(this);
        const $body = $header.next('.question__list__body');

        if ($body.css('max-width') === '0px') {
            $body.css('max-width', '100%');
            $body.css('max-height', '100%');
            $header.css('background', 'url(images/icons/questions_close.svg) no-repeat left 27px');
        } else {
            $body.css('max-width', '0');
            $body.css('max-height', '0');
            $header.css('background', 'url(images/icons/questions_open.svg) no-repeat left 27px');
        }
    });
});


