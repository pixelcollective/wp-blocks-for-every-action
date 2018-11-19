<?php

/**
 * Plugin Name: &#32;📋Every Action for Gutenberg
 * Plugin URI:   https://github.com/pixelcollective/every-action-for-gutenberg
 * Description: Gutenberg blocks for non-profits using NGP VAN Every Action CRM platform.
 * Author: Kelly Mears, Tiny Pixel Collective <developers@tinypixel.io>
 * Author URI: https://github.com/pixelcollective
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 * 
 */


// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function every_action_block_assets() {
	// Styles.
	wp_enqueue_style(
		'every_action-block-style-css', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
		array( 'wp-blocks' ) // Dependency to include the CSS after it.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' ) // Version: filemtime — Gets file modification time.
	);
} // End function guten_every_action_cgb_block_assets().

// Hook: Frontend assets.
add_action( 'enqueue_block_assets', 'every_action_block_assets' );

function every_action_editor_assets() {
	// Scripts.
	wp_enqueue_script(
		'every_action-block-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element' ), // Dependencies, defined above.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: filemtime — Gets file modification time.
		true // Enqueue the script in the footer.
	);
	wp_enqueue_style(
		'every_action-block-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ) // Dependency to include the CSS after it.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: filemtime — Gets file modification time.
	);
} // End function guten_every_action_cgb_editor_assets().

add_action( 'enqueue_block_editor_assets', 'every_action_editor_assets' );

add_filter( 'block_categories', function( $categories, $post ) {
  return array_merge (
    $categories, array (
      array (
        'slug' => 'every-action',
        'title' => 'Every Action',
      )
    )
  );
}, 10, 2 );
