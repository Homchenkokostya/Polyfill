// plugin( 'main', {});

;(function(exports, fn) {

	exports.plugin = exports.plugin || fn;

})(this, function(selector, options) {

	'use strict';

	var settings = _extend_({
        color: '#fff',
		background: '#000',
		height: 500,
		width: 100
    }, options || {});
	
	document.one( selector ).css( settings ).addEventListener('click', function() {
		alert( 'Ok !!!' );
	});
});