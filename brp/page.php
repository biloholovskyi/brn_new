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



<section class="block1" style="background-image: url(<?php echo get_the_post_thumbnail_url();?>);">


<div class="setka content sank">

	<div class="both">
	<div class="left2">
	<div class="max">
	
		<h1><?php the_title();?></h1>
		
		<div class="button2">
			
		</div>

		</div>

		<div class="cycle">
		
	
			
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

    <div class="tab_item">
        
  <?php the_content();?>
    </div>
    
   
  </div>

  
  
</div>                    


	
</section>

<?php
get_footer();
