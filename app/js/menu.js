const menuSwitch = () => {
  if($(window).width() > 991) {
    $(event.currentTarget).toggleClass('header__humb--show');
    if($(event.currentTarget).hasClass('header__humb--show')) {
      $('.header__modal-menu').fadeIn('fast');
    } else {
      $('.header__modal-menu').fadeOut('fast');
    }
  } else {
    $('.mobile-menu').fadeIn('fast');
  }
};

const closeMobileMenu = () => {
  $('.mobile-menu').fadeOut('fast');
  $('.catalog-modal').removeClass('catalog-modal--show');
};

export {menuSwitch, closeMobileMenu}