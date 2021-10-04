import $ from 'jquery';
import Inputmask from "inputmask";
window.jQuery = window.$ = $;


$(function() {
  let $input = $("input[type='tel']")[0];

  if ($input) {
    let im = new Inputmask("+7 (999) 999 99 99");
    im.mask($input);
  }
});


require('./app');
require('./components/select');
require('./components/head');
require('./components/head-menu');
require('./components/catalog-type-list');
require('./components/main-slider');
require('./components/card-product');
require('./components/b-filter');
require('./components/fullscreen-gallery');
require('./other/swiper');
require('./other/parallax');
