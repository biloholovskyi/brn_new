<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package BRP
 */

get_header();
?>

  <div class="bread content">
    <!--    --><?php
    //    if (function_exists('yoast_breadcrumb')) {
    //      yoast_breadcrumb('<p id="breadcrumbs">', '</p>');
    //    }
    //    ?>
    <?php

    $current_terms = wp_get_post_terms(get_the_ID(), 'catalog');

    $terms = get_terms(array(
      'taxonomy' => array('catalog'), // название таксономии с WP 4.5
      'include' => array($current_terms[0]->parent),
      'fields' => 'all'
    ));

//    print_r($terms);
    ?>
    <div class="new-bread">
      <a href="/" class="bread__item">Главная</a> / <a href="/catalog/<?php echo $terms[0]->slug; ?>" class="bread__item"><?php echo $terms[0]->name; ?></a> / <span><?php the_title(); ?></span>
    </div>
  </div>

  <section class="block1">
    <div class="setka content">

      <div class="both">
        <div class="left2">
          <div class="max">
            <h3><?php the_field('марка'); ?></h3>
            <h1><?php the_title(); ?></h1>
            <p><?php the_field('краткое_описание'); ?></p>

            <div class="button2 prod_bnt_mobile--hidden">
              <a>Забронировать бесплатно</a>
            </div>

          </div>

          <div class="cycle">
            <img class="cyc" src=" <?php the_field('фотография'); ?>">


          </div>

          <div class="button2 prod_btn_mobile">
            <a>Забронировать бесплатно</a>
          </div>

        </div>


      </div>


    </div>
  </section>

  <section class="block9">

    <div class="answer">

      <div class="tabs">
      </div>

      <div class="tab_content content">
        <style>
          .desc__new h3 {
            margin-bottom: 10px;
          }
        </style>
        <div class="tab_item desc__new">
          <h2>Описание</h2>
          <?php the_field('полное_описание'); ?>
        </div>


      </div>

      <div class="tab_content content">
        <style>
          .pdf-link {
            color: #333;
            font-size: 20px;
            font-weight: bold;
          }
        </style>
        <div class="tab_item desc__new">
          <a href="<?php the_field('catalog_technical'); ?>" target="_blank" class="pdf-link">Технические характеристики</a>
        </div>


      </div>

      <div class="tab_content content">

        <div class="tab_item desc__new">
          <a href="<?php the_field('catalog_special'); ?>" target="_blank" class="pdf-link">Спецификация</a>
        </div>


      </div>

      <div class="button2">
        <a>Забронировать бесплатно</a>
      </div>

    </div>


  </section>

<?php
get_footer();
