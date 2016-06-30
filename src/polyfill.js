/*
 *	"Polyfill"
 *	author: webkostya
 *	email: homchenkokostya@gmail.com
 *	version: 1.0.0
 */

;(function(exports, undefined) {
	
	'use strict';


	/*
	 *	Prototype
	 */

	var _Document = Document.prototype,
		_Element  = Element.prototype,
		_Array  = Array.prototype,
		_String = String.prototype;


	/*
	 *	Document
	 */

	_Document.one = function( selector ) {
		return this.querySelector( selector );
	}

	_Document.query = function( selector ) {
		return [].slice.call( this.querySelectorAll( selector ) );
	}

	_Document.exist = function( selector ) {
		return this.querySelector( selector ) == null ? false : true;
	}


	/*
	 *	Element
	 */

	_Element.one = _Document.one;
	_Element.query = _Document.query;
	_Element.exist = _Document.exist;

	_Element.triggerListener = function( name ) {
		if ( 'createEvent' in document ) {
			var event = document.createEvent( 'Event' );
				event.initEvent(name, true, true);
			this.dispatchEvent( event );
		} else {
			this.fireEvent( name );
		}
	}

	_Element.setAttributes = function( attrs ) {
		for (var key in attrs) {
			this.setAttribute(key, attrs[key]);
		}

		return this;
	}

	_Element.insert = function( selector ) {
		if ( Array.isArray( selector ) ) {
			for (var i = 0; i < selector.length; i++) {
				this.appendChild( selector[i] );
			}
		} else {
			this.appendChild( selector );
		}

		return this;
	}

	_Element.matches = _Element.msMatchesSelector || _Element.mozMatchesSelector || _Element.webkitMatchesSelector || function( selector ) {
		var matches = document.query( selector ),
			_this = this;
	  	
	  	return matches.some(function( element ) {
	    	return element === _this;
	  	});
	};
	
	_Element.closest = function( selector ) {
		var element = this;

		while (element && element.nodeType === 1) {
			if ( element.matches( selector ) ) return element;

			element = element.parentNode;
		}

		return null;
	}

	_Element.insertAfter = function(element, selector) {
		var next = selector.nextSibling;
		return next ? this.insertBefore(element, next) : this.appendChild( elem );
	}

	_Element.css = function( style ) {
		for (var key in style) {
			this.style[key] = isNaN( style[key] ) ? style[key] : style[key] + 'px';
		}

		return this;
	}


	/*
	 *	String
	 */

	_String.clear = function() {
		return this.replace(/\s+/g,' ').trim();
	}


	/*
	 *	Array
	 */

	_Array.compare = function( array ) {
		return this.filter(function( value ) {
		    return array.indexOf( value ) < 0;
		});
	};


	/*
	 *	Extend
	 */

	exports._extend_ = function(def, obj) {
		for (var key in def) {
			if ( obj.hasOwnProperty( key ) ) {
				def[key] = obj[key];
			}
		}

		return def;
	}

})( this );

