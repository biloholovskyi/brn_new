<?php

/*
Template Name: Контакты
*/


get_header();
?>


<section class="block10">
	<div class="shops">
		<h1>Наш адрес</h1>
    <div class="adress_town">
      <?php
        the_content();
      ?>
    </div>
	</div>

	<div class="map">
		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2468.756968366612!2d55.18812331577988!3d51.77404997967982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x417bf76691941647%3A0x28613e4a30eaf0ba!2z0L_RgC4g0JPQsNCz0LDRgNC40L3QsCwgNTksINCe0YDQtdC90LHRg9GA0LMsINCe0YDQtdC90LHRg9GA0LPRgdC60LDRjyDQvtCx0LsuLCA0NjAwNTE!5e0!3m2!1sru!2sru!4v1565592752629!5m2!1sru!2sru" width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></iframe>
	</div>
</section>

<section class="block11">
	<h2>Остались вопросы? Напишите нам</h2>


	<div class="forma content">

<div class="forma_grid">
<fieldset class="formRow">
<div class="formRow--item">
<label for="firstname" class="formRow--input-wrapper js-inputWrapper">
<input type="text" class="formRow--input js-input" id="lastname" placeholder=""><span class="placeholder">Ваше имя</span>
</label>
</div>
</fieldset>

<fieldset class="formRow">
<div class="formRow--item">
<label for="firstname" class="formRow--input-wrapper js-inputWrapper">
<input type="text" class="formRow--input js-input" id="lastname" placeholder=""><span class="placeholder">Ваш Email</span>
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

<!--<fieldset class="formRow">-->
<!--<div class="formRow--item">-->
<!--<label for="firstname" class="formRow--input-wrapper js-inputWrapper">-->
<!--<textarea rows="4" class="formRow--input js-input" id="lastname" placeholder="Опишите Ваш вопрос"></textarea>-->
<!--</label>-->
<!--</div>-->
<!--</fieldset>-->
	</div>






	

	<div class="button_brp hover_fon">
		<div class="aaa">
			<a>Отправить</a>
		</div>
			<img src="<?php echo get_template_directory_uri(); ?>/img/arrow-right.png">
		</div>

</section>





	</div>

	

</section>

</div>







  </div>
  </div>  

 
</section>
	

<?php
get_footer();
