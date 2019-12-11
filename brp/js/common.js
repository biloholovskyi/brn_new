var $inputItem = $(".js-inputWrapper");
$inputItem.length && $inputItem.each(function () {
  var $this = $(this),
    $input = $this.find(".formRow--input"),
    placeholderTxt = $input.attr("placeholder"),
    $placeholder;

  $input.after('<span class="placeholder">' + placeholderTxt + "</span>"),
    $input.attr("placeholder", ""),
    $placeholder = $this.find(".placeholder"),

    $input.val().length ? $this.addClass("active") : $this.removeClass("active"),

    $input.on("focusout", function () {
      $input.val().length ? $this.addClass("active") : $this.removeClass("active");
    }).on("focus", function () {
      $this.addClass("active");
    });
});


$('.buy').hover(function () {
  $(this).find('.knopka').toggleClass('opacity');
});

$(document).ready(function () {
  $('.owl-carousel').owlCarousel({

    loop: true,
    center: false,
    margin: 10,
    URLhashListener: true,
    autoplayHoverPause: true,
    startPosition: 'URLHash',
    navText: ["<img class='yow' src='http://brp56.ru/wp-content/themes/brp/img/str5.png'>", "<img class='yow2' src='http://brp56.ru/wp-content/themes/brp/img/str6.png'>"],/*Менять картинку*/
    responsive: {
      0: {
        dots: false,
        items: 1,
        nav: true,
        URLhashListener: false,
        left: true,
      },
      600: {
        dots: false,
        items: 1,
        nav: true,
        URLhashListener: false,
        center: false,
      },

      1000: {
        items: 3,
        nav: true,
        margin: 40,
        dots: false  /* ТОЧКИ ВНИЗУ */
      }
    }
  })
});

$('.button a').click(function () {
  $(this).toggleClass('back');
});

$('.button2 a').click(function () {
  $(this).toggleClass('back');
});


$('.knopka2 a').click(function () {
  $(this).toggleClass('bordik');
});

$('.strel').click(function () {
  $('.show_catalog').toggleClass('show');
  $('.strel svg').toggleClass('rotate');
  $('.strel svg path').toggleClass('col');
  $('.strel').toggleClass('col2');

});


$('.close_modal').click(function () {
  $('.modal').css('display', 'none');
});


$(document).ready(function () {
  $('.owl-carousel2').owlCarousel({
    autoWidth:true,
    loop: false,
    center: false,
    margin: 10,
    URLhashListener: true,
    autoplayHoverPause: true,
    navText: ["<img class='yow' src='http://brp56.ru/wp-content/themes/brp/img/str5.png'>", "<img class='yow2' src='http://brp56.ru/wp-content/themes/brp/img/str6.png'>"],/*Менять картинку*/
    responsive: {
      0: {
        dots: false,
        items: 1,
        nav: false,
        URLhashListener: false,
        left: true,
      },
      600: {
        dots: false,
        items: 1,
        nav: false,
        URLhashListener: false,
        center: false,
      },

      1000: {
        items: 7,
        nav: false,
        margin: 0,
        dots: false  /* ТОЧКИ ВНИЗУ */
      }
    }
  })
});


// $('.zero:gt(11)').hide();
// $('.knopka3 a').click(function () {
//   $('.zero:gt(11)').toggle('slide');
//   $(this).hide();
// });


// $('.motik').mouseover(function () {
//   var verh_new = $(this).offset().top;
//   var verh = verh_new - 50;
//   var utl = $(this).attr('data-url');
//   console.log(utl);
//   var bok = $(this).offset().left;
//   var title = $(this).find('h3').text();
//   var img = $(this).find('img').attr('src');
//   var cena = $(this).find('span').text();
//   var hide = $('.hide_block');
//   hide.css('top', verh + 'px');
//   hide.css('left', bok + 'px');
//   hide.addClass('hide_active');
//   hide.find('h3').text(title);
//   hide.find('.pados img').attr('src', img);
//   hide.find('span').text(cena);
//   hide.find('a').attr('href', utl);
// });
// $('.hide_block').mouseover(function () {
//
//   $(this).addClass('hide_active');
//
// });
//
// $('.hide_block').mouseout(function () {
//   $(this).removeClass('hide_active');
// });

$('.button2').addClass('open_modal');
$('.button').addClass('open_modal');
$('.open_modal').click(function () {

  $('.modal').show();

});


// NEW
$("body").on("click", function (e) {
  var div = $(".show_catalog, .show_catalog a, .strel");
  if (!div.is(e.target)) {
    $('.show_catalog').removeClass('show');
    $('.strel svg').removeClass('rotate');
    $('.strel svg path').removeClass('col');
    $('.strel').removeClass('col2');
  }
});