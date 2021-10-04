$(function(){
  const $filter = $('.b-filter');
  const $btnHideFilter = $('.b-filter-close-btn');
  const $btnShowMobileFilter = $('.js-show-mobile-filter');

  function onShowFilter() {
    $filter.addClass('is-show');
  }

  function onHideFilter() {
    $filter.removeClass('is-show');
  }

  $btnShowMobileFilter.on('click', onShowFilter);
  $btnHideFilter.on('click', onHideFilter);
});
