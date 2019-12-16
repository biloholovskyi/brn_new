const input = () => {
  const current = $(event.currentTarget);
  if(!current.val()) {
    current.parent('.wrapper-input').removeClass('wrapper-input--active');
  } else {
    current.parent('.wrapper-input').addClass('wrapper-input--active');
  }
};

export {input}