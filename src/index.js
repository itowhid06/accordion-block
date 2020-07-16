/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import settings from './../block.json';

/**
 * External dependencies
 */
import { Accordion } from '@rtcamp/gb-components';

/**
 * Internal dependencies.
 */
import './editor.scss';

/**
 * Block Settings.
 *
 * @type {Object}
 */
registerBlockType (  settings.name, {
	/**
	 * Block title.
	 *
	 * @type {string}
	 */
	title: __( 'Accordion', 'gutenberg-blocks-library' ),

	/**
	 * Block icon.
	 *
	 * @type {string}
	 */
	icon: 'menu',

	/**
	 * Block description.
	 *
	 * @type {string}
	 */
	description: __( 'Accordion Block', 'gutenberg-blocks-library' ),

	/**
	 * Block category.
	 *
	 * @type {string}
	 */
	category: settings.category,

	/**
	 * Block attributes.
	 *
	 * @type {Object}
	 */
	attributes: settings.attributes,

	/**
	 * Creates editor block.
	 *
	 * @param {Object} props Edit props.
	 *
	 * @return {*}
	 */
	edit( props ) {
		return ( <Accordion { ...props } /> );
	},

	/**
	 * Save
	 *
	 * @param {Object} props Save props.
	 *
	 * @return {*}
	 */
	save( props ) {
		return <Accordion.Content { ...props } />;
	},
} );
