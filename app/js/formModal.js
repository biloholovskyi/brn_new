const formModalOpen = () => {
  $('.form-modal').fadeIn('slow').css('display', 'flex');
};

const formModalClose = () => {
  $('.form-modal').fadeOut('slow');
};

export {formModalOpen, formModalClose}