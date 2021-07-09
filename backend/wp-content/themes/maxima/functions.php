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

add_filter( 'register_post_type_args', 'my_post_type_args', 2, 2 );
 
function my_post_type_args( $args, $post_type ) {
 
    if ( 'service' === $post_type ) {
        $args['show_in_rest'] = true;
 
        // Optionally customize the rest_base or rest_controller_class
        $args['rest_base']             = 'services';
        $args['rest_controller_class'] = 'WP_REST_Posts_Controller';
    }
 
    return $args;
}


//* rest-filter plugin
add_action( 'rest_api_init', 'rest_api_filter_add_filters' );

 /**
  * Add the necessary filter to each post type
  **/
function rest_api_filter_add_filters() {
	foreach ( get_post_types( array( 'show_in_rest' => true ), 'objects' ) as $post_type ) {
		add_filter( 'rest_' . $post_type->name . '_query', 'rest_api_filter_add_filter_param', 10, 2 );
	}
}

/**
 * Add the filter parameter
 *
 * @param  array           $args    The query arguments.
 * @param  WP_REST_Request $request Full details about the request.
 * @return array $args.
 **/
function rest_api_filter_add_filter_param( $args, $request ) {
	// Bail out if no filter parameter is set.
	if ( empty( $request['filter'] ) || ! is_array( $request['filter'] ) ) {
		return $args;
	}

	$filter = $request['filter'];

	if ( isset( $filter['posts_per_page'] ) && ( (int) $filter['posts_per_page'] >= 1 && (int) $filter['posts_per_page'] <= 100 ) ) {
		$args['posts_per_page'] = $filter['posts_per_page'];
	}

	global $wp;
	$vars = apply_filters( 'rest_query_vars', $wp->public_query_vars );

	// Allow valid meta query vars.
	$vars = array_unique( array_merge( $vars, array( 'meta_query', 'meta_key', 'meta_value', 'meta_compare' ) ) );

	foreach ( $vars as $var ) {
		if ( isset( $filter[ $var ] ) ) {
			$args[ $var ] = $filter[ $var ];
		}
	}
	return $args;
}