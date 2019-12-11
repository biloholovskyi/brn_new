const menuSwitch = () => {
  $(event.currentTarget).toggleClass('header__humb--show');
  if($(event.currentTarget).hasClass('header__humb--show')) {
    $('.header__modal-menu').fadeIn('fast');
  } else {
    $('.header__modal-menu').fadeOut('fast');
  }
};

export {menuSwitch}