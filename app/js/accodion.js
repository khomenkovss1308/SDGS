$(document).ready(function() {
  $('.accordion__header').click(function() {
      const $header = $(this);
      const $accordionItem = $header.closest('.accordion__item');
      const isOpen = $accordionItem.hasClass('accordion__item_show');

      if (!isOpen) {
          $accordionItem.addClass('accordion__item_show');
      } else {
          $accordionItem.removeClass('accordion__item_show');
      }

      $accordionItem.siblings('.accordion__item_show').removeClass('accordion__item_show');
  });
});
