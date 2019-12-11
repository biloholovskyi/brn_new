<?php

get_header();
$id_catalog = get_queried_object()->term_id;
?>

  <section class="block1 catalog-banner__new" style="background-image: url(<?php echo get_template_directory_uri(); ?>/img/car.png);">
    <div class="main content">
      <div class="all">
<!--        <p>BRP Регона</p>-->
        <h1>Каталог техники BRP</h1>

<!--        <div class="button">-->
<!--          <a>Связаться с нами</a>-->
<!--        </div>-->
      </div>
    </div>
  </section>

  <section class="block7">
    <div class="our">
      <div class="block_menu">
        <div class="owl-carousel2 owl-theme">


          <?php
          //          $terms = get_terms("catalog", 'orderby=count');
          //          $terms = get_terms("catalog", 'orderby=count&hide_empty=0');
          $terms = get_terms(array(
            'taxonomy' => array('catalog'),
            'orderby' => 'count',
            'exclude' => '14'
          ));
          //          print_r($terms);
          $count = count($terms);
          if ($count > -1) {
            foreach ($terms as $term) {
              $id_terms = $term->term_taxonomy_id;
              $name_terms = $term->slug;
              $link = get_term_link((int)$term->term_id, $term->taxonomy);
              // получаемс родительскую категорию
              // если есть, то пропускаем, если нету выводим
              if ($term->parent == 0) {
                ?>

                <div class="item">
                  <a href="<?php echo $link ?>" data-menu="<?php echo $name_terms ?>"
                     class="new-rubrikator"><?php echo $term->name ?></a>
                  <!--                  <span class="new-rubrikator" data-menu="--><?php //echo $name_terms ?><!--">-->
                  <?php //echo $term->name ?><!--</span>-->
                </div>

                <?php
              }
            }
          }
          ?>


        </div>
      </div>
    </div>


  </section>

  <style>
    .year-wrapper {
      display: flex;
      justify-content: center;
      width: 100%;
      margin-bottom: 40px;
    }

    .year-wrapper .year-wrapper__item {
      width: auto;
      line-height: 48px;
      border-bottom: 1px solid #f5f5f5;
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      color: rgba(31, 32, 39, 0.6);
      font-size: 16px;
      padding: 0 15px;
      transition: all .3s;
    }

    .year-wrapper .year-wrapper__item:hover {
      cursor: pointer;
    }

    .year-wrapper .year-wrapper__item--active {
      border-bottom: 2px solid #FFCA00;
      color: #1F2027;
    }

    .motocycle .motik {
      display: none;
    }

    .under-box {
      text-align: center;
      max-width: 332px;
      transition: all .3s;
      display: none;
    }

    .under-box img {
      width: 100%;
      object-fit: contain;
      padding-bottom: 15px;
      cursor: pointer;
      height: 211px;
    }

    .under-box h3 {
      font-size: 20px;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      color: #333333;
      padding-bottom: 17px;
    }

    .under-box .hov {
      background: #FFCA00;
      padding: 20px 0px 17px;
      margin-top: 24px;
      opacity: 0;
      transition: all .3s;
    }

    .under-box span {
      font-size: 16px;
      letter-spacing: 0.03em;
      color: #FFCA00;
    }
  </style>

  <div class="year-wrapper">
    <?php
    $termchildren = get_term_children($id_catalog, 'catalog');
    if ($termchildren) {
      $termchildren_count = 0;
      foreach ($termchildren as $year) {
        $termchildren_count++;
        $model_year = get_term($year, 'catalog');
        ?>
          <div class="year-wrapper__item <?php if($termchildren_count == 1) {echo 'year-wrapper__item--active';} ?>" data-slug="<?php echo $model_year->slug; ?>"><?php echo $model_year->name; ?></div>
        <?php

      }
    }
    ?>
  </div>
  <section class="block8 content">
    <?php $under_cat = array(); ?>
    <div class="motocycle">
      <?php
      $args =
        array(
          'post_type' => 'product',
          'posts_per_page' => -1,
          'tax_query' => array(
            array(
              'taxonomy' => 'catalog',
              'field' => 'term_id',
              'terms' => $id_catalog,
            ),
          ),
        );

      $loop = new WP_Query($args);
//      print_r($loop);
      
      while ($loop->have_posts()) : $loop->the_post(); ?>
        <?php
        $cat_test = wp_get_post_terms( get_the_ID(), 'catalog', array('fields' => 'all', 'childless' => true,) );
        ?>
        <?php
        $under_cat_item = get_field('under_cat');
        $under_cat_price = $under_cat_item[0]->post_content;
        $under_cat_id = $under_cat_item[0]->ID;
        $under_cat_name = $under_cat_item[0]->post_title;

        if($under_cat_id) {
          $new_obj = array('id' => $under_cat_id, 'name' => $under_cat_name, 'slug' => $cat_test[0]->slug, 'price' => $under_cat_price);
          if(!in_array($new_obj, $under_cat)) {
            array_push($under_cat, $new_obj);
          }
        }
        ?>

        <div class="id-<?php echo $under_cat_item[0]->ID; ?> motik zero slug-<?php echo $cat_test[0]->slug; ?>">
          <a href="<?php the_permalink(); ?>">
            <img src="<?php the_field('фотография'); ?>">
            <h3><?php the_title(); ?></h3>
            <span><?php the_field('стоимость'); ?></span>
          </a>
          <div class="hov">
            <a href="<?php the_permalink(); ?>">Подробнее о товаре</a>
          </div>
        </div>

      <?php
      endwhile; ?>

      <?php foreach ($under_cat as $under_item) { ?>
        <div data-under="<?php echo $under_item[id]; ?>" data-slug="<?php echo $under_item[slug];?>" class="under-box zero <?php echo $under_item[slug];?>">
          <span>
            <img src="<?php echo wp_get_attachment_url(get_post_thumbnail_id($under_item[id])); ?>">
            <h3><?php echo $under_item[name]; ?></h3>
            <span><?php echo $under_item[price]; ?></span>
          </span>
          <div class="hov">
            <span>Подробнее</span>
          </div>
        </div>
      <?php } ?>


    </div>

    <div class="knopka3">
      <a>Показать еще</a>
    </div>


  </section>

  <div class="hide_block">
    <a href="" class="all_cart">
      <div class="love">
        <img src="<?php echo get_template_directory_uri(); ?>/img/love.png">
      </div>
      <div class="motik2">
        <div class="pados">
          <img src="<?php echo get_template_directory_uri(); ?>/img/vehicle.png">
        </div>
        <h3>Suzuki desperado</h3>


        <div class="hov">
          <a href="">Подробнее о товаре</a>
        </div>
      </div>
    </a>
  </div>
  <script>
    var url_keyword = window.location.pathname.split('/')[2];
    $('.item [data-menu="' + url_keyword + '"]').addClass('bord_avtive')
  </script>
  <script>
    $(document).ready(function () {
      var slug = $('.year-wrapper__item--active').attr('data-slug');
      $('.' + slug).css('display', 'block');

      $('.year-wrapper__item').on('click', switchYear);
      $('.under-box').on('click', switchUnder);
    });

    function switchYear () {
      var slugYear = $(this).attr('data-slug');
      $('.year-wrapper__item').removeClass('year-wrapper__item--active');
      $(this).addClass('year-wrapper__item--active');
      $('.motocycle .motik').css('display', 'none');
      $('.motocycle .under-box').css('display', 'none');
      $('.' + slugYear).css('display', 'block');
    }

    function switchUnder () {
      var underID = $(this).attr('data-under');
      var underSlug = $(this).attr('data-slug');
      console.log(underSlug);
      $('.under-box').css('display', 'none');
      for(var i = 0; i < $('.motocycle .motik').length; i++) {
        console.log($('.motocycle .motik').eq(i));
        if($('.motocycle .motik').eq(i).hasClass('id-' + underID) && $('.motocycle .motik').eq(i).hasClass('slug-' + underSlug)) {
          $('.motocycle .motik').eq(i).css('display', 'block')
        }
      }
      // $('.id-' + underID).css('display', 'block');
    }
  </script>
<?php
get_footer();

