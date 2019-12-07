import 'normalize.css';
import {mainSliderCreate, mainSliderNext, mainSliderPrev} from './mainSlider';

$(document).ready(function(){
  mainSliderCreate();

  // actions
  $('.main-slider__nav .next').on('click', mainSliderNext);
  $('.main-slider__nav .prev').on('click', mainSliderPrev);
});

$(window).resize(function () {

});