<?php
/**
 * Plugin Name: Accordion
 * Description: Show an Accordion
 * Version:     1.0
 * Author:      rtCamp
 * Author URI:  https://rtcamp.com
 * License:     GPL v2 or later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */

/**
 * Register assets for block.
 *
 * @param string $block_name Block short name.
 */
add_action( 'init', function () {
	$block_name = 'accordion';

	$asset_file         = 'build/index.asset.php';
	$asset              = file_exists( $asset_file ) ? require_once $asset_file : null;
	$block_dependencies = isset( $asset['dependencies'] ) ? $asset['dependencies'] : [];
	$block_version      = isset( $asset['version'] ) ? $asset['version'] : false;

	$scripts = [
		[
			'handle'       => sprintf( 'gb-blocks-library-%s-editor', $block_name ),
			'src'          => 'build/index.js',
			'dependencies' => $block_dependencies,
			'version'      => $block_version,
			'in_footer'    => true,
		],
		[
			'handle'       => sprintf( 'gb-blocks-library-%s', $block_name ), // Front-end.
			'src'          => 'build/view/index.js',
			'dependencies' => ['wp-polyfill'],
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
			'handle'       => sprintf( 'gb-blocks-library-%s-editor', $block_name ),
			'src'          => 'build/style.css',
			'dependencies' => [],
			'version'      => false,
			'media'        => 'all',
		],
		[
			'handle'       => sprintf( 'gb-blocks-library-%s', $block_name ), // Front-end.
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

	register_block_type( 'gutenberg-blocks-library/accordion', [
		'editor_script' => 'gb-blocks-library-accordion-editor',
		'editor_style'  => 'gb-blocks-library-accordion-editor',
		'script'        => 'gb-blocks-library-accordion',
		'style'         => 'gb-blocks-library-accordion',
	] );
} );
