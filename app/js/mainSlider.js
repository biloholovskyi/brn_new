const mainSliderCreate = () => {
  const items = $('.main-slider__item');

  for (let i = 0; i < items.length; i++) {
    let varLeft = $(window).width() > 575 ? 50 : 25;
    let left = i * varLeft;
    let z = items.length + 1 - i;
    let scale = 1 - i * .1;

    items.eq(i).css({
      'transform': `translateX(${left}px) scaleY(${scale})`,
      'z-index': z,
    });
  }
};

// with a quick click
let mainSliderClicking = false;

const mainSliderNext = () => {
  if (!mainSliderClicking) {
    mainSliderClicking = true;

    $('.main-slider__nav .prev').removeClass('disabled');

    // change timeline
    const timelineItems = $('.main-slider__nav .timeline .item');
    const nextTimelineItem = $('.main-slider__nav .timeline .item--active').next('.item');

    if (nextTimelineItem.length > 0) {
      const items = $('.main-slider__item');

      timelineItems.removeClass('item--active');
      nextTimelineItem.addClass('item--active');

      // filter change
      const nextCurrent = $('.main-slider__item--current').next('.main-slider__item');
      items.removeClass('main-slider__item--current');
      nextCurrent.addClass('main-slider__item--current');

      // active slider right and left
      const activeSlide = $('.main-slider__item--active');
      const activeLeft = $('.main-slider__body .active--left');
      const activeRight = $('.main-slider__body .active--right');
      const nextActive = activeSlide.last().next('.main-slider__item');

      activeRight.eq(0).removeClass('active--right');

      if(nextActive.length > 0) {
        nextActive.addClass('main-slider__item--active');
        nextActive.addClass('active--right');
      }

      $('.main-slider__item--current').prev('.main-slider__item').addClass('main-slider__item--active');
      $('.main-slider__item--current').prev('.main-slider__item').addClass('active--left');

      if(activeLeft.length > 2) {
        activeSlide.eq(0).removeClass('main-slider__item--active');
        activeSlide.eq(0).removeClass('active--left');
      }
      let varLeft = $(window).width() > 575 ? 50 : 25;
      // change styles all other slides
      for (let i = 0; i < items.length; i++) {
        // current styles
        const current = items.eq(i);
        const translate = current.css('transform').split(',')[4];
        const newTranslate = +translate - varLeft;
        const scale = current.css('transform').split(',')[3];
        const newScale = +translate > 0 ? +scale + .1 : +scale - .1;
        const z = current.css('z-index');
        const newZ = +translate > 0 ? +z + 1 : +z - 1;


        current.css({
          'transform': `translateX(${newTranslate}px) scaleY(${newScale.toFixed(1)})`,
          'z-index': newZ
        });
      }
      if ($('.main-slider__nav .timeline .item--active').next('.item').length === 0) {
        $('.main-slider__nav .next').addClass('disabled');
      }
    } else {

    }
    setTimeout(() => {
      mainSliderClicking = false;
    }, 700);
  } else {
    console.log('clicking ing progress...')
  }
};

const mainSliderPrev = () => {
  if (!mainSliderClicking) {
    mainSliderClicking = true;

    $('.main-slider__nav .next').removeClass('disabled');

    // change timeline
    const timelineItems = $('.main-slider__nav .timeline .item');
    const nextTimelineItem = $('.main-slider__nav .timeline .item--active').prev('.item');

    if (nextTimelineItem.length > 0) {
      const items = $('.main-slider__item');

      timelineItems.removeClass('item--active');
      nextTimelineItem.addClass('item--active');

      // filter change
      const nextCurrent = $('.main-slider__item--current').prev('.main-slider__item');
      items.removeClass('main-slider__item--current');
      nextCurrent.addClass('main-slider__item--current');

      // active slider right and left
      const activeSlide = $('.main-slider__item--active');
      const activeLeft = $('.main-slider__body .active--left');
      const activeRight = $('.main-slider__body .active--right');
      const nextActive = activeSlide.eq(0).prev('.main-slider__item');

      activeLeft.last().removeClass('active--left');

      if(nextActive.length > 0) {
        nextActive.addClass('main-slider__item--active');
        nextActive.addClass('active--left');
      }

      $('.main-slider__item--current').next('.main-slider__item').addClass('main-slider__item--active');
      $('.main-slider__item--current').next('.main-slider__item').addClass('active--right');

      if(activeRight.length > 2) {
        activeSlide.last().removeClass('main-slider__item--active');
        activeSlide.last().removeClass('active--right');
      }

      let varLeft = $(window).width() > 575 ? 50 : 25;
      // change styles all other slides
      for (let i = 0; i < items.length; i++) {
        // current styles
        const current = items.eq(i);
        const translate = current.css('transform').split(',')[4];
        const newTranslate = +translate + varLeft;
        const scale = current.css('transform').split(',')[3];
        const newScale = +translate < 0 ? +scale + .1 : +scale - .1;
        const z = current.css('z-index');
        const newZ = +translate < 0 ? +z + 1 : +z - 1;


        current.css({
          'transform': `translateX(${newTranslate}px) scaleY(${newScale.toFixed(1)})`,
          'z-index': newZ
        });
      }
      if ($('.main-slider__nav .timeline .item--active').prev('.item').length === 0) {
        $('.main-slider__nav .prev').addClass('disabled');
      }
    } else {

    }
    setTimeout(() => {
      mainSliderClicking = false;
    }, 700);
  } else {
    console.log('clicking ing progress...')
  }
};


export {mainSliderCreate, mainSliderNext, mainSliderPrev}