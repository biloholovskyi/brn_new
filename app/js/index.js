import 'normalize.css';
import {mainSliderCreate, mainSliderNext, mainSliderPrev} from './mainSlider';
import {hBox} from './mainBlockBox';
import {homeSlider} from "./homeSlider";
import {menuSwitch, closeMobileMenu} from "./menu";
import {showVideo, closeVideo} from "./mainModalVideo";
import {toggleNavWindow, toggleNavWindowMobile, catalogBack} from "./_catalogNavHead";
import {input} from "./input";
import {formModalOpen, formModalClose} from "./formModal";

$(document).ready(function () {
  mainSliderCreate();
  hBox();
  $(".main-slider__mobile").owlCarousel({
    loop: false,
    center: false,
    stagePadding: 16,
    margin: 16,
    autoplayHoverPause: true,
    autoPlay: false,
    nav: false,
    dots: false,
    items: 1,
    responsive: {

    }
  });

  // actions
  $('.main-slider__nav .next').on('click', mainSliderNext);
  $('.main-slider__nav .prev').on('click', mainSliderPrev);
  $('.main-block__slider__nav .item').on('click', homeSlider);
  $('.header__humb').on('click', menuSwitch);
  $('.mobile-menu__header__wrapper .close, .catalog-modal--mobile .close').on('click', closeMobileMenu);
  $('.main-block__watch .icon, .main-block__watch .text').on('click', showVideo);
  $('.main-modal-video__close').on('click', closeVideo);
  $('.header__right .header__menu li').on('click', toggleNavWindow);
  $('.mobile-menu__category-list li').on('click', toggleNavWindowMobile);
  $('.catalog-modal--mobile .back').on('click', catalogBack);
  $('.page-form__form input').on('input', input);
  $('.catalog-page-product__item .info .button-wrapper .buy, .parts__wrapper .link').on('click', formModalOpen);
  $('.form-modal__body .close').on('click', formModalClose);
  $('.modal-send__body .close').on('click', () => {$('.modal-send').fadeOut('slow')});
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

  // modal-video
  const showBtn = $('.main-block__watch .icon, .main-block__watch .text, .main-modal-video__object');
  if(!showBtn.is(e.target)) {
    closeVideo();
  }

  // form modal
  const showForm = $('.catalog-page-product__item .info .button-wrapper .buy, .parts__wrapper .link');
  if(!showForm.is(e.target)) {
    formModalClose();
  }
});

$('#modal-form').on('submit', function (e) {
  e.preventDefault();
  const formData = new FormData();
  formData.append("name", modalForm.user_name.value);
  formData.append("tel", modalForm.user_tel.value);
  fetch('send.php', {
    method: 'post',
    body: formData
  }).then(function(response) {
    return response.text();
  }).then(function(data) {
    alert('Заявка отпавлена')
  }).catch(function(err) {
    alert('Ошибка')
  });
});