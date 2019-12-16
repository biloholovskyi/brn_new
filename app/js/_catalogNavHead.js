const toggleNavWindow = () => {
  const status = $(event.currentTarget).hasClass('active');
  const cat = $(event.currentTarget).attr('data-cat');
  $('.header__menu li').removeClass('active');
  if(!status) {
    $(event.currentTarget).addClass('active');
    $('.catalog-modal--desctop').addClass('catalog-modal--show');
    $('.catalog-modal .catalog-modal__item-box').css('display', 'none');
    $(`.catalog-modal .${cat}`).css('display', 'block');
  } else {
    $('.catalog-modal').removeClass('catalog-modal--show');
  }
};

const toggleNavWindowMobile = () => {
  const cat = $(event.currentTarget).attr('data-cat');
  $('.catalog-modal--mobile').addClass('catalog-modal--show');
  $('.catalog-modal .catalog-modal__item-box').css('display', 'none');
  $(`.catalog-modal .${cat}`).css('display', 'block');
};

const catalogBack = () => {
  $('.catalog-modal').removeClass('catalog-modal--show');
};

export {toggleNavWindow, toggleNavWindowMobile, catalogBack}