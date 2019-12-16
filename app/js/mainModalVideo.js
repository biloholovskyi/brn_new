const showVideo = () => {
  $('body').css('overflow', 'hidden');
  $('.main-modal-video').fadeIn('slow').css('display', 'flex');
};

const closeVideo = () => {
  $('body').css('overflow', 'visible');
  $('.main-modal-video').fadeOut('slow');
  $('.main-modal-video__object')[0].pause();
};

export {showVideo, closeVideo}