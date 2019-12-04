const mainSliderCreate = () => {
  /*
  Нужно получить все блоки итемы слайдера
  Добавить им отстпуты и правильные индексы
   */

  const items = $('.main-slider__item');

  for(let i = 0; i < items.length; i++) {
    let left = i * 50;
    let z = items.length + 1 - i;
    let height = items.eq(0).css('height');

    items.eq(i).css({
      'left': left + 'px',
      'z-index': z,
      'top': '0px'
    });

    if(i > 0) {
      height = height.split('px')[0];
      let newHeight = height - 40 * i;
      let newTop = 20 * i;
      console.log(`height ${height}`);
      items.eq(i).css({
        'height': newHeight + 'px',
        'top': newTop + 'px'
      })
    }
  }
};

// with a quick click
let mainSliderClicking = false;

const mainSliderNext = () => {
  if(!mainSliderClicking) {
    mainSliderClicking = true;
    // change timeline
    const timelineItems = $('.main-slider__nav .timeline .item');
    const nextTimelineItem = $('.main-slider__nav .timeline .item--active').next('.item');

    if(nextTimelineItem.length > 0) {
      timelineItems.removeClass('item--active');
      nextTimelineItem.addClass('item--active');

      // filter change
      const nextCurrent = $('.main-slider__item--current').next('.main-slider__item');
      $('.main-slider__item').removeClass('main-slider__item--current');
      nextCurrent.addClass('main-slider__item--current');

      const activeSlide = $('.main-slider__item--active');
      const nextActive = activeSlide.last().next('.main-slider__item');

      //give the count active left slide
      let leftActive = $('.main-slider__body').attr('data-slide');
      +leftActive++;

      if(+leftActive > 3) {
        activeSlide.eq(0).removeClass('main-slider__item--active');
      }
      if(nextActive.length > 0) {
        nextActive.addClass('main-slider__item--active');
        $('.main-slider__body').attr('data-slide', leftActive);
      } else {
        // if nextActive mast be first item
      }
      const items = $('.main-slider__item');

      // change styles all other slides
      for(let i = 0; i < items.length; i++) {
        // current styles
        const current = items.eq(i);
        const z = current.css('z-index');
        const height = current.css('height').split('px')[0];
        const left = current.css('left').split('px')[0];
        const top = current.css('top').split('px')[0];


        // next styles
        const newLeft = +left - 50;

        if(+left < 0 || +left === 0) {
          // new styles
          const newZ = +z - 1;
          const newHeight = +height - 40;
          const newTop = +top + 20;

          current.css({
            'left': newLeft + 'px',
            'z-index': newZ,
            'height': newHeight + 'px',
            'top': newTop + 'px'
          });
        } else {
          // new styles
          const newZ = +z + 1;
          const newHeight = +height + 40;
          const newTop = +top - 20;

          current.css({
            'left': newLeft + 'px',
            'z-index': newZ,
            'height': newHeight + 'px',
            'top': newTop + 'px'
          });
        }
      }
      setTimeout(() => {
        mainSliderClicking = false;
      }, 600);
    } else {
      // disabled button
    }
  } else {
    console.log('clicking ing progress...')
  }
};

export {mainSliderCreate, mainSliderNext}