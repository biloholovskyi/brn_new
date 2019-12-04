import 'normalize.css';
import {mainSliderCreate, mainSliderNext} from './mainSlider';

$(document).ready(function(){
  mainSliderCreate();

  // actions
  $('.main-slider__nav .next').on('click', mainSliderNext);
});

$(window).resize(function () {

});