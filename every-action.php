<?php

/**
 * @link              https://tinypixel.io
 * @since             1.0.0
 * @package           every-action
 *
 * @wordpress-plugin
 * Plugin Name:       &nbsp;📣&nbsp;WP Blocks for Every Action
 * Plugin URI:        https://tinypixel.io/every-action
 * Description:       Non-profit CRM support for the WordPress 5 Block editor
 * Version:           1.0.6
 * Author:            Tiny Pixel Collective, Kelly Mears <developers@tinypixel.io>
 * Author URI:        https://tinypixel.io
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       every-action
 * Domain Path:       /languages
 */

 /**
 * Keep it clean
 * ✨ 🧹 ✨
 */
namespace TPC\EveryAction;

require __DIR__ . '/vendor/autoload.php';
require __DIR__ . '/wpackio.php';

/**
 * Current plugin version.
 * https://semver.org
 */
define( 'EVERY_ACTION_VERSION', '1.0.6' );
define( 'EVERY_ACTION_PATH', plugin_dir_path( __FILE__ ));

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-every-action-activator.php
 */
function activate_every_action() {
	require_once EVERY_ACTION_PATH . 'includes/class-every-action-activator.php';
	every-action_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-every-action-deactivator.php
 */
function deactivate_every_action() {
	require_once EVERY_ACTION_PATH . 'includes/class-every-action-deactivator.php';
	every-action_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_every_action' );
register_deactivation_hook( __FILE__, 'deactivate_every_action' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require EVERY_ACTION_PATH . 'includes/class-every-action.php';

/**
 * Begins execution of the plugin.
 *
 * @since    1.0.0
 */
function run_every_action() {

	$plugin = new Every_Action();
	$plugin->run();

}
run_every_action();
