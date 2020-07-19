<?php

add_action( 'init', function () {
	register_block_type( 'gutenberg-blocks-library/accordion', [
		'editor_script' => 'gb-blocks-library-accordion-editor',
		'editor_style'  => 'gb-blocks-library-accordion-editor',
		'script'        => 'gb-blocks-library-accordion',
		'style'         => 'gb-blocks-library-accordion',
	] );
} );
