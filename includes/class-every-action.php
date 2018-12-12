<?php

namespace TPC\EveryAction;

use PostTypes\PostType;

/**
 * The file that defines the core plugin class
 *
 * A class definition that includes attributes and functions used across both the
 * public-facing side of the site and the admin area.
 *
 * @link       https://tinypixel.io
 * @since      1.0.0
 *
 * @package    every-action
 * @subpackage every-action/includes
 */

/**
 * The core plugin class.
 *
 * This is used to define internationalization, admin-specific hooks, and
 * public-facing site hooks.
 *
 * Also maintains the unique identifier of this plugin as well as the current
 * version of the plugin.
 *
 * @since      1.0.0
 * @package    every-action
 * @subpackage every-action/includes
 * @author     Tiny Pixel Collective, Kelly Mears <developers@tinypixel.io>
 */
class Every_Action {

	/**
	 * The loader that's responsible for maintaining and registering all hooks that power
	 * the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      Every_Action_Loader    $loader    Maintains and registers all hooks for the plugin.
	 */
	protected $loader;

	/**
	 * The unique identifier of this plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $plugin_name    The string used to uniquely identify this plugin.
	 */
	protected $plugin_name;

	/**
	 * The current version of the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $version    The current version of the plugin.
	 */
	protected $version;


	/**
	 * Webpack asset manager.
	 * @link https://wpack.io
	 *
	 * @since    1.0.0
	 * @access   public
	 * @var      obj    $wpack    Handles enqueuing of ES6 and SASS.
	 */
	public $webpack;

	/**
	 * Define the core functionality of the plugin.
	 *
	 * Set the plugin name and the plugin version that can be used throughout the plugin.
	 * Load the dependencies, define the locale, and set the hooks for the admin area and
	 * the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function __construct() {

	/**
	 * Name and semver
	 */
		if ( defined( 'EVERY_ACTION_VERSION' ) )
			$this->version = EVERY_ACTION_VERSION;
		else
			$this->version = '1.0.0';
			$this->plugin_name = 'every-action';

	/**
	 * Actions, Filters, i18n definitions
	 */
		$this->load_dependencies();
		$this->set_locale();

	/**
	 * Register custom post types
	 * #TODO break out into a separate class entity.
	 */
		$this->register_post_types();

	/**
	 * Actions, Filters, i18n
	 */
		$this->define_admin_hooks();
		$this->define_public_hooks();
	}

	/**
	 * Load the required dependencies for this plugin.
	 *
	 * Include the following files that make up the plugin:
	 *
	 * - Every_Action_Loader. Orchestrates the hooks of the plugin.
	 * - Every_Action_i18n. Defines internationalization functionality.
	 * - every-action_Admin. Defines all hooks for the admin area.
	 * - Every_Action_Public. Defines all hooks for the public side of the site.
	 *
	 * Create an instance of the loader which will be used to register the hooks
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function load_dependencies() {

		/**
		 * The class responsible for orchestrating the actions and filters of the
		 * core plugin.
		 */
		require_once EVERY_ACTION_PATH . 'includes/class-every-action-loader.php';

		/**
		 * The class responsible for defining internationalization functionality
		 * of the plugin.
		 */
		require_once EVERY_ACTION_PATH . 'includes/class-every-action-i18n.php';

		/**
		 * The class responsible for defining all actions that occur in the admin area.
		 */
		require_once EVERY_ACTION_PATH . 'includes/admin/class-every-action-admin.php';

		/**
		 * The class responsible for defining all actions that occur in the public-facing
		 * side of the site.
		 */
		require_once EVERY_ACTION_PATH . 'includes/public/class-every-action-public.php';

		$this->loader = new Every_Action_Loader();

	}

	/**
	 * Define the locale for this plugin for internationalization.
	 *
	 * Uses the Every_Action_i18n class in order to set the domain and to register the hook
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function set_locale() {

		$plugin_i18n = new Every_Action_i18n();

		$this->loader->add_action( 'plugins_loaded', $plugin_i18n, 'load_plugin_textdomain' );

	}

	/**
	 * Register all of the hooks related to the admin area functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function define_admin_hooks() {

		$plugin_admin = new Every_Action_Admin( $this->get_plugin_name(), $this->get_version() );

		$this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_styles' );
		$this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_scripts' );
	}

	/**
	 * Register all of the hooks related to the public-facing functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function define_public_hooks() {

		$plugin_public = new Every_Action_Public( $this->get_plugin_name(), $this->get_version() );

		$this->loader->add_action( 'wp_enqueue_scripts', $plugin_public, 'enqueue_styles' );
		$this->loader->add_action( 'wp_enqueue_scripts', $plugin_public, 'enqueue_scripts' );
	}

	/**
	 * Register the PostTypes used by the plugin
	 *
	 * @see jjgrainger/posttypes dependency
	 * @link https://github.com/jjgrainger/PostTypes
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function register_post_types() {
		$options = [
      'supports' => [ 'title', 'editor', 'thumbnail' ],
      'capability_type' => 'post',
      'show_in_rest' => true,
    ];

    /**
      *  Post type
      */
    $advocacy = new \PostTypes\PostType('advocacy', $options);

    $advocacy->icon('dashicons-megaphone');
    $advocacy->taxonomy( 'issue' );
    $advocacy->register();

    /**
      *  Post taxonomy
      */
    $issue = new \PostTypes\Taxonomy( 'issue' );
    $issue->options( [
      'hierarchical' => true,
      'show_in_rest' => true,
      'rest_base' => 'plugin',
    ]);

    $issue->register();
	}

	/**
	 * Run the loader to execute all of the hooks with WordPress.
	 *
	 * @since    1.0.0
	 */
	public function run() {
		$this->loader->run();
	}

	/**
	 * The name of the plugin used to uniquely identify it within the context of
	 * WordPress and to define internationalization functionality.
	 *
	 * @since     1.0.0
	 * @return    string    The name of the plugin.
	 */
	public function get_plugin_name() {
		return $this->plugin_name;
	}

	/**
	 * The reference to the class that orchestrates the hooks with the plugin.
	 *
	 * @since     1.0.0
	 * @return    Every_Action_Loader    Orchestrates the hooks of the plugin.
	 */
	public function get_loader() {
		return $this->loader;
	}

	/**
	 * Retrieve the version number of the plugin.
	 *
	 * @since     1.0.0
	 * @return    string    The version number of the plugin.
	 */
	public function get_version() {
		return $this->version;
	}
}
