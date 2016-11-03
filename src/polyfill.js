/*
 *	"Polyfill"
 *	author: Webkostya
 *	email: webkostya@icloud.com
 *  gitub: https://github.com/webkostya/Polyfill
 *	version: 1.0.3
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
	 *	Element
	 */

	_Element.matches = _Element.matches || _Element.mozMatchesSelector || _Element.msMatchesSelector || _Element.oMatchesSelector || _Element.webkitMatchesSelector || function( selector ) {
		var matches = document.query( selector );
	  	
	  	return matches.some(function( element ) {
	    	return element === this;
	  	}, this );
	}
	
	_Element.closest = _Element.closest || function( selector ) {
		var element = this;

		while (element && element.nodeType === 1) {
			if ( element.matches( selector ) ) return element;

			element = element.parentNode;
		}

		return null;
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

	_Element.one = function( selector ) {
		return this.querySelector( selector );
	}

	_Element.query = function( selector ) {
		return [].slice.call( this.querySelectorAll( selector ) );
	}

	_Element.exist = function( selector ) {
		return this.querySelector( selector ) == null ? false : true;
	}

	_Element.triggerListener = function( name ) {
		if ( 'createEvent' in document ) {
			var event = document.createEvent( 'Event' );
				event.initEvent(name, true, true);
			this.dispatchEvent( event );
		} else {
			this.fireEvent( name );
		}
	}

	_Element.addDelegateListener = function(method, selector, callback) {
		this.addEventListener(method, function( event ) {
			var target = event.target,
				element = target.closest( selector );
			
			if ( !element || !this.contains( element ) ) return;

			callback.apply( this );
		});
	}


	/*
	 *	Document
	 */

	_Document.one = _Element.one;
	_Document.query = _Element.query;
	_Document.exist = _Element.exist;

	_Document.triggerListener = _Element.triggerListener;
	_Document.addDelegateListener = _Element.addDelegateListener;


	/*
	 *	String
	 */

	_String.clear = function() {
		return this.replace(/\s+/g,' ').trim();
	}

	_String.includes = _String.includes || function() {
		return String.prototype.indexOf.apply(this, arguments) !== -1;
	};


	/*
	 *	Array
	 */

	_Array.compare = function( array ) {
		return this.filter(function( value ) {
		    return array.indexOf( value ) < 0;
		});
	}


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

