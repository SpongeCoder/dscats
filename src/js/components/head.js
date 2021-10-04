$(function() {
  const $head = $('.head');
  const $content = $('.content');
  const isHasWhiteStyle = $head.hasClass('head--white');

  function scrollWindow () {
    const headTop = $head.height();
    const scrollTop = $(this).scrollTop();
    const isHasOpenMenu = $head.hasClass('is-open-menu');

    if(scrollTop >= headTop) {
      $head.addClass('is-fixed');
      $content.addClass('is-scroll');

      if (isHasWhiteStyle) $head.removeClass('head--white');
    } else if (scrollTop === 0) {
      $head.removeClass('is-fixed');
      $content.removeClass('is-scroll');

      if (isHasWhiteStyle && !isHasOpenMenu) $head.addClass('head--white')
    }
  }

  scrollWindow();
  $(window).on('scroll', scrollWindow);
})
