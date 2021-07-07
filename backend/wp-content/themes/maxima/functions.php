<?php
  if( function_exists('acf_add_options_page') ) {
    acf_add_options_page(array(
      'page_title'    => 'Configuración General',
      'menu_title'    => 'Configuraciones',
      'menu_slug'     => 'theme-general-settings',
      'capability'    => 'edit_posts',
      'redirect'      => false,
      'position'      => '3.1',
      'icon_url'      => 'dashicons-admin-settings',
    ));


}
add_filter( 'wpcf7_mail_components', 'show_cf7_request', 10, 3 );
function show_cf7_request( $components, $wpcf7_get_current_contact_form, $instance ) { 
    print_r($_REQUEST);
    die();
    return $components; 
}; 