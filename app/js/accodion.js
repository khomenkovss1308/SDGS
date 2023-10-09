$(document).ready(function() {
  $('.accordion__header').click(function() {
      const $accordionItem = $(this).closest('.accordion__item');
      const $accordionBody = $accordionItem.find('.accordion__body');
      const isOpen = $accordionItem.hasClass('accordion__item_show');

      if (!isOpen) {
          $accordionBody.css('max-height', $accordionBody[0].scrollHeight + 'px');
      } else {
          $accordionBody.css('max-height', '0');
      }

      $accordionItem.toggleClass('accordion__item_show');

      if (!isOpen) {
          $accordionItem.siblings('.accordion__item_show').removeClass('accordion__item_show');
          $accordionItem.siblings('.accordion__item_show').find('.accordion__body').css('max-height', '0');
      }
  });
});