# jquery-mstr-helper

This package is intended to make integrating jQuery into MicroStrategy Report Services documents straightforward, from loading the appropriate libraries to actually interacting with the document itself. This requires the document to be in Express view mode.

## Getting started

The `jquery-helper` directory needs to be added to the `plugins` directory of your MicroStrategy Web installation. Once the web server process has been restarted, jQuery can be loaded and used as follows:

```javascript
setupJQuery(function() {
	// Your code that relies on jQuery and our helper functions goes here
});
```

or

```javascript
setupJQueryWithExternalScript('http://your.external.script.url/goes/here');
```

Adding these javascript fragments via an HTML object on the document loads jQuery, and our helper plugin, and then starts your code once that loading is complete.

## Selector Extension

The helper adds a new selector, `:mstr()`. This is an easier way to select MicroStrategy objects rendered in HTML. It is used in one of three ways:

```javascript
$(":mstr(dave)"); # This will return all MicroStrategy objects named "dave"

$(":mstr(type=Panel)"); # This will return all Panels on the document (Only Panel, DropDownList, and Grid types are implemented for now)

$(":mstr(cssText=ian)"); # This will return all elements whose mstrmojo object has a cssText property of ian
```
