import 'normalize.css';
import {mainSliderCreate, mainSliderNext, mainSliderPrev} from './mainSlider';
import {hBox} from './mainBlockBox';
import {homeSlider} from "./homeSlider";
import {menuSwitch} from "./menu";

$(document).ready(function () {
  mainSliderCreate();
  hBox();

  // actions
  $('.main-slider__nav .next').on('click', mainSliderNext);
  $('.main-slider__nav .prev').on('click', mainSliderPrev);
  $('.main-block__slider__nav .item').on('click', homeSlider);
  $('.header__humb').on('click', menuSwitch);
});

$(window).resize(function () {
  hBox();
});

// html click close modal
$('body').on('click', (e) => {
  // modal-menu
  const headerHumb = $('.header__humb, .header__humb .item');
  if (!headerHumb.is(e.target)) {
    $('.header__humb').removeClass('header__humb--show');
    $('.header__modal-menu').fadeOut('fast');
  }
});