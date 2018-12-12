<?php

namespace TPC\EveryAction;

/**
 * Define the internationalization functionality
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @link       https://tinypixel.io
 * @since      1.0.0
 *
 * @package    every-action
 * @subpackage every-action/includes
 */

/**
 * Define the internationalization functionality.
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @since      1.0.0
 * @package    every-action
 * @subpackage every-action/includes
 * @author     Tiny Pixel Collective, Kelly Mears <developers@tinypixel.io>
 */
class Every_Action_i18n {


	/**
	 * Load the plugin text domain for translation.
	 *
	 * @since    1.0.0
	 */
	public function load_plugin_textdomain() {

		load_plugin_textdomain(
			'every-action',
			false,
			dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages/'
		);

	}



}
