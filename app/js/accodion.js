$(document).ready(function() {
  $('.accordion__header').click(function() {
      const $header = $(this);
      const $accordionItem = $header.closest('.accordion__item');
      const isOpen = $accordionItem.hasClass('accordion__item_show');

      if (!isOpen) {
          // Expand the clicked accordion item
          $accordionItem.addClass('accordion__item_show');
      } else {
          // Collapse the clicked accordion item
          $accordionItem.removeClass('accordion__item_show');
      }

      // Close other open accordion items
      $accordionItem.siblings('.accordion__item_show').removeClass('accordion__item_show');
  });
});
