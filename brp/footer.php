<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package BRP
 */

?>
<footer>
  <div class="border">
    <div class="podval content">
      <div class="end">
        <a href="https://brp-world.com">
          <div class="logotip">
            <img src="<?php echo get_template_directory_uri(); ?>/img/brpLogo.png">
            <div class="logo">
              <h1>BRP</h1>
              <p>Регона</p>
            </div>
          </div>
        </a>

        <div class="bottom_menu">
          <a href="/">Главная</a>
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

      <div class="end">
        <div class="bot_menu">
          <a href="/politika-konfidenczialnosti/">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</a>
          <a href="/polzovatelskoe-soglashenie/">ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ</a>
          <a href="<?php the_field('document_company', options); ?>" target="_blank">РЕКВИЗИТЫ КОМПАНИИ</a>
        </div>

        <div class="bot">
          <?php
          $phone_new = get_field('номер_телефона', options);
          $phone_clear = preg_replace('~[^0-9]+~', '', $phone_new);
          ?>
          <div class="phone padd_10">
            <img src="<?php echo get_template_directory_uri(); ?>/img/phone.svg">
            <a href="tel:<?php echo $phone_clear; ?>"
               class="hover_new"><?php the_field('номер_телефона', options); ?></a>
          </div>

          <div class="phone">
            <img src="<?php echo get_template_directory_uri(); ?>/img/Vec.png">
            <a href="mailto:<?php the_field('e-mail', options); ?>"
               class="hover_new"><?php the_field('e-mail', options); ?></a>
          </div>


        </div>

      </div>
    </div>
  </div>

  <div class="down content">
    <p>(С) 2010-2019, BRP</p>
    <div class="sety">
      <a href="<?php the_field('ссылка_на_твиттер', options); ?>"><img
          src="<?php echo get_template_directory_uri(); ?>/img/twitter.svg"></a>
      <a href="<?php the_field('ссылка_на_телеграмм', options); ?>"><img
          src="<?php echo get_template_directory_uri(); ?>/img/telegram.png"></a>
      <a href="<?php the_field('ссылка_на_youtube', options); ?>"><img
          src="<?php echo get_template_directory_uri(); ?>/img/youtube.png"></a>
    </div>
  </div>
</footer>
<section class="modal">

  <div class="close_modal">
    <p>Закрыть</p>
    <img src="img/krest_mod.png">
  </div>


  <div class="window">

    <h2>Остались вопросы? Напишите нам</h2>

    <form class="forma" method="post" id="askform">
      <div class="forma content">
        <div class="forma_grid">
          <fieldset class="formRow">
            <div class="formRow--item">
              <label for="firstname" class="formRow--input-wrapper js-inputWrapper">
                <input type="name" name="name" class="formRow--input js-input" id="lastname"
                       placeholder=""><span class="placeholder">Ваше имя</span>
              </label>
            </div>
          </fieldset>

          <fieldset class="formRow">
            <div class="formRow--item">
              <label for="firstname" class="formRow--input-wrapper js-inputWrapper">
                <input type="tel" name="tel" class="formRow--input js-input" id="lastname"
                       placeholder="" required><span class="placeholder">Ваш Email</span>
              </label>
            </div>
          </fieldset>
        </div>
        <fieldset class="formRow">
          <div class="formRow--item">
            <label for="area" class="formRow--input-wrapper js-inputWrapper">
              <input type="tel" name="tel" class="formRow--input js-input" id="area"
                     placeholder=""><span class="placeholder">Опишите Ваш вопрос</span>
            </label>
          </div>
        </fieldset>


        <!--                <fieldset class="formRow">-->
        <!--                    <div class="formRow--item">-->
        <!--                        <label for="firstname" class="formRow--input-wrapper js-inputWrapper">-->
        <!--                            <textarea rows="1" class="formRow--input js-input" id="lastname"-->
        <!--                                      placeholder="Опишите Ваш вопрос"></textarea>-->
        <!--                        </label>-->
        <!--                    </div>-->
        <!--                </fieldset>-->
      </div>


      <div class="button_brp hover_fon">
        <div class="aaa">
          <input class="otpravit" type="submit" value="Отправить">
        </div>
        <img src="<?php echo get_template_directory_uri(); ?>/img/arrow-right.png">
      </div>

    </form>


  </div>
</section>
<div class="modal-alert">
  <div class="modal-alert__text">
    <p>Спасибо</p>
    <p>Наш менеджер свяжется с Вами</p>
  </div>
</div>
<script>

  $(document).ready(function () {
    $("#askform").submit(function () {
      var form_data = $(this).serialize();
      $.ajax({
        type: "POST",
        url: "http://brp56.ru/mail.php",
        data: form_data,
        success: function () {
          $(".modal").css("display", "none");
          $(".modal-alert").css("display", "flex");
        },
        error: function () {
          alert('возникла ошибка');
        }
      });
      return false;
    });
  });


  $("body").on("click", function (e) {
    var div = $(".modal-alert__text, .modal-alert__text p");
    if (!div.is(e.target)) {
      $(".modal-alert").css('display', "none");
    }
  });

</script>
<?php wp_footer(); ?>

</body>
</html>
