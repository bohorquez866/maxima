<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'maxima-limpieza' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '-J1w:5nA.L/uggr%pL}u7>&e<mHL=r26v]fJkEh`Ol}(vfucAA__4BY+~Sah}a]d' );
define( 'SECURE_AUTH_KEY',  ';wL+tpNWb8c;nzkpAC?^K7m9DG!QfGrZOwUl-(o11.h*;I]7;!hu,XTZxLfHlA,p' );
define( 'LOGGED_IN_KEY',    'ouyy,i#G,/4~<bXDAr7j(BP62s+(JU(MKrzn8$XTJmr?P4wVyudo&.q?rq94!/cU' );
define( 'NONCE_KEY',        'x5sDM@3)pxN-e2#RtA9r^:3mpZ?[*]i%Q?zk.H<pLARZ}18j}cad%9r:z 8h$e1a' );
define( 'AUTH_SALT',        'AKhodk$iLt9*c~PNsl,dC d[a)u^H8i)K1/kX@_D8X|4vsx)*[W(z%_FH^zqgxw~' );
define( 'SECURE_AUTH_SALT', 'n2y02]8&351f|.lwveJRB+r1Y4jwrh&:|2Ij&,%ag/W3m=hM@*)Z)O<5uH~@bk&X' );
define( 'LOGGED_IN_SALT',   'LgR-BbqyJ:4j}8puZFRR]C:lp]*p>aRi[Mco?~a>fgn}bsaE>SMoTeDuX@V6JVZb' );
define( 'NONCE_SALT',       'DpGyRxyBIWVb5UHA4~JRt_lO_;;VC;/3bXh*%e6&dd.G<WT+xFD37.n&rQ:BoOTE' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'max_l_wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';