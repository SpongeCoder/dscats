import {Swiper,  Pagination, EffectFade} from 'swiper';
Swiper.use([Pagination, EffectFade]);

$(function() {
  const breakpoint = window.matchMedia( '(max-width:1023px)' );
  const $btnFullScreen = $('.js-onfullscreen-gallery');
  const $btnExitFullScreen = $('.js-onexitfullscreen-gallery');
  const $gallery = $('.room-slider');
  let roomSwiper;

  function initSwiper() {
    roomSwiper = new Swiper('.js-room-slider', {
      fadeEffect: { crossFade: true },
      effect: 'fade',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    });
  }

  // fucking hack for swiper.js
  function updateSwiper() {
    setTimeout(function() {
      roomSwiper.update();
    }, 100);
  }

  function breakpointChecker() {
    if ($gallery.hasClass('is-fullscreen')) {
      if ( breakpoint.matches === true ) {
        if (roomSwiper) roomSwiper.destroy();
        onScrollGallery();
      } else if (roomSwiper.destroyed) initSwiper();
    } else if (roomSwiper.destroyed) initSwiper();
  }

  function onFullScreenGallery() {
    $gallery.addClass('is-fullscreen');
    $('body').addClass('is-fullscreen');

    breakpointChecker();
    updateSwiper();

    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    }
  }

  function onExitFullScreeenGallery() {
    $gallery.removeClass('is-fullscreen');
    $gallery.removeClass('is-full-mob-up-desc');
    $('body').removeClass('is-fullscreen');

    breakpointChecker();
    updateSwiper();

    if (document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen();
    }
  }

  function onScrollGallery() {
    if ($gallery.hasClass('is-fullscreen') && breakpoint.matches) {
      const heightLastPhoto = $gallery.find('.room-slider__item:last-child').height();
      const scroll = $gallery.scrollTop();
      const height = $gallery.height();
      const scrollHeight = $gallery.prop('scrollHeight');
      const diffScroll = scrollHeight - height - scroll;

      if (diffScroll <= (heightLastPhoto * 0.75)) {
        $gallery.addClass('is-full-mob-up-desc');
      } else {
        $gallery.removeClass('is-full-mob-up-desc');
      }
    } else {
      $gallery.removeClass('is-full-mob-up-desc');
    }
  }

  initSwiper();
  breakpointChecker();

  breakpoint.addListener(breakpointChecker);
  $btnFullScreen.on('click', onFullScreenGallery);
  $btnExitFullScreen.on('click', onExitFullScreeenGallery);
  $gallery.on('scroll', onScrollGallery);
});
