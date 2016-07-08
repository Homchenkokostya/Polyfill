# Polyfill
#### varsion: 1.0.1
#

Method                                  | Value
--------------------------------------- | --------------------------------------
document.one( '.selector' ) or Node.one( '.selector' )                  | return Node
document.query( '.selector' ) or Node.query( '.selector' )              | return Array
document.exist( '.selector' ) or Node.exist( '.selector' )              | return true or false
document.triggerListener( 'click' ) or Node.triggerListener( 'click' )  | trigger event
Node.setAttributes({'data-src': String, 'rel': String})                 | return Node
Node.insert( [node,node] ) or Node.insert( node )                       | return Node
Node.matches( '[class="main"]' )                                        | return true or false
Node.children[0].closest( 'body' )                                      | return body or Node.children[0]
parentNode.insertAfter(newNode, referenceNode)                          | return newNode
Node.css({top: 100, left: 200})                                         | return Node  
String.clear()                                                          | return String (trim)
Array.compare( Array )                                                  | return difference
global var \_extend_                                                    | default settings plugin

### Installation
```sh
<!DOCTYPE html>
<html>
<head>
	<title>Polyfill</title>
</head>
<body>
    ...
<script src="../src/polyfill.js"></script>
<script> 'this code ...' </script>
<body>
</html>
```

### Plugin
```sh
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
```

### Use plugin
```sh
plugin( 'button', {
    color: '#fff000',
    background: 'green',
    height: 40,
    width: 120
});
```