import 'normalize.css';
import {mainSliderCreate, mainSliderNext, mainSliderPrev} from './mainSlider';
import {hBox} from './mainBlockBox';
import {homeSlider} from "./homeSlider";

$(document).ready(function(){
  mainSliderCreate();
  hBox();

  // actions
  $('.main-slider__nav .next').on('click', mainSliderNext);
  $('.main-slider__nav .prev').on('click', mainSliderPrev);
  $('.main-block__slider__nav .item').on('click', homeSlider);
});

$(window).resize(function () {
  hBox();
});