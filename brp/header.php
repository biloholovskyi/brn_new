<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package BRP
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="Content-Type" content="application/xhtml+xml">
  <link rel="profile" href="https://gmpg.org/xfn/11">

  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<header>
  <div class="shapka content">
    <a href="/">
      <div class="logotip">
        <picture>
          <source srcset="<?php echo get_template_directory_uri(); ?>/img/brpLogo.png"
                  alt="BRP">
          <img src="<?php echo get_template_directory_uri(); ?>/img/brpLogo.png"
               srcset="<?php echo get_template_directory_uri(); ?>/img/brpLogo.png"
               alt="BRP">
        </picture>

        <div class="logo">
          <h1>BRP</h1>
          <p>Регона</p>
        </div>
      </div>
    </a>

    <div class="phone">
      <?php
      $phone_new = get_field('номер_телефона', options);
      $phone_clear = preg_replace('~[^0-9]+~', '', $phone_new);
      ?>
      <img src="<?php echo get_template_directory_uri(); ?>/img/phone.svg">
      <a href="tel:<?php echo $phone_clear; ?>" class="hover_new"><?php the_field('номер_телефона', options); ?></a>
    </div>

    <div class="menu">
      <a class="strel">Каталог
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L4 4.25L8 0H0Z" fill="white"/>
        </svg>

        <div class="show_catalog">
          <?php
          $terms = get_terms("catalog", 'orderby=count&hide_empty=0&exclude=14');
          $count = count($terms);
          if ($count > 0) {
            foreach ($terms as $term) {

              $id_terms = $term->term_taxonomy_id;
              $link = get_term_link((int)$term->term_id, $term->taxonomy);
              if ($term->parent == 0) {
                ?>

                <a href="<?php echo $link ?>"><?php echo $term->name ?></a>

                <?php
              }
            }
          }
          ?>


        </div>
      </a>
      <?php
      $params = array(
        'container' => false,
        'echo' => false,
        'items_wrap' => '%3$s',
        'depth' => 0,
        'menu' => 'Главное меню',

      );


      print strip_tags(wp_nav_menu($params), '<a>');
      ?>
    </div>
  </div>


  <div class="mobmenu">
    <input type="checkbox" id="hmt" class="hidden-menu-ticker">
    <label class="btn-menu" for="hmt">
      <span class="first"></span>
      <span class="second"></span>
      <span class="third"></span>
    </label>

    <ul class="hidden-menu">
      <style>
        .mobile-catalog-menu li {
          padding-left: 10px;
          margin-bottom: 10px;
        }

        .menumob li {
          text-transform: uppercase;
          text-decoration: none;
          margin-top: 10px;
          color: #000;
          font-weight: bold;
        }
      </style>
      <div class="menumob">
        <a href="/">Главная</a>
        <li>Каталог</li>

        <ul class="mobile-catalog-menu">
          <?php
          $terms_head = get_terms(array(
            'taxonomy' => array('catalog'),
            'orderby' => 'count',
            'exclude' => '14'
          ));
          //          print_r($terms);
          $count_head = count($terms_head);
          if ($count_head > -1) {
            foreach ($terms_head as $term_head) {
              $id_terms_head = $term_head->term_taxonomy_id;
              $name_terms_head = $term_head->slug;
              $link_head = get_term_link((int)$term_head->term_id, $term_head->taxonomy);
              // получаемс родительскую категорию
              // если есть, то пропускаем, если нету выводим
              if ($term_head->parent == 0) {
                ?>

                <li class="mobile-catalog-item">
                  <a href="<?php echo $link_head ?>"
                     data-menu="<?php echo $name_terms_head ?>"><?php echo $term_head->name ?></a>
                </li>

                <?php
              }
            }
          }
          ?>
        </ul>
        <?php
        $params = array(
          'container' => false,
          'echo' => false,
          'items_wrap' => '%3$s',
          'depth' => 0,
          'menu' => 'Меню топ',

        );
        print strip_tags(wp_nav_menu($params), '<a>');
        ?>
      </div>
      <a href="tel:<?php echo $phone_clear; ?>"
         style="position: absolute;left: 10px;bottom: 20px;color: #333;"><?php the_field('номер_телефона', options); ?></a>
    </ul>
  </div>

</header>