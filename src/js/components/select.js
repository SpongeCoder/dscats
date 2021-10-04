$(function() {
  const mainClassName = '.select';
  const mainClassItems = '.select__list li';
  const mainClassList = '.select__list';

  function onClickSelect (e) {
    const $this = $(this);
    const $parent = $this.parents(mainClassName);
    const $list = $parent.find(mainClassList);
    const isOpen = $parent.hasClass('is-open');

    if ($(window).outerWidth() <= 1023 && $parent.hasClass('select--head')) return;

    e.preventDefault();

    if ($parent.hasClass('disable')) return;

    $('.select.is-open').removeClass('is-open').find(mainClassList).fadeOut(300);

    $parent.toggleClass('is-open');

    if (isOpen) {
      $parent.removeClass('is-open');
      $list.fadeOut(300)
    } else {
      $list.fadeIn(300)
    }

  }

  function onClickSelectItem (e) {
    const $this = $(this);
    const $parent = $this.parents(mainClassName);
    const $items = $parent.find(mainClassItems);
    const $input = $parent.find('input');
    const $view = $parent.find('.select__value > span');
    const value = $this.data('val');
    const text = $this.text();

    if ($parent.hasClass('disable')) return;

    $view.text(text);
    $input.val(value);

    $items.removeClass('is-active');
    $this.addClass('is-active');
    $parent.removeClass('is-open');
    $parent.find(mainClassList).fadeOut(300);
  }

  $('.select__value').on('click', onClickSelect);
  $('.select__list li').on('click', onClickSelectItem);

  $('.select.is-open').find(mainClassList).fadeIn(300);

  $('body').on('click', function(e) {
    if (!$(e.target).closest('.select').length) {
      $('.select').find(mainClassList).fadeOut(300);
      $('.select.is-open').removeClass('is-open');
    }
  });

})
