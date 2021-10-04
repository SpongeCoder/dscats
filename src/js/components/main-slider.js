// Слайдер на главной
$(function () {
  const $sliderItem = $('.main-slider__item');
  const $dots = $('.main-slider-dots button');
  const sliderLegth = $sliderItem.length - 1;

  let currentIndex = 0;
  let intervalId;

  function onChangeMainSlider() {
    $sliderItem.removeClass('is-active');
    $dots.removeClass('is-active');
    currentIndex += 1

    if (currentIndex > sliderLegth) {
      currentIndex = 0;
    }

    let nextSlider = $sliderItem.get(currentIndex);
    let nextDot = $dots.get(currentIndex);

    $(nextSlider).addClass('is-active');
    $(nextDot).addClass('is-active');
  }

  function onClickDots() {
    let $this = $(this);
    let clickIndex = $this.index();
    let nextSlider = $sliderItem.get(clickIndex);

    $sliderItem.removeClass('is-active');
    $dots.removeClass('is-active');

    currentIndex = clickIndex;

    $this.addClass('is-active');
    $(nextSlider).addClass('is-active');

    clearInterval(intervalId);
    intervalId = setInterval(onChangeMainSlider, 2500);
  }

  $dots.on('click', onClickDots);
  intervalId = setInterval(onChangeMainSlider, 3500);
});

// Шаги
$(function() {
  const $mainStepsItems = $('.main-steps-item');
  const length = $mainStepsItems.length - 1;

  let currentIndex = 0;

  function onChangeActiveMainSteps() {
    $mainStepsItems.removeClass('is-active');
    currentIndex += 1;

    if (currentIndex > length) {
      currentIndex = 0;
    }

    let next = $mainStepsItems.get(currentIndex);
    $(next).addClass('is-active');
  }

  setInterval(onChangeActiveMainSteps, 2500);
});

