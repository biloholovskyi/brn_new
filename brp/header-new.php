<!doctype html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="profile" href="https://gmpg.org/xfn/11">
  <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap-grid.css'>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<!--  <link rel="stylesheet" href="css/main.css">-->
  <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i|Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap" rel="stylesheet">
  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<header class="header">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="header__wrapper">
          <div class="header__left">
            <a href="/brn_new/app/">
              <img src="<?php echo get_template_directory_uri().'/media/icon/logo.svg' ?>" alt="brp" class="header__logo">
              <img src="<?php echo get_template_directory_uri().'/media/icon/small-logo.svg' ?>" alt="brp" class="header__mobile-logo">
            </a>
            <div class="header__number">
              <div class="icon"></div>
              <a href="tel:88005551122" class="number">8 800 555 11 22</a>
            </div>
          </div>

          <div class="header__right">
            <ul class="header__menu">
              <li><a href="#">Квадроциклы</a></li>
              <li><a href="#">Трициклы</a></li>
              <li><a href="#">Снегоходы</a></li>
              <li><a href="#">Гидроциклы</a></li>
              <li><a href="#">Моторы</a></li>
            </ul>
            <div class="header__humb"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
