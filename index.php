<?php
/**
 * Plugin Name: Gutenberg Accordion Block
 * Description: Accordion blocks
 * Version:     1.0.0
 * Author:      rtCamp
 * Author URI:  http://rtcamp.com/
 * License:     GPL v2 or later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */

/**
 * Register block assets.
 */
add_action(
	'init',
	function() {
		$asset_file         = __DIR__ . '/index.asset.php';
		$asset              = file_exists( $asset_file ) ? require_once $asset_file : null;
		$block_dependencies = isset( $asset['dependencies'] ) ? $asset['dependencies'] : [];
		$block_version      = isset( $asset['version'] ) ? $asset['version'] : false;

		$scripts = [
			[
				'handle'       => 'gb-blocks-library-accordion-editor',
				'src'          => 'build/index.js',
				'dependencies' => $block_dependencies,
				'version'      => $block_version,
				'in_footer'    => true,
			],
			[
				'handle'       => 'gb-blocks-library-accordion', // Front-end.
				'src'          => 'build/view/index.js',
				'dependencies' => [],
				'version'      => false,
				'in_footer'    => true,
			],
		];

		foreach ( $scripts as $script ) {
			$src_file = __DIR__ . '/' . $script['src'];

			if ( file_exists( $src_file ) ) {
				$version   = ! empty( $script['version'] ) ? $script['version'] : filemtime( $src_file );
				$in_footer = ! empty( $script['in_footer'] ) ? $script['in_footer'] : true;

				wp_register_script(
					$script['handle'],
					plugins_url( $script['src'], __FILE__ ),
					$script['dependencies'],
					$version,
					$in_footer
				);
			}
		}

		$styles = [
			[
				'handle'       => 'gb-blocks-library-accordion-editor',
				'src'          => 'build/style.css',
				'dependencies' => [],
				'version'      => false,
				'media'        => 'all',
			],
			[
				'handle'       => 'gb-blocks-library-accordion', // Front-end.
				'src'          => 'build/view/style.css',
				'dependencies' => [],
				'version'      => false,
				'media'        => 'all',
			],
		];

		foreach ( $styles as $style ) {
			$src_file = __DIR__ . '/' . $style['src'];

			if ( file_exists( $src_file ) ) {
				$version = ! empty( $style['version'] ) ? $style['version'] : filemtime( $src_file );
				$media   = ! empty( $style['media'] ) ? $style['media'] : 'all';

				wp_register_style(
					$style['handle'],
					plugins_url( $style['src'], __FILE__ ),
					$style['dependencies'],
					$version,
					$media
				);
			}
		}
	}
);

include_once __DIR__ . '/accordion.php';
