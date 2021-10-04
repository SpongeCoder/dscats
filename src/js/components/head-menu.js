$(function() {
  const $head = $('.head');
  const $menuBurger = $head.find('.head__burger');
  const $menuClose = $head.find('.head__close');
  const isHasWhiteStyle = $head.hasClass('head--white');

  function onShowMenu () {
    $head.addClass('is-open-menu');

    if (isHasWhiteStyle) $head.removeClass('head--white');
  }

  function onCloseMenu () {
    const isHasFixedStyle = $head.hasClass('is-fixed');

    $head.removeClass('is-open-menu');

    if (isHasWhiteStyle && !isHasFixedStyle) $head.addClass('head--white');
  }

  $menuBurger.on('click', onShowMenu);
  $menuClose.on('click', onCloseMenu);
});
