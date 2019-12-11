<?php

/*
Template Name: Акции
*/


get_header();
?>

<section class="block1" style="background-image: url(<?php echo get_template_directory_uri(); ?>/img/car.png);">
	<div class="main content">
		<div class="all">
		<p>BRP Регона</p>
		<h1>Акции BRP</h1>

		<div class="button">
			<a>Связаться с нами</a>
		</div>
	</div>
	</div>
</section>

<section class="block2">
	<div class="grid">
	    
<?php
$args = array( 'post_type' => 'akcia', 'posts_per_page' => -1 );
$loop = new WP_Query( $args );
while ( $loop->have_posts() ) : $loop->the_post(); ?>	   

		<div class="left" style="background-image: url(<?php echo get_the_post_thumbnail_url();?>);">
			<div class="date">
				<p><?php the_field('акция_проводится_до');?></p>
				<h3><?php the_title();?></h3>

				<div class="click">
					<a href="<?php the_permalink();?>">Подробнее о акции</a>
					<img src="<?php echo get_template_directory_uri(); ?>/img/Vector.svg">
				</div>
			</div>
		</div>
		
<?php 
endwhile; ?>		
		
		
		
		
		
		
		
	</div>
</section>


	

<?php
get_footer();
