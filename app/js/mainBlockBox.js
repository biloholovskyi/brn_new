const hBox = () => {
  const width = $('.main-block__box .item').eq(0).width();
  $('.main-block__box .item').css('height', width + 'px');
  $('.stocks').css('padding-top', width + 'px');
};

export {hBox};