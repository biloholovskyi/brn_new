const homeSlider = () => {
  const items = $('.main-block__slider__nav .item');
  const bg = $('.main-block__bg');
  items.removeClass('item--active');
  bg.removeClass('main-block__bg--active');

  $(event.currentTarget).addClass('item--active');
  bg.eq($(event.currentTarget).index()).addClass('main-block__bg--active');
};

export {homeSlider}