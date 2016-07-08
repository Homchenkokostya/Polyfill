// plugin( 'main', {});

;(function(exports, fn) {

    exports.plugin = exports.plugin || fn;

})(this, function(selector, options) {

    var settings = _extend_({
        color: '#fff',
		background: '#000',
		height: 500,
		width: 100
    }, options || {});
    
    var element = document.one( selector );
        element.css( settings );
});