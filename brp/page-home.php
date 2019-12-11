<?php

/*
Template Name: Главная
*/


get_header('new');
?>

  <section class="block1" style="background-image: url(<?php echo get_template_directory_uri(); ?>/img/car.png);">
    <div class="main content">
      <div class="all">
        <p>BRP Регона</p>
        <h1>Дилер BRP в Оренбурге</h1>

        <div class="button">
          <a>Связаться с нами</a>
        </div>
      </div>
    </div>
  </section>

  <section class="block2">
    <div class="grid">

      <?php
      $args = array('post_type' => 'akcia', 'posts_per_page' => -1);
      $loop = new WP_Query($args);
      while ($loop->have_posts()) : $loop->the_post(); ?>

        <div class="left" style="background-image: url(<?php echo get_the_post_thumbnail_url(); ?>);">
          <div class="date">
            <p><?php the_field('акция_проводится_до'); ?></p>
            <h3><?php the_title(); ?></h3>

            <div class="click">
              <a href="<?php the_permalink(); ?>">Подробнее о акции</a>
              <img src="<?php echo get_template_directory_uri(); ?>/img/Vector.svg">
            </div>
          </div>
        </div>

      <?php
      endwhile; ?>


    </div>

    <div class="grid3">
      <div class="buy">
        <div class="info">
          <img src="<?php echo get_template_directory_uri(); ?>/img/bag.png">
          <h3>Продажа мототехники</h3>
          <div class="knopka">
            <a href="http://brp56.ru/catalog/vsya-mototehnika/">Перейти в каталог</a>
          </div>
        </div>
      </div>

      <div class="buy">
        <div class="info">
          <img src="<?php echo get_template_directory_uri(); ?>/img/bag2.png">
          <h3>Сервисное обслуживание</h3>
          <div class="knopka">
            <a href="http://brp56.ru/servis/">Подробнее</a>
          </div>
        </div>
      </div>

      <div class="buy">
        <div class="info">
          <img src="<?php echo get_template_directory_uri(); ?>/img/bag3.png">
          <h3>Акции</h3>
          <div class="knopka">
            <a href="http://brp56.ru/akczii/">Подробнее</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="block3">
    <h2 class="content">Каталог</h2>

    <div class="slider">
      <div class="owl-carousel owl-theme">

        <?php
        $terms = get_terms(array(
          'taxonomy' => array('catalog'),
          'orderby' => 'count',
          'exclude' => '14'
        ));
        //        $terms = get_terms("catalog", 'orderby=count&hide_empty=0&exclude=14');
        $count = count($terms);
        if ($count > 0) {
          foreach ($terms as $term) {
            $image = get_field('иконка_категории', $term);
            $id_terms = $term->term_taxonomy_id;
            $link = get_term_link((int)$term->term_id, $term->taxonomy);
            if($term->parent == 0) {
              ?>
              <div class="cars" onclick="location.href= '<?php echo $link ?>'">
                <img src="<?php echo $image ?>">
                <p><?php echo $term->name ?></p>
              </div>
              <?php
            }
          }
        }
        ?>


      </div>
    </div>
  </section>

  <section class="block4">
    <div class="us">
      <h2>О Нас</h2>
      <?php the_field('текст_блока', 12); ?>
      <div class="knopka2">
        <a href="http://brp56.ru/o-nas/">Подробнее</a>
      </div>

    </div>
    <div class="image">
      <img src="<?php the_field('картинка_блока', 12); ?>">
    </div>
  </section>


<?php
get_footer('new');
