# Polyfill
#### varsion: 1.0.0
#
```sh
1. document.one( '.selector' ) || Node.one( '.selector' ) // return 'Node'
2. document.query( '.selector' ) || Node.query( '.selector' ) // return 'Array' 
3. document.exist( '.selector' ) // return 'true' || 'false'
4. Node.triggerListener( 'click' )
5. Node.setAttributes({
    'data-src': String,
    'rel': String
}) // return 'Node'
6. Node.insert( [node,node] ) || Node.insert( node ) // return 'Node'
6. Node.matches( '[class="main"]' ) // return 'true' || 'false' 
6. Node.children[0].closest( 'body' ) // return parentElement 'body'
7. parentNode.insertAfter(newNode, referenceNode) // return 'newNode'
8. Node.css({
    top: 100,
    left: 200
}) // return 'Node'
9. String.clear() // retrn 'string'
10. Array.compare(Array) // return difference
11. global var _extend_ // default settings plugin
```
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

### Plugins
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
    
    var elements = document.query( selector );
});
```