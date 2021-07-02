<?php
/* Template Name: Template - Contact Us*/
get_header(); ?>
<section class="contact">
    <?php get_template_part( 'templates/content-form'); ?>


    <article class="section_two">
        <img src="<?php the_field('contact_image', 'options')?>" alt="Logo">
    </article>

</section>
<?php get_footer(); ?>