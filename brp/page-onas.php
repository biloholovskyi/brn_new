<?php

/*
Template Name: О нас
*/


get_header();
?>


<section class="block1" style="background-image: url(<?php echo get_template_directory_uri(); ?>/img/car.png);">
	<div class="main content">
		<div class="all">
	
		<h1>О компании</h1>

		<div class="button">
			<a>Связаться с нами</a>
		</div>
	</div>
	</div>
</section>

<section class="block12">

	
	 <div class="answer2"> 
 
  <div class="tab_content">

    <div class="tab2_item">
        <section class="block4"  style="background:#fff">
	<div class="us">
		<h2>О Нас</h2>
		<?php the_field('текст_слева_нас',18);?>
	</div>
	<div class="image">
		<img src="	<?php the_field('картинка_справа_нас',18);?>">
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
