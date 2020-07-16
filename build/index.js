/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./blocks/accordion/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./block-components/gb-components/build-module/accordion/accordion-row.js":
/*!********************************************************************************!*\
  !*** ./block-components/gb-components/build-module/accordion/accordion-row.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);

/**
 * Accordion row component.
 */

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */



/**
 * Accordion row component.
 *
 * @param {Object} props Component props.
 *
 * @return {Object}
 */

var AccordionRow = function AccordionRow(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes,
      accordionItem = _ref.accordionItem,
      index = _ref.index;
  var accordionTitleTag = attributes.accordionTitleTag,
      accordion = attributes.accordion;
  /**
   * Update row values.
   *
   * @param {string} key Key name.
   * @param {string} value Value.
   *
   * @return {void}
   */

  var updateRow = function updateRow(key, value) {
    var updatedAccordion = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["extend"])([], accordion);
    updatedAccordion[index][key] = value;
    setAttributes({
      accordion: updatedAccordion
    });
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "gbc-accordion__row"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "gbc-accordion__header"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"], {
    tagName: accordionTitleTag || 'h3',
    value: accordionItem.title,
    onChange: function onChange(value) {
      return updateRow('title', value);
    },
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Enter Title...', 'gutenberg-block-components'),
    className: "gbc-accordion__row-title"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "gbc-accordion__content"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"], {
    tagName: 'p',
    value: accordionItem.description,
    onChange: function onChange(value) {
      return updateRow('description', value);
    },
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Enter  Content...', 'gutenberg-block-components'),
    className: "gbc-accordion__row-content"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (AccordionRow);

/***/ }),

/***/ "./block-components/gb-components/build-module/accordion/index.js":
/*!************************************************************************!*\
  !*** ./block-components/gb-components/build-module/accordion/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _accordion_row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accordion-row */ "./block-components/gb-components/build-module/accordion/accordion-row.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./save */ "./block-components/gb-components/build-module/accordion/save.js");

/**
 * Accordion component.
 *
 * @todo Created only as a POC, to be completed.
 */

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



/**
 * Accordion component
 *
 * @param {Object} props Component props.
 *
 * @return {*}
 */

var Accordion = function Accordion(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var accordion = attributes.accordion,
      accordionTitleTag = attributes.accordionTitleTag;
  var row = {
    title: '',
    content: ''
  };
  /**
   * Add row.
   *
   * @return {void}
   */

  var addRow = function addRow() {
    if (!Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isArray"])(accordion)) {
      return;
    }

    var updatedAccordion = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["extend"])([], accordion);
    updatedAccordion.push(row);
    setAttributes({
      accordion: updatedAccordion
    });
  };

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!accordion.length) {
      addRow();
    }
  }, []);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "gbc-accordion"
  }, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isArray"])(accordion) && accordion.map(function (accordionItem, key) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_accordion_row__WEBPACK_IMPORTED_MODULE_5__["default"], {
      attributes: attributes,
      setAttributes: setAttributes,
      accordionItem: accordionItem,
      index: key,
      key: key
    });
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: addRow
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Dashicon"], {
    icon: "insert",
    className: "gbc-accordion__insert"
  })), accordionTitleTag && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Panel"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Title Tag', 'gutenberg-block-components')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Title Tag', 'gutenberg-block-components'),
    value: accordionTitleTag,
    options: [{
      value: 'p',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Paragraph', 'gutenberg-block-components')
    }, {
      value: 'h1',
      label: 'h1'
    }, {
      value: 'h2',
      label: 'h2'
    }, {
      value: 'h3',
      label: 'h3'
    }, {
      value: 'h4',
      label: 'h4'
    }, {
      value: 'h5',
      label: 'h5'
    }, {
      value: 'h6',
      label: 'h6'
    }],
    onChange: function onChange(value) {
      return setAttributes({
        accordionTitleTag: value
      });
    }
  })))));
};

Accordion.Content = _save__WEBPACK_IMPORTED_MODULE_6__["default"];
Accordion.Row = _accordion_row__WEBPACK_IMPORTED_MODULE_5__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Accordion);

/***/ }),

/***/ "./block-components/gb-components/build-module/accordion/save.js":
/*!***********************************************************************!*\
  !*** ./block-components/gb-components/build-module/accordion/save.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);

/**
 * WordPress dependencies
 */


/**
 * External dependencies
 */


/**
 * Save Component.
 *
 * @param {Object} props Props.
 *
 * @return {*}
 */

var Save = function Save(_ref) {
  var attributes = _ref.attributes;
  var accordionTitleTag = attributes.accordionTitleTag,
      accordion = attributes.accordion;

  if (!Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isArray"])(accordion) || 1 > accordion.length) {
    return null;
  }

  var rows = accordion.map(function (accordionItem, key) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      key: "gbc-accordion-row-".concat(key),
      className: "gbc-accordion__row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "gbc-accordion__header"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"].Content, {
      tagName: accordionTitleTag || 'h3',
      value: accordionItem.title,
      className: "gbc-accordion__row-title"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "gbc-accordion__content"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"].Content, {
      tagName: 'undefined' !== typeof wp ? 'p' : 'div',
      value: accordionItem.description,
      className: "gbc-accordion__row-content"
    })));
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "gbc-accordion gbc-active"
  }, rows);
};

/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./block-components/gb-components/build-module/autocomplete/index.js":
/*!***************************************************************************!*\
  !*** ./block-components/gb-components/build-module/autocomplete/index.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./block-components/gb-components/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);


/**
 * Autocomplete component.
 */

/**
 * WordPress dependencies
 */



/**
 * External dependencies
 */


/**
 * Auto complete component.
 *
 * @param {Object} props Props.
 *
 * @return {*}
 */

var Autocomplete = function Autocomplete(props) {
  var suggestions = props.suggestions,
      instanceId = props.instanceId,
      displayTransform = props.displayTransform,
      maxSuggestions = props.maxSuggestions;

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isEmpty"])(suggestions) || !Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isArray"])(suggestions)) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["BaseControl"], {
    id: 'autocomplete-base-control-' + instanceId
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["FormTokenField"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    displayTransform: displayTransform || lodash__WEBPACK_IMPORTED_MODULE_4__["unescape"],
    maxSuggestions: maxSuggestions || 100
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__["withInstanceId"])(Autocomplete));

/***/ }),

/***/ "./block-components/gb-components/build-module/countup/index.js":
/*!**********************************************************************!*\
  !*** ./block-components/gb-components/build-module/countup/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-countup */ "./block-components/gb-components/node_modules/react-countup/build/index.js");
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./block-components/gb-components/build-module/countup/save.js");

/**
 * CountUp component.
 */

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


/**
 * CountUp component
 *
 * @param {Object} props Component props.
 *
 * @return {*}
 */

var CountUp = function CountUp(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var countStart = attributes.countStart,
      countEnd = attributes.countEnd,
      countDecimalPlaces = attributes.countDecimalPlaces,
      countDuration = attributes.countDuration,
      countPrefix = attributes.countPrefix,
      countSuffix = attributes.countSuffix;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "gbc-countup"
  }, countPrefix && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "gbc-countup__perfix"
  }, countPrefix), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_countup__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "gbc-countup__count",
    start: parseInt(countStart),
    end: parseInt(countEnd),
    decimals: parseInt(countDecimalPlaces),
    duration: parseInt(countDuration),
    delay: 0,
    separator: ","
  }), countSuffix && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "gbc-countup__suffix"
  }, countSuffix), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Panel"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Settings', 'gutenberg-block-components')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    className: "count-duration",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Duration', 'gutenberg-block-components'),
    value: parseInt(countDuration),
    onChange: function onChange(countDurationVal) {
      setAttributes({
        countDuration: countDurationVal
      });
    },
    min: 1,
    max: 10
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
    className: "count-start-value",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Start Count', 'gutenberg-block-components'),
    value: parseInt(countStart),
    onChange: function onChange(countStartVal) {
      setAttributes({
        countStart: countStartVal
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
    className: "count-end-value",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('End Count', 'gutenberg-block-components'),
    value: parseInt(countEnd),
    onChange: function onChange(countEndVal) {
      setAttributes({
        countEnd: countEndVal
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    className: "count-decimal-places",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Decimal Places', 'gutenberg-block-components'),
    value: parseInt(countDecimalPlaces),
    onChange: function onChange(countDecimalPlacesVal) {
      setAttributes({
        countDecimalPlaces: countDecimalPlacesVal
      });
    },
    min: 0,
    max: 3
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
    className: "count-prefix",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Prefix', 'gutenberg-block-components'),
    value: countPrefix,
    onChange: function onChange(countPrefixVal) {
      setAttributes({
        countPrefix: countPrefixVal
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
    className: "count-suffix",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Suffix', 'gutenberg-block-components'),
    value: countSuffix,
    onChange: function onChange(countSuffixVal) {
      setAttributes({
        countSuffix: countSuffixVal
      });
    }
  })))));
};

CountUp.Content = _save__WEBPACK_IMPORTED_MODULE_5__["default"];
/* harmony default export */ __webpack_exports__["default"] = (CountUp);

/***/ }),

/***/ "./block-components/gb-components/build-module/countup/save.js":
/*!*********************************************************************!*\
  !*** ./block-components/gb-components/build-module/countup/save.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Save component
 *
 * @param {Object} props Component props.
 *
 * @return {*}
 */

var Save = function Save(_ref) {
  var attributes = _ref.attributes;
  var countStart = attributes.countStart,
      countEnd = attributes.countEnd,
      countDecimalPlaces = attributes.countDecimalPlaces,
      countDuration = attributes.countDuration,
      countPrefix = attributes.countPrefix,
      countSuffix = attributes.countSuffix;

  if (!countStart && !countEnd) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "gbc-countup"
  }, countPrefix && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "gbc-countup__perfix"
  }, countPrefix), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "gbc-countup__count",
    "data-start": parseInt(countStart),
    "data-end": parseInt(countEnd),
    "data-decimals": parseInt(countDecimalPlaces),
    "data-duration": parseInt(countDuration),
    "data-separator": ","
  }), countSuffix && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "gbc-countup__suffix"
  }, countSuffix));
};

/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./block-components/gb-components/build-module/gif/functions.js":
/*!**********************************************************************!*\
  !*** ./block-components/gb-components/build-module/gif/functions.js ***!
  \**********************************************************************/
/*! exports provided: fetchGifData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchGifData", function() { return fetchGifData; });
/**
 * Fetch Gif.
 *
 * @param {Object} attributes attributes
 * @return {void}
 *
 * This function cannot be covered in tests because of debounce.
 */
var fetchGifData = function fetchGifData(attributes) {
  var search = attributes.search,
      GIPHY_URL = attributes.GIPHY_URL,
      setFetching = attributes.setFetching,
      setMatches = attributes.setMatches;
  setFetching(true);
  fetch(GIPHY_URL + encodeURI(search)).then(function (response) {
    if (response.ok) {
      setFetching(false);
      response.json().then(function (res) {
        return setMatches(res.data);
      });
    }
  }).catch(function () {
    setFetching(false);
  });
};

/***/ }),

/***/ "./block-components/gb-components/build-module/gif/index.js":
/*!******************************************************************!*\
  !*** ./block-components/gb-components/build-module/gif/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./block-components/gb-components/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functions */ "./block-components/gb-components/build-module/gif/functions.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./save */ "./block-components/gb-components/build-module/gif/save.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);


/**
 * Gif component.
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



/**
 * External dependencies
 */


/**
 * Gif component
 *
 * @param {Object} props Component props.
 *
 * @return {*}
 */

var Gif = function Gif(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes,
      isSelected = _ref.isSelected,
      API_KEY = _ref.API_KEY;
  var GIPHY_URL = "https://api.giphy.com/v1/gifs/search?api_key=".concat(API_KEY, "&limit=10&offset=0&rating=G&lang=en&q=");

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      fetching = _useState2[0],
      setFetching = _useState2[1];

  var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      matches = _useState4[0],
      setMatches = _useState4[1];

  var fetchGifs = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["debounce"])(_functions__WEBPACK_IMPORTED_MODULE_5__["fetchGifData"], 1000);
  var results = []; // Generate Gif suggestions if gif data found.

  if (matches && matches.length) {
    results = matches.map(function (gif) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("li", {
        key: gif.id
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
        className: "gif-".concat(gif.id),
        src: gif.images.fixed_height_small.url,
        role: "presentation",
        alt: gif.title,
        onClick: function onClick() {
          return setAttributes({
            gifUrl: gif.images.original.url
          });
        }
      }));
    });
  }

  if (attributes.gifUrl) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "gbc-gif"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, isSelected && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["BlockControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["BlockAlignmentToolbar"], {
      onChange: function onChange(align) {
        setAttributes({
          gifAlign: "align".concat(align)
        });
      },
      value: attributes.gifAlign
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Toolbar"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      className: "components-toolbar__control",
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Remove gif', 'gutenberg-block-components'),
      icon: "trash",
      onClick: function onClick() {
        return setAttributes({
          gifUrl: '',
          gifAlign: '',
          gifAltText: ''
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Gif Settings', 'gutenberg-block-components')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TextareaControl"], {
      className: "abc",
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Alternative text', 'gutenberg-block-components'),
      value: attributes.gifAltText,
      onChange: function onChange(text) {
        return setAttributes({
          gifAltText: text
        });
      }
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("figure", {
      className: attributes.gifAlign || 'alignleft'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
      src: attributes.gifUrl,
      alt: attributes.gifAltText
    })));
  } // Show spinner while the Giphy request in process.


  if (!results.length && fetching) {
    results = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Spinner"], null);
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "gbc-gif"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Placeholder"], {
    key: "placeholder",
    label: "Gif",
    instructions: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Search for gif images( Powered By Giphy )', 'gutenberg-block-components')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("input", {
    key: "search-field",
    type: "text",
    className: "gbc-gif__search",
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Search for gifs', 'gutenberg-block-components'),
    onChange: function onChange(event) {
      return fetchGifs({
        search: event.target.value,
        setMatches: setMatches,
        setFetching: setFetching,
        GIPHY_URL: GIPHY_URL
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("ul", {
    key: "results",
    className: "gbc-gif__results"
  }, results)));
};

Gif.Content = _save__WEBPACK_IMPORTED_MODULE_6__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Gif);

/***/ }),

/***/ "./block-components/gb-components/build-module/gif/save.js":
/*!*****************************************************************!*\
  !*** ./block-components/gb-components/build-module/gif/save.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Save component
 *
 * @param {Object} props Component props.
 *
 * @return {*}
 */

var Save = function Save(_ref) {
  var attributes = _ref.attributes;

  if (attributes.gifUrl) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "gbc-gif"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("figure", {
      className: attributes.gifAlign || 'alignleft'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: attributes.gifUrl,
      alt: attributes.gifAltText || ''
    })));
  }

  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./block-components/gb-components/build-module/index.js":
/*!**************************************************************!*\
  !*** ./block-components/gb-components/build-module/index.js ***!
  \**************************************************************/
/*! exports provided: Accordion, Gif, Tab, Map, ProgressBar, CountUp, Autocomplete, PostSelection, PluginCard, InputRange, PostCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordion */ "./block-components/gb-components/build-module/accordion/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Accordion", function() { return _accordion__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gif */ "./block-components/gb-components/build-module/gif/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Gif", function() { return _gif__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab */ "./block-components/gb-components/build-module/tab/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return _tab__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map */ "./block-components/gb-components/build-module/map/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return _map__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _progressbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./progressbar */ "./block-components/gb-components/build-module/progressbar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressBar", function() { return _progressbar__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _countup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./countup */ "./block-components/gb-components/build-module/countup/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CountUp", function() { return _countup__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./autocomplete */ "./block-components/gb-components/build-module/autocomplete/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Autocomplete", function() { return _autocomplete__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _post_selection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./post-selection */ "./block-components/gb-components/build-module/post-selection/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostSelection", function() { return _post_selection__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _plugin_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./plugin-card */ "./block-components/gb-components/build-module/plugin-card/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PluginCard", function() { return _plugin_card__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _input_range_control__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./input-range-control */ "./block-components/gb-components/build-module/input-range-control/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputRange", function() { return _input_range_control__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _post_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./post-card */ "./block-components/gb-components/build-module/post-card/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostCard", function() { return _post_card__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/**
 * Component exports.
 */












/***/ }),

/***/ "./block-components/gb-components/build-module/input-range-control/index.js":
/*!**********************************************************************************!*\
  !*** ./block-components/gb-components/build-module/input-range-control/index.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./block-components/gb-components/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./block-components/gb-components/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_input_range__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-input-range */ "./block-components/gb-components/node_modules/react-input-range/lib/js/index.js");
/* harmony import */ var react_input_range__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_input_range__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);




function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 * Input Range component.
 */

/**
 * WordPress dependencies
 */



/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */



/**
 * InputRange component
 *
 * @param {Object} props Component props.
 *
 * @return {Object}
 */

var InputRangeControl = function InputRangeControl(_ref) {
  var allowReset = _ref.allowReset,
      allowInputControls = _ref.allowInputControls,
      afterIcon = _ref.afterIcon,
      beforeIcon = _ref.beforeIcon,
      _ref$formatLabel = _ref.formatLabel,
      _formatLabel = _ref$formatLabel === void 0 ? '' : _ref$formatLabel,
      inputRange = _ref.inputRange,
      maxValue = _ref.maxValue,
      minValue = _ref.minValue,
      _onChange = _ref.onChange,
      label = _ref.label,
      help = _ref.help;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      storeInputRange = _useState2[0],
      setStoreInputRange = _useState2[1];

  var id = "gbc-input-range-control";

  if (!inputRange) {
    inputRange = {
      min: minValue,
      max: maxValue
    };
  }

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    // Set inputRange initial value for reset.
    if (!storeInputRange) {
      setStoreInputRange(inputRange);
    }
  }, []);
  /**
   * Change range min limit.
   *
   * @param {obj} event Event Object.
   *
   * @return {void}
   */

  var changeInputRange = function changeInputRange(event) {
    // Return if the input value is invalid.
    if (!event.target.checkValidity()) {
      return;
    } // Return if the input value is invalid.


    var newValue = parseInt(event.target.value);

    var newRange = _objectSpread({}, inputRange);

    if ('input-range-control-min' === event.target.id) {
      newRange.min = newValue;
    } else {
      newRange.max = newValue;
    }

    _onChange(newRange);
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["BaseControl"], {
    id: id,
    label: label,
    help: help
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "gbc-input-range-control"
  }, allowInputControls && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("input", {
    id: "input-range-control-min",
    type: "number",
    min: minValue,
    max: inputRange.max,
    value: inputRange.min,
    onChange: changeInputRange
  }), beforeIcon && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["Dashicon"], {
    icon: beforeIcon
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(react_input_range__WEBPACK_IMPORTED_MODULE_3___default.a, {
    formatLabel: function formatLabel(value) {
      return value + _formatLabel;
    },
    minValue: minValue,
    maxValue: maxValue,
    value: inputRange,
    onChange: function onChange(newRange) {
      return _onChange(newRange);
    }
  }), afterIcon && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["Dashicon"], {
    icon: afterIcon
  }), allowInputControls && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("input", {
    id: "input-range-control-max",
    type: "number",
    min: inputRange.min,
    max: maxValue,
    value: inputRange.max,
    onChange: changeInputRange
  }), allowReset && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    onClick: function onClick() {
      return _onChange(storeInputRange);
    },
    disabled: inputRange === storeInputRange,
    isSmall: true,
    isSecondary: true,
    className: "components-range-control__reset"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Reset', 'gutenberg-block-components'))));
};

/* harmony default export */ __webpack_exports__["default"] = (InputRangeControl);

/***/ }),

/***/ "./block-components/gb-components/build-module/map/index.js":
/*!******************************************************************!*\
  !*** ./block-components/gb-components/build-module/map/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./block-components/gb-components/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _map_inspector_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map-inspector-controls */ "./block-components/gb-components/build-module/map/map-inspector-controls.js");
/* harmony import */ var _map_toolbar_controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map-toolbar-controls */ "./block-components/gb-components/build-module/map/map-toolbar-controls.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./save */ "./block-components/gb-components/build-module/map/save.js");


/**
 * Map component.
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */




/**
 * Map component
 *
 * @param {Object} props Component props.
 *
 * @return {JSX}
 */

var Map = function Map(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var mapQuery = attributes.mapQuery,
      mapHeight = attributes.mapHeight,
      mapApiKey = attributes.mapApiKey,
      mapZoomLevel = attributes.mapZoomLevel; // component states

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      showingMap = _useState2[0],
      setShowingMap = _useState2[1];

  var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      mapSrc = _useState4[0],
      setMapSrc = _useState4[1];

  var _useState5 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      showNoKeyError = _useState6[0],
      setShowNoKeyError = _useState6[1];
  /**
   * Change the source of the map.
   *
   * @return {void}
   */


  var updateMap = function updateMap() {
    if (!mapApiKey) {
      setShowNoKeyError(true);
      setShowingMap(false);
      return;
    } // If mapQuery isn't empty, modify the src of map.


    if (mapQuery) {
      var newMapSrc = isNaN(parseInt(mapZoomLevel)) ? "https://www.google.com/maps/embed/v1/place?key=".concat(mapApiKey, "&q=").concat(encodeURI(mapQuery)) : "https://www.google.com/maps/embed/v1/place?key=".concat(mapApiKey, "&q=").concat(encodeURI(mapQuery), "&zoom=").concat(mapZoomLevel);
      setMapSrc(newMapSrc);
      setShowingMap(true);
    }
  }; // When map is being shown, return early.


  if (showingMap) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "gbc-map"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("iframe", {
      title: "map-location",
      key: "map-location",
      src: mapSrc,
      width: "100%",
      height: mapHeight,
      frameBorder: "0",
      allowFullScreen: ""
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_map_inspector_controls__WEBPACK_IMPORTED_MODULE_4__["default"], {
      attributes: attributes,
      setAttributes: setAttributes,
      showingMap: showingMap,
      stateHandles: {
        setMapSrc: setMapSrc,
        setShowNoKeyError: setShowNoKeyError,
        setShowingMap: setShowingMap
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_map_toolbar_controls__WEBPACK_IMPORTED_MODULE_5__["default"], {
      stateHandles: {
        setShowingMap: setShowingMap
      }
    }));
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "gbc-map"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Placeholder"], {
    key: "map-placeholder",
    icon: "location-alt",
    className: "placeholder",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Google Map', 'gutenberg-block-components'),
    instructions: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Enter a location or address to drop a pin on the Google map.', 'gutenberg-block-components')
  }, showNoKeyError && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    className: "placeholder__error"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('No API Key supplied!', 'gutenberg-block-components')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
    key: "map-query-input",
    className: "placeholder__input",
    value: mapQuery,
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Search for a place or address...', 'gutenberg-block-components'),
    onChange: function onChange(newMapQuery) {
      return setAttributes({
        mapQuery: newMapQuery
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    key: "map-button",
    className: "placeholder__button",
    disabled: !mapQuery,
    onClick: updateMap,
    isLarge: true,
    isPrimary: true
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Apply', 'gutenberg-block-components'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_map_inspector_controls__WEBPACK_IMPORTED_MODULE_4__["default"], {
    attributes: attributes,
    setAttributes: setAttributes,
    showingMap: showingMap,
    stateHandles: {
      setMapSrc: setMapSrc,
      setShowNoKeyError: setShowNoKeyError,
      setShowingMap: setShowingMap
    }
  }));
};

Map.Content = _save__WEBPACK_IMPORTED_MODULE_6__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ }),

/***/ "./block-components/gb-components/build-module/map/map-inspector-controls.js":
/*!***********************************************************************************!*\
  !*** ./block-components/gb-components/build-module/map/map-inspector-controls.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);

/**
 * MapInspectorControls component.
 */

/**
 * WordPress dependencies
 */




/**
 * MapInspectorControls component
 *
 * @param {Object} props Component props.
 *
 * @return {JSX}
 */

var MapInspectorControls = function MapInspectorControls(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes,
      showingMap = _ref.showingMap,
      stateHandles = _ref.stateHandles;
  var mapQuery = attributes.mapQuery,
      mapHeight = attributes.mapHeight,
      mapZoomLevel = attributes.mapZoomLevel,
      mapApiKey = attributes.mapApiKey;
  var setMapSrc = stateHandles.setMapSrc,
      setShowNoKeyError = stateHandles.setShowNoKeyError,
      setShowingMap = stateHandles.setShowingMap;
  /**
   * Update zoom level and change map source.
   *
   * @param {integer} newMapZoomLevel New zoom level.
   *
   * @return {void}
   */

  var onChangeZoom = function onChangeZoom(newMapZoomLevel) {
    setAttributes({
      mapZoomLevel: newMapZoomLevel
    });

    if (!mapApiKey) {
      setShowNoKeyError(true);
      setShowingMap(false);
      return;
    }

    if (showingMap && mapQuery) {
      // If mapQuery isn't empty, modify the src of map.
      var newMapSrc = isNaN(parseInt(newMapZoomLevel)) ? "https://www.google.com/maps/embed/v1/place?key=".concat(mapApiKey, "&q=").concat(encodeURI(mapQuery)) : "https://www.google.com/maps/embed/v1/place?key=".concat(mapApiKey, "&q=").concat(encodeURI(mapQuery), "&zoom=").concat(newMapZoomLevel);
      setMapSrc(newMapSrc);
    }
  };
  /**
   * Update the API key.
   *
   * @param {string} newKey New API key.
   *
   * @return {void}
   */


  var onChangeApiKey = function onChangeApiKey(newKey) {
    setAttributes({
      mapApiKey: newKey
    });
    setShowNoKeyError(false);
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Panel"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
    className: "settings",
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Map Settings', 'gutenberg-block-components')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TextControl"], {
    className: "settings__height-input",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Map height in pixels', 'gutenberg-block-components'),
    value: mapHeight,
    onChange: function onChange(value) {
      return setAttributes({
        mapHeight: value
      });
    },
    min: "50",
    max: "1000",
    type: "number"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
    className: "settings__zoom-input",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Zoom Level', 'gutenberg-block-components'),
    value: isNaN(parseInt(mapZoomLevel)) ? '' : mapZoomLevel,
    onChange: onChangeZoom,
    min: 0,
    max: 21,
    step: 1
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TextControl"], {
    className: "settings__key-input",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('API Key', 'gutenberg-block-components'),
    value: mapApiKey,
    onChange: onChangeApiKey
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (MapInspectorControls);

/***/ }),

/***/ "./block-components/gb-components/build-module/map/map-toolbar-controls.js":
/*!*********************************************************************************!*\
  !*** ./block-components/gb-components/build-module/map/map-toolbar-controls.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);

/**
 * MapToolbarControls component.
 */

/**
 * WordPress dependencies
 */




/**
 * MapInspectorControls component
 *
 * @param {Object} props Component props.
 *
 * @return {JSX}
 */

var MapToolbarControls = function MapToolbarControls(_ref) {
  var stateHandles = _ref.stateHandles;
  var setShowingMap = stateHandles.setShowingMap;
  /**
   * Toolbar controls
   */

  var toolbarControls = [{
    icon: 'edit',
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Edit Location', 'gutenberg-block-components'),
    onClick: function onClick() {
      return setShowingMap(false);
    }
  }];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["BlockControls"], {
    className: "toobar"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Toolbar"], {
    className: "toolbar__edit",
    controls: toolbarControls
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MapToolbarControls);

/***/ }),

/***/ "./block-components/gb-components/build-module/map/save.js":
/*!*****************************************************************!*\
  !*** ./block-components/gb-components/build-module/map/save.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Save Component.
 *
 * @param {Object} props Props.
 *
 * @return {*}
 */

var Save = function Save(_ref) {
  var attributes = _ref.attributes;
  var mapQuery = attributes.mapQuery,
      mapApiKey = attributes.mapApiKey,
      mapZoomLevel = attributes.mapZoomLevel,
      mapHeight = attributes.mapHeight;

  if (!mapQuery || !mapApiKey) {
    return null;
  }

  var mapSrc = isNaN(parseInt(mapZoomLevel)) ? "https://www.google.com/maps/embed/v1/place?key=".concat(mapApiKey, "&q=").concat(encodeURI(mapQuery)) : "https://www.google.com/maps/embed/v1/place?key=".concat(mapApiKey, "&q=").concat(encodeURI(mapQuery), "&zoom=").concat(mapZoomLevel);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "gbc-map gbc-active"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("iframe", {
    title: "map-location",
    key: "map-location",
    src: mapSrc,
    width: "100%",
    height: mapHeight,
    frameBorder: "0",
    allowFullScreen: ""
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./block-components/gb-components/build-module/plugin-card/functions.js":
/*!******************************************************************************!*\
  !*** ./block-components/gb-components/build-module/plugin-card/functions.js ***!
  \******************************************************************************/
/*! exports provided: fetchPlugins, decodeHtmlSpecialChars, objectToQueryParams, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPlugins", function() { return fetchPlugins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeHtmlSpecialChars", function() { return decodeHtmlSpecialChars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectToQueryParams", function() { return objectToQueryParams; });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./block-components/gb-components/node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var jsonp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonp */ "./block-components/gb-components/node_modules/jsonp/index.js");
/* harmony import */ var jsonp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonp__WEBPACK_IMPORTED_MODULE_1__);

/**
 * External dependencies
 */


/**
 * Fetches the plugins info based on query and set data.
 *
 * @param {Object} attributes Attributes passes.
 * @param {Object} stateHandles Contains props handlers.
 *
 * @return {void}
 */

var fetchPlugins = function fetchPlugins(attributes, stateHandles) {
  var pluginCardQuery = attributes.pluginCardQuery;
  var setIsFetching = stateHandles.setIsFetching,
      setShowApiError = stateHandles.setShowApiError,
      setHasFetched = stateHandles.setHasFetched,
      setShowPluginsList = stateHandles.setShowPluginsList,
      setPluginsList = stateHandles.setPluginsList;
  var pluginsApiUrl = 'https://api.wordpress.org/plugins/info/1.1';
  var apiArgs = {
    action: 'query_plugins',
    timeout: 15,
    request: {
      per_page: 10,
      // 250 is the max allowed
      search: pluginCardQuery,
      fields: {
        sections: false,
        description: false,
        homepage: false,
        ratings: false,
        tested: false,
        requires: false,
        downloaded: false,
        tags: false,
        donate_link: false,
        icons: true,
        active_installs: true,
        downloadlink: true,
        rating: true,
        short_description: true
      }
    }
  };
  setIsFetching(true);
  jsonp__WEBPACK_IMPORTED_MODULE_1___default()("".concat(pluginsApiUrl, "?").concat(objectToQueryParams(apiArgs)), function (error, response) {
    if (error) {
      setShowApiError(true);
      setIsFetching(false);
    } else {
      setIsFetching(false);
      setShowApiError(false);
      setHasFetched(true);
      setShowPluginsList(true);
      setPluginsList(response.plugins);
    }
  });
};
/**
 * Decodes special characters and returns decoded string.
 *
 * @param {String} text Text that is to be decoded.
 *
 * @return {String}
 */

var decodeHtmlSpecialChars = function decodeHtmlSpecialChars(text) {
  var parser = new DOMParser();
  var dom = parser.parseFromString('<!doctype html><body>' + text, 'text/html');
  var decodedString = dom.body.textContent;
  return decodedString;
};
/**
 * Converts JS Object to URL query parameters.
 *
 * @param {Object} object JS Object.
 * @param {string} prefix Prefix.
 *
 * @return {string} String.
 */

var objectToQueryParams = function objectToQueryParams(object, prefix) {
  var str = [];
  var key;

  for (key in object) {
    if (object.hasOwnProperty(key)) {
      var k = prefix ? "".concat(prefix, "[").concat(key, "]") : key,
          value = object[key];
      str.push(null !== value && 'object' === Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(value) ? objectToQueryParams(value, k) : encodeURIComponent(k) + '=' + encodeURIComponent(value));
    }
  }

  return str.join('&');
};
var Functions = {
  fetchPlugins: fetchPlugins,
  decodeHtmlSpecialChars: decodeHtmlSpecialChars
};
/* harmony default export */ __webpack_exports__["default"] = (Functions);

/***/ }),

/***/ "./block-components/gb-components/build-module/plugin-card/index.js":
/*!**************************************************************************!*\
  !*** ./block-components/gb-components/build-module/plugin-card/index.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./block-components/gb-components/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _plugin_card_render__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plugin-card-render */ "./block-components/gb-components/build-module/plugin-card/plugin-card-render.js");
/* harmony import */ var _plugin_card_toolbar_controls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./plugin-card-toolbar-controls */ "./block-components/gb-components/build-module/plugin-card/plugin-card-toolbar-controls.js");
/* harmony import */ var _plugin_card_inspector_controls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./plugin-card-inspector-controls */ "./block-components/gb-components/build-module/plugin-card/plugin-card-inspector-controls.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./save */ "./block-components/gb-components/build-module/plugin-card/save.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./functions */ "./block-components/gb-components/build-module/plugin-card/functions.js");


/**
 * PluginCard component.
 */

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */






/**
 * PluginCard component
 *
 * @param {Object} props Component props.
 *
 * @return {*}
 */

var PluginCard = function PluginCard(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var pluginCardQuery = attributes.pluginCardQuery,
      pluginCardSelectedPluginData = attributes.pluginCardSelectedPluginData;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isFetching = _useState2[0],
      setIsFetching = _useState2[1];

  var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      showApiError = _useState4[0],
      setShowApiError = _useState4[1];

  var _useState5 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      hasFetched = _useState6[0],
      setHasFetched = _useState6[1];

  var _useState7 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      _useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
      showPluginsList = _useState8[0],
      setShowPluginsList = _useState8[1];

  var _useState9 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState10 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState9, 2),
      showSelectedPlugin = _useState10[0],
      setShowSelectedPlugin = _useState10[1];

  var _useState11 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState12 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState11, 2),
      pluginsList = _useState12[0],
      setPluginsList = _useState12[1];

  var fetchPluginsData = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.debounce(_functions__WEBPACK_IMPORTED_MODULE_10__["fetchPlugins"], 500);
  /**
   * Fetch plugin info based on the query.
   *
   * @param {Object} event Event object.
   *
   * @return {void}
   */


  var fetchPluginsInfo = function fetchPluginsInfo(event) {
    var keyCode = event.keyCode || event.which;

    if (pluginCardQuery && _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5__["ENTER"] === keyCode) {
      var stateHandles = {
        setShowApiError: setShowApiError,
        setIsFetching: setIsFetching,
        setHasFetched: setHasFetched,
        setShowPluginsList: setShowPluginsList,
        setPluginsList: setPluginsList
      };
      fetchPluginsData(attributes, stateHandles);
    }
  };
  /**
   * Update plugins data that was selected.
   *
   * @param {Object} pluginData Selected plugin data
   *
   * @return {void}
   */


  var setPluginInfo = function setPluginInfo(pluginData) {
    if (pluginData) {
      setShowSelectedPlugin(true);
      setAttributes({
        pluginCardSelectedPluginData: pluginData
      });
    }
  };
  /**
   * Update plugins data that was selected.
   *
   * @return {void}
   */


  var clearPluginsList = function clearPluginsList() {
    setHasFetched(false);
    setShowPluginsList(false);
    setAttributes({
      pluginCardQuery: ''
    });
  }; // Show plugin card.


  if (!lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isEmpty(pluginCardSelectedPluginData) && showSelectedPlugin) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "gbc-plugin-card"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_plugin_card_render__WEBPACK_IMPORTED_MODULE_6__["default"], {
      attributes: attributes,
      pluginData: pluginCardSelectedPluginData
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_plugin_card_toolbar_controls__WEBPACK_IMPORTED_MODULE_7__["default"], {
      stateHandles: {
        setShowSelectedPlugin: setShowSelectedPlugin
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_plugin_card_inspector_controls__WEBPACK_IMPORTED_MODULE_8__["default"], {
      attributes: attributes,
      setAttributes: setAttributes
    }));
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "gbc-plugin-card"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Placeholder"], {
    key: "plugin-card-placeholder",
    icon: "media-interactive",
    className: "placeholder",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Plugin Card', 'gutenberg-block-components'),
    instructions: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Look for a plugin to display...', 'gutenberg-block-components')
  }, showApiError && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    className: "placeholder__api-error"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Something went wrong, please try again.', 'gutenberg-block-components')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "placeholder__input-wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TextControl"], {
    key: "map-query-input",
    className: "placeholder__input components-text-control__input",
    value: 'undefined' === typeof pluginCardQuery ? '' : pluginCardQuery,
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Type in a plugin name...', 'gutenberg-block-components'),
    onChange: function onChange(newQuery) {
      return setAttributes({
        pluginCardQuery: newQuery
      });
    },
    onKeyPress: fetchPluginsInfo
  }), isFetching && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Spinner"], null), hasFetched && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Dashicon"], {
    icon: "no-alt",
    className: "placeholder__clear-list",
    onClick: clearPluginsList
  })), showPluginsList && !lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isEmpty(pluginsList) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "plugins-list-wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("ul", {
    className: "plugins-list"
  }, Object.keys(pluginsList).map(function (index) {
    var pluginData = pluginsList[index];
    var pluginIcon = ''; // sets the plugin icon.

    if (pluginData.icons['2x']) {
      pluginIcon = pluginData.icons['2x'];
    }

    if (pluginData.icons['1x']) {
      pluginIcon = pluginData.icons['1x'];
    }

    if (pluginData.icons.default) {
      pluginIcon = pluginData.icons.default;
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      key: index,
      className: "plugins-list__item",
      onClick: function onClick() {
        setPluginInfo(pluginData);
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
      className: "plugins-list__item-image",
      alt: Object(_functions__WEBPACK_IMPORTED_MODULE_10__["decodeHtmlSpecialChars"])(pluginData.name),
      src: pluginIcon
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
      className: "plugins-list__item-name"
    }, Object(_functions__WEBPACK_IMPORTED_MODULE_10__["decodeHtmlSpecialChars"])(pluginData.name)));
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_plugin_card_inspector_controls__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }));
};

PluginCard.Content = _save__WEBPACK_IMPORTED_MODULE_9__["default"];
/* harmony default export */ __webpack_exports__["default"] = (PluginCard);

/***/ }),

/***/ "./block-components/gb-components/build-module/plugin-card/plugin-card-inspector-controls.js":
/*!***************************************************************************************************!*\
  !*** ./block-components/gb-components/build-module/plugin-card/plugin-card-inspector-controls.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);

/**
 * PluginCardInspectorControls component.
 */

/**
 * WordPress dependencies
 */




/**
 * PluginCardInspectorControls component
 *
 * @param {Object} props Component props.
 *
 * @return {JSX}
 */

var PluginCardInspectorControls = function PluginCardInspectorControls(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var pluginCardPrimaryColor = attributes.pluginCardPrimaryColor; // contains default text color

  var defaultPluginCardColor = [{
    name: 'Default',
    color: '#0071a1'
  }];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Panel"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
    className: "settings",
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Plugin Card Settings', 'gutenberg-block-components')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "settings__label"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Select Color:', 'gutenberg-block-components'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ColorPalette"], {
    className: "settings__primary-color",
    colors: defaultPluginCardColor,
    value: pluginCardPrimaryColor,
    onChange: function onChange(newColor) {
      return setAttributes({
        pluginCardPrimaryColor: newColor
      });
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (PluginCardInspectorControls);

/***/ }),

/***/ "./block-components/gb-components/build-module/plugin-card/plugin-card-render.js":
/*!***************************************************************************************!*\
  !*** ./block-components/gb-components/build-module/plugin-card/plugin-card-render.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions */ "./block-components/gb-components/build-module/plugin-card/functions.js");

/**
 * PluginCardRender component.
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/**
 * PluginCardRender component
 *
 * @param {Object} props Component props.
 *
 * @return {JSX}
 */

var PluginCardRender = function PluginCardRender(_ref) {
  var attributes = _ref.attributes,
      pluginData = _ref.pluginData;
  var icons = pluginData.icons,
      name = pluginData.name,
      author = pluginData.author,
      shortDescription = pluginData.short_description,
      activeInstalls = pluginData.active_installs,
      version = pluginData.version,
      tested = pluginData.tested,
      downloadLink = pluginData.download_link;
  var pluginCardPrimaryColor = attributes.pluginCardPrimaryColor;
  var bgColorStyle = {
    backgroundColor: pluginCardPrimaryColor
  };
  var fontColorStyle = {
    color: pluginCardPrimaryColor
  };
  /**
   * Get appropriate icon src.
   *
   * @return {string} Icon source.
   */

  var getIcon = function getIcon() {
    var icon = '';

    if (icons['1x']) {
      icon = icons['1x'];
    }

    if (icons['2x']) {
      icon = icons['2x'];
    }

    if (icons.default) {
      icon = icons.default;
    }

    return icon;
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "single-plugin-card"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    className: "single-plugin-card__img",
    src: getIcon(),
    alt: name
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
    className: "single-plugin-card__name"
  }, Object(_functions__WEBPACK_IMPORTED_MODULE_2__["decodeHtmlSpecialChars"])(name)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h5", {
    className: "single-plugin-card__author",
    dangerouslySetInnerHTML: {
      __html: author
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "single-plugin-card__details"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "single-plugin-card__description"
  }, Object(_functions__WEBPACK_IMPORTED_MODULE_2__["decodeHtmlSpecialChars"])(shortDescription)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "plugin-stats__header"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Plugin Stats', 'gutenberg-block-components')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "plugin-stats"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "plugin-stats__installs"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    style: fontColorStyle,
    className: "plugin-stats__installs--value"
  }, activeInstalls + '+'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "plugin-stats__installs--text"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('active installs', 'gutenberg-block-components'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "plugin-stats__version"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    style: fontColorStyle,
    className: "plugin-stats__installs--value"
  }, version), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "plugin-stats__installs--text"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('version', 'gutenberg-block-components'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "plugin-stats__tested"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    style: fontColorStyle,
    className: "plugin-stats__installs--value"
  }, tested), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "plugin-stats__installs--text"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('tested up to', 'gutenberg-block-components'))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    style: bgColorStyle,
    className: "single-plugin-card__download",
    href: downloadLink
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Download', 'gutenberg-block-components')));
};

/* harmony default export */ __webpack_exports__["default"] = (PluginCardRender);

/***/ }),

/***/ "./block-components/gb-components/build-module/plugin-card/plugin-card-toolbar-controls.js":
/*!*************************************************************************************************!*\
  !*** ./block-components/gb-components/build-module/plugin-card/plugin-card-toolbar-controls.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);

/**
 * PluginCardToolbarControls component.
 */

/**
 * WordPress dependencies
 */




/**
 * PluginCardToolbarControls component
 *
 * @param {Object} props Component props.
 *
 * @return {JSX}
 */

var PluginCardToolbarControls = function PluginCardToolbarControls(_ref) {
  var stateHandles = _ref.stateHandles;
  var setShowSelectedPlugin = stateHandles.setShowSelectedPlugin;
  /**
   * Toolbar controls
   */

  var toolbarControls = [{
    icon: 'edit',
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Edit Location', 'gutenberg-block-components'),
    onClick: function onClick() {
      return setShowSelectedPlugin(false);
    }
  }];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["BlockControls"], {
    className: "toolbar"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Toolbar"], {
    className: "toolbar__edit",
    controls: toolbarControls
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PluginCardToolbarControls);

/***/ }),

/***/ "./block-components/gb-components/build-module/plugin-card/save.js":
/*!*************************************************************************!*\
  !*** ./block-components/gb-components/build-module/plugin-card/save.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


/**
 * Save Component.
 *
 * @param {Object} props Props.
 *
 * @return {*}
 */

var Save = function Save(_ref) {
  var attributes = _ref.attributes;
  var pluginCardSelectedPluginData = attributes.pluginCardSelectedPluginData,
      pluginCardPrimaryColor = attributes.pluginCardPrimaryColor;
  var bgColorStyle = {
    backgroundColor: "".concat(pluginCardPrimaryColor)
  };
  var fontColorStyle = {
    color: "".concat(pluginCardPrimaryColor)
  };
  var icons = pluginCardSelectedPluginData.icons,
      name = pluginCardSelectedPluginData.name,
      author = pluginCardSelectedPluginData.author,
      shortDescription = pluginCardSelectedPluginData.short_description,
      activeInstalls = pluginCardSelectedPluginData.active_installs,
      version = pluginCardSelectedPluginData.version,
      tested = pluginCardSelectedPluginData.tested,
      downloadLink = pluginCardSelectedPluginData.download_link;
  /**
   * Get appropriate icon src.
   *
   * @return {string} Icon source.
   */

  var getIcon = function getIcon() {
    var icon = '';

    if (icons['1x']) {
      icon = icons['1x'];
    }

    if (icons['2x']) {
      icon = icons['2x'];
    }

    if (icons.default) {
      icon = icons.default;
    }

    return icon;
  }; // If plugin data isn't set.


  if (lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isEmpty(pluginCardSelectedPluginData)) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "gbc-plugin-card gbc-active"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "single-plugin-card"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    className: "single-plugin-card__img",
    src: getIcon(),
    alt: name
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
    className: "single-plugin-card__name"
  }, name), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h5", {
    className: "single-plugin-card__author",
    dangerouslySetInnerHTML: {
      __html: author
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "single-plugin-card__details"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "single-plugin-card__description"
  }, shortDescription), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "plugin-stats__header"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Plugin Stats', 'gutenberg-block-components')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "plugin-stats"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "plugin-stats__installs"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    style: fontColorStyle,
    className: "plugin-stats__installs--value"
  }, activeInstalls + '+'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "plugin-stats__installs--text"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('active installs', 'gutenberg-block-components'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "plugin-stats__version"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    style: fontColorStyle,
    className: "plugin-stats__installs--value"
  }, version), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "plugin-stats__installs--text"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('version', 'gutenberg-block-components'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "plugin-stats__tested"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    style: fontColorStyle,
    className: "plugin-stats__installs--value"
  }, tested), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "plugin-stats__installs--text"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('tested up to', 'gutenberg-block-components'))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    className: "single-plugin-card__download",
    href: downloadLink,
    style: bgColorStyle
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Download', 'gutenberg-block-components'))));
};

/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./block-components/gb-components/build-module/post-card/buttons.js":
/*!**************************************************************************!*\
  !*** ./block-components/gb-components/build-module/post-card/buttons.js ***!
  \**************************************************************************/
/*! exports provided: ModalHandlerButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalHandlerButton", function() { return ModalHandlerButton; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);

/**
 * WordPress dependencies
 */



/**
 * Modal Handler Button.
 *
 * @param {Object} setOpen setOpen function.
 *
 * @return {*}
 */

var ModalHandlerButton = function ModalHandlerButton(_ref) {
  var setOpen = _ref.setOpen;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "gbc-post-card__select-btn",
    isSecondary: true,
    onClick: function onClick() {
      return setOpen(true);
    }
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Select Post', 'gutenberg-block-components'));
};

/***/ }),

/***/ "./block-components/gb-components/build-module/post-card/functions.js":
/*!****************************************************************************!*\
  !*** ./block-components/gb-components/build-module/post-card/functions.js ***!
  \****************************************************************************/
/*! exports provided: fetchPostData, search, handleSelectPost, isSelectedPost, renderPosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPostData", function() { return fetchPostData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "search", function() { return search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleSelectPost", function() { return handleSelectPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSelectedPost", function() { return isSelectedPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderPosts", function() { return renderPosts; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);

/**
 * External dependencies
 */


var DEFAULT_LIST_QUERY = {
  _embed: '',
  per_page: 20
};
/**
 * WordPress dependencies
 */





/**
 * Fetch posts data
 *
 * @param {Object} postCardQuery postCardQuery.
 * @param {Object} setSearchResults setSearchResults function.
 * @param {Object} setFetching setFetching function.
 * @param {Object} setError setError function.
 *
 * @return {void}
 */

var fetchPostData = function fetchPostData(postCardQuery, setSearchResults, setFetching, setError) {
  // Adding a 's' as as suffix as its requiring for fetching default post type.
  var postType = 'post' === postCardQuery.postType ? 'posts' : postCardQuery.postType; // return '';

  setFetching(true);
  DEFAULT_LIST_QUERY.per_page = postCardQuery.noOfPosts;
  _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
    path: Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_4__["addQueryArgs"])("".concat(postCardQuery.rootURL, "/wp/v2/").concat(postType), DEFAULT_LIST_QUERY)
  }).then(function (response) {
    setFetching(false);

    if (response) {
      /**
       * Using two different values for postResults, because in WordPress environment we get the result from the object response
       * and outside WordPress from response.data
       */
      var postResults = 'undefined' !== typeof wp ? response : response.data;
      setSearchResults(postResults);
    } else {
      setError(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Post not found', 'gutenberg-block-components'));
    }
  });
};
/**
 * Function to search categories.
 *
 * @param {string} searchQuery Search term.
 * @param {Object} postCardQuery postCardQuery.
 * @param {Object} setSearchResults setSearchResults function.
 * @param {Object} setFetching setFetching function.
 * @param {Object} setError setError function.
 *
 * @return {null}
 */

var search = function search(searchQuery, postCardQuery, setSearchResults, setFetching, setError) {
  if (!searchQuery) {
    return null;
  }

  DEFAULT_LIST_QUERY.search = searchQuery;
  fetchPostData(postCardQuery, setSearchResults, setFetching, setError);
};
/**
 * Handle select post event.
 *
 * @param {Object} setAttributes setAttributes function.
 * @param {Object} targetPost Target Post.
 * @param {boolean} isSelect Is the post being selection or deselected.
 *
 * @return {void}
 */

var handleSelectPost = function handleSelectPost(setAttributes, targetPost, isSelect) {
  // If isSelect is true add the post, else remove it.
  if (isSelect) {
    setAttributes({
      postCardSelectedPost: targetPost
    });
  } else {
    setAttributes({
      postCardSelectedPost: {}
    });
  }
};
/**
 * Checks if the post is already selected.
 *
 * @param {integer} postId Post Id.
 * @param {Object} postCardSelectedPost Selected Post.
 *
 * @return {boolean} Returns true if that post is already selected.
 */

var isSelectedPost = function isSelectedPost(postId, postCardSelectedPost) {
  return postId === postCardSelectedPost.id;
};
/**
 * Render post content.
 *
 * @param {array} posts Posts.
 * @param {Object} setAttributes setAttributes function.
 * @param {Object} attributes Attributes.
 *
 * @return {string|null|*}
 */

var renderPosts = function renderPosts(posts, setAttributes, attributes) {
  var postCardSelectedPost = attributes.postCardSelectedPost; // Disable eslint for the check of undefined.

  /* eslint-disable */

  if (undefined === posts || !Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isArray"])(posts) && !posts.length) {
    return null;
  }
  /* eslint-enable */


  if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isArray"])(posts) && !posts.length) {
    return Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Posts not found', 'gutenberg-block-components');
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, posts.map(function (post) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      key: post.id,
      className: "gbc-post-card__wrap"
    }, !isSelectedPost(post.id, postCardSelectedPost) ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "gbc-post-card__content",
      role: "button",
      tabIndex: "0",
      onClick: function onClick() {
        return handleSelectPost(setAttributes, post, true);
      },
      onKeyPress: function onKeyPress() {
        return handleSelectPost(setAttributes, post, true);
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h4", {
      dangerouslySetInnerHTML: {
        __html: post.title.rendered
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["Dashicon"], {
      icon: "plus"
    }))) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      role: "button",
      tabIndex: "0",
      className: "gbc-post-card__content gbc-post-card__selected",
      onClick: function onClick() {
        return handleSelectPost(setAttributes, post, false);
      },
      onKeyPress: function onKeyPress() {
        return handleSelectPost(setAttributes, post, false);
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h4", {
      dangerouslySetInnerHTML: {
        __html: post.title.rendered
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["Dashicon"], {
      icon: "minus"
    }))));
  }));
};

/***/ }),

/***/ "./block-components/gb-components/build-module/post-card/index.js":
/*!************************************************************************!*\
  !*** ./block-components/gb-components/build-module/post-card/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./block-components/gb-components/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modal_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-view */ "./block-components/gb-components/build-module/post-card/modal-view.js");
/* harmony import */ var _post_view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post-view */ "./block-components/gb-components/build-module/post-card/post-view.js");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./buttons */ "./block-components/gb-components/build-module/post-card/buttons.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./functions */ "./block-components/gb-components/build-module/post-card/functions.js");


/**
 * Post Card component.
 *
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */





/**
 * PostCard component
 *
 * @param {Object} props Component props.
 *
 * @return {*}
 */

var PostCard = function PostCard(props) {
  var _props$attributes = props.attributes,
      postCardSelectedPost = _props$attributes.postCardSelectedPost,
      postCardDefaultContent = _props$attributes.postCardDefaultContent,
      postCardShowFeaturedImg = _props$attributes.postCardShowFeaturedImg;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isOpen = _useState2[0],
      setOpen = _useState2[1];

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "gbc-post-card"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Select Posts', 'gutenberg-block-components'),
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_buttons__WEBPACK_IMPORTED_MODULE_7__["ModalHandlerButton"], {
    setOpen: setOpen
  }), isOpen && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Select Posts', 'gutenberg-block-components'),
    onRequestClose: function onRequestClose() {
      return setOpen(false);
    },
    className: "gbc-post-card__modal"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_modal_view__WEBPACK_IMPORTED_MODULE_5__["default"], {
    attributes: props.attributes,
    setAttributes: props.setAttributes
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "gbc-post-card__select-btn-wrap"
  }, Object.keys(postCardSelectedPost).length ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    isSecondary: true,
    className: "gbc-post-card__clear-selection",
    onClick: function onClick() {
      return Object(_functions__WEBPACK_IMPORTED_MODULE_8__["handleSelectPost"])(props.setAttributes, {}, false);
    }
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Clear Selection', 'gutenberg-block-components')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    isSecondary: true,
    className: "gbc-post-card__select-btn",
    onClick: function onClick() {
      return setOpen(false);
    }
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Select', 'gutenberg-block-components'))) : '')), Object.keys(postCardSelectedPost).length ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Show Featured Image', 'gutenberg-block-components'),
    className: "gbc-post-card__toggle-img",
    checked: !!postCardShowFeaturedImg,
    onChange: function onChange() {
      return props.setAttributes({
        postCardShowFeaturedImg: !postCardShowFeaturedImg
      });
    }
  }) : '')), postCardDefaultContent ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_post_view__WEBPACK_IMPORTED_MODULE_6__["default"], {
    post: postCardSelectedPost,
    showFeaturedImg: postCardShowFeaturedImg
  }) : props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (PostCard);

/***/ }),

/***/ "./block-components/gb-components/build-module/post-card/modal-view.js":
/*!*****************************************************************************!*\
  !*** ./block-components/gb-components/build-module/post-card/modal-view.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./block-components/gb-components/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functions */ "./block-components/gb-components/build-module/post-card/functions.js");
/* harmony import */ var _search_result__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-result */ "./block-components/gb-components/build-module/post-card/search-result.js");


/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



/**
 * Modal View
 *
 * @param {Object} props Props.
 *
 * @return {*}
 */

var ModalView = function ModalView(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var postCardQuery = attributes.postCardQuery;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      fetching = _useState2[0],
      setFetching = _useState2[1];

  var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  var _useState5 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      searchQuery = _useState6[0],
      setSearchQuery = _useState6[1];

  var _useState7 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
      searchResults = _useState8[0],
      setSearchResults = _useState8[1];

  var debounceSearch = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["debounce"])(_functions__WEBPACK_IMPORTED_MODULE_5__["search"], 500);
  /**
   * Updates selected value for the params.
   *
   * @param {string} newValue Updated param value.
   * @param {string} postQuery postCardQuery.
   *
   * @return {void}
   */

  var setSelection = function setSelection(newValue, postQuery) {
    debounceSearch(newValue, postQuery, setSearchResults, setFetching, setError);
    setSearchQuery(newValue);
  };

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    Object(_functions__WEBPACK_IMPORTED_MODULE_5__["fetchPostData"])(postCardQuery, setSearchResults, setFetching, setError);
  }, []);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "gbc-post-card__modal-view"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "gbc-post-card__filters"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Search Posts', 'gutenberg-block-components'),
    className: "gbc-post-card__search-box",
    value: searchQuery,
    onChange: function onChange(value) {
      return setSelection(value, postCardQuery);
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "gbc-post-card__post-wrap"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "gbc-post-card__post-list"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_search_result__WEBPACK_IMPORTED_MODULE_6__["default"], {
    error: error,
    fetching: fetching,
    posts: searchResults,
    setAttributes: setAttributes,
    attributes: attributes
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ModalView);

/***/ }),

/***/ "./block-components/gb-components/build-module/post-card/post-view.js":
/*!****************************************************************************!*\
  !*** ./block-components/gb-components/build-module/post-card/post-view.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */


/**
 * Post View
 *
 * @param {Object} props Props.
 *
 * @return {*}
 */

var PostView = function PostView(_ref) {
  var post = _ref.post,
      showFeaturedImg = _ref.showFeaturedImg;

  if (!Object.keys(post).length) {
    return Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Please select a post', 'gutenberg-block-components');
  }

  var featuredMediaSrc = '';
  var altText = '';

  if (post._embedded['wp:featuredmedia'] && showFeaturedImg) {
    featuredMediaSrc = post._embedded['wp:featuredmedia']['0'].source_url;
    altText = post._embedded['wp:featuredmedia']['0'].alt_text;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "gbc-post-content__wrap"
  }, featuredMediaSrc ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    className: "gbc-post-content__img",
    src: featuredMediaSrc,
    alt: altText
  }) : '', Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    className: "gbc-post-content__title-link",
    href: post.link
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    dangerouslySetInnerHTML: {
      __html: post.title.rendered
    }
  })), post.excerpt.rendered ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "gbc-post-content__excerpt",
    dangerouslySetInnerHTML: {
      __html: post.excerpt.rendered
    }
  }) : '', Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    className: "gbc-post-content__read-more",
    href: post.link
  }), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Read more...', 'gutenberg-block-components'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", null));
};

/* harmony default export */ __webpack_exports__["default"] = (PostView);

/***/ }),

/***/ "./block-components/gb-components/build-module/post-card/search-result.js":
/*!********************************************************************************!*\
  !*** ./block-components/gb-components/build-module/post-card/search-result.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "./block-components/gb-components/build-module/post-card/functions.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);

/**
 * Internal dependencies
 */


/**
 * WordPress dependencies
 */


/**
 * Search Results.
 *
 * @param {Object} props Props.
 *
 * @return {*}
 */

var SearchResult = function SearchResult(_ref) {
  var fetching = _ref.fetching,
      error = _ref.error,
      posts = _ref.posts,
      setAttributes = _ref.setAttributes,
      attributes = _ref.attributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, fetching && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Loading...', 'gutenberg-block-components')), !fetching && !error && Object(_functions__WEBPACK_IMPORTED_MODULE_1__["renderPosts"])(posts, setAttributes, attributes), error && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, error));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchResult);

/***/ }),

/***/ "./block-components/gb-components/build-module/post-selection/buttons.js":
/*!*******************************************************************************!*\
  !*** ./block-components/gb-components/build-module/post-selection/buttons.js ***!
  \*******************************************************************************/
/*! exports provided: ModalHandlerButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalHandlerButton", function() { return ModalHandlerButton; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);

/**
 * WordPress dependencies
 */



/**
 * Modal Handler Button.
 *
 * @param {Object} setOpen setOpen function.
 *
 * @return {*}
 */

var ModalHandlerButton = function ModalHandlerButton(_ref) {
  var setOpen = _ref.setOpen;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "gbc-post-selection__select-btn",
    isSecondary: true,
    onClick: function onClick() {
      return setOpen(true);
    }
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Select Post', 'gutenberg-block-components'));
};

/***/ }),

/***/ "./block-components/gb-components/build-module/post-selection/functions.js":
/*!*********************************************************************************!*\
  !*** ./block-components/gb-components/build-module/post-selection/functions.js ***!
  \*********************************************************************************/
/*! exports provided: fetchPostData, search, handleSelectPost, isSelectedPost, renderPosts, handleRemovePost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPostData", function() { return fetchPostData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "search", function() { return search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleSelectPost", function() { return handleSelectPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSelectedPost", function() { return isSelectedPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderPosts", function() { return renderPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleRemovePost", function() { return handleRemovePost; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);

/**
 * External dependencies
 */


var DEFAULT_LIST_QUERY = {
  per_page: 20
};
/**
 * WordPress dependencies
 */





/**
 * Fetch posts data
 *
 * @param {Object} postSelectionQuery postSelectionQuery.
 * @param {Object} setSearchResults setSearchResults function.
 * @param {Object} setFetching setFetching function.
 * @param {Object} setError setError function.
 *
 * @return {void}
 */

var fetchPostData = function fetchPostData(postSelectionQuery, setSearchResults, setFetching, setError) {
  // Adding a 's' as as suffix as its requiring for fetching default post type.
  var postType = 'post' === postSelectionQuery.postType ? 'posts' : postSelectionQuery.postType;
  setFetching(true);
  DEFAULT_LIST_QUERY.per_page = postSelectionQuery.noOfPosts;
  _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
    path: Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_4__["addQueryArgs"])("".concat(postSelectionQuery.rootURL, "/wp/v2/").concat(postType), DEFAULT_LIST_QUERY)
  }).then(function (response) {
    setFetching(false);

    if (response) {
      /**
       * We are using two different values for postResults here because,
       * in WordPress environment( wp object is available ), we get the result in 'response' object
       * However in storybook, we get it in response.data.
       */
      var postResults = 'undefined' !== typeof wp ? response : response.data;
      setSearchResults(postResults);
    } else {
      setError(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Post not found', 'gutenberg-block-components'));
    }
  });
};
/**
 * Function to search categories.
 *
 * @param {string} searchQuery Search term.
 * @param {Object} postSelectionQuery postSelectionQuery.
 * @param {Object} setSearchResults setSearchResults function.
 * @param {Object} setFetching setFetching function.
 * @param {Object} setError setError function.
 *
 * @return {void}
 */

var search = function search(searchQuery, postSelectionQuery, setSearchResults, setFetching, setError) {
  if (searchQuery) {
    DEFAULT_LIST_QUERY.search = searchQuery;
  }

  fetchPostData(postSelectionQuery, setSearchResults, setFetching, setError);
};
/**
 * Handle select post event.
 *
 * @param {array} postSelectionSelectedPosts Selected Posts.
 * @param {Object} setAttributes setAttributes function.
 * @param {Object} targetPost Target Post.
 *
 * @return {void}
 */

var handleSelectPost = function handleSelectPost(postSelectionSelectedPosts, setAttributes, targetPost) {
  var selectedPosts = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["extend"])([], postSelectionSelectedPosts);
  selectedPosts.push(targetPost);
  setAttributes({
    postSelectionSelectedPosts: selectedPosts
  });
};
/**
 * Checks if the post is already selected.
 *
 * @param {integer} postId Post Id.
 * @param {array} postSelectionSelectedPosts Selected Posts.
 *
 * @return {boolean} Returns true if that post is already selected.
 */

var isSelectedPost = function isSelectedPost(postId, postSelectionSelectedPosts) {
  var selectedPost = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["find"])(postSelectionSelectedPosts, function (post) {
    return postId === post.id;
  }); // Disable as the find function returns undefined on failure.

  /*eslint-disable*/

  return undefined !== selectedPost;
  /*eslint-enable*/
};
/**
 * Render post content.
 *
 * @param {array} posts Posts.
 * @param {Object} setAttributes setAttributes function.
 * @param {Object} attributes Attributes.
 *
 * @return {string|null|*}
 */

var renderPosts = function renderPosts(posts, setAttributes, attributes) {
  var postSelectionSelectedPosts = attributes.postSelectionSelectedPosts; // Disable eslint here, as adding a check here to ensure posts is not undefined.

  /* eslint-disable */

  if (undefined === posts || !Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isArray"])(posts) && !posts.length) {
    return null;
  }
  /* eslint-enable */


  if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isArray"])(posts) && !posts.length) {
    return Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Posts not found', 'gutenberg-block-components');
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, posts.map(function (post) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      key: post.id,
      className: "gbc-post-selection__wrap"
    }, !isSelectedPost(post.id, postSelectionSelectedPosts) ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "gbc-post-selection__content",
      role: "button",
      tabIndex: "0",
      onClick: function onClick() {
        return handleSelectPost(postSelectionSelectedPosts, setAttributes, post);
      },
      onKeyPress: function onKeyPress() {
        return handleSelectPost(postSelectionSelectedPosts, setAttributes, post);
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h4", {
      dangerouslySetInnerHTML: {
        __html: post.title.rendered
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["Dashicon"], {
      icon: "arrow-right-alt2"
    }))) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "gbc-post-selection__content gbc-post-selection__selected"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h4", {
      dangerouslySetInnerHTML: {
        __html: post.title.rendered
      }
    })));
  }));
};
/**
 * Handle remove post event.
 *
 * @param {array} postSelectionSelectedPosts Selected posts.
 * @param {Object} setAttributes setAttributes function.
 * @param {integer} selectedPostId Selected post id.
 *
 * @return {Object} updatedPostsSelection updatedPostSelection.
 */

var handleRemovePost = function handleRemovePost(postSelectionSelectedPosts, setAttributes, selectedPostId) {
  var updatedPostsSelection = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["reject"])(postSelectionSelectedPosts, {
    id: selectedPostId
  });
  setAttributes({
    postSelectionSelectedPosts: updatedPostsSelection
  });
  return updatedPostsSelection;
};

/***/ }),

/***/ "./block-components/gb-components/build-module/post-selection/index.js":
/*!*****************************************************************************!*\
  !*** ./block-components/gb-components/build-module/post-selection/index.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./block-components/gb-components/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modal_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-view */ "./block-components/gb-components/build-module/post-selection/modal-view.js");
/* harmony import */ var _post_view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post-view */ "./block-components/gb-components/build-module/post-selection/post-view.js");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./buttons */ "./block-components/gb-components/build-module/post-selection/buttons.js");


/**
 * Post Selection component.
 *
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */




/**
 * PostSelection component
 *
 * @param {Object} props Component props.
 *
 * @return {*}
 */

var PostSelection = function PostSelection(props) {
  var _props$attributes = props.attributes,
      postSelectionSelectedPosts = _props$attributes.postSelectionSelectedPosts,
      postSelectionDefaultContent = _props$attributes.postSelectionDefaultContent;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isOpen = _useState2[0],
      setOpen = _useState2[1];

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "gbc-post-selection"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Select Posts', 'gutenberg-block-components'),
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_buttons__WEBPACK_IMPORTED_MODULE_7__["ModalHandlerButton"], {
    setOpen: setOpen
  }), isOpen && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Select Posts', 'gutenberg-block-components'),
    onRequestClose: function onRequestClose() {
      return setOpen(false);
    },
    className: "gbc-post-selection__modal"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_modal_view__WEBPACK_IMPORTED_MODULE_5__["default"], {
    attributes: props.attributes,
    setAttributes: props.setAttributes
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "gbc-post-selection__select-btn-wrap"
  }, postSelectionSelectedPosts.length ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    isSecondary: true,
    className: "gbc-post-selection__clear-selection",
    onClick: function onClick() {
      return props.setAttributes({
        postSelectionSelectedPosts: []
      });
    }
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Clear Selection', 'gutenberg-block-components')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    isSecondary: true,
    className: "gbc-post-selection__select-btn",
    onClick: function onClick() {
      return setOpen(false);
    }
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Select', 'gutenberg-block-components'))) : '')))), postSelectionDefaultContent ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_post_view__WEBPACK_IMPORTED_MODULE_6__["default"], {
    posts: postSelectionSelectedPosts
  }) : props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (PostSelection);

/***/ }),

/***/ "./block-components/gb-components/build-module/post-selection/modal-view.js":
/*!**********************************************************************************!*\
  !*** ./block-components/gb-components/build-module/post-selection/modal-view.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./block-components/gb-components/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functions */ "./block-components/gb-components/build-module/post-selection/functions.js");
/* harmony import */ var _selected_posts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./selected-posts */ "./block-components/gb-components/build-module/post-selection/selected-posts.js");
/* harmony import */ var _search_result__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search-result */ "./block-components/gb-components/build-module/post-selection/search-result.js");


/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */




/**
 * Modal View
 *
 * @param {Object} props Props.
 *
 * @return {*}
 */

var ModalView = function ModalView(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var postSelectionQuery = attributes.postSelectionQuery,
      postSelectionSelectedPosts = attributes.postSelectionSelectedPosts;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      fetching = _useState2[0],
      setFetching = _useState2[1];

  var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  var _useState5 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      searchQuery = _useState6[0],
      setSearchQuery = _useState6[1];

  var _useState7 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
      searchResults = _useState8[0],
      setSearchResults = _useState8[1];

  var debounceSearch = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["debounce"])(_functions__WEBPACK_IMPORTED_MODULE_5__["search"], 500);
  /**
   * Updates selected value for the params.
   *
   * @param {string} newValue Updated param value.
   * @param {string} postQuery postSelectionQuery.
   *
   * @return {void}
   */

  var setSelection = function setSelection(newValue, postQuery) {
    debounceSearch(newValue, postQuery, setSearchResults, setFetching, setError);
    setSearchQuery(newValue);
  };

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    Object(_functions__WEBPACK_IMPORTED_MODULE_5__["fetchPostData"])(postSelectionQuery, setSearchResults, setFetching, setError);
  }, []);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "gbc-post-selection__modal-view"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "gbc-post-selection__filters"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Search Posts', 'gutenberg-block-components'),
    value: searchQuery,
    onChange: function onChange(value) {
      return setSelection(value, postSelectionQuery);
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "gbc-post-selection__post-wrap"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "gbc-post-selection__post-list"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_search_result__WEBPACK_IMPORTED_MODULE_7__["default"], {
    error: error,
    fetching: fetching,
    posts: searchResults,
    setAttributes: setAttributes,
    attributes: attributes
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "gbc-post-selection__selected-post"
  }, postSelectionSelectedPosts && postSelectionSelectedPosts.length ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_selected_posts__WEBPACK_IMPORTED_MODULE_6__["default"], {
    posts: postSelectionSelectedPosts,
    setAttributes: setAttributes,
    attributes: attributes
  }) : '')));
};

/* harmony default export */ __webpack_exports__["default"] = (ModalView);

/***/ }),

/***/ "./block-components/gb-components/build-module/post-selection/post-view.js":
/*!*********************************************************************************!*\
  !*** ./block-components/gb-components/build-module/post-selection/post-view.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);

/**
 * WordPress dependencies
 */


/**
 * External dependencies
 */


/**
 * Post View
 *
 * @param {Object} props Props.
 *
 * @return {*}
 */

var PostView = function PostView(_ref) {
  var posts = _ref.posts;

  if (!Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isArray"])(posts) && !posts.length) {
    return null;
  }

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isArray"])(posts) && !posts.length) {
    return Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Please select some posts', 'gutenberg-block-components');
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, posts.map(function (post) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      key: post.id,
      className: "gbc-post-content__wrap"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      className: "gbc-post-content__link",
      href: post.link,
      dangerouslySetInnerHTML: {
        __html: post.title.rendered
      }
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PostView);

/***/ }),

/***/ "./block-components/gb-components/build-module/post-selection/search-result.js":
/*!*************************************************************************************!*\
  !*** ./block-components/gb-components/build-module/post-selection/search-result.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "./block-components/gb-components/build-module/post-selection/functions.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);

/**
 * Internal dependencies
 */


/**
 * WordPress dependencies
 */


/**
 * Search Results.
 *
 * @param {Object} props Props.
 *
 * @return {*}
 */

var SearchResult = function SearchResult(_ref) {
  var fetching = _ref.fetching,
      error = _ref.error,
      posts = _ref.posts,
      setAttributes = _ref.setAttributes,
      attributes = _ref.attributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, fetching && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Loading...', 'gutenberg-block-components')), !fetching && !error && Object(_functions__WEBPACK_IMPORTED_MODULE_1__["renderPosts"])(posts, setAttributes, attributes), error && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, error));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchResult);

/***/ }),

/***/ "./block-components/gb-components/build-module/post-selection/selected-posts.js":
/*!**************************************************************************************!*\
  !*** ./block-components/gb-components/build-module/post-selection/selected-posts.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions */ "./block-components/gb-components/build-module/post-selection/functions.js");

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/**
 * Selected posts.
 *
 * @param {Object} props Props.
 *
 * @return {*}
 */

var SelectedPosts = function SelectedPosts(_ref) {
  var posts = _ref.posts,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;

  if (!posts.length) {
    return null;
  }

  var postSelectionSelectedPosts = attributes.postSelectionSelectedPosts;
  return posts.map(function (post) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      key: post.id,
      className: "gbc-post-selection__wrap"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      className: "gbc-post-selected__btn",
      onClick: function onClick() {
        return Object(_functions__WEBPACK_IMPORTED_MODULE_2__["handleRemovePost"])(postSelectionSelectedPosts, setAttributes, post.id);
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "gbc-post-selected__content"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "gbc-post-selected__title"
    }, post.title.rendered), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "gbc-post-selected__icon"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Dashicon"], {
      icon: "no-alt"
    })))));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SelectedPosts);

/***/ }),

/***/ "./block-components/gb-components/build-module/progressbar/circle-bar.js":
/*!*******************************************************************************!*\
  !*** ./block-components/gb-components/build-module/progressbar/circle-bar.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./block-components/gb-components/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */


/**
 * Circular bar.
 *
 * @param {Object} props Props
 *
 * @return {*}
 */

var CircleBar = function CircleBar(_ref) {
  var percent = _ref.percent,
      progressThickness = _ref.progressThickness,
      progressColor = _ref.progressColor;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      newPercentVal = _useState2[0],
      setNewPercentVal = _useState2[1];

  var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      isVisible = _useState4[0],
      setIsVisible = _useState4[1];

  var offSetVal = 339.292 * (1 - newPercentVal / 100);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setTimeout(function () {
      setNewPercentVal(percent);
      setIsVisible(true);
    }, 500);
  }, [percent]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "gbc-progress-bar__circle-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
    className: "gbc-progress-bar__circle",
    width: "120",
    height: "120",
    viewBox: "0 0 120 120"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("circle", {
    cx: "60",
    cy: "60",
    r: "54",
    fill: "none",
    stroke: "#e6e6e6",
    strokeWidth: progressThickness + 4
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("circle", {
    className: "gbc-progress-bar__circle-value",
    cx: "60",
    cy: "60",
    r: "54",
    fill: "none",
    stroke: progressColor,
    strokeWidth: progressThickness + 4,
    style: {
      strokeDasharray: '339.292px',
      strokeDashoffset: "".concat(offSetVal, "px")
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "gbc-progress-bar__label",
    style: {
      visibility: isVisible ? 'visible' : 'hidden'
    }
  }, newPercentVal, "%"));
};

/* harmony default export */ __webpack_exports__["default"] = (CircleBar);

/***/ }),

/***/ "./block-components/gb-components/build-module/progressbar/controls.js":
/*!*****************************************************************************!*\
  !*** ./block-components/gb-components/build-module/progressbar/controls.js ***!
  \*****************************************************************************/
/*! exports provided: SelectCircleBarButton, SelectLineBarButton, ChangeProgressPercent, ChangeProgressThickness, ChangeProgressColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectCircleBarButton", function() { return SelectCircleBarButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectLineBarButton", function() { return SelectLineBarButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeProgressPercent", function() { return ChangeProgressPercent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeProgressThickness", function() { return ChangeProgressThickness; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeProgressColor", function() { return ChangeProgressColor; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);

/**
 * WordPress dependencies
 */



/**
 * Button Component to change the progress bar type to circle.
 *
 * @param {Object} props Props.
 *
 * @return {*}
 */

var SelectCircleBarButton = function SelectCircleBarButton(_ref) {
  var setAttributes = _ref.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "gbc-progress-bar__select-circle",
    onClick: function onClick() {
      return setAttributes({
        progressBarType: 'circle'
      });
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Dashicon"], {
    icon: "marker"
  }));
};
/**
 * Button Component to change the progress bar type to line.
 *
 * @param {Object} props Props.
 *
 * @return {*}
 */

var SelectLineBarButton = function SelectLineBarButton(_ref2) {
  var setAttributes = _ref2.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "gbc-progress-bar__select-circle",
    onClick: function onClick() {
      return setAttributes({
        progressBarType: 'line'
      });
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Dashicon"], {
    icon: "minus"
  }));
};
/**
 * RangeControl Component to change the progress bar percent.
 *
 * @param {Object} props Props.
 *
 * @return {*}
 */

var ChangeProgressPercent = function ChangeProgressPercent(_ref3) {
  var attributes = _ref3.attributes,
      setAttributes = _ref3.setAttributes;
  var percent = attributes.percent;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Bar Percent', 'gutenberg-block-component'),
    value: percent,
    onChange: function onChange(value) {
      return setAttributes({
        percent: value
      });
    },
    min: 2,
    max: 100,
    className: "gbc-progress-bar__range-percent"
  });
};
/**
 * RangeControl Component to change the progress bar thickness.
 *
 * @param {Object} props Props.
 *
 * @return {*}
 */

var ChangeProgressThickness = function ChangeProgressThickness(_ref4) {
  var attributes = _ref4.attributes,
      setAttributes = _ref4.setAttributes;
  var progressThickness = attributes.progressThickness;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Bar Thickness', 'gutenberg-block-component'),
    value: progressThickness,
    onChange: function onChange(value) {
      return setAttributes({
        progressThickness: value
      });
    },
    min: 1,
    max: 4,
    className: "gbc-progress-bar__range-thickness"
  });
};
/**
 * RangeControl Component to change the progress bar color.
 *
 * @param {Object} props Props.
 *
 * @return {*}
 */

var ChangeProgressColor = function ChangeProgressColor(_ref5) {
  var attributes = _ref5.attributes,
      setAttributes = _ref5.setAttributes;
  var progressColor = attributes.progressColor;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ColorPicker"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Bar Color', 'gutenberg-block-component'),
    value: progressColor,
    onChangeComplete: function onChangeComplete(value) {
      return setAttributes({
        progressColor: value.hex
      });
    },
    disableAlpha: true,
    className: "gbc-progress-bar__range-color"
  });
};

/***/ }),

/***/ "./block-components/gb-components/build-module/progressbar/index.js":
/*!**************************************************************************!*\
  !*** ./block-components/gb-components/build-module/progressbar/index.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _line_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./line-bar */ "./block-components/gb-components/build-module/progressbar/line-bar.js");
/* harmony import */ var _circle_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./circle-bar */ "./block-components/gb-components/build-module/progressbar/circle-bar.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controls */ "./block-components/gb-components/build-module/progressbar/controls.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./save */ "./block-components/gb-components/build-module/progressbar/save.js");

/**
 * Progressbar component.
 *
 * @todo Work In Progress.
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */





/**
 * Accordion component
 *
 * @param {Object} props Props.
 *
 * @return {*}
 */

var ProgressBar = function ProgressBar(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var percent = attributes.percent,
      progressColor = attributes.progressColor,
      progressThickness = attributes.progressThickness,
      progressBarType = attributes.progressBarType;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["BlockControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_controls__WEBPACK_IMPORTED_MODULE_6__["SelectLineBarButton"], {
    setAttributes: setAttributes
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_controls__WEBPACK_IMPORTED_MODULE_6__["SelectCircleBarButton"], {
    setAttributes: setAttributes
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Progress bar controls', 'gutenberg-block-components'),
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_controls__WEBPACK_IMPORTED_MODULE_6__["ChangeProgressPercent"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_controls__WEBPACK_IMPORTED_MODULE_6__["ChangeProgressThickness"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_controls__WEBPACK_IMPORTED_MODULE_6__["ChangeProgressColor"], {
    attributes: attributes,
    setAttributes: setAttributes
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "gbc-progress-bar"
  }, 'line' === progressBarType && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_line_bar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    percent: percent,
    progressThickness: progressThickness,
    progressColor: progressColor
  }), 'circle' === progressBarType && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_circle_bar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    percent: percent,
    progressThickness: progressThickness,
    progressColor: progressColor
  })));
};

ProgressBar.Content = _save__WEBPACK_IMPORTED_MODULE_7__["default"];
/* harmony default export */ __webpack_exports__["default"] = (ProgressBar);

/***/ }),

/***/ "./block-components/gb-components/build-module/progressbar/line-bar.js":
/*!*****************************************************************************!*\
  !*** ./block-components/gb-components/build-module/progressbar/line-bar.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./block-components/gb-components/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */


/**
 * Line bar.
 *
 * @param {Object} props Props
 *
 * @return {*}
 */

var LineBar = function LineBar(_ref) {
  var percent = _ref.percent,
      progressThickness = _ref.progressThickness,
      progressColor = _ref.progressColor;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      newPercentVal = _useState2[0],
      setNewPercentVal = _useState2[1];

  var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      isVisible = _useState4[0],
      setIsVisible = _useState4[1];

  var progressBarPath = "M ".concat(progressThickness / 2, ",").concat(progressThickness / 2, " L ").concat(100 - progressThickness / 2, ",").concat(progressThickness / 2);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setTimeout(function () {
      setNewPercentVal(percent);
      setIsVisible(true);
    }, 500);
  }, [percent]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
    className: "",
    viewBox: "0 0 100 ".concat(progressThickness),
    preserveAspectRatio: "none"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    className: "gbc-progress-bar__line-trail",
    d: progressBarPath,
    strokeWidth: "1"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    className: "gbc-progress-bar__line-path",
    d: progressBarPath,
    stroke: progressColor,
    strokeWidth: progressThickness,
    style: {
      strokeDashoffset: "".concat(100 - newPercentVal, "px")
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    style: {
      width: "".concat(percent, "%"),
      visibility: isVisible ? 'visible' : 'hidden'
    }
  }, newPercentVal, "%"));
};

/* harmony default export */ __webpack_exports__["default"] = (LineBar);

/***/ }),

/***/ "./block-components/gb-components/build-module/progressbar/save.js":
/*!*************************************************************************!*\
  !*** ./block-components/gb-components/build-module/progressbar/save.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

/**
 * WordPress dependencies
 */

/**
 * Save Component.
 *
 * @param {Object} props Props.
 *
 * @return {*}
 */

var Save = function Save(_ref) {
  var attributes = _ref.attributes;
  var percent = attributes.percent,
      progressColor = attributes.progressColor,
      progressThickness = attributes.progressThickness,
      progressBarType = attributes.progressBarType;
  var progressBarPath = "M ".concat(progressThickness / 2, ",").concat(progressThickness / 2, " L ").concat(100 - progressThickness / 2, ",").concat(progressThickness / 2);
  var offSetVal = 339.292 * (1 - percent / 100);

  if (!percent || !progressThickness || !progressBarType) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "gbc-progress-bar"
  }, 'line' === progressBarType && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    className: "",
    viewBox: "0 0 100 ".concat(progressThickness),
    preserveAspectRatio: "none"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    className: "gbc-progress-bar__line-trail",
    d: progressBarPath,
    strokeWidth: "1"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    className: "gbc-progress-bar__line-path",
    d: progressBarPath,
    stroke: progressColor,
    strokeWidth: progressThickness,
    "data-stroke-dashoffset": "".concat(100 - percent, "px"),
    style: {
      strokeDashoffset: '100'
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    style: {
      width: "".concat(percent, "%"),
      visibility: 'hidden'
    },
    className: "gbc-progress-bar__label-js"
  }, percent, "%")), 'circle' === progressBarType && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "gbc-progress-bar__circle-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    className: "gbc-progress-bar__circle",
    width: "120",
    height: "120",
    viewBox: "0 0 120 120"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
    cx: "60",
    cy: "60",
    r: "54",
    fill: "none",
    stroke: "#e6e6e6",
    strokeWidth: progressThickness + 4
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
    className: "gbc-progress-bar__circle-value",
    cx: "60",
    cy: "60",
    r: "54",
    fill: "none",
    "data-stroke-dashoffset": "".concat(offSetVal, "px"),
    stroke: progressColor,
    strokeWidth: progressThickness + 4,
    style: {
      strokeDasharray: '339.292px',
      strokeDashoffset: '339.292px'
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "gbc-progress-bar__label gbc-progress-bar__label-js",
    style: {
      visibility: 'hidden'
    }
  }, percent, "%")));
};

/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./block-components/gb-components/build-module/tab/buttons.js":
/*!********************************************************************!*\
  !*** ./block-components/gb-components/build-module/tab/buttons.js ***!
  \********************************************************************/
/*! exports provided: ShiftLeftButton, ShiftRightButton, AddTabButton, RemoveTabButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShiftLeftButton", function() { return ShiftLeftButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShiftRightButton", function() { return ShiftRightButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTabButton", function() { return AddTabButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveTabButton", function() { return RemoveTabButton; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions */ "./block-components/gb-components/build-module/tab/functions.js");

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/**
 * Button Component to shift the tab left
 *
 * @param {Object} props Props.
 *
 * @return {*}
 */

var ShiftLeftButton = function ShiftLeftButton(_ref) {
  var attributes = _ref.attributes,
      selectedIndex = _ref.selectedIndex,
      setSelectedIndex = _ref.setSelectedIndex,
      setAttributes = _ref.setAttributes;
  var tabsData = attributes.tabsData,
      tabsCount = attributes.tabsCount;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "gbc-tabs__add-tab-bt",
    onClick: function onClick() {
      return Object(_functions__WEBPACK_IMPORTED_MODULE_2__["shiftLeft"])(selectedIndex, setSelectedIndex, setAttributes, tabsData, tabsCount);
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Dashicon"], {
    icon: "arrow-left-alt2"
  }));
};
/**
 * Button Component to shift the tab right
 *
 * @param {Object} props Props.
 *
 * @return {*}
 */

var ShiftRightButton = function ShiftRightButton(_ref2) {
  var attributes = _ref2.attributes,
      selectedIndex = _ref2.selectedIndex,
      setSelectedIndex = _ref2.setSelectedIndex,
      setAttributes = _ref2.setAttributes;
  var tabsData = attributes.tabsData,
      tabsCount = attributes.tabsCount;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "gbc-tabs__add-tab-bt",
    onClick: function onClick() {
      return Object(_functions__WEBPACK_IMPORTED_MODULE_2__["shiftRight"])(selectedIndex, setSelectedIndex, setAttributes, tabsData, tabsCount);
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Dashicon"], {
    icon: "arrow-right-alt2"
  }));
};
/**
 * Button Component to add a new tab
 *
 * @param {Object} props Props.
 *
 * @return {*}
 */

var AddTabButton = function AddTabButton(_ref3) {
  var attributes = _ref3.attributes,
      setAttributes = _ref3.setAttributes;
  var tabsData = attributes.tabsData,
      tabsCount = attributes.tabsCount;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "gbc-tabs__add-tab-btn",
    onClick: function onClick() {
      return Object(_functions__WEBPACK_IMPORTED_MODULE_2__["addTab"])(tabsCount, setAttributes, tabsData);
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Dashicon"], {
    icon: "plus-alt"
  }));
};
/**
 * Button Component to remove the tab.
 *
 * @param {Object} props Props.
 *
 * @return {*}
 */

var RemoveTabButton = function RemoveTabButton(_ref4) {
  var attributes = _ref4.attributes,
      selectedIndex = _ref4.selectedIndex,
      setAttributes = _ref4.setAttributes;
  var tabsData = attributes.tabsData,
      tabsCount = attributes.tabsCount;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "gbc-tabs__remove-tab-btn",
    onClick: function onClick() {
      return Object(_functions__WEBPACK_IMPORTED_MODULE_2__["removeTab"])(selectedIndex, setAttributes, tabsData, tabsCount);
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Dashicon"], {
    icon: "minus"
  }));
};

/***/ }),

/***/ "./block-components/gb-components/build-module/tab/functions.js":
/*!**********************************************************************!*\
  !*** ./block-components/gb-components/build-module/tab/functions.js ***!
  \**********************************************************************/
/*! exports provided: getTabsInitialData, updateRow, addTab, removeTab, swapArrayItems, shiftLeft, shiftRight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTabsInitialData", function() { return getTabsInitialData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateRow", function() { return updateRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTab", function() { return addTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTab", function() { return removeTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swapArrayItems", function() { return swapArrayItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shiftLeft", function() { return shiftLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shiftRight", function() { return shiftRight; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */

/**
 * External dependencies
 */


/**
 * Create array setting initial values of tabs content.
 *
 * @param {number} count Count.
 *
 * @return {array} tabsDataArray tabsDataArray.
 */

var getTabsInitialData = function getTabsInitialData(count) {
  if (!count) {
    return [];
  }

  var tabsDataArray = [];

  for (var i = 0; i < count; i++) {
    tabsDataArray.push({
      tabName: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Section %s', 'gutenberg-block-components'), i + 1),
      content: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Section %s', 'gutenberg-block-components'), i + 1)
    });
  }

  return tabsDataArray;
};
/**
 * Update row values.
 *
 * @param {string} key Key name.
 * @param {string} value Value.
 * @param {string} index Value.
 * @param {Object} setAttributes setAttributes function.
 * @param {array} tabsData Tabs data.
 *
 * @return {array} updatedTabsData Updated Tabs data.
 */

var updateRow = function updateRow(key, value, index, setAttributes, tabsData) {
  var updatedTabsData = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["extend"])([], tabsData);
  updatedTabsData[index][key] = value;
  setAttributes({
    tabsData: updatedTabsData
  });
  return updatedTabsData;
};
/**
 * Add a new tab.
 *
 * Also adds a new item to the tabsData array.
 *
 * @param {number} tabsCount Tabs count.
 * @param {Object} setAttributes setAttributes function.
 * @param {array} tabsData Tabs data.
 *
 * @return {Object} updatedTabsData UpdatedTabsData
 */

var addTab = function addTab(tabsCount, setAttributes, tabsData) {
  var updatedTabsData = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["extend"])([], tabsData);
  updatedTabsData.push({
    tabName: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Section %s', 'gutenberg-block-components'), tabsCount + 1),
    content: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Section %s', 'gutenberg-block-components'), tabsCount + 1)
  });
  setAttributes({
    tabsCount: tabsCount + 1,
    tabsData: updatedTabsData
  });
  return updatedTabsData;
};
/**
 * Remove the tab with the given index and update attributes.
 *
 * @param {number} selectedIndex Selected index.
 * @param {Object} setAttributes setAttributes function.
 * @param {array} tabsData Tabs data.
 * @param {number} tabsCount Tabs count.
 *
 * @return {array} updatedTabsData Update tabs data.
 */

var removeTab = function removeTab(selectedIndex, setAttributes, tabsData, tabsCount) {
  // Return all items except the one with the given index( removes the item with selectedIndex ).
  var updatedTabsData = tabsData.filter(function (value, index) {
    return index !== selectedIndex;
  });
  setAttributes({
    tabsData: updatedTabsData,
    tabsCount: tabsCount - 1
  });
  return updatedTabsData;
};
/**
 * Swap array items.
 *
 * @param {array} arr Array to be modified.
 * @param {number} firstIndex First index.
 * @param {number} secondIndex Second index.
 *
 * @return {*}
 */

var swapArrayItems = function swapArrayItems(arr, firstIndex, secondIndex) {
  var temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
  return arr;
};
/**
 * Shift the index of the selected item to left, by one.
 *
 * @param {number} selectedIndex Selected index.
 * @param {Object} setSelectedIndex setSelectedIndex function.
 * @param {Object} setAttributes setAttributes function.
 * @param {array} tabsData Tabs data.
 * @param {number} tabsCount Tabs count.
 *
 * @return {null|array}
 */

var shiftLeft = function shiftLeft(selectedIndex, setSelectedIndex, setAttributes, tabsData, tabsCount) {
  // If we are on the first item, then return
  if (0 > selectedIndex - 1) {
    return null;
  } // Swap item with the left one.


  var updatedTabsData = swapArrayItems(tabsData, selectedIndex, selectedIndex - 1);
  setAttributes({
    tabsData: updatedTabsData,
    tabsCount: tabsCount
  }); // Set the selectedIndex.

  setSelectedIndex(selectedIndex - 1);
  return updatedTabsData;
};
/**
 * Shift the index of the selected item to right, by one.
 *
 * @param {number} selectedIndex Selected index.
 * @param {Object} setSelectedIndex setSelectedIndex function.
 * @param {Object} setAttributes setAttributes function.
 * @param {array} tabsData Tabs data.
 * @param {number} tabsCount Tabs count.
 *
 * @return {null|array}
 */

var shiftRight = function shiftRight(selectedIndex, setSelectedIndex, setAttributes, tabsData, tabsCount) {
  // If we are on the last item, then return
  if (selectedIndex + 1 > tabsCount - 1) {
    return null;
  } // Swap item with the right one.


  var updatedTabsData = swapArrayItems(tabsData, selectedIndex, selectedIndex + 1);
  setAttributes({
    tabsData: updatedTabsData,
    tabsCount: tabsCount
  }); // Set the selectedIndex.

  setSelectedIndex(selectedIndex + 1);
  return updatedTabsData;
};

/***/ }),

/***/ "./block-components/gb-components/build-module/tab/index.js":
/*!******************************************************************!*\
  !*** ./block-components/gb-components/build-module/tab/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "./block-components/gb-components/build-module/tab/functions.js");
/* harmony import */ var _tabs_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs-view */ "./block-components/gb-components/build-module/tab/tabs-view.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./block-components/gb-components/build-module/tab/save.js");

/**
 * Tab component.
 *
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




/**
 * Accordion component
 *
 * @param {Object} props Props.
 *
 * @return {*}
 */

var Tab = function Tab(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var tabsCount = attributes.tabsCount;
  /**
   * Create tab elements.
   *
   * @return {void}
   */

  var createTabs = function createTabs() {
    var initialTabsData = Object(_functions__WEBPACK_IMPORTED_MODULE_1__["getTabsInitialData"])(tabsCount);
    setAttributes({
      tabsData: initialTabsData
    });
  };
  /**
   * Create tabs on initial render of the component.
   *
   * @return {void}
   */


  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    createTabs();
  }, []);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "gbc-tabs"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_tabs_view__WEBPACK_IMPORTED_MODULE_2__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }));
};

Tab.Content = _save__WEBPACK_IMPORTED_MODULE_3__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Tab);

/***/ }),

/***/ "./block-components/gb-components/build-module/tab/save.js":
/*!*****************************************************************!*\
  !*** ./block-components/gb-components/build-module/tab/save.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);

/**
 * Tabs save component.
 */

/**
 * WordPress dependencies
 */



/**
 * External dependencies
 */


/**
 * Save.
 *
 * @param {Object} props Props.
 *
 * @return {null|*}
 */

var Save = function Save(_ref) {
  var attributes = _ref.attributes;
  var tabsData = attributes.tabsData,
      tabsTitleTag = attributes.tabsTitleTag;

  if (!Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isArray"])(tabsData) || 1 > tabsData.length) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "gbc-tabs__content-wrap"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "gbc-tabs__list-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "gbc-tabs__content-list"
  }, tabsData.map(function (item, index) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      "data-selected": 0 === index ? 'true' : 'false',
      "aria-selected": 0 === index ? 'true' : 'false',
      tabIndex: "0",
      key: "tab-".concat(index),
      id: "ui-id-".concat(index),
      "data-target-id": "tab-content-".concat(index),
      className: "gbc-tabs__tab-name-wrap"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"].Content, {
      tagName: tabsTitleTag || 'h3',
      value: tabsData[index].tabName,
      id: "input-id-".concat(index),
      className: "gbc-tabs__tab-name"
    }));
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "gbc-tabs__tab-panel"
  }, tabsData.map(function (item, index) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      role: "tabpanel",
      key: "tab-content-".concat(index),
      id: "tab-content-".concat(index),
      className: "gbc-tabs__content",
      hidden: 0 !== index
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"].Content, {
      tagName: 'undefined' !== typeof wp ? 'p' : 'div',
      value: tabsData[index].content
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./block-components/gb-components/build-module/tab/select-title-tag.js":
/*!*****************************************************************************!*\
  !*** ./block-components/gb-components/build-module/tab/select-title-tag.js ***!
  \*****************************************************************************/
/*! exports provided: SelectTitleTag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectTitleTag", function() { return SelectTitleTag; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);

/**
 * WordPress dependencies
 */



/**
 * Select control for selecting title tags.
 *
 * @param {Object} props Props.
 *
 * @return {*}
 */

var SelectTitleTag = function SelectTitleTag(_ref) {
  var tabsTitleTag = _ref.tabsTitleTag,
      options = _ref.options,
      setAttributes = _ref.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Title tag', 'gutenberg-block-components'),
    value: tabsTitleTag,
    className: "gbc-tabs__select-tag",
    options: options,
    onChange: function onChange(value) {
      return setAttributes({
        tabsTitleTag: value
      });
    }
  }));
};

/***/ }),

/***/ "./block-components/gb-components/build-module/tab/tabs-view.js":
/*!**********************************************************************!*\
  !*** ./block-components/gb-components/build-module/tab/tabs-view.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./block-components/gb-components/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reach/tabs */ "./block-components/gb-components/node_modules/@reach/tabs/dist/tabs.esm.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions */ "./block-components/gb-components/build-module/tab/functions.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./buttons */ "./block-components/gb-components/build-module/tab/buttons.js");
/* harmony import */ var _select_title_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./select-title-tag */ "./block-components/gb-components/build-module/tab/select-title-tag.js");


/**
 * Tabs content component.
 */

/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


/**
 * WordPress dependencies
 */







/**
 * Accordion row component.
 *
 * @param {Object} props Component props.
 *
 * @return {Object}
 */

var TabsView = function TabsView(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var tabsCount = attributes.tabsCount,
      tabsData = attributes.tabsData,
      tabsTitleTag = attributes.tabsTitleTag;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      selectedIndex = _useState2[0],
      setSelectedIndex = _useState2[1];

  if (!tabsCount) {
    return null;
  }

  var options = [{
    value: 'p',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Paragraph', 'gutenberg-block-components')
  }, {
    value: 'h1',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Heading 1', 'gutenberg-block-components')
  }, {
    value: 'h2',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Heading 2', 'gutenberg-block-components')
  }, {
    value: 'h3',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Heading 3', 'gutenberg-block-components')
  }, {
    value: 'h4',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Heading 4', 'gutenberg-block-components')
  }, {
    value: 'h5',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Heading 5', 'gutenberg-block-components')
  }, {
    value: 'h6',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Heading 6', 'gutenberg-block-components')
  }];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["BlockControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_buttons__WEBPACK_IMPORTED_MODULE_7__["ShiftLeftButton"], {
    attributes: attributes,
    setAttributes: setAttributes,
    selectedIndex: selectedIndex,
    setSelectedIndex: setSelectedIndex
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_buttons__WEBPACK_IMPORTED_MODULE_7__["ShiftRightButton"], {
    attributes: attributes,
    setAttributes: setAttributes,
    selectedIndex: selectedIndex,
    setSelectedIndex: setSelectedIndex
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_buttons__WEBPACK_IMPORTED_MODULE_7__["RemoveTabButton"], {
    attributes: attributes,
    setAttributes: setAttributes,
    selectedIndex: selectedIndex
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Select Title tag', 'gutenberg-block-components'),
    initialOpen: true
  }, options.length ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_select_title_tag__WEBPACK_IMPORTED_MODULE_8__["SelectTitleTag"], {
    options: options,
    tabsTitleTag: tabsTitleTag,
    setAttributes: setAttributes
  }) : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('No tags available', 'gutenberg-block-components'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_reach_tabs__WEBPACK_IMPORTED_MODULE_2__["Tabs"], {
    className: "gbc-tabs__content-wrap",
    onChange: function onChange(index) {
      return setSelectedIndex(index);
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "gbc-tabs__list-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_reach_tabs__WEBPACK_IMPORTED_MODULE_2__["TabList"], {
    className: "gbc-tabs__content-list"
  }, tabsData.map(function (item, index) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_reach_tabs__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
      key: "tab-".concat(index),
      id: "ui-id-".concat(index),
      className: "gbc-tabs__tab-name-wrap ".concat(selectedIndex === index ? 'gbc-tabs__selected' : '')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"], {
      tagName: tabsTitleTag || 'h3',
      value: tabsData[index].tabName,
      id: "input-id-".concat(index),
      onChange: function onChange(value) {
        return Object(_functions__WEBPACK_IMPORTED_MODULE_3__["updateRow"])('tabName', value, index, setAttributes, tabsData);
      },
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Enter tab name...', 'gutenberg-block-components'),
      className: "gbc-tabs__tab-name"
    }));
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_buttons__WEBPACK_IMPORTED_MODULE_7__["AddTabButton"], {
    attributes: attributes,
    setAttributes: setAttributes
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_reach_tabs__WEBPACK_IMPORTED_MODULE_2__["TabPanels"], {
    className: "gbc-tabs__tab-panel"
  }, tabsData.map(function (item, index) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_reach_tabs__WEBPACK_IMPORTED_MODULE_2__["TabPanel"], {
      key: "#tab-content-".concat(index),
      id: "#tab-content-".concat(index),
      className: "gbc-tabs__content"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"], {
      value: tabsData[index].content,
      onChange: function onChange(value) {
        return Object(_functions__WEBPACK_IMPORTED_MODULE_3__["updateRow"])('content', value, index, setAttributes, tabsData);
      },
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Enter  Content...', 'gutenberg-block-components')
    }));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (TabsView);

/***/ }),

/***/ "./block-components/gb-components/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!****************************************************************************************************!*\
  !*** ./block-components/gb-components/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./block-components/gb-components/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!**************************************************************************************************!*\
  !*** ./block-components/gb-components/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./block-components/gb-components/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!**************************************************************************************************!*\
  !*** ./block-components/gb-components/node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./block-components/gb-components/node_modules/@babel/runtime/helpers/esm/extends.js":
/*!*******************************************************************************************!*\
  !*** ./block-components/gb-components/node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./block-components/gb-components/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!********************************************************************************************************!*\
  !*** ./block-components/gb-components/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./block-components/gb-components/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!***************************************************************************************************!*\
  !*** ./block-components/gb-components/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./block-components/gb-components/node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!*************************************************************************************************!*\
  !*** ./block-components/gb-components/node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./block-components/gb-components/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./block-components/gb-components/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray */ "./block-components/gb-components/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest */ "./block-components/gb-components/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./block-components/gb-components/node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!******************************************************************************************!*\
  !*** ./block-components/gb-components/node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./block-components/gb-components/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!**************************************************************************************************************!*\
  !*** ./block-components/gb-components/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray */ "./block-components/gb-components/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./block-components/gb-components/node_modules/@reach/auto-id/dist/auto-id.esm.js":
/*!****************************************************************************************!*\
  !*** ./block-components/gb-components/node_modules/@reach/auto-id/dist/auto-id.esm.js ***!
  \****************************************************************************************/
/*! exports provided: useId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useId", function() { return useId; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reach_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reach/utils */ "./block-components/gb-components/node_modules/@reach/utils/dist/utils.esm.js");



/*
 * Welcome to @reach/auto-id!

 * Let's see if we can make sense of why this hook exists and its
 * implementation.
 *
 * Some background:
 *   1. Accessibiliy APIs rely heavily on element IDs
 *   2. Requiring developers to put IDs on every element in Reach UI is both
 *      cumbersome and error-prone
 *   3. With a component model, we can generate IDs for them!
 *
 * Solution 1: Generate random IDs.
 *
 * This works great as long as you don't server render your app. When React (in
 * the client) tries to reuse the markup from the server, the IDs won't match
 * and React will then recreate the entire DOM tree.
 *
 * Solution 2: Increment an integer
 *
 * This sounds great. Since we're rendering the exact same tree on the server
 * and client, we can increment a counter and get a deterministic result between
 * client and server. Also, JS integers can go up to nine-quadrillion. I'm
 * pretty sure the tab will be closed before an app never needs
 * 10 quadrillion IDs!
 *
 * Problem solved, right?
 *
 * Ah, but there's a catch! React's concurrent rendering makes this approach
 * non-deterministic. While the client and server will end up with the same
 * elements in the end, depending on suspense boundaries (and possibly some user
 * input during the initial render) the incrementing integers won't always match
 * up.
 *
 * Solution 3: Don't use IDs at all on the server; patch after first render.
 *
 * What we've done here is solution 2 with some tricks. With this approach, the
 * ID returned is an empty string on the first render. This way the server and
 * client have the same markup no matter how wild the concurrent rendering may
 * have gotten.
 *
 * After the render, we patch up the components with an incremented ID. This
 * causes a double render on any components with `useId`. Shouldn't be a problem
 * since the components using this hook should be small, and we're only updating
 * the ID attribute on the DOM, nothing big is happening.
 *
 * It doesn't have to be an incremented number, though--we could do generate
 * random strings instead, but incrementing a number is probably the cheapest
 * thing we can do.
 *
 * Additionally, we only do this patchup on the very first client render ever.
 * Any calls to `useId` that happen dynamically in the client will be
 * populated immediately with a value. So, we only get the double render after
 * server hydration and never again, SO BACK OFF ALRIGHT?
 */
var serverHandoffComplete = false;
var id = 0;

var genId = function genId() {
  return ++id;
};
/**
 * useId
 *
 * Autogenerate IDs to facilitate WAI-ARIA and server rendering.
 *
 * Note: The returned ID will initially be `null` and will update after a
 * component mounts. Users may need to supply their own ID if they need
 * consistent values for SSR.
 *
 * @see Docs https://reacttraining.com/reach-ui/auto-id
 */


var useId = function useId(idFromProps) {
  /*
   * If this instance isn't part of the initial render, we don't have to do the
   * double render/patch-up dance. We can just generate the ID and return it.
   */
  var initialId = idFromProps || (serverHandoffComplete ? genId() : null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialId),
      id = _useState[0],
      setId = _useState[1];

  Object(_reach_utils__WEBPACK_IMPORTED_MODULE_1__["useIsomorphicLayoutEffect"])(function () {
    if (id === null) {
      /*
       * Patch the ID after render. We do this in `useLayoutEffect` to avoid any
       * rendering flicker, though it'll make the first render slower (unlikely
       * to matter, but you're welcome to measure your app and let us know if
       * it's a problem).
       */
      setId(genId());
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (serverHandoffComplete === false) {
      /*
       * Flag all future uses of `useId` to skip the update dance. This is in
       * `useEffect` because it goes after `useLayoutEffect`, ensuring we don't
       * accidentally bail out of the patch-up dance prematurely.
       */
      serverHandoffComplete = true;
    }
  }, []);
  return id != null ? String(id) : undefined;
};


//# sourceMappingURL=auto-id.esm.js.map


/***/ }),

/***/ "./block-components/gb-components/node_modules/@reach/descendants/dist/descendants.esm.js":
/*!************************************************************************************************!*\
  !*** ./block-components/gb-components/node_modules/@reach/descendants/dist/descendants.esm.js ***!
  \************************************************************************************************/
/*! exports provided: DescendantProvider, createDescendantContext, useDescendant, useDescendantKeyDown, useDescendants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescendantProvider", function() { return DescendantProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDescendantContext", function() { return createDescendantContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDescendant", function() { return useDescendant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDescendantKeyDown", function() { return useDescendantKeyDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDescendants", function() { return useDescendants; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reach_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reach/utils */ "./block-components/gb-components/node_modules/@reach/utils/dist/utils.esm.js");



function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function createDescendantContext(name, initialValue) {
  if (initialValue === void 0) {
    initialValue = {};
  }

  return Object(_reach_utils__WEBPACK_IMPORTED_MODULE_1__["createNamedContext"])(name, _extends({
    descendants: [],
    registerDescendant: _reach_utils__WEBPACK_IMPORTED_MODULE_1__["noop"],
    unregisterDescendant: _reach_utils__WEBPACK_IMPORTED_MODULE_1__["noop"]
  }, initialValue));
}
/**
 * This hook registers our descendant by passing it into an array. We can then
 * search that array by to find its index when registering it in the component.
 * We use this for focus management, keyboard navigation, and typeahead
 * functionality for some components.
 *
 * The hook accepts the element node and (optionally) a key. The key is useful
 * if multiple descendants have identical text values and we need to
 * differentiate siblings for some reason.
 *
 * Our main goals with this are:
 *   1) maximum composability,
 *   2) minimal API friction
 *   3) SSR compatibility*
 *   4) concurrent safe
 *   5) index always up-to-date with the tree despite changes
 *   6) works with memoization of any component in the tree (hopefully)
 *
 * * As for SSR, the good news is that we don't actually need the index on the
 * server for most use-cases, as we are only using it to determine the order of
 * composed descendants for keyboard navigation. However, in the few cases where
 * this is not the case, we can require an explicit index from the app.
 */

function useDescendant(_ref, indexProp) {
  var context = _ref.context,
      element = _ref.element,
      rest = _objectWithoutPropertiesLoose(_ref, ["context", "element"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      forceUpdate = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(context),
      registerDescendant = _useContext.registerDescendant,
      unregisterDescendant = _useContext.unregisterDescendant,
      descendants = _useContext.descendants; // Prevent any flashing


  Object(_reach_utils__WEBPACK_IMPORTED_MODULE_1__["useIsomorphicLayoutEffect"])(function () {
    if (!element) forceUpdate({}); // @ts-ignore

    registerDescendant(_extends({
      element: element
    }, rest));
    return function () {
      return unregisterDescendant(element);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [element].concat(Object.values(rest)));
  return indexProp !== null && indexProp !== void 0 ? indexProp : descendants.findIndex(function (item) {
    return item.element === element;
  });
}
function useDescendants() {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
}
function DescendantProvider(_ref2) {
  var Ctx = _ref2.context,
      children = _ref2.children,
      items = _ref2.items,
      set = _ref2.set;
  var registerDescendant = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(function (_ref3) {
    var element = _ref3.element,
        rest = _objectWithoutPropertiesLoose(_ref3, ["element"]);

    if (!element) {
      return;
    }

    set(function (items) {
      var newItem;
      var newItems; // If there are no items, register at index 0 and bail.

      if (items.length === 0) {
        newItem = _extends({
          element: element,
          index: 0
        }, rest);
        newItems = [].concat(items, [newItem]);
      } else if (items.find(function (item) {
        return item.element === element;
      })) {
        // If the element is already registered, just use the same array
        newItems = items;
      } else {
        // When registering a descendant, we need to make sure we insert in
        // into the array in the same order that it appears in the DOM. So as
        // new descendants are added or maybe some are removed, we always know
        // that the array is up-to-date and correct.
        //
        // So here we look at our registered descendants and see if the new
        // element we are adding appears earlier than an existing descendant's
        // DOM node via `node.compareDocumentPosition`. If it does, we insert
        // the new element at this index. Because `registerDescendant` will be
        // called in an effect every time the descendants state value changes,
        // we should be sure that this index is accurate when descendent
        // elements come or go from our component.
        var index = items.findIndex(function (item) {
          if (!item.element || !element) {
            return false;
          } // Does this element's DOM node appear before another item in the
          // array in our DOM tree? If so, return true to grab the index at
          // this point in the array so we know where to insert the new
          // element.


          return Boolean(item.element.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_PRECEDING);
        });
        newItem = _extends({
          element: element,
          index: index
        }, rest); // If an index is not found we will push the element to the end.

        if (index === -1) {
          newItems = [].concat(items, [newItem]);
        } else {
          newItems = [].concat(items.slice(0, index), [newItem], items.slice(index));
        }
      }

      return newItems.map(function (item, index) {
        return _extends({}, item, {
          index: index
        });
      });
    });
  }, // set is a state setter initialized by the useDescendants hook.
  // We can safely ignore the lint warning here because it will not change
  // between renders.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []);
  var unregisterDescendant = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (element) {
    if (!element) {
      return;
    }

    set(function (items) {
      return items.filter(function (item) {
        return element !== item.element;
      });
    });
  }, // set is a state setter initialized by the useDescendants hook.
  // We can safely ignore the lint warning here because it will not change
  // between renders.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []);
  var value = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return {
      descendants: items,
      registerDescendant: registerDescendant,
      unregisterDescendant: unregisterDescendant
    };
  }, [items, registerDescendant, unregisterDescendant]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Ctx.Provider, {
    value: value
  }, children);
}
/**
 * Testing this as an abstraction for compound components that use keyboard
 * navigation. Hoping this will help us prevent bugs and mismatched behavior
 * across various components, but it may also prove to be too messy of an
 * abstraction in the end.
 *
 * Currently used in:
 *   - Tabs
 *   - Accordion
 *
 * @param context
 * @param options
 */

function useDescendantKeyDown(context, options) {
  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(context),
      descendants = _useContext2.descendants;

  var currentIndex = options.currentIndex,
      _options$orientation = options.orientation,
      orientation = _options$orientation === void 0 ? "vertical" : _options$orientation,
      callback = options.callback,
      filter = options.filter,
      _options$rotate = options.rotate,
      rotate = _options$rotate === void 0 ? true : _options$rotate,
      _options$rtl = options.rtl,
      rtl = _options$rtl === void 0 ? false : _options$rtl;
  var index = currentIndex !== null && currentIndex !== void 0 ? currentIndex : -1;
  var key = options.key || "index";
  return function handleKeyDown(event) {
    if (!["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight", "PageUp", "PageDown", "Home", "End"].includes(event.key)) {
      return;
    } // If we use a filter function, we need to re-index our descendants array
    // so that filtered descendent elements aren't selected.


    var selectableDescendants = descendants;

    if (filter) {
      selectableDescendants = [];
      var n = -1;

      for (var i = 0; i < descendants.length; i++) {
        var descendant = descendants[i];

        if (filter(descendant)) {
          selectableDescendants.push(_extends({}, descendant, {
            index: n++
          })); // Current index should map to the updated array vs. the original
          // descendants array.

          index = i === currentIndex ? n : index;
        }
      }

      selectableDescendants = descendants.filter(filter);
    } // We need some options for any of this to work!


    if (!selectableDescendants.length) {
      return;
    }

    function getNextOption() {
      var atBottom = index === selectableDescendants.length - 1;
      return atBottom ? rotate ? getFirstOption() : selectableDescendants[index] : selectableDescendants[(index + 1) % selectableDescendants.length];
    }

    function getPreviousOption() {
      var atTop = index === 0;
      return atTop ? rotate ? getLastOption() : selectableDescendants[index] : selectableDescendants[(index - 1 + selectableDescendants.length) % selectableDescendants.length];
    }

    function getFirstOption() {
      return selectableDescendants[0];
    }

    function getLastOption() {
      return selectableDescendants[selectableDescendants.length - 1];
    }

    switch (event.key) {
      case "ArrowDown":
        if (orientation === "vertical" || orientation === "both") {
          event.preventDefault();
          callback(getNextOption()[key]);
        }

        break;

      case "ArrowUp":
        if (orientation === "vertical" || orientation === "both") {
          event.preventDefault();
          callback(getPreviousOption()[key]);
        }

        break;

      case "ArrowLeft":
        if (orientation === "horizontal" || orientation === "both") {
          event.preventDefault();
          callback((rtl ? getNextOption : getPreviousOption)()[key]);
        }

        break;

      case "ArrowRight":
        if (orientation === "horizontal" || orientation === "both") {
          event.preventDefault();
          callback((rtl ? getPreviousOption : getNextOption)()[key]);
        }

        break;

      case "PageUp":
        event.preventDefault();
        callback((event.ctrlKey ? getPreviousOption : getFirstOption)()[key]);
        break;

      case "Home":
        event.preventDefault();
        callback(getFirstOption()[key]);
        break;

      case "PageDown":
        event.preventDefault();
        callback((event.ctrlKey ? getNextOption : getLastOption)()[key]);
        break;

      case "End":
        event.preventDefault();
        callback(getLastOption()[key]);
        break;
    }
  };
}


//# sourceMappingURL=descendants.esm.js.map


/***/ }),

/***/ "./block-components/gb-components/node_modules/@reach/tabs/dist/tabs.esm.js":
/*!**********************************************************************************!*\
  !*** ./block-components/gb-components/node_modules/@reach/tabs/dist/tabs.esm.js ***!
  \**********************************************************************************/
/*! exports provided: Tab, TabList, TabPanel, TabPanels, Tabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return Tab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabList", function() { return TabList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabPanel", function() { return TabPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabPanels", function() { return TabPanels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return Tabs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./block-components/gb-components/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! warning */ "./block-components/gb-components/node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reach_descendants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reach/descendants */ "./block-components/gb-components/node_modules/@reach/descendants/dist/descendants.esm.js");
/* harmony import */ var _reach_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @reach/utils */ "./block-components/gb-components/node_modules/@reach/utils/dist/utils.esm.js");
/* harmony import */ var _reach_auto_id__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @reach/auto-id */ "./block-components/gb-components/node_modules/@reach/auto-id/dist/auto-id.esm.js");







function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var TabsDescendantsContext = /*#__PURE__*/Object(_reach_descendants__WEBPACK_IMPORTED_MODULE_3__["createDescendantContext"])("TabsDescendantsContext");
var TabPanelDescendantsContext = /*#__PURE__*/Object(_reach_descendants__WEBPACK_IMPORTED_MODULE_3__["createDescendantContext"])("TabPanelDescendantsContext");
var TabsContext = /*#__PURE__*/Object(_reach_utils__WEBPACK_IMPORTED_MODULE_4__["createNamedContext"])("TabsContext", {});

var useTabsContext = function useTabsContext() {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(TabsContext);
}; ////////////////////////////////////////////////////////////////////////////////

/**
 * Tabs
 *
 * The parent component of the tab interface.
 *
 * @see Docs https://reacttraining.com/reach-ui/tabs#tabs
 */


var Tabs = /*#__PURE__*/Object(_reach_utils__WEBPACK_IMPORTED_MODULE_4__["forwardRefWithAs"])(function Tabs(_ref, ref) {
  var _props$id;

  var _ref$as = _ref.as,
      Comp = _ref$as === void 0 ? "div" : _ref$as,
      children = _ref.children,
      defaultIndex = _ref.defaultIndex,
      _ref$index = _ref.index,
      controlledIndex = _ref$index === void 0 ? undefined : _ref$index,
      onChange = _ref.onChange,
      _ref$readOnly = _ref.readOnly,
      readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
      props = _objectWithoutPropertiesLoose(_ref, ["as", "children", "defaultIndex", "index", "onChange", "readOnly"]);

  var isControlled = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(controlledIndex != null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (true) {
       true ? warning__WEBPACK_IMPORTED_MODULE_2___default()(!(isControlled.current && controlledIndex == null), "Tabs is changing from controlled to uncontrolled. Tabs should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled Tabs for the lifetime of the component. Check the `index` prop being passed in.") : undefined;
       true ? warning__WEBPACK_IMPORTED_MODULE_2___default()(!(!isControlled.current && controlledIndex != null), "Tabs is changing from uncontrolled to controlled. Tabs should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled Tabs for the lifetime of the component. Check the `index` prop being passed in.") : undefined;
    }
  }, [controlledIndex]);

  var _id = Object(_reach_auto_id__WEBPACK_IMPORTED_MODULE_5__["useId"])(props.id);

  var id = (_props$id = props.id) !== null && _props$id !== void 0 ? _props$id : Object(_reach_utils__WEBPACK_IMPORTED_MODULE_4__["makeId"])("tabs", _id);
  /*
   * We only manage focus if the user caused the update vs. a new controlled
   * index coming in.
   */

  var userInteractedRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
  var selectedPanelRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultIndex || 0),
      selectedIndex = _useState[0],
      setSelectedIndex = _useState[1];

  var _useDescendants = Object(_reach_descendants__WEBPACK_IMPORTED_MODULE_3__["useDescendants"])(),
      tabs = _useDescendants[0],
      setTabs = _useDescendants[1];

  var context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return {
      isControlled: isControlled.current,
      selectedIndex: isControlled.current ? controlledIndex : selectedIndex,
      id: id,
      userInteractedRef: userInteractedRef,
      selectedPanelRef: selectedPanelRef,
      setSelectedIndex: isControlled.current ? _reach_utils__WEBPACK_IMPORTED_MODULE_4__["noop"] : setSelectedIndex,
      onFocusPanel: function onFocusPanel() {
        var _selectedPanelRef$cur;

        (_selectedPanelRef$cur = selectedPanelRef.current) === null || _selectedPanelRef$cur === void 0 ? void 0 : _selectedPanelRef$cur.focus();
      },
      onSelectTab: readOnly ? _reach_utils__WEBPACK_IMPORTED_MODULE_4__["noop"] : function (index) {
        userInteractedRef.current = true;
        onChange && onChange(index);

        if (!isControlled.current) {
          setSelectedIndex(index);
        }
      }
    };
  }, [controlledIndex, id, onChange, readOnly, selectedIndex]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return Object(_reach_utils__WEBPACK_IMPORTED_MODULE_4__["checkStyles"])("tabs");
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_descendants__WEBPACK_IMPORTED_MODULE_3__["DescendantProvider"], {
    context: TabsDescendantsContext,
    items: tabs,
    set: setTabs
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabsContext.Provider, {
    value: context
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, Object.assign({}, props, {
    ref: ref,
    "data-reach-tabs": "",
    id: props.id
  }), children)));
});

if (true) {
  Tabs.displayName = "Tabs";
  Tabs.propTypes = {
    children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
    onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    index: function index(props, name, compName, location, propName) {
      var val = props[name];

      if (props.index > -1 && props.onChange == null && props.readOnly !== true) {
        return new Error("You provided a value prop to `" + compName + "` without an `onChange` handler. This will render a read-only tabs element. If the tabs should be mutable use `defaultIndex`. Otherwise, set `onChange`.");
      } else if (props[name] != null && !Object(_reach_utils__WEBPACK_IMPORTED_MODULE_4__["isNumber"])(props[name])) {
        return new Error("Invalid prop `" + propName + "` supplied to `" + compName + "`. Expected `number`, received `" + (Array.isArray(val) ? "array" : typeof val) + "`.");
      }

      return null;
    },
    defaultIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
  };
} ////////////////////////////////////////////////////////////////////////////////

/**
 * TabList
 *
 * The parent component of the tabs.
 *
 * @see Docs https://reacttraining.com/reach-ui/tabs#tablist
 */


var TabList = /*#__PURE__*/Object(_reach_utils__WEBPACK_IMPORTED_MODULE_4__["forwardRefWithAs"])(function TabList(_ref2, forwardedRef) {
  var children = _ref2.children,
      _ref2$as = _ref2.as,
      Comp = _ref2$as === void 0 ? "div" : _ref2$as,
      onKeyDown = _ref2.onKeyDown,
      props = _objectWithoutPropertiesLoose(_ref2, ["children", "as", "onKeyDown"]);

  var _useTabsContext = useTabsContext(),
      isControlled = _useTabsContext.isControlled,
      onSelectTab = _useTabsContext.onSelectTab,
      onFocusPanel = _useTabsContext.onFocusPanel,
      setSelectedIndex = _useTabsContext.setSelectedIndex,
      selectedIndex = _useTabsContext.selectedIndex;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(TabsDescendantsContext),
      descendants = _useContext.descendants;

  var ownRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var ref = Object(_reach_utils__WEBPACK_IMPORTED_MODULE_4__["useForkedRef"])(forwardedRef, ownRef);
  var isRTL = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (ownRef.current && (ownRef.current.ownerDocument && ownRef.current.ownerDocument.dir === "rtl" || Object(_reach_utils__WEBPACK_IMPORTED_MODULE_4__["getElementComputedStyle"])(ownRef.current, "direction") === "rtl")) {
      isRTL.current = true;
    }
  }, []);
  var handleKeyDown = Object(_reach_utils__WEBPACK_IMPORTED_MODULE_4__["wrapEvent"])(function (event) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      onFocusPanel();
    }
  }, Object(_reach_descendants__WEBPACK_IMPORTED_MODULE_3__["useDescendantKeyDown"])(TabsDescendantsContext, {
    currentIndex: selectedIndex,
    orientation: "horizontal",
    rotate: true,
    callback: onSelectTab,
    filter: function filter(tab) {
      return !tab.disabled;
    },
    rtl: isRTL.current
  }));
  Object(_reach_utils__WEBPACK_IMPORTED_MODULE_4__["useIsomorphicLayoutEffect"])(function () {
    var _descendants$selected;

    /*
     * In the event an uncontrolled component's selected index is disabled,
     * (this should only happen if the first tab is disabled and no default
     * index is set), we need to override the selection to the next selectable
     * index value.
     */
    if (!isControlled && Object(_reach_utils__WEBPACK_IMPORTED_MODULE_4__["boolOrBoolString"])((_descendants$selected = descendants[selectedIndex]) === null || _descendants$selected === void 0 ? void 0 : _descendants$selected.disabled)) {
      var next = descendants.find(function (tab) {
        return !tab.disabled;
      });

      if (next) {
        setSelectedIndex(next.index);
      }
    }
  }, [descendants, isControlled, selectedIndex, setSelectedIndex]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, Object.assign({
    role: "tablist"
  }, props, {
    "data-reach-tab-list": "",
    ref: ref,
    onKeyDown: Object(_reach_utils__WEBPACK_IMPORTED_MODULE_4__["wrapEvent"])(onKeyDown, handleKeyDown)
  }), react__WEBPACK_IMPORTED_MODULE_0__["Children"].map(children, function (child, index) {
    /*
     * TODO: Since refactoring to use context rather than depending on
     * parent/child relationships, we need to update our recommendations for
     * animations that break when we don't forward the `isSelected` prop
     * to our tabs. We will remove this in 1.0 and update our docs
     * accordingly.
     */
    return Object(_reach_utils__WEBPACK_IMPORTED_MODULE_4__["cloneValidElement"])(child, {
      isSelected: index === selectedIndex
    });
  }));
});

if (true) {
  TabList.displayName = "TabList";
  TabList.propTypes = {
    as: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
    children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
  };
} ////////////////////////////////////////////////////////////////////////////////

/**
 * Tab
 *
 * The interactive element that changes the selected panel.
 *
 * @see Docs https://reacttraining.com/reach-ui/tabs#tab
 */


var Tab = /*#__PURE__*/Object(_reach_utils__WEBPACK_IMPORTED_MODULE_4__["forwardRefWithAs"])(function Tab(_ref3, forwardedRef) {
  var children = _ref3.children,
      _ref3$as = _ref3.as,
      Comp = _ref3$as === void 0 ? "button" : _ref3$as,
      disabled = _ref3.disabled,
      props = _objectWithoutPropertiesLoose(_ref3, ["children", "isSelected", "as", "disabled"]);

  var _useTabsContext2 = useTabsContext(),
      tabsId = _useTabsContext2.id,
      onSelectTab = _useTabsContext2.onSelectTab,
      selectedIndex = _useTabsContext2.selectedIndex,
      userInteractedRef = _useTabsContext2.userInteractedRef;

  var ownRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var ref = Object(_reach_utils__WEBPACK_IMPORTED_MODULE_4__["useForkedRef"])(forwardedRef, ownRef);
  var index = Object(_reach_descendants__WEBPACK_IMPORTED_MODULE_3__["useDescendant"])({
    element: ownRef.current,
    context: TabsDescendantsContext,
    disabled: !!disabled
  });
  var isSelected = index === selectedIndex;

  function onSelect() {
    onSelectTab(index);
  }

  Object(_reach_utils__WEBPACK_IMPORTED_MODULE_4__["useUpdateEffect"])(function () {
    if (isSelected && ownRef.current && userInteractedRef.current) {
      userInteractedRef.current = false;
      ownRef.current.focus();
    }
  }, [isSelected]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, Object.assign({
    role: "tab",
    "aria-controls": Object(_reach_utils__WEBPACK_IMPORTED_MODULE_4__["makeId"])(tabsId, "panel", index),
    "aria-disabled": disabled,
    "aria-selected": isSelected
  }, props, {
    ref: ref,
    "data-reach-tab": "",
    "data-selected": isSelected ? "" : undefined,
    disabled: disabled,
    id: Object(_reach_utils__WEBPACK_IMPORTED_MODULE_4__["makeId"])(tabsId, "tab", index),
    onClick: onSelect,
    tabIndex: isSelected ? 0 : -1
  }), children);
});

if (true) {
  Tab.displayName = "Tab";
  Tab.propTypes = {
    children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
    disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
  };
} ////////////////////////////////////////////////////////////////////////////////

/**
 * TabPanels
 *
 * The parent component of the panels.
 *
 * @see Docs https://reacttraining.com/reach-ui/tabs#tabpanels
 */


var TabPanels = /*#__PURE__*/Object(_reach_utils__WEBPACK_IMPORTED_MODULE_4__["forwardRefWithAs"])(function TabPanels(_ref4, forwardedRef) {
  var children = _ref4.children,
      _ref4$as = _ref4.as,
      Comp = _ref4$as === void 0 ? "div" : _ref4$as,
      props = _objectWithoutPropertiesLoose(_ref4, ["children", "as"]);

  var _useDescendants2 = Object(_reach_descendants__WEBPACK_IMPORTED_MODULE_3__["useDescendants"])(),
      tabPanels = _useDescendants2[0],
      setTabPanels = _useDescendants2[1];

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_descendants__WEBPACK_IMPORTED_MODULE_3__["DescendantProvider"], {
    context: TabPanelDescendantsContext,
    items: tabPanels,
    set: setTabPanels
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, Object.assign({}, props, {
    ref: forwardedRef,
    "data-reach-tab-panels": ""
  }), children));
});

if (true) {
  TabPanels.displayName = "TabPanels";
  TabPanels.propTypes = {
    as: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
    children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
  };
} ////////////////////////////////////////////////////////////////////////////////

/**
 * TabPanel
 *
 * The panel that displays when it's corresponding tab is active.
 *
 * @see Docs https://reacttraining.com/reach-ui/tabs#tabpanel
 */


var TabPanel = /*#__PURE__*/Object(_reach_utils__WEBPACK_IMPORTED_MODULE_4__["forwardRefWithAs"])(function TabPanel(_ref5, forwardedRef) {
  var children = _ref5.children,
      _ref5$as = _ref5.as,
      Comp = _ref5$as === void 0 ? "div" : _ref5$as,
      props = _objectWithoutPropertiesLoose(_ref5, ["children", "as"]);

  var _useTabsContext3 = useTabsContext(),
      selectedPanelRef = _useTabsContext3.selectedPanelRef,
      selectedIndex = _useTabsContext3.selectedIndex,
      tabsId = _useTabsContext3.id;

  var ownRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var index = Object(_reach_descendants__WEBPACK_IMPORTED_MODULE_3__["useDescendant"])({
    element: ownRef.current,
    context: TabPanelDescendantsContext
  });
  var isSelected = index === selectedIndex;
  var id = Object(_reach_utils__WEBPACK_IMPORTED_MODULE_4__["makeId"])(tabsId, "panel", index);
  var ref = Object(_reach_utils__WEBPACK_IMPORTED_MODULE_4__["useForkedRef"])(forwardedRef, ownRef, isSelected ? selectedPanelRef : null);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, Object.assign({
    hidden: !isSelected,
    role: "tabpanel",
    "aria-labelledby": Object(_reach_utils__WEBPACK_IMPORTED_MODULE_4__["makeId"])(tabsId, "tab", index)
  }, props, {
    ref: ref,
    "data-reach-tab-panel": "",
    id: id,
    tabIndex: isSelected ? 0 : -1
  }), children);
});

if (true) {
  TabPanel.displayName = "TabPanel";
  TabPanel.propTypes = {
    as: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
    children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
  };
}


//# sourceMappingURL=tabs.esm.js.map


/***/ }),

/***/ "./block-components/gb-components/node_modules/@reach/utils/dist/utils.esm.js":
/*!************************************************************************************!*\
  !*** ./block-components/gb-components/node_modules/@reach/utils/dist/utils.esm.js ***!
  \************************************************************************************/
/*! exports provided: assignRef, boolOrBoolString, canUseDOM, checkStyles, cloneValidElement, createNamedContext, forwardRefWithAs, getElementComputedStyle, getOwnerDocument, getScrollbarOffset, isBoolean, isFunction, isNumber, isRightClick, isString, makeId, noop, ponyfillGlobal, stateToAttributeString, useConstant, useControlledSwitchWarning, useFocusChange, useForkedRef, useIsomorphicLayoutEffect, usePrevious, useStateLogger, useUpdateEffect, wrapEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignRef", function() { return assignRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boolOrBoolString", function() { return boolOrBoolString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canUseDOM", function() { return canUseDOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkStyles", function() { return checkStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneValidElement", function() { return cloneValidElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNamedContext", function() { return createNamedContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forwardRefWithAs", function() { return forwardRefWithAs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElementComputedStyle", function() { return getElementComputedStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOwnerDocument", function() { return getOwnerDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScrollbarOffset", function() { return getScrollbarOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return isBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRightClick", function() { return isRightClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeId", function() { return makeId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ponyfillGlobal", function() { return ponyfillGlobal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stateToAttributeString", function() { return stateToAttributeString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useConstant", function() { return useConstant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useControlledSwitchWarning", function() { return useControlledSwitchWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFocusChange", function() { return useFocusChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useForkedRef", function() { return useForkedRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIsomorphicLayoutEffect", function() { return useIsomorphicLayoutEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePrevious", function() { return usePrevious; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStateLogger", function() { return useStateLogger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUpdateEffect", function() { return useUpdateEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapEvent", function() { return wrapEvent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! warning */ "./block-components/gb-components/node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_1__);



/* eslint-disable no-restricted-globals, eqeqeq,  */
/**
 * React currently throws a warning when using useLayoutEffect on the server.
 * To get around it, we can conditionally useEffect on the server (no-op) and
 * useLayoutEffect in the browser. We occasionally need useLayoutEffect to
 * ensure we don't get a render flash for certain operations, but we may also
 * need affected components to render on the server. One example is when setting
 * a component's descendants to retrieve their index values.
 *
 * Important to note that using this hook as an escape hatch will break the
 * eslint dependency warnings unless you rename the import to `useLayoutEffect`.
 * Use sparingly only when the effect won't effect the rendered HTML to avoid
 * any server/client mismatch.
 *
 * If a useLayoutEffect is needed and the result would create a mismatch, it's
 * likely that the component in question shouldn't be rendered on the server at
 * all, so a better approach would be to lazily render those in a parent
 * component after client-side hydration.
 *
 * TODO: We are calling useLayoutEffect in a couple of places that will likely
 * cause some issues for SSR users, whether the warning shows or not. Audit and
 * fix these.
 *
 * https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
 * https://github.com/reduxjs/react-redux/blob/master/src/utils/useIsomorphicLayoutEffect.js
 *
 * @param effect
 * @param deps
 */

var useIsomorphicLayoutEffect = /*#__PURE__*/canUseDOM() ? react__WEBPACK_IMPORTED_MODULE_0___default.a.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect;
var checkedPkgs = {};
/**
 * When in dev mode, checks that styles for a given @reach package are loaded.
 *
 * @param packageName Name of the package to check.
 * @example checkStyles("dialog") will check for styles for @reach/dialog
 */
// @ts-ignore

var checkStyles = function checkStyles(packageName) {
  return void packageName;
};

if (true) {
  // In CJS files, process.env.NODE_ENV is stripped from our build, but we need
  // it to prevent style checks from clogging up user logs while testing.
  // This is a workaround until we can tweak the build a bit to accommodate.
  var _ref = typeof process !== "undefined" ? process : {
    env: {
      NODE_ENV: "development"
    }
  },
      env = _ref.env;

  checkStyles = function checkStyles(packageName) {
    // only check once per package
    if (checkedPkgs[packageName]) return;
    checkedPkgs[packageName] = true;

    if (env.NODE_ENV !== "test" && parseInt(window.getComputedStyle(document.body).getPropertyValue("--reach-" + packageName), 10) !== 1) {
      console.warn("@reach/" + packageName + " styles not found. If you are using a bundler like webpack or parcel include this in the entry file of your app before any of your own styles:\n\n    import \"@reach/" + packageName + "/styles.css\";\n\n  Otherwise you'll need to include them some other way:\n\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"node_modules/@reach/" + packageName + "/styles.css\" />\n\n  For more information visit https://ui.reach.tech/styling.\n  ");
    }
  };
}
/**
 * Ponyfill for the global object in some environments.
 *
 * @link https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
 */

var ponyfillGlobal = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self :
/*#__PURE__*/
// eslint-disable-next-line no-new-func
Function("return this")();
/**
 * Passes or assigns an arbitrary value to a ref function or object.
 *
 * @param ref
 * @param value
 */

function assignRef(ref, value) {
  if (ref == null) return;

  if (isFunction(ref)) {
    ref(value);
  } else {
    try {
      ref.current = value;
    } catch (error) {
      throw new Error("Cannot assign value \"" + value + "\" to ref \"" + ref + "\"");
    }
  }
}
/**
 * Checks true|"true" vs false|"false"
 *
 * @param value
 */

function boolOrBoolString(value) {
  return value === "true" ? true : isBoolean(value) ? value : false;
}
function canUseDOM() {
  return typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
}
/**
 * Type-safe clone element
 *
 * @param element
 * @param props
 * @param children
 */

function cloneValidElement(element, props) {
  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(element) ? react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"].apply(void 0, [element, props].concat(children)) : element;
}
function createNamedContext(name, defaultValue) {
  var Ctx = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(defaultValue);
  Ctx.displayName = name;
  return Ctx;
}
/**
 * This is a hack for sure. The thing is, getting a component to intelligently
 * infer props based on a component or JSX string passed into an `as` prop is
 * kind of a huge pain. Getting it to work and satisfy the constraints of
 * `forwardRef` seems dang near impossible. To avoid needing to do this awkward
 * type song-and-dance every time we want to forward a ref into a component
 * that accepts an `as` prop, we abstract all of that mess to this function for
 * the time time being.
 *
 * TODO: Eventually we should probably just try to get the type defs above
 * working across the board, but ain't nobody got time for that mess!
 *
 * @param Comp
 */

function forwardRefWithAs(comp) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(comp);
}
/**
 * Get a computed style value by property, backwards compatible with IE
 * @param element
 * @param styleProp
 */

function getElementComputedStyle(element, styleProp) {
  var y = null;
  var doc = getOwnerDocument(element);

  if (element.currentStyle) {
    y = element.currentStyle[styleProp];
  } else if (doc && doc.defaultView && isFunction(doc.defaultView.getComputedStyle)) {
    y = doc.defaultView.getComputedStyle(element, null).getPropertyValue(styleProp);
  }

  return y;
}
/**
 * Get an element's owner document. Useful when components are used in iframes
 * or other environments like dev tools.
 *
 * @param element
 */

function getOwnerDocument(element) {
  return element && element.ownerDocument ? element.ownerDocument : canUseDOM() ? document : null;
}
/**
 * Get the scrollbar offset distance.
 */

function getScrollbarOffset() {
  try {
    if (window.innerWidth > document.documentElement.clientWidth) {
      return window.innerWidth - document.documentElement.clientWidth;
    }
  } catch (err) {}

  return 0;
}
/**
 * Checks whether or not a value is a boolean.
 *
 * @param value
 */

function isBoolean(value) {
  return typeof value === "boolean";
}
/**
 * Checks whether or not a value is a function.
 *
 * @param value
 */

function isFunction(value) {
  return !!(value && {}.toString.call(value) == "[object Function]");
}
/**
 * Checks whether or not a value is a number.
 *
 * @param value
 */

function isNumber(value) {
  return typeof value === "number";
}
/**
 * Detects right clicks
 *
 * @param nativeEvent
 */

function isRightClick(nativeEvent) {
  return nativeEvent.which === 3 || nativeEvent.button === 2;
}
/**
 * Checks whether or not a value is a string.
 *
 * @param value
 */

function isString(value) {
  return typeof value === "string";
}
/**
 * Joins strings to format IDs for compound components.
 *
 * @param args
 */

function makeId() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return args.filter(function (val) {
    return val != null;
  }).join("--");
}
/**
 * No-op function.
 */

function noop() {}
/**
 * Convert our state strings for HTML data attributes.
 * No need for a fancy kebab-caser here, we know what our state strings are!
 *
 * @param state
 */

function stateToAttributeString(state) {
  return String(state).replace(/([\s_]+)/g, "-").toLowerCase();
}
/**
 * Logs a warning in dev mode when a component switches from controlled to
 * uncontrolled, or vice versa
 *
 * A single prop should typically be used to determine whether or not a
 * component is controlled or not.
 *
 * @param controlPropValue
 * @param controlPropName
 * @param componentName
 */

function useControlledSwitchWarning(controlPropValue, controlPropName, componentName) {
  /*
   * Determine whether or not the component is controlled and warn the developer
   * if this changes unexpectedly.
   */
  var isControlled = controlPropValue != null;

  var _useRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(isControlled),
      wasControlled = _useRef.current;

  var effect = noop;

  if (true) {
    effect = function effect() {
       true ? warning__WEBPACK_IMPORTED_MODULE_1___default()(!(!isControlled && wasControlled), "`" + componentName + "` is changing from uncontrolled to be controlled. Reach UI components should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled `" + componentName + "` for the lifetime of the component. Check the `" + controlPropName + "` prop.") : undefined;
       true ? warning__WEBPACK_IMPORTED_MODULE_1___default()(!(!isControlled && wasControlled), "`" + componentName + "` is changing from controlled to be uncontrolled. Reach UI components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled `" + componentName + "` for the lifetime of the component. Check the `" + controlPropName + "` prop.") : undefined;
    };
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(effect, [componentName, controlPropName, isControlled]);
}
/**
 * React hook for creating a value exactly once.
 * @see https://github.com/Andarist/use-constant
 */

function useConstant(fn) {
  var ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef();

  if (!ref.current) {
    ref.current = {
      v: fn()
    };
  }

  return ref.current.v;
}
/**
 * Detect when focus changes in our document.
 *
 * @param handleChange
 * @param when
 * @param ownerDocument
 */

function useFocusChange(handleChange, when, ownerDocument) {
  if (handleChange === void 0) {
    handleChange = console.log;
  }

  if (when === void 0) {
    when = "focus";
  }

  if (ownerDocument === void 0) {
    ownerDocument = document;
  }

  var lastActiveElement = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(ownerDocument.activeElement);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    lastActiveElement.current = ownerDocument.activeElement;

    function onChange(event) {
      if (lastActiveElement.current !== ownerDocument.activeElement) {
        handleChange(ownerDocument.activeElement, lastActiveElement.current, event);
        lastActiveElement.current = ownerDocument.activeElement;
      }
    }

    ownerDocument.addEventListener(when, onChange, true);
    return function () {
      ownerDocument.removeEventListener(when, onChange);
    };
  }, [when, handleChange, ownerDocument]);
}
/**
 * Passes or assigns a value to multiple refs (typically a DOM node). Useful for
 * dealing with components that need an explicit ref for DOM calculations but
 * also forwards refs assigned by an app.
 *
 * @param refs Refs to fork
 */

function useForkedRef() {
  for (var _len3 = arguments.length, refs = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    refs[_key3] = arguments[_key3];
  }

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    if (refs.every(function (ref) {
      return ref == null;
    })) {
      return null;
    }

    return function (node) {
      refs.forEach(function (ref) {
        assignRef(ref, node);
      });
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refs);
}
/**
 * Returns the previous value of a reference after a component update.
 *
 * @param value
 */

function usePrevious(value) {
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    ref.current = value;
  }, [value]);
  return ref.current;
}
/**
 * Call an effect after a component update, skipping the initial mount.
 *
 * @param effect Effect to call
 * @param deps Effect dependency list
 */

function useUpdateEffect(effect, deps) {
  var mounted = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (mounted.current) {
      effect();
    } else {
      mounted.current = true;
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, deps);
}
/**
 * Just a lil state logger
 *
 * @param state
 * @param DEBUG
 */

function useStateLogger(state, DEBUG) {
  if (DEBUG === void 0) {
    DEBUG = false;
  }

  var effect = noop;

  if (true) {
    if (DEBUG) {
      effect = function effect() {
        console.group("State Updated");
        console.log("%c" + state, "font-weight: normal; font-size: 120%; font-style: italic;");
        console.groupEnd();
      };
    }
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(effect, [state]);
}
/**
 * Wraps a lib-defined event handler and a user-defined event handler, returning
 * a single handler that allows a user to prevent lib-defined handlers from
 * firing.
 *
 * @param theirHandler User-supplied event handler
 * @param ourHandler Library-supplied event handler
 */

function wrapEvent(theirHandler, ourHandler) {
  return function (event) {
    theirHandler && theirHandler(event);

    if (!event.defaultPrevented) {
      return ourHandler(event);
    }
  };
}


//# sourceMappingURL=utils.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./block-components/gb-components/node_modules/autobind-decorator/lib/index.js":
/*!*************************************************************************************!*\
  !*** ./block-components/gb-components/node_modules/autobind-decorator/lib/index.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @copyright 2015, Andrey Popp <8mayday@gmail.com>
 *
 * The decorator may be used on classes or methods
 * ```
 * @autobind
 * class FullBound {}
 *
 * class PartBound {
 *   @autobind
 *   method () {}
 * }
 * ```
 */


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = autobind;

function autobind() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (args.length === 1) {
    return boundClass.apply(undefined, args);
  } else {
    return boundMethod.apply(undefined, args);
  }
}

/**
 * Use boundMethod to bind all methods on the target.prototype
 */
function boundClass(target) {
  // (Using reflect to get all keys including symbols)
  var keys = undefined;
  // Use Reflect if exists
  if (typeof Reflect !== 'undefined' && typeof Reflect.ownKeys === 'function') {
    keys = Reflect.ownKeys(target.prototype);
  } else {
    keys = Object.getOwnPropertyNames(target.prototype);
    // use symbols if support is provided
    if (typeof Object.getOwnPropertySymbols === 'function') {
      keys = keys.concat(Object.getOwnPropertySymbols(target.prototype));
    }
  }

  keys.forEach(function (key) {
    // Ignore special case target method
    if (key === 'constructor') {
      return;
    }

    var descriptor = Object.getOwnPropertyDescriptor(target.prototype, key);

    // Only methods need binding
    if (typeof descriptor.value === 'function') {
      Object.defineProperty(target.prototype, key, boundMethod(target, key, descriptor));
    }
  });
  return target;
}

/**
 * Return a descriptor removing the value and returning a getter
 * The getter will return a .bind version of the function
 * and memoize the result against a symbol on the instance
 */
function boundMethod(target, key, descriptor) {
  var fn = descriptor.value;

  if (typeof fn !== 'function') {
    throw new Error('@autobind decorator can only be applied to methods not: ' + typeof fn);
  }

  // In IE11 calling Object.defineProperty has a side-effect of evaluating the
  // getter for the property which is being replaced. This causes infinite
  // recursion and an "Out of stack space" error.
  var definingProperty = false;

  return {
    configurable: true,
    get: function get() {
      if (definingProperty || this === target.prototype || this.hasOwnProperty(key)) {
        return fn;
      }

      var boundFn = fn.bind(this);
      definingProperty = true;
      Object.defineProperty(this, key, {
        value: boundFn,
        configurable: true,
        writable: true
      });
      definingProperty = false;
      return boundFn;
    }
  };
}
module.exports = exports['default'];


/***/ }),

/***/ "./block-components/gb-components/node_modules/countup.js/dist/countUp.min.js":
/*!************************************************************************************!*\
  !*** ./block-components/gb-components/node_modules/countup.js/dist/countUp.min.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(a,n){ true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (n),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,function(a,n,t){var e=function(a,n,t,e,i,r){function o(a){var n,t,e,i,r,o,s=a<0;if(a=Math.abs(a).toFixed(l.decimals),a+="",n=a.split("."),t=n[0],e=n.length>1?l.options.decimal+n[1]:"",l.options.useGrouping){for(i="",r=0,o=t.length;r<o;++r)0!==r&&r%3===0&&(i=l.options.separator+i),i=t[o-r-1]+i;t=i}return l.options.numerals.length&&(t=t.replace(/[0-9]/g,function(a){return l.options.numerals[+a]}),e=e.replace(/[0-9]/g,function(a){return l.options.numerals[+a]})),(s?"-":"")+l.options.prefix+t+e+l.options.suffix}function s(a,n,t,e){return t*(-Math.pow(2,-10*a/e)+1)*1024/1023+n}function u(a){return"number"==typeof a&&!isNaN(a)}var l=this;if(l.version=function(){return"1.9.3"},l.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:s,formattingFn:o,prefix:"",suffix:"",numerals:[]},r&&"object"==typeof r)for(var m in l.options)r.hasOwnProperty(m)&&null!==r[m]&&(l.options[m]=r[m]);""===l.options.separator?l.options.useGrouping=!1:l.options.separator=""+l.options.separator;for(var d=0,c=["webkit","moz","ms","o"],f=0;f<c.length&&!window.requestAnimationFrame;++f)window.requestAnimationFrame=window[c[f]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[c[f]+"CancelAnimationFrame"]||window[c[f]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(a,n){var t=(new Date).getTime(),e=Math.max(0,16-(t-d)),i=window.setTimeout(function(){a(t+e)},e);return d=t+e,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)}),l.initialize=function(){return!!l.initialized||(l.error="",l.d="string"==typeof a?document.getElementById(a):a,l.d?(l.startVal=Number(n),l.endVal=Number(t),u(l.startVal)&&u(l.endVal)?(l.decimals=Math.max(0,e||0),l.dec=Math.pow(10,l.decimals),l.duration=1e3*Number(i)||2e3,l.countDown=l.startVal>l.endVal,l.frameVal=l.startVal,l.initialized=!0,!0):(l.error="[CountUp] startVal ("+n+") or endVal ("+t+") is not a number",!1)):(l.error="[CountUp] target is null or undefined",!1))},l.printValue=function(a){var n=l.options.formattingFn(a);"INPUT"===l.d.tagName?this.d.value=n:"text"===l.d.tagName||"tspan"===l.d.tagName?this.d.textContent=n:this.d.innerHTML=n},l.count=function(a){l.startTime||(l.startTime=a),l.timestamp=a;var n=a-l.startTime;l.remaining=l.duration-n,l.options.useEasing?l.countDown?l.frameVal=l.startVal-l.options.easingFn(n,0,l.startVal-l.endVal,l.duration):l.frameVal=l.options.easingFn(n,l.startVal,l.endVal-l.startVal,l.duration):l.countDown?l.frameVal=l.startVal-(l.startVal-l.endVal)*(n/l.duration):l.frameVal=l.startVal+(l.endVal-l.startVal)*(n/l.duration),l.countDown?l.frameVal=l.frameVal<l.endVal?l.endVal:l.frameVal:l.frameVal=l.frameVal>l.endVal?l.endVal:l.frameVal,l.frameVal=Math.round(l.frameVal*l.dec)/l.dec,l.printValue(l.frameVal),n<l.duration?l.rAF=requestAnimationFrame(l.count):l.callback&&l.callback()},l.start=function(a){l.initialize()&&(l.callback=a,l.rAF=requestAnimationFrame(l.count))},l.pauseResume=function(){l.paused?(l.paused=!1,delete l.startTime,l.duration=l.remaining,l.startVal=l.frameVal,requestAnimationFrame(l.count)):(l.paused=!0,cancelAnimationFrame(l.rAF))},l.reset=function(){l.paused=!1,delete l.startTime,l.initialized=!1,l.initialize()&&(cancelAnimationFrame(l.rAF),l.printValue(l.startVal))},l.update=function(a){if(l.initialize()){if(a=Number(a),!u(a))return void(l.error="[CountUp] update() - new endVal is not a number: "+a);l.error="",a!==l.frameVal&&(cancelAnimationFrame(l.rAF),l.paused=!1,delete l.startTime,l.startVal=l.frameVal,l.endVal=a,l.countDown=l.startVal>l.endVal,l.rAF=requestAnimationFrame(l.count))}},l.initialize()&&l.printValue(l.startVal)};return e});

/***/ }),

/***/ "./block-components/gb-components/node_modules/debug/src/browser.js":
/*!**************************************************************************!*\
  !*** ./block-components/gb-components/node_modules/debug/src/browser.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(/*! ./debug */ "./block-components/gb-components/node_modules/debug/src/debug.js");
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./block-components/gb-components/node_modules/debug/src/debug.js":
/*!************************************************************************!*\
  !*** ./block-components/gb-components/node_modules/debug/src/debug.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(/*! ms */ "./block-components/gb-components/node_modules/ms/index.js");

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  return debug;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),

/***/ "./block-components/gb-components/node_modules/jsonp/index.js":
/*!********************************************************************!*\
  !*** ./block-components/gb-components/node_modules/jsonp/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies
 */

var debug = __webpack_require__(/*! debug */ "./block-components/gb-components/node_modules/debug/src/browser.js")('jsonp');

/**
 * Module exports.
 */

module.exports = jsonp;

/**
 * Callback index.
 */

var count = 0;

/**
 * Noop function.
 */

function noop(){}

/**
 * JSONP handler
 *
 * Options:
 *  - param {String} qs parameter (`callback`)
 *  - prefix {String} qs parameter (`__jp`)
 *  - name {String} qs parameter (`prefix` + incr)
 *  - timeout {Number} how long after a timeout error is emitted (`60000`)
 *
 * @param {String} url
 * @param {Object|Function} optional options / callback
 * @param {Function} optional callback
 */

function jsonp(url, opts, fn){
  if ('function' == typeof opts) {
    fn = opts;
    opts = {};
  }
  if (!opts) opts = {};

  var prefix = opts.prefix || '__jp';

  // use the callback name that was passed if one was provided.
  // otherwise generate a unique name by incrementing our counter.
  var id = opts.name || (prefix + (count++));

  var param = opts.param || 'callback';
  var timeout = null != opts.timeout ? opts.timeout : 60000;
  var enc = encodeURIComponent;
  var target = document.getElementsByTagName('script')[0] || document.head;
  var script;
  var timer;


  if (timeout) {
    timer = setTimeout(function(){
      cleanup();
      if (fn) fn(new Error('Timeout'));
    }, timeout);
  }

  function cleanup(){
    if (script.parentNode) script.parentNode.removeChild(script);
    window[id] = noop;
    if (timer) clearTimeout(timer);
  }

  function cancel(){
    if (window[id]) {
      cleanup();
    }
  }

  window[id] = function(data){
    debug('jsonp got', data);
    cleanup();
    if (fn) fn(null, data);
  };

  // add qs component
  url += (~url.indexOf('?') ? '&' : '?') + param + '=' + enc(id);
  url = url.replace('?&', '?');

  debug('jsonp req "%s"', url);

  // create script
  script = document.createElement('script');
  script.src = url;
  target.parentNode.insertBefore(script, target);

  return cancel;
}


/***/ }),

/***/ "./block-components/gb-components/node_modules/ms/index.js":
/*!*****************************************************************!*\
  !*** ./block-components/gb-components/node_modules/ms/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}


/***/ }),

/***/ "./block-components/gb-components/node_modules/object-assign/index.js":
/*!****************************************************************************!*\
  !*** ./block-components/gb-components/node_modules/object-assign/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./block-components/gb-components/node_modules/prop-types/checkPropTypes.js":
/*!**********************************************************************************!*\
  !*** ./block-components/gb-components/node_modules/prop-types/checkPropTypes.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./block-components/gb-components/node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./block-components/gb-components/node_modules/prop-types/factoryWithTypeCheckers.js":
/*!*******************************************************************************************!*\
  !*** ./block-components/gb-components/node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./block-components/gb-components/node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./block-components/gb-components/node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./block-components/gb-components/node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./block-components/gb-components/node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./block-components/gb-components/node_modules/prop-types/index.js":
/*!*************************************************************************!*\
  !*** ./block-components/gb-components/node_modules/prop-types/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./block-components/gb-components/node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./block-components/gb-components/node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./block-components/gb-components/node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!********************************************************************************************!*\
  !*** ./block-components/gb-components/node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./block-components/gb-components/node_modules/react-countup/build/index.js":
/*!**********************************************************************************!*\
  !*** ./block-components/gb-components/node_modules/react-countup/build/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var PropTypes = _interopDefault(__webpack_require__(/*! prop-types */ "./block-components/gb-components/node_modules/prop-types/index.js"));
var React = __webpack_require__(/*! react */ "react");
var React__default = _interopDefault(React);
var warning = _interopDefault(__webpack_require__(/*! warning */ "./block-components/gb-components/node_modules/warning/warning.js"));
var CountUp$1 = _interopDefault(__webpack_require__(/*! countup.js */ "./block-components/gb-components/node_modules/countup.js/dist/countUp.min.js"));

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var createCountUpInstance = function createCountUpInstance(el, props) {
  var decimal = props.decimal,
      decimals = props.decimals,
      duration = props.duration,
      easingFn = props.easingFn,
      end = props.end,
      formattingFn = props.formattingFn,
      prefix = props.prefix,
      separator = props.separator,
      start = props.start,
      suffix = props.suffix,
      useEasing = props.useEasing;
  return new CountUp$1(el, start, end, decimals, duration, {
    decimal: decimal,
    easingFn: easingFn,
    formattingFn: formattingFn,
    separator: separator,
    prefix: prefix,
    suffix: suffix,
    useEasing: useEasing,
    useGrouping: !!separator
  });
};

var CountUp =
/*#__PURE__*/
function (_Component) {
  _inherits(CountUp, _Component);

  function CountUp() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CountUp);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CountUp)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "createInstance", function () {
      if (typeof _this.props.children === 'function') {
        // Warn when user didn't use containerRef at all
        warning(_this.containerRef.current && (_this.containerRef.current instanceof HTMLElement || _this.containerRef.current instanceof SVGTextElement || _this.containerRef.current instanceof SVGTSpanElement), "Couldn't find attached element to hook the CountUp instance into! Try to attach \"containerRef\" from the render prop to a an HTMLElement, eg. <span ref={containerRef} />.");
      }

      return createCountUpInstance(_this.containerRef.current, _this.props);
    });

    _defineProperty(_assertThisInitialized(_this), "pauseResume", function () {
      var _assertThisInitialize = _assertThisInitialized(_this),
          reset = _assertThisInitialize.reset,
          start = _assertThisInitialize.restart,
          update = _assertThisInitialize.update;

      var onPauseResume = _this.props.onPauseResume;

      _this.instance.pauseResume();

      onPauseResume({
        reset: reset,
        start: start,
        update: update
      });
    });

    _defineProperty(_assertThisInitialized(_this), "reset", function () {
      var _assertThisInitialize2 = _assertThisInitialized(_this),
          pauseResume = _assertThisInitialize2.pauseResume,
          start = _assertThisInitialize2.restart,
          update = _assertThisInitialize2.update;

      var onReset = _this.props.onReset;

      _this.instance.reset();

      onReset({
        pauseResume: pauseResume,
        start: start,
        update: update
      });
    });

    _defineProperty(_assertThisInitialized(_this), "restart", function () {
      _this.reset();

      _this.start();
    });

    _defineProperty(_assertThisInitialized(_this), "start", function () {
      var _assertThisInitialize3 = _assertThisInitialized(_this),
          pauseResume = _assertThisInitialize3.pauseResume,
          reset = _assertThisInitialize3.reset,
          start = _assertThisInitialize3.restart,
          update = _assertThisInitialize3.update;

      var _this$props = _this.props,
          delay = _this$props.delay,
          onEnd = _this$props.onEnd,
          onStart = _this$props.onStart;

      var run = function run() {
        return _this.instance.start(function () {
          return onEnd({
            pauseResume: pauseResume,
            reset: reset,
            start: start,
            update: update
          });
        });
      }; // Delay start if delay prop is properly set


      if (delay > 0) {
        _this.timeoutId = setTimeout(run, delay * 1000);
      } else {
        run();
      }

      onStart({
        pauseResume: pauseResume,
        reset: reset,
        update: update
      });
    });

    _defineProperty(_assertThisInitialized(_this), "update", function (newEnd) {
      var _assertThisInitialize4 = _assertThisInitialized(_this),
          pauseResume = _assertThisInitialize4.pauseResume,
          reset = _assertThisInitialize4.reset,
          start = _assertThisInitialize4.restart;

      var onUpdate = _this.props.onUpdate;

      _this.instance.update(newEnd);

      onUpdate({
        pauseResume: pauseResume,
        reset: reset,
        start: start
      });
    });

    _defineProperty(_assertThisInitialized(_this), "containerRef", React__default.createRef());

    return _this;
  }

  _createClass(CountUp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          delay = _this$props2.delay;
      this.instance = this.createInstance(); // Don't invoke start if component is used as a render prop

      if (typeof children === 'function' && delay !== 0) return; // Otherwise just start immediately

      this.start();
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var _this$props3 = this.props,
          end = _this$props3.end,
          start = _this$props3.start,
          suffix = _this$props3.suffix,
          prefix = _this$props3.prefix,
          redraw = _this$props3.redraw,
          duration = _this$props3.duration,
          separator = _this$props3.separator,
          decimals = _this$props3.decimals,
          decimal = _this$props3.decimal;
      var hasCertainPropsChanged = duration !== nextProps.duration || end !== nextProps.end || start !== nextProps.start || suffix !== nextProps.suffix || prefix !== nextProps.prefix || separator !== nextProps.separator || decimals !== nextProps.decimals || decimal !== nextProps.decimal;
      return hasCertainPropsChanged || redraw;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // If duration, suffix, prefix, separator or start has changed
      // there's no way to update the values.
      // So we need to re-create the CountUp instance in order to
      // restart it.
      var _this$props4 = this.props,
          end = _this$props4.end,
          start = _this$props4.start,
          suffix = _this$props4.suffix,
          prefix = _this$props4.prefix,
          duration = _this$props4.duration,
          separator = _this$props4.separator,
          decimals = _this$props4.decimals,
          decimal = _this$props4.decimal,
          preserveValue = _this$props4.preserveValue;

      if (duration !== prevProps.duration || start !== prevProps.start || suffix !== prevProps.suffix || prefix !== prevProps.prefix || separator !== prevProps.separator || decimals !== prevProps.decimals || decimal !== prevProps.decimal) {
        this.instance.reset();
        this.instance = this.createInstance();
        this.start();
      } // Only end value has changed, so reset and and re-animate with the updated
      // end value.


      if (end !== prevProps.end) {
        if (!preserveValue) {
          this.instance.reset();
        }

        this.instance.update(end);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }

      this.instance.reset();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          children = _this$props5.children,
          className = _this$props5.className,
          style = _this$props5.style;
      var containerRef = this.containerRef,
          pauseResume = this.pauseResume,
          reset = this.reset,
          restart = this.restart,
          update = this.update;

      if (typeof children === 'function') {
        return children({
          countUpRef: containerRef,
          pauseResume: pauseResume,
          reset: reset,
          start: restart,
          update: update
        });
      }

      return React__default.createElement("span", {
        className: className,
        ref: containerRef,
        style: style
      });
    }
  }]);

  return CountUp;
}(React.Component);

_defineProperty(CountUp, "propTypes", {
  decimal: PropTypes.string,
  decimals: PropTypes.number,
  delay: PropTypes.number,
  easingFn: PropTypes.func,
  end: PropTypes.number.isRequired,
  formattingFn: PropTypes.func,
  onEnd: PropTypes.func,
  onStart: PropTypes.func,
  prefix: PropTypes.string,
  redraw: PropTypes.bool,
  separator: PropTypes.string,
  start: PropTypes.number,
  startOnMount: PropTypes.bool,
  suffix: PropTypes.string,
  style: PropTypes.object,
  useEasing: PropTypes.bool,
  preserveValue: PropTypes.bool
});

_defineProperty(CountUp, "defaultProps", {
  decimal: '.',
  decimals: 0,
  delay: null,
  duration: null,
  easingFn: null,
  formattingFn: null,
  onEnd: function onEnd() {},
  onPauseResume: function onPauseResume() {},
  onReset: function onReset() {},
  onStart: function onStart() {},
  onUpdate: function onUpdate() {},
  prefix: '',
  redraw: false,
  separator: '',
  start: 0,
  startOnMount: true,
  suffix: '',
  style: undefined,
  useEasing: true,
  preserveValue: false
});

// and just sets the innerHTML of the element.

var MOCK_ELEMENT = {
  innerHTML: null
};

var useCountUp = function useCountUp(props) {
  var _props = _objectSpread2({}, CountUp.defaultProps, {}, props);

  var start = _props.start,
      formattingFn = _props.formattingFn;

  var _useState = React.useState(typeof formattingFn === 'function' ? formattingFn(start) : start),
      _useState2 = _slicedToArray(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1];

  var countUpRef = React.useRef(null);

  var createInstance = function createInstance() {
    var countUp = createCountUpInstance(MOCK_ELEMENT, _props);
    var formattingFnRef = countUp.options.formattingFn;

    countUp.options.formattingFn = function () {
      var result = formattingFnRef.apply(void 0, arguments);
      setCount(result);
    };

    return countUp;
  };

  var getCountUp = function getCountUp() {
    var countUp = countUpRef.current;

    if (countUp !== null) {
      return countUp;
    }

    var newCountUp = createInstance();
    countUpRef.current = newCountUp;
    return newCountUp;
  };

  var reset = function reset() {
    var onReset = _props.onReset;
    getCountUp().reset();
    onReset({
      pauseResume: pauseResume,
      start: restart,
      update: update
    });
  };

  var restart = function restart() {
    var onStart = _props.onStart,
        onEnd = _props.onEnd;
    getCountUp().reset();
    getCountUp().start(function () {
      onEnd({
        pauseResume: pauseResume,
        reset: reset,
        start: restart,
        update: update
      });
    });
    onStart({
      pauseResume: pauseResume,
      reset: reset,
      update: update
    });
  };

  var pauseResume = function pauseResume() {
    var onPauseResume = _props.onPauseResume;
    getCountUp().pauseResume();
    onPauseResume({
      reset: reset,
      start: restart,
      update: update
    });
  };

  var update = function update(newEnd) {
    var onUpdate = _props.onUpdate;
    getCountUp().update(newEnd);
    onUpdate({
      pauseResume: pauseResume,
      reset: reset,
      start: restart
    });
  };

  React.useEffect(function () {
    var delay = _props.delay,
        onStart = _props.onStart,
        onEnd = _props.onEnd,
        startOnMount = _props.startOnMount;

    if (startOnMount) {
      var timeout = setTimeout(function () {
        onStart({
          pauseResume: pauseResume,
          reset: reset,
          update: update
        });
        getCountUp().start(function () {
          clearTimeout(timeout);
          onEnd({
            pauseResume: pauseResume,
            reset: reset,
            start: restart,
            update: update
          });
        });
      }, delay * 1000);
    }

    return reset;
  }, []);
  return {
    countUp: count,
    start: restart,
    pauseResume: pauseResume,
    reset: reset,
    update: update
  };
};

exports.default = CountUp;
exports.useCountUp = useCountUp;


/***/ }),

/***/ "./block-components/gb-components/node_modules/react-input-range/lib/js/index.js":
/*!***************************************************************************************!*\
  !*** ./block-components/gb-components/node_modules/react-input-range/lib/js/index.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inputRange = __webpack_require__(/*! ./input-range/input-range */ "./block-components/gb-components/node_modules/react-input-range/lib/js/input-range/input-range.js");

var _inputRange2 = _interopRequireDefault(_inputRange);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @ignore
 * @typedef {Object} ClientRect
 * @property {number} height
 * @property {number} left
 * @property {number} top
 * @property {number} width
 */

/**
 * @typedef {Object} InputRangeClassNames
 * @property {string} activeTrack
 * @property {string} disabledInputRange
 * @property {string} inputRange
 * @property {string} labelContainer
 * @property {string} maxLabel
 * @property {string} minLabel
 * @property {string} slider
 * @property {string} sliderContainer
 * @property {string} track
 * @property {string} valueLabel
 */

/**
 * @typedef {Function} LabelFormatter
 * @param {number} value
 * @param {string} type
 * @return {string}
 */

/**
 * @ignore
 * @typedef {Object} Point
 * @property {number} x
 * @property {number} y
 */

/**
 * @typedef {Object} Range
 * @property {number} min - Min value
 * @property {number} max - Max value
 */

exports.default = _inputRange2.default;
module.exports = exports['default'];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./block-components/gb-components/node_modules/react-input-range/lib/js/input-range/default-class-names.js":
/*!*****************************************************************************************************************!*\
  !*** ./block-components/gb-components/node_modules/react-input-range/lib/js/input-range/default-class-names.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Default CSS class names
 * @ignore
 * @type {InputRangeClassNames}
 */
var DEFAULT_CLASS_NAMES = {
  activeTrack: 'input-range__track input-range__track--active',
  disabledInputRange: 'input-range input-range--disabled',
  inputRange: 'input-range',
  labelContainer: 'input-range__label-container',
  maxLabel: 'input-range__label input-range__label--max',
  minLabel: 'input-range__label input-range__label--min',
  slider: 'input-range__slider',
  sliderContainer: 'input-range__slider-container',
  track: 'input-range__track input-range__track--background',
  valueLabel: 'input-range__label input-range__label--value'
};

exports.default = DEFAULT_CLASS_NAMES;
module.exports = exports['default'];
//# sourceMappingURL=default-class-names.js.map

/***/ }),

/***/ "./block-components/gb-components/node_modules/react-input-range/lib/js/input-range/input-range.js":
/*!*********************************************************************************************************!*\
  !*** ./block-components/gb-components/node_modules/react-input-range/lib/js/input-range/input-range.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./block-components/gb-components/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _autobindDecorator = __webpack_require__(/*! autobind-decorator */ "./block-components/gb-components/node_modules/autobind-decorator/lib/index.js");

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _valueTransformer = __webpack_require__(/*! ./value-transformer */ "./block-components/gb-components/node_modules/react-input-range/lib/js/input-range/value-transformer.js");

var valueTransformer = _interopRequireWildcard(_valueTransformer);

var _defaultClassNames = __webpack_require__(/*! ./default-class-names */ "./block-components/gb-components/node_modules/react-input-range/lib/js/input-range/default-class-names.js");

var _defaultClassNames2 = _interopRequireDefault(_defaultClassNames);

var _label = __webpack_require__(/*! ./label */ "./block-components/gb-components/node_modules/react-input-range/lib/js/input-range/label.js");

var _label2 = _interopRequireDefault(_label);

var _rangePropType = __webpack_require__(/*! ./range-prop-type */ "./block-components/gb-components/node_modules/react-input-range/lib/js/input-range/range-prop-type.js");

var _rangePropType2 = _interopRequireDefault(_rangePropType);

var _valuePropType = __webpack_require__(/*! ./value-prop-type */ "./block-components/gb-components/node_modules/react-input-range/lib/js/input-range/value-prop-type.js");

var _valuePropType2 = _interopRequireDefault(_valuePropType);

var _slider = __webpack_require__(/*! ./slider */ "./block-components/gb-components/node_modules/react-input-range/lib/js/input-range/slider.js");

var _slider2 = _interopRequireDefault(_slider);

var _track = __webpack_require__(/*! ./track */ "./block-components/gb-components/node_modules/react-input-range/lib/js/input-range/track.js");

var _track2 = _interopRequireDefault(_track);

var _utils = __webpack_require__(/*! ../utils */ "./block-components/gb-components/node_modules/react-input-range/lib/js/utils/index.js");

var _keyCodes = __webpack_require__(/*! ./key-codes */ "./block-components/gb-components/node_modules/react-input-range/lib/js/input-range/key-codes.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

/**
 * A React component that allows users to input numeric values within a range
 * by dragging its sliders.
 */
var InputRange = (_class = function (_React$Component) {
  _inherits(InputRange, _React$Component);

  _createClass(InputRange, null, [{
    key: 'propTypes',

    /**
     * @ignore
     * @override
     * @return {Object}
     */
    get: function get() {
      return {
        allowSameValues: _propTypes2.default.bool,
        ariaLabelledby: _propTypes2.default.string,
        ariaControls: _propTypes2.default.string,
        classNames: _propTypes2.default.objectOf(_propTypes2.default.string),
        disabled: _propTypes2.default.bool,
        draggableTrack: _propTypes2.default.bool,
        formatLabel: _propTypes2.default.func,
        maxValue: _rangePropType2.default,
        minValue: _rangePropType2.default,
        name: _propTypes2.default.string,
        onChangeStart: _propTypes2.default.func,
        onChange: _propTypes2.default.func.isRequired,
        onChangeComplete: _propTypes2.default.func,
        step: _propTypes2.default.number,
        value: _valuePropType2.default
      };
    }

    /**
     * @ignore
     * @override
     * @return {Object}
     */

  }, {
    key: 'defaultProps',
    get: function get() {
      return {
        allowSameValues: false,
        classNames: _defaultClassNames2.default,
        disabled: false,
        maxValue: 10,
        minValue: 0,
        step: 1
      };
    }

    /**
     * @param {Object} props
     * @param {boolean} [props.allowSameValues]
     * @param {string} [props.ariaLabelledby]
     * @param {string} [props.ariaControls]
     * @param {InputRangeClassNames} [props.classNames]
     * @param {boolean} [props.disabled = false]
     * @param {Function} [props.formatLabel]
     * @param {number|Range} [props.maxValue = 10]
     * @param {number|Range} [props.minValue = 0]
     * @param {string} [props.name]
     * @param {string} props.onChange
     * @param {Function} [props.onChangeComplete]
     * @param {Function} [props.onChangeStart]
     * @param {number} [props.step = 1]
     * @param {number|Range} props.value
     */

  }]);

  function InputRange(props) {
    _classCallCheck(this, InputRange);

    /**
     * @private
     * @type {?number}
     */
    var _this = _possibleConstructorReturn(this, (InputRange.__proto__ || Object.getPrototypeOf(InputRange)).call(this, props));

    _this.startValue = null;

    /**
     * @private
     * @type {?Component}
     */
    _this.node = null;

    /**
     * @private
     * @type {?Component}
     */
    _this.trackNode = null;

    /**
     * @private
     * @type {bool}
     */
    _this.isSliderDragging = false;

    /**
     * @private
     * @type {?string}
     */
    _this.lastKeyMoved = null;
    return _this;
  }

  /**
   * @ignore
   * @override
   * @return {void}
   */


  _createClass(InputRange, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeDocumentMouseUpListener();
      this.removeDocumentTouchEndListener();
    }

    /**
     * Return the CSS class name of the component
     * @private
     * @return {string}
     */

  }, {
    key: 'getComponentClassName',
    value: function getComponentClassName() {
      if (!this.props.disabled) {
        return this.props.classNames.inputRange;
      }

      return this.props.classNames.disabledInputRange;
    }

    /**
     * Return the bounding rect of the track
     * @private
     * @return {ClientRect}
     */

  }, {
    key: 'getTrackClientRect',
    value: function getTrackClientRect() {
      return this.trackNode.getClientRect();
    }

    /**
     * Return the slider key closest to a point
     * @private
     * @param {Point} position
     * @return {string}
     */

  }, {
    key: 'getKeyByPosition',
    value: function getKeyByPosition(position) {
      var values = valueTransformer.getValueFromProps(this.props, this.isMultiValue());
      var positions = valueTransformer.getPositionsFromValues(values, this.props.minValue, this.props.maxValue, this.getTrackClientRect());

      if (this.isMultiValue()) {
        var distanceToMin = (0, _utils.distanceTo)(position, positions.min);
        var distanceToMax = (0, _utils.distanceTo)(position, positions.max);

        if (distanceToMin < distanceToMax) {
          return 'min';
        }
      }

      return 'max';
    }

    /**
     * Return all the slider keys
     * @private
     * @return {string[]}
     */

  }, {
    key: 'getKeys',
    value: function getKeys() {
      if (this.isMultiValue()) {
        return ['min', 'max'];
      }

      return ['max'];
    }

    /**
     * Return true if the difference between the new and the current value is
     * greater or equal to the step amount of the component
     * @private
     * @param {Range} values
     * @return {boolean}
     */

  }, {
    key: 'hasStepDifference',
    value: function hasStepDifference(values) {
      var currentValues = valueTransformer.getValueFromProps(this.props, this.isMultiValue());

      return (0, _utils.length)(values.min, currentValues.min) >= this.props.step || (0, _utils.length)(values.max, currentValues.max) >= this.props.step;
    }

    /**
     * Return true if the component accepts a min and max value
     * @private
     * @return {boolean}
     */

  }, {
    key: 'isMultiValue',
    value: function isMultiValue() {
      return (0, _utils.isObject)(this.props.value);
    }

    /**
     * Return true if the range is within the max and min value of the component
     * @private
     * @param {Range} values
     * @return {boolean}
     */

  }, {
    key: 'isWithinRange',
    value: function isWithinRange(values) {
      if (this.isMultiValue()) {
        return values.min >= this.props.minValue && values.max <= this.props.maxValue && this.props.allowSameValues ? values.min <= values.max : values.min < values.max;
      }

      return values.max >= this.props.minValue && values.max <= this.props.maxValue;
    }

    /**
     * Return true if the new value should trigger a render
     * @private
     * @param {Range} values
     * @return {boolean}
     */

  }, {
    key: 'shouldUpdate',
    value: function shouldUpdate(values) {
      return this.isWithinRange(values) && this.hasStepDifference(values);
    }

    /**
     * Update the position of a slider
     * @private
     * @param {string} key
     * @param {Point} position
     * @return {void}
     */

  }, {
    key: 'updatePosition',
    value: function updatePosition(key, position) {
      var values = valueTransformer.getValueFromProps(this.props, this.isMultiValue());
      var positions = valueTransformer.getPositionsFromValues(values, this.props.minValue, this.props.maxValue, this.getTrackClientRect());

      positions[key] = position;
      this.lastKeyMoved = key;

      this.updatePositions(positions);
    }

    /**
     * Update the positions of multiple sliders
     * @private
     * @param {Object} positions
     * @param {Point} positions.min
     * @param {Point} positions.max
     * @return {void}
     */

  }, {
    key: 'updatePositions',
    value: function updatePositions(positions) {
      var values = {
        min: valueTransformer.getValueFromPosition(positions.min, this.props.minValue, this.props.maxValue, this.getTrackClientRect()),
        max: valueTransformer.getValueFromPosition(positions.max, this.props.minValue, this.props.maxValue, this.getTrackClientRect())
      };

      var transformedValues = {
        min: valueTransformer.getStepValueFromValue(values.min, this.props.step),
        max: valueTransformer.getStepValueFromValue(values.max, this.props.step)
      };

      this.updateValues(transformedValues);
    }

    /**
     * Update the value of a slider
     * @private
     * @param {string} key
     * @param {number} value
     * @return {void}
     */

  }, {
    key: 'updateValue',
    value: function updateValue(key, value) {
      var values = valueTransformer.getValueFromProps(this.props, this.isMultiValue());

      values[key] = value;

      this.updateValues(values);
    }

    /**
     * Update the values of multiple sliders
     * @private
     * @param {Range|number} values
     * @return {void}
     */

  }, {
    key: 'updateValues',
    value: function updateValues(values) {
      if (!this.shouldUpdate(values)) {
        return;
      }

      this.props.onChange(this.isMultiValue() ? values : values.max);
    }

    /**
     * Increment the value of a slider by key name
     * @private
     * @param {string} key
     * @return {void}
     */

  }, {
    key: 'incrementValue',
    value: function incrementValue(key) {
      var values = valueTransformer.getValueFromProps(this.props, this.isMultiValue());
      var value = values[key] + this.props.step;

      this.updateValue(key, value);
    }

    /**
     * Decrement the value of a slider by key name
     * @private
     * @param {string} key
     * @return {void}
     */

  }, {
    key: 'decrementValue',
    value: function decrementValue(key) {
      var values = valueTransformer.getValueFromProps(this.props, this.isMultiValue());
      var value = values[key] - this.props.step;

      this.updateValue(key, value);
    }

    /**
     * Listen to mouseup event
     * @private
     * @return {void}
     */

  }, {
    key: 'addDocumentMouseUpListener',
    value: function addDocumentMouseUpListener() {
      this.removeDocumentMouseUpListener();
      this.node.ownerDocument.addEventListener('mouseup', this.handleMouseUp);
    }

    /**
     * Listen to touchend event
     * @private
     * @return {void}
     */

  }, {
    key: 'addDocumentTouchEndListener',
    value: function addDocumentTouchEndListener() {
      this.removeDocumentTouchEndListener();
      this.node.ownerDocument.addEventListener('touchend', this.handleTouchEnd);
    }

    /**
     * Stop listening to mouseup event
     * @private
     * @return {void}
     */

  }, {
    key: 'removeDocumentMouseUpListener',
    value: function removeDocumentMouseUpListener() {
      this.node.ownerDocument.removeEventListener('mouseup', this.handleMouseUp);
    }

    /**
     * Stop listening to touchend event
     * @private
     * @return {void}
     */

  }, {
    key: 'removeDocumentTouchEndListener',
    value: function removeDocumentTouchEndListener() {
      this.node.ownerDocument.removeEventListener('touchend', this.handleTouchEnd);
    }

    /**
     * Handle any "mousemove" event received by the slider
     * @private
     * @param {SyntheticEvent} event
     * @param {string} key
     * @return {void}
     */

  }, {
    key: 'handleSliderDrag',
    value: function handleSliderDrag(event, key) {
      var _this2 = this;

      if (this.props.disabled) {
        return;
      }

      var position = valueTransformer.getPositionFromEvent(event, this.getTrackClientRect());
      this.isSliderDragging = true;
      requestAnimationFrame(function () {
        return _this2.updatePosition(key, position);
      });
    }

    /**
     * Handle any "mousemove" event received by the track
     * @private
     * @param {SyntheticEvent} event
     * @return {void}
     */

  }, {
    key: 'handleTrackDrag',
    value: function handleTrackDrag(event, prevEvent) {
      if (this.props.disabled || !this.props.draggableTrack || this.isSliderDragging) {
        return;
      }

      var _props = this.props,
          maxValue = _props.maxValue,
          minValue = _props.minValue,
          _props$value = _props.value,
          max = _props$value.max,
          min = _props$value.min;


      var position = valueTransformer.getPositionFromEvent(event, this.getTrackClientRect());
      var value = valueTransformer.getValueFromPosition(position, minValue, maxValue, this.getTrackClientRect());
      var stepValue = valueTransformer.getStepValueFromValue(value, this.props.step);

      var prevPosition = valueTransformer.getPositionFromEvent(prevEvent, this.getTrackClientRect());
      var prevValue = valueTransformer.getValueFromPosition(prevPosition, minValue, maxValue, this.getTrackClientRect());
      var prevStepValue = valueTransformer.getStepValueFromValue(prevValue, this.props.step);

      var offset = prevStepValue - stepValue;

      var transformedValues = {
        min: min - offset,
        max: max - offset
      };

      this.updateValues(transformedValues);
    }

    /**
     * Handle any "keydown" event received by the slider
     * @private
     * @param {SyntheticEvent} event
     * @param {string} key
     * @return {void}
     */

  }, {
    key: 'handleSliderKeyDown',
    value: function handleSliderKeyDown(event, key) {
      if (this.props.disabled) {
        return;
      }

      switch (event.keyCode) {
        case _keyCodes.LEFT_ARROW:
        case _keyCodes.DOWN_ARROW:
          event.preventDefault();
          this.decrementValue(key);
          break;

        case _keyCodes.RIGHT_ARROW:
        case _keyCodes.UP_ARROW:
          event.preventDefault();
          this.incrementValue(key);
          break;

        default:
          break;
      }
    }

    /**
     * Handle any "mousedown" event received by the track
     * @private
     * @param {SyntheticEvent} event
     * @param {Point} position
     * @return {void}
     */

  }, {
    key: 'handleTrackMouseDown',
    value: function handleTrackMouseDown(event, position) {
      if (this.props.disabled) {
        return;
      }

      var _props2 = this.props,
          maxValue = _props2.maxValue,
          minValue = _props2.minValue,
          _props2$value = _props2.value,
          max = _props2$value.max,
          min = _props2$value.min;


      event.preventDefault();

      var value = valueTransformer.getValueFromPosition(position, minValue, maxValue, this.getTrackClientRect());
      var stepValue = valueTransformer.getStepValueFromValue(value, this.props.step);

      if (!this.props.draggableTrack || stepValue > max || stepValue < min) {
        this.updatePosition(this.getKeyByPosition(position), position);
      }
    }

    /**
     * Handle the start of any mouse/touch event
     * @private
     * @return {void}
     */

  }, {
    key: 'handleInteractionStart',
    value: function handleInteractionStart() {
      if (this.props.onChangeStart) {
        this.props.onChangeStart(this.props.value);
      }

      if (this.props.onChangeComplete && !(0, _utils.isDefined)(this.startValue)) {
        this.startValue = this.props.value;
      }
    }

    /**
     * Handle the end of any mouse/touch event
     * @private
     * @return {void}
     */

  }, {
    key: 'handleInteractionEnd',
    value: function handleInteractionEnd() {
      if (this.isSliderDragging) {
        this.isSliderDragging = false;
      }

      if (!this.props.onChangeComplete || !(0, _utils.isDefined)(this.startValue)) {
        return;
      }

      if (this.startValue !== this.props.value) {
        this.props.onChangeComplete(this.props.value);
      }

      this.startValue = null;
    }

    /**
     * Handle any "keydown" event received by the component
     * @private
     * @param {SyntheticEvent} event
     * @return {void}
     */

  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(event) {
      this.handleInteractionStart(event);
    }

    /**
     * Handle any "keyup" event received by the component
     * @private
     * @param {SyntheticEvent} event
     * @return {void}
     */

  }, {
    key: 'handleKeyUp',
    value: function handleKeyUp(event) {
      this.handleInteractionEnd(event);
    }

    /**
     * Handle any "mousedown" event received by the component
     * @private
     * @param {SyntheticEvent} event
     * @return {void}
     */

  }, {
    key: 'handleMouseDown',
    value: function handleMouseDown(event) {
      this.handleInteractionStart(event);
      this.addDocumentMouseUpListener();
    }

    /**
     * Handle any "mouseup" event received by the component
     * @private
     * @param {SyntheticEvent} event
     */

  }, {
    key: 'handleMouseUp',
    value: function handleMouseUp(event) {
      this.handleInteractionEnd(event);
      this.removeDocumentMouseUpListener();
    }

    /**
     * Handle any "touchstart" event received by the component
     * @private
     * @param {SyntheticEvent} event
     * @return {void}
     */

  }, {
    key: 'handleTouchStart',
    value: function handleTouchStart(event) {
      this.handleInteractionStart(event);
      this.addDocumentTouchEndListener();
    }

    /**
     * Handle any "touchend" event received by the component
     * @private
     * @param {SyntheticEvent} event
     */

  }, {
    key: 'handleTouchEnd',
    value: function handleTouchEnd(event) {
      this.handleInteractionEnd(event);
      this.removeDocumentTouchEndListener();
    }

    /**
     * Return JSX of sliders
     * @private
     * @return {JSX.Element}
     */

  }, {
    key: 'renderSliders',
    value: function renderSliders() {
      var _this3 = this;

      var values = valueTransformer.getValueFromProps(this.props, this.isMultiValue());
      var percentages = valueTransformer.getPercentagesFromValues(values, this.props.minValue, this.props.maxValue);
      var keys = this.props.allowSameValues && this.lastKeyMoved === 'min' ? this.getKeys().reverse() : this.getKeys();

      return keys.map(function (key) {
        var value = values[key];
        var percentage = percentages[key];

        var _props3 = _this3.props,
            maxValue = _props3.maxValue,
            minValue = _props3.minValue;


        if (key === 'min') {
          maxValue = values.max;
        } else {
          minValue = values.min;
        }

        var slider = _react2.default.createElement(_slider2.default, {
          ariaLabelledby: _this3.props.ariaLabelledby,
          ariaControls: _this3.props.ariaControls,
          classNames: _this3.props.classNames,
          formatLabel: _this3.props.formatLabel,
          key: key,
          maxValue: maxValue,
          minValue: minValue,
          onSliderDrag: _this3.handleSliderDrag,
          onSliderKeyDown: _this3.handleSliderKeyDown,
          percentage: percentage,
          type: key,
          value: value });

        return slider;
      });
    }

    /**
     * Return JSX of hidden inputs
     * @private
     * @return {JSX.Element}
     */

  }, {
    key: 'renderHiddenInputs',
    value: function renderHiddenInputs() {
      var _this4 = this;

      if (!this.props.name) {
        return [];
      }

      var isMultiValue = this.isMultiValue();
      var values = valueTransformer.getValueFromProps(this.props, isMultiValue);

      return this.getKeys().map(function (key) {
        var value = values[key];
        var name = isMultiValue ? '' + _this4.props.name + (0, _utils.captialize)(key) : _this4.props.name;

        return _react2.default.createElement('input', { key: key, type: 'hidden', name: name, value: value });
      });
    }

    /**
     * @ignore
     * @override
     * @return {JSX.Element}
     */

  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var componentClassName = this.getComponentClassName();
      var values = valueTransformer.getValueFromProps(this.props, this.isMultiValue());
      var percentages = valueTransformer.getPercentagesFromValues(values, this.props.minValue, this.props.maxValue);

      return _react2.default.createElement(
        'div',
        {
          'aria-disabled': this.props.disabled,
          ref: function ref(node) {
            _this5.node = node;
          },
          className: componentClassName,
          onKeyDown: this.handleKeyDown,
          onKeyUp: this.handleKeyUp,
          onMouseDown: this.handleMouseDown,
          onTouchStart: this.handleTouchStart },
        _react2.default.createElement(
          _label2.default,
          {
            classNames: this.props.classNames,
            formatLabel: this.props.formatLabel,
            type: 'min' },
          this.props.minValue
        ),
        _react2.default.createElement(
          _track2.default,
          {
            classNames: this.props.classNames,
            draggableTrack: this.props.draggableTrack,
            ref: function ref(trackNode) {
              _this5.trackNode = trackNode;
            },
            percentages: percentages,
            onTrackDrag: this.handleTrackDrag,
            onTrackMouseDown: this.handleTrackMouseDown },
          this.renderSliders()
        ),
        _react2.default.createElement(
          _label2.default,
          {
            classNames: this.props.classNames,
            formatLabel: this.props.formatLabel,
            type: 'max' },
          this.props.maxValue
        ),
        this.renderHiddenInputs()
      );
    }
  }]);

  return InputRange;
}(_react2.default.Component), (_applyDecoratedDescriptor(_class.prototype, 'handleSliderDrag', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleSliderDrag'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleTrackDrag', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleTrackDrag'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleSliderKeyDown', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleSliderKeyDown'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleTrackMouseDown', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleTrackMouseDown'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleInteractionStart', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleInteractionStart'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleInteractionEnd', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleInteractionEnd'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleKeyDown', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleKeyDown'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleKeyUp', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleKeyUp'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleMouseDown', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleMouseDown'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleMouseUp', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleMouseUp'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleTouchStart', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleTouchStart'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleTouchEnd', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleTouchEnd'), _class.prototype)), _class);
exports.default = InputRange;
module.exports = exports['default'];
//# sourceMappingURL=input-range.js.map

/***/ }),

/***/ "./block-components/gb-components/node_modules/react-input-range/lib/js/input-range/key-codes.js":
/*!*******************************************************************************************************!*\
  !*** ./block-components/gb-components/node_modules/react-input-range/lib/js/input-range/key-codes.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/** @ignore */
var DOWN_ARROW = exports.DOWN_ARROW = 40;

/** @ignore */
var LEFT_ARROW = exports.LEFT_ARROW = 37;

/** @ignore */
var RIGHT_ARROW = exports.RIGHT_ARROW = 39;

/** @ignore */
var UP_ARROW = exports.UP_ARROW = 38;
//# sourceMappingURL=key-codes.js.map

/***/ }),

/***/ "./block-components/gb-components/node_modules/react-input-range/lib/js/input-range/label.js":
/*!***************************************************************************************************!*\
  !*** ./block-components/gb-components/node_modules/react-input-range/lib/js/input-range/label.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Label;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./block-components/gb-components/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @ignore
 * @param {Object} props
 * @param {InputRangeClassNames} props.classNames
 * @param {Function} props.formatLabel
 * @param {string} props.type
 */
function Label(props) {
  var labelValue = props.formatLabel ? props.formatLabel(props.children, props.type) : props.children;

  return _react2.default.createElement(
    'span',
    { className: props.classNames[props.type + 'Label'] },
    _react2.default.createElement(
      'span',
      { className: props.classNames.labelContainer },
      labelValue
    )
  );
}

/**
 * @type {Object}
 * @property {Function} children
 * @property {Function} classNames
 * @property {Function} formatLabel
 * @property {Function} type
 */
Label.propTypes = {
  children: _propTypes2.default.node.isRequired,
  classNames: _propTypes2.default.objectOf(_propTypes2.default.string).isRequired,
  formatLabel: _propTypes2.default.func,
  type: _propTypes2.default.string.isRequired
};
module.exports = exports['default'];
//# sourceMappingURL=label.js.map

/***/ }),

/***/ "./block-components/gb-components/node_modules/react-input-range/lib/js/input-range/range-prop-type.js":
/*!*************************************************************************************************************!*\
  !*** ./block-components/gb-components/node_modules/react-input-range/lib/js/input-range/range-prop-type.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rangePropType;

var _utils = __webpack_require__(/*! ../utils */ "./block-components/gb-components/node_modules/react-input-range/lib/js/utils/index.js");

/**
 * @ignore
 * @param {Object} props - React component props
 * @return {?Error} Return Error if validation fails
 */
function rangePropType(props) {
  var maxValue = props.maxValue,
      minValue = props.minValue;


  if (!(0, _utils.isNumber)(minValue) || !(0, _utils.isNumber)(maxValue)) {
    return new Error('"minValue" and "maxValue" must be a number');
  }

  if (minValue >= maxValue) {
    return new Error('"minValue" must be smaller than "maxValue"');
  }
}
module.exports = exports['default'];
//# sourceMappingURL=range-prop-type.js.map

/***/ }),

/***/ "./block-components/gb-components/node_modules/react-input-range/lib/js/input-range/slider.js":
/*!****************************************************************************************************!*\
  !*** ./block-components/gb-components/node_modules/react-input-range/lib/js/input-range/slider.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./block-components/gb-components/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _autobindDecorator = __webpack_require__(/*! autobind-decorator */ "./block-components/gb-components/node_modules/autobind-decorator/lib/index.js");

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _label = __webpack_require__(/*! ./label */ "./block-components/gb-components/node_modules/react-input-range/lib/js/input-range/label.js");

var _label2 = _interopRequireDefault(_label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

/**
 * @ignore
 */
var Slider = (_class = function (_React$Component) {
  _inherits(Slider, _React$Component);

  _createClass(Slider, null, [{
    key: 'propTypes',

    /**
     * Accepted propTypes of Slider
     * @override
     * @return {Object}
     * @property {Function} ariaLabelledby
     * @property {Function} ariaControls
     * @property {Function} className
     * @property {Function} formatLabel
     * @property {Function} maxValue
     * @property {Function} minValue
     * @property {Function} onSliderDrag
     * @property {Function} onSliderKeyDown
     * @property {Function} percentage
     * @property {Function} type
     * @property {Function} value
     */
    get: function get() {
      return {
        ariaLabelledby: _propTypes2.default.string,
        ariaControls: _propTypes2.default.string,
        classNames: _propTypes2.default.objectOf(_propTypes2.default.string).isRequired,
        formatLabel: _propTypes2.default.func,
        maxValue: _propTypes2.default.number,
        minValue: _propTypes2.default.number,
        onSliderDrag: _propTypes2.default.func.isRequired,
        onSliderKeyDown: _propTypes2.default.func.isRequired,
        percentage: _propTypes2.default.number.isRequired,
        type: _propTypes2.default.string.isRequired,
        value: _propTypes2.default.number.isRequired
      };
    }

    /**
     * @param {Object} props
     * @param {string} [props.ariaLabelledby]
     * @param {string} [props.ariaControls]
     * @param {InputRangeClassNames} props.classNames
     * @param {Function} [props.formatLabel]
     * @param {number} [props.maxValue]
     * @param {number} [props.minValue]
     * @param {Function} props.onSliderKeyDown
     * @param {Function} props.onSliderDrag
     * @param {number} props.percentage
     * @param {number} props.type
     * @param {number} props.value
     */

  }]);

  function Slider(props) {
    _classCallCheck(this, Slider);

    /**
     * @private
     * @type {?Component}
     */
    var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));

    _this.node = null;
    return _this;
  }

  /**
   * @ignore
   * @override
   * @return {void}
   */


  _createClass(Slider, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeDocumentMouseMoveListener();
      this.removeDocumentMouseUpListener();
      this.removeDocumentTouchEndListener();
      this.removeDocumentTouchMoveListener();
    }

    /**
     * @private
     * @return {Object}
     */

  }, {
    key: 'getStyle',
    value: function getStyle() {
      var perc = (this.props.percentage || 0) * 100;
      var style = {
        position: 'absolute',
        left: perc + '%'
      };

      return style;
    }

    /**
     * Listen to mousemove event
     * @private
     * @return {void}
     */

  }, {
    key: 'addDocumentMouseMoveListener',
    value: function addDocumentMouseMoveListener() {
      this.removeDocumentMouseMoveListener();
      this.node.ownerDocument.addEventListener('mousemove', this.handleMouseMove);
    }

    /**
     * Listen to mouseup event
     * @private
     * @return {void}
     */

  }, {
    key: 'addDocumentMouseUpListener',
    value: function addDocumentMouseUpListener() {
      this.removeDocumentMouseUpListener();
      this.node.ownerDocument.addEventListener('mouseup', this.handleMouseUp);
    }

    /**
     * Listen to touchmove event
     * @private
     * @return {void}
     */

  }, {
    key: 'addDocumentTouchMoveListener',
    value: function addDocumentTouchMoveListener() {
      this.removeDocumentTouchMoveListener();
      this.node.ownerDocument.addEventListener('touchmove', this.handleTouchMove);
    }

    /**
     * Listen to touchend event
     * @private
     * @return {void}
     */

  }, {
    key: 'addDocumentTouchEndListener',
    value: function addDocumentTouchEndListener() {
      this.removeDocumentTouchEndListener();
      this.node.ownerDocument.addEventListener('touchend', this.handleTouchEnd);
    }

    /**
     * @private
     * @return {void}
     */

  }, {
    key: 'removeDocumentMouseMoveListener',
    value: function removeDocumentMouseMoveListener() {
      this.node.ownerDocument.removeEventListener('mousemove', this.handleMouseMove);
    }

    /**
     * @private
     * @return {void}
     */

  }, {
    key: 'removeDocumentMouseUpListener',
    value: function removeDocumentMouseUpListener() {
      this.node.ownerDocument.removeEventListener('mouseup', this.handleMouseUp);
    }

    /**
     * @private
     * @return {void}
     */

  }, {
    key: 'removeDocumentTouchMoveListener',
    value: function removeDocumentTouchMoveListener() {
      this.node.ownerDocument.removeEventListener('touchmove', this.handleTouchMove);
    }

    /**
     * @private
     * @return {void}
     */

  }, {
    key: 'removeDocumentTouchEndListener',
    value: function removeDocumentTouchEndListener() {
      this.node.ownerDocument.removeEventListener('touchend', this.handleTouchEnd);
    }

    /**
     * @private
     * @return {void}
     */

  }, {
    key: 'handleMouseDown',
    value: function handleMouseDown() {
      this.addDocumentMouseMoveListener();
      this.addDocumentMouseUpListener();
    }

    /**
     * @private
     * @return {void}
     */

  }, {
    key: 'handleMouseUp',
    value: function handleMouseUp() {
      this.removeDocumentMouseMoveListener();
      this.removeDocumentMouseUpListener();
    }

    /**
     * @private
     * @param {SyntheticEvent} event
     * @return {void}
     */

  }, {
    key: 'handleMouseMove',
    value: function handleMouseMove(event) {
      this.props.onSliderDrag(event, this.props.type);
    }

    /**
     * @private
     * @return {void}
     */

  }, {
    key: 'handleTouchStart',
    value: function handleTouchStart() {
      this.addDocumentTouchEndListener();
      this.addDocumentTouchMoveListener();
    }

    /**
     * @private
     * @param {SyntheticEvent} event
     * @return {void}
     */

  }, {
    key: 'handleTouchMove',
    value: function handleTouchMove(event) {
      this.props.onSliderDrag(event, this.props.type);
    }

    /**
     * @private
     * @return {void}
     */

  }, {
    key: 'handleTouchEnd',
    value: function handleTouchEnd() {
      this.removeDocumentTouchMoveListener();
      this.removeDocumentTouchEndListener();
    }

    /**
     * @private
     * @param {SyntheticEvent} event
     * @return {void}
     */

  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(event) {
      this.props.onSliderKeyDown(event, this.props.type);
    }

    /**
     * @override
     * @return {JSX.Element}
     */

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var style = this.getStyle();

      return _react2.default.createElement(
        'span',
        {
          className: this.props.classNames.sliderContainer,
          ref: function ref(node) {
            _this2.node = node;
          },
          style: style },
        _react2.default.createElement(
          _label2.default,
          {
            classNames: this.props.classNames,
            formatLabel: this.props.formatLabel,
            type: 'value' },
          this.props.value
        ),
        _react2.default.createElement('div', {
          'aria-labelledby': this.props.ariaLabelledby,
          'aria-controls': this.props.ariaControls,
          'aria-valuemax': this.props.maxValue,
          'aria-valuemin': this.props.minValue,
          'aria-valuenow': this.props.value,
          className: this.props.classNames.slider,
          draggable: 'false',
          onKeyDown: this.handleKeyDown,
          onMouseDown: this.handleMouseDown,
          onTouchStart: this.handleTouchStart,
          role: 'slider',
          tabIndex: '0' })
      );
    }
  }]);

  return Slider;
}(_react2.default.Component), (_applyDecoratedDescriptor(_class.prototype, 'handleMouseDown', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleMouseDown'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleMouseUp', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleMouseUp'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleMouseMove', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleMouseMove'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleTouchStart', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleTouchStart'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleTouchMove', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleTouchMove'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleTouchEnd', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleTouchEnd'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleKeyDown', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleKeyDown'), _class.prototype)), _class);
exports.default = Slider;
module.exports = exports['default'];
//# sourceMappingURL=slider.js.map

/***/ }),

/***/ "./block-components/gb-components/node_modules/react-input-range/lib/js/input-range/track.js":
/*!***************************************************************************************************!*\
  !*** ./block-components/gb-components/node_modules/react-input-range/lib/js/input-range/track.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./block-components/gb-components/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _autobindDecorator = __webpack_require__(/*! autobind-decorator */ "./block-components/gb-components/node_modules/autobind-decorator/lib/index.js");

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

/**
 * @ignore
 */
var Track = (_class = function (_React$Component) {
  _inherits(Track, _React$Component);

  _createClass(Track, null, [{
    key: 'propTypes',

    /**
     * @override
     * @return {Object}
     * @property {Function} children
     * @property {Function} classNames
     * @property {Boolean} draggableTrack
     * @property {Function} onTrackDrag
     * @property {Function} onTrackMouseDown
     * @property {Function} percentages
     */
    get: function get() {
      return {
        children: _propTypes2.default.node.isRequired,
        classNames: _propTypes2.default.objectOf(_propTypes2.default.string).isRequired,
        draggableTrack: _propTypes2.default.bool,
        onTrackDrag: _propTypes2.default.func,
        onTrackMouseDown: _propTypes2.default.func.isRequired,
        percentages: _propTypes2.default.objectOf(_propTypes2.default.number).isRequired
      };
    }

    /**
     * @param {Object} props
     * @param {InputRangeClassNames} props.classNames
     * @param {Boolean} props.draggableTrack
     * @param {Function} props.onTrackDrag
     * @param {Function} props.onTrackMouseDown
     * @param {number} props.percentages
     */

  }]);

  function Track(props) {
    _classCallCheck(this, Track);

    /**
     * @private
     * @type {?Component}
     */
    var _this = _possibleConstructorReturn(this, (Track.__proto__ || Object.getPrototypeOf(Track)).call(this, props));

    _this.node = null;
    _this.trackDragEvent = null;
    return _this;
  }

  /**
   * @private
   * @return {ClientRect}
   */


  _createClass(Track, [{
    key: 'getClientRect',
    value: function getClientRect() {
      return this.node.getBoundingClientRect();
    }

    /**
     * @private
     * @return {Object} CSS styles
     */

  }, {
    key: 'getActiveTrackStyle',
    value: function getActiveTrackStyle() {
      var width = (this.props.percentages.max - this.props.percentages.min) * 100 + '%';
      var left = this.props.percentages.min * 100 + '%';

      return { left: left, width: width };
    }

    /**
     * Listen to mousemove event
     * @private
     * @return {void}
     */

  }, {
    key: 'addDocumentMouseMoveListener',
    value: function addDocumentMouseMoveListener() {
      this.removeDocumentMouseMoveListener();
      this.node.ownerDocument.addEventListener('mousemove', this.handleMouseMove);
    }

    /**
     * Listen to mouseup event
     * @private
     * @return {void}
     */

  }, {
    key: 'addDocumentMouseUpListener',
    value: function addDocumentMouseUpListener() {
      this.removeDocumentMouseUpListener();
      this.node.ownerDocument.addEventListener('mouseup', this.handleMouseUp);
    }

    /**
     * @private
     * @return {void}
     */

  }, {
    key: 'removeDocumentMouseMoveListener',
    value: function removeDocumentMouseMoveListener() {
      this.node.ownerDocument.removeEventListener('mousemove', this.handleMouseMove);
    }

    /**
     * @private
     * @return {void}
     */

  }, {
    key: 'removeDocumentMouseUpListener',
    value: function removeDocumentMouseUpListener() {
      this.node.ownerDocument.removeEventListener('mouseup', this.handleMouseUp);
    }

    /**
     * @private
     * @param {SyntheticEvent} event
     * @return {void}
     */

  }, {
    key: 'handleMouseMove',
    value: function handleMouseMove(event) {
      if (!this.props.draggableTrack) {
        return;
      }

      if (this.trackDragEvent !== null) {
        this.props.onTrackDrag(event, this.trackDragEvent);
      }

      this.trackDragEvent = event;
    }

    /**
     * @private
     * @return {void}
     */

  }, {
    key: 'handleMouseUp',
    value: function handleMouseUp() {
      if (!this.props.draggableTrack) {
        return;
      }

      this.removeDocumentMouseMoveListener();
      this.removeDocumentMouseUpListener();
      this.trackDragEvent = null;
    }

    /**
     * @private
     * @param {SyntheticEvent} event - User event
     */

  }, {
    key: 'handleMouseDown',
    value: function handleMouseDown(event) {
      var clientX = event.touches ? event.touches[0].clientX : event.clientX;
      var trackClientRect = this.getClientRect();
      var position = {
        x: clientX - trackClientRect.left,
        y: 0
      };

      this.props.onTrackMouseDown(event, position);

      if (this.props.draggableTrack) {
        this.addDocumentMouseMoveListener();
        this.addDocumentMouseUpListener();
      }
    }

    /**
     * @private
     * @param {SyntheticEvent} event - User event
     */

  }, {
    key: 'handleTouchStart',
    value: function handleTouchStart(event) {
      event.preventDefault();

      this.handleMouseDown(event);
    }

    /**
     * @override
     * @return {JSX.Element}
     */

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var activeTrackStyle = this.getActiveTrackStyle();

      return _react2.default.createElement(
        'div',
        {
          className: this.props.classNames.track,
          onMouseDown: this.handleMouseDown,
          onTouchStart: this.handleTouchStart,
          ref: function ref(node) {
            _this2.node = node;
          } },
        _react2.default.createElement('div', {
          style: activeTrackStyle,
          className: this.props.classNames.activeTrack }),
        this.props.children
      );
    }
  }]);

  return Track;
}(_react2.default.Component), (_applyDecoratedDescriptor(_class.prototype, 'handleMouseMove', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleMouseMove'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleMouseUp', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleMouseUp'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleMouseDown', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleMouseDown'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleTouchStart', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleTouchStart'), _class.prototype)), _class);
exports.default = Track;
module.exports = exports['default'];
//# sourceMappingURL=track.js.map

/***/ }),

/***/ "./block-components/gb-components/node_modules/react-input-range/lib/js/input-range/value-prop-type.js":
/*!*************************************************************************************************************!*\
  !*** ./block-components/gb-components/node_modules/react-input-range/lib/js/input-range/value-prop-type.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = valuePropType;

var _utils = __webpack_require__(/*! ../utils */ "./block-components/gb-components/node_modules/react-input-range/lib/js/utils/index.js");

/**
 * @ignore
 * @param {Object} props
 * @return {?Error} Return Error if validation fails
 */
function valuePropType(props, propName) {
  var maxValue = props.maxValue,
      minValue = props.minValue;

  var value = props[propName];

  if (!(0, _utils.isNumber)(value) && (!(0, _utils.isObject)(value) || !(0, _utils.isNumber)(value.min) || !(0, _utils.isNumber)(value.max))) {
    return new Error('"' + propName + '" must be a number or a range object');
  }

  if ((0, _utils.isNumber)(value) && (value < minValue || value > maxValue)) {
    return new Error('"' + propName + '" must be in between "minValue" and "maxValue"');
  }

  if ((0, _utils.isObject)(value) && (value.min < minValue || value.min > maxValue || value.max < minValue || value.max > maxValue)) {
    return new Error('"' + propName + '" must be in between "minValue" and "maxValue"');
  }
}
module.exports = exports['default'];
//# sourceMappingURL=value-prop-type.js.map

/***/ }),

/***/ "./block-components/gb-components/node_modules/react-input-range/lib/js/input-range/value-transformer.js":
/*!***************************************************************************************************************!*\
  !*** ./block-components/gb-components/node_modules/react-input-range/lib/js/input-range/value-transformer.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.getPercentageFromPosition = getPercentageFromPosition;
exports.getValueFromPosition = getValueFromPosition;
exports.getValueFromProps = getValueFromProps;
exports.getPercentageFromValue = getPercentageFromValue;
exports.getPercentagesFromValues = getPercentagesFromValues;
exports.getPositionFromValue = getPositionFromValue;
exports.getPositionsFromValues = getPositionsFromValues;
exports.getPositionFromEvent = getPositionFromEvent;
exports.getStepValueFromValue = getStepValueFromValue;

var _utils = __webpack_require__(/*! ../utils */ "./block-components/gb-components/node_modules/react-input-range/lib/js/utils/index.js");

/**
 * Convert a point into a percentage value
 * @ignore
 * @param {Point} position
 * @param {ClientRect} clientRect
 * @return {number} Percentage value
 */
function getPercentageFromPosition(position, clientRect) {
  var length = clientRect.width;
  var sizePerc = position.x / length;

  return sizePerc || 0;
}

/**
 * Convert a point into a model value
 * @ignore
 * @param {Point} position
 * @param {number} minValue
 * @param {number} maxValue
 * @param {ClientRect} clientRect
 * @return {number}
 */
function getValueFromPosition(position, minValue, maxValue, clientRect) {
  var sizePerc = getPercentageFromPosition(position, clientRect);
  var valueDiff = maxValue - minValue;

  return minValue + valueDiff * sizePerc;
}

/**
 * Convert props into a range value
 * @ignore
 * @param {Object} props
 * @param {boolean} isMultiValue
 * @return {Range}
 */
function getValueFromProps(props, isMultiValue) {
  if (isMultiValue) {
    return _extends({}, props.value);
  }

  return {
    min: props.minValue,
    max: props.value
  };
}

/**
 * Convert a model value into a percentage value
 * @ignore
 * @param {number} value
 * @param {number} minValue
 * @param {number} maxValue
 * @return {number}
 */
function getPercentageFromValue(value, minValue, maxValue) {
  var validValue = (0, _utils.clamp)(value, minValue, maxValue);
  var valueDiff = maxValue - minValue;
  var valuePerc = (validValue - minValue) / valueDiff;

  return valuePerc || 0;
}

/**
 * Convert model values into percentage values
 * @ignore
 * @param {Range} values
 * @param {number} minValue
 * @param {number} maxValue
 * @return {Range}
 */
function getPercentagesFromValues(values, minValue, maxValue) {
  return {
    min: getPercentageFromValue(values.min, minValue, maxValue),
    max: getPercentageFromValue(values.max, minValue, maxValue)
  };
}

/**
 * Convert a value into a point
 * @ignore
 * @param {number} value
 * @param {number} minValue
 * @param {number} maxValue
 * @param {ClientRect} clientRect
 * @return {Point} Position
 */
function getPositionFromValue(value, minValue, maxValue, clientRect) {
  var length = clientRect.width;
  var valuePerc = getPercentageFromValue(value, minValue, maxValue);
  var positionValue = valuePerc * length;

  return {
    x: positionValue,
    y: 0
  };
}

/**
 * Convert a range of values into points
 * @ignore
 * @param {Range} values
 * @param {number} minValue
 * @param {number} maxValue
 * @param {ClientRect} clientRect
 * @return {Range}
 */
function getPositionsFromValues(values, minValue, maxValue, clientRect) {
  return {
    min: getPositionFromValue(values.min, minValue, maxValue, clientRect),
    max: getPositionFromValue(values.max, minValue, maxValue, clientRect)
  };
}

/**
 * Convert an event into a point
 * @ignore
 * @param {Event} event
 * @param {ClientRect} clientRect
 * @return {Point}
 */
function getPositionFromEvent(event, clientRect) {
  var length = clientRect.width;

  var _ref = event.touches ? event.touches[0] : event,
      clientX = _ref.clientX;

  return {
    x: (0, _utils.clamp)(clientX - clientRect.left, 0, length),
    y: 0
  };
}

/**
 * Convert a value into a step value
 * @ignore
 * @param {number} value
 * @param {number} valuePerStep
 * @return {number}
 */
function getStepValueFromValue(value, valuePerStep) {
  return Math.round(value / valuePerStep) * valuePerStep;
}
//# sourceMappingURL=value-transformer.js.map

/***/ }),

/***/ "./block-components/gb-components/node_modules/react-input-range/lib/js/utils/captialize.js":
/*!**************************************************************************************************!*\
  !*** ./block-components/gb-components/node_modules/react-input-range/lib/js/utils/captialize.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = captialize;
/**
 * Captialize a string
 * @ignore
 * @param {string} string
 * @return {string}
 */
function captialize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
module.exports = exports["default"];
//# sourceMappingURL=captialize.js.map

/***/ }),

/***/ "./block-components/gb-components/node_modules/react-input-range/lib/js/utils/clamp.js":
/*!*********************************************************************************************!*\
  !*** ./block-components/gb-components/node_modules/react-input-range/lib/js/utils/clamp.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = clamp;
/**
 * Clamp a value between a min and max value
 * @ignore
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
module.exports = exports["default"];
//# sourceMappingURL=clamp.js.map

/***/ }),

/***/ "./block-components/gb-components/node_modules/react-input-range/lib/js/utils/distance-to.js":
/*!***************************************************************************************************!*\
  !*** ./block-components/gb-components/node_modules/react-input-range/lib/js/utils/distance-to.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = distanceTo;
/**
 * Calculate the distance between pointA and pointB
 * @ignore
 * @param {Point} pointA
 * @param {Point} pointB
 * @return {number} Distance
 */
function distanceTo(pointA, pointB) {
  var xDiff = Math.pow(pointB.x - pointA.x, 2);
  var yDiff = Math.pow(pointB.y - pointA.y, 2);

  return Math.sqrt(xDiff + yDiff);
}
module.exports = exports["default"];
//# sourceMappingURL=distance-to.js.map

/***/ }),

/***/ "./block-components/gb-components/node_modules/react-input-range/lib/js/utils/index.js":
/*!*********************************************************************************************!*\
  !*** ./block-components/gb-components/node_modules/react-input-range/lib/js/utils/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _captialize = __webpack_require__(/*! ./captialize */ "./block-components/gb-components/node_modules/react-input-range/lib/js/utils/captialize.js");

Object.defineProperty(exports, 'captialize', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_captialize).default;
  }
});

var _clamp = __webpack_require__(/*! ./clamp */ "./block-components/gb-components/node_modules/react-input-range/lib/js/utils/clamp.js");

Object.defineProperty(exports, 'clamp', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_clamp).default;
  }
});

var _distanceTo = __webpack_require__(/*! ./distance-to */ "./block-components/gb-components/node_modules/react-input-range/lib/js/utils/distance-to.js");

Object.defineProperty(exports, 'distanceTo', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_distanceTo).default;
  }
});

var _isDefined = __webpack_require__(/*! ./is-defined */ "./block-components/gb-components/node_modules/react-input-range/lib/js/utils/is-defined.js");

Object.defineProperty(exports, 'isDefined', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isDefined).default;
  }
});

var _isNumber = __webpack_require__(/*! ./is-number */ "./block-components/gb-components/node_modules/react-input-range/lib/js/utils/is-number.js");

Object.defineProperty(exports, 'isNumber', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isNumber).default;
  }
});

var _isObject = __webpack_require__(/*! ./is-object */ "./block-components/gb-components/node_modules/react-input-range/lib/js/utils/is-object.js");

Object.defineProperty(exports, 'isObject', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isObject).default;
  }
});

var _length = __webpack_require__(/*! ./length */ "./block-components/gb-components/node_modules/react-input-range/lib/js/utils/length.js");

Object.defineProperty(exports, 'length', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_length).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./block-components/gb-components/node_modules/react-input-range/lib/js/utils/is-defined.js":
/*!**************************************************************************************************!*\
  !*** ./block-components/gb-components/node_modules/react-input-range/lib/js/utils/is-defined.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDefined;
/**
 * Check if a value is defined
 * @ignore
 * @param {*} value
 * @return {boolean}
 */
function isDefined(value) {
  return value !== undefined && value !== null;
}
module.exports = exports["default"];
//# sourceMappingURL=is-defined.js.map

/***/ }),

/***/ "./block-components/gb-components/node_modules/react-input-range/lib/js/utils/is-number.js":
/*!*************************************************************************************************!*\
  !*** ./block-components/gb-components/node_modules/react-input-range/lib/js/utils/is-number.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNumber;
/**
 * Check if a value is a number
 * @ignore
 * @param {*} value
 * @return {boolean}
 */
function isNumber(value) {
  return typeof value === 'number';
}
module.exports = exports['default'];
//# sourceMappingURL=is-number.js.map

/***/ }),

/***/ "./block-components/gb-components/node_modules/react-input-range/lib/js/utils/is-object.js":
/*!*************************************************************************************************!*\
  !*** ./block-components/gb-components/node_modules/react-input-range/lib/js/utils/is-object.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isObject;
/**
 * Check if a value is an object
 * @ignore
 * @param {*} value
 * @return {boolean}
 */
function isObject(value) {
  return value !== null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object';
}
module.exports = exports['default'];
//# sourceMappingURL=is-object.js.map

/***/ }),

/***/ "./block-components/gb-components/node_modules/react-input-range/lib/js/utils/length.js":
/*!**********************************************************************************************!*\
  !*** ./block-components/gb-components/node_modules/react-input-range/lib/js/utils/length.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = length;
/**
 * Calculate the absolute difference between two numbers
 * @ignore
 * @param {number} numA
 * @param {number} numB
 * @return {number}
 */
function length(numA, numB) {
  return Math.abs(numA - numB);
}
module.exports = exports["default"];
//# sourceMappingURL=length.js.map

/***/ }),

/***/ "./block-components/gb-components/node_modules/react-is/cjs/react-is.development.js":
/*!******************************************************************************************!*\
  !*** ./block-components/gb-components/node_modules/react-is/cjs/react-is.development.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./block-components/gb-components/node_modules/react-is/index.js":
/*!***********************************************************************!*\
  !*** ./block-components/gb-components/node_modules/react-is/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./block-components/gb-components/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./block-components/gb-components/node_modules/warning/warning.js":
/*!************************************************************************!*\
  !*** ./block-components/gb-components/node_modules/warning/warning.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "development" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "./blocks/accordion/block.json":
/*!*************************************!*\
  !*** ./blocks/accordion/block.json ***!
  \*************************************/
/*! exports provided: name, category, attributes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"gutenberg-blocks-library/accordion\",\"category\":\"common\",\"attributes\":{\"accordion\":{\"type\":\"array\",\"default\":[]},\"accordionTitleTag\":{\"type\":\"string\",\"default\":\"h3\"}}}");

/***/ }),

/***/ "./blocks/accordion/src/editor.scss":
/*!******************************************!*\
  !*** ./blocks/accordion/src/editor.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./blocks/accordion/src/index.js":
/*!***************************************!*\
  !*** ./blocks/accordion/src/index.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../block.json */ "./blocks/accordion/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../block.json */ "./blocks/accordion/block.json", 1);
/* harmony import */ var _rtcamp_gb_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rtcamp/gb-components */ "./block-components/gb-components/build-module/index.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./blocks/accordion/src/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_4__);
/**
 * WordPress dependencies
 */



/**
 * External dependencies
 */


/**
 * Internal dependencies.
 */


/**
 * Block Settings.
 *
 * @type {Object}
 */

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])(_block_json__WEBPACK_IMPORTED_MODULE_2__.name, {
  /**
   * Block title.
   *
   * @type {string}
   */
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Accordion', 'gutenberg-blocks-library'),

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
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Accordion Block', 'gutenberg-blocks-library'),

  /**
   * Block category.
   *
   * @type {string}
   */
  category: _block_json__WEBPACK_IMPORTED_MODULE_2__.category,

  /**
   * Block attributes.
   *
   * @type {Object}
   */
  attributes: _block_json__WEBPACK_IMPORTED_MODULE_2__.attributes,

  /**
   * Creates editor block.
   *
   * @param {Object} props Edit props.
   *
   * @return {*}
   */
  edit: function edit(props) {
    return /*#__PURE__*/React.createElement(_rtcamp_gb_components__WEBPACK_IMPORTED_MODULE_3__["Accordion"], props);
  },

  /**
   * Save
   *
   * @param {Object} props Save props.
   *
   * @return {*}
   */
  save: function save(props) {
    return /*#__PURE__*/React.createElement(_rtcamp_gb_components__WEBPACK_IMPORTED_MODULE_3__["Accordion"].Content, props);
  }
});

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "@wordpress/api-fetch":
/*!*******************************************!*\
  !*** external {"this":["wp","apiFetch"]} ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["apiFetch"]; }());

/***/ }),

/***/ "@wordpress/block-editor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/compose":
/*!******************************************!*\
  !*** external {"this":["wp","compose"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["compose"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ }),

/***/ "@wordpress/keycodes":
/*!*******************************************!*\
  !*** external {"this":["wp","keycodes"]} ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["keycodes"]; }());

/***/ }),

/***/ "@wordpress/url":
/*!**************************************!*\
  !*** external {"this":["wp","url"]} ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["url"]; }());

/***/ }),

/***/ "lodash":
/*!**********************************!*\
  !*** external {"this":"lodash"} ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["lodash"]; }());

/***/ }),

/***/ "react":
/*!*********************************!*\
  !*** external {"this":"React"} ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map