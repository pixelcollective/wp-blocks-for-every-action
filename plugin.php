<?php
/**
 * Plugin Name: &nbsp;📋Every Action for Gutenberg
 * Plugin URI: https://github.com/pixelcollective/every-action-for-gutenberg
 * Description: Gutenberg support for NGP VAN Every Action.
 * Author: Tiny Pixel Collective, Kelly Mears <developers@tinypixel.io>
 * Author URI: https://tinypixel.io
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
