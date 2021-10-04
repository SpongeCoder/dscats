$(function () {
  const $btn = $('.catalog-type-list__btn button');
  const $wrapp = $('.catalog-type-list__wrapp');

  $btn.on('click', function() {
    $wrapp.addClass('is-open');
    $(this).addClass('is-hide');
  });
});
