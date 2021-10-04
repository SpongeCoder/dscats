$(function(){
  const $cardProducts =  $('.js-card-product');
  const $cardEl = $cardProducts.find('.js-card-product-el');

  $cardEl.on('mouseover', (event) => {
    const $this = $(event.target);
    const $card = $this.closest('.js-card-product');
    const $elems = $card.find('.js-card-product-el');
    const $images = $card.find('.js-interested-img');
    const indexEl = Number($this.data('img-el'));
    const indexActiveImg = Number($images.filter('.active').data('img'));

    if (indexEl !== indexActiveImg) {
      $images.removeClass('active');
      $images.eq(indexEl - 1).addClass('active');

      $elems.removeClass('active');
      $this.addClass('active');
    }
  });

});
