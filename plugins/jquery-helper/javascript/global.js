
var setupJQuery = function(callback) {
    var scriptsToLoad = [];
    if ($() && $().jquery) {
      console.log("setupJQuery function says: jQuery is already loaded.");
    } else {
      scriptsToLoad.push({url: '//code.jquery.com/jquery-1.11.2.min.js'});
    }
    if ($.MicroStrategyObjectTypes) {
      console.log("setupJQuery function says: jquery-mstr-helper is already loaded.");
    } else {
      scriptsToLoad.push({url: '../plugins/jquery-helper/javascript/mstr-helper.js'});
    }
    if (mstrmojo && scriptsToLoad.length > 0) {
        mstrmojo._LoadsScript.requiresExternalScripts(scriptsToLoad,
            callback);
    }
};
var setupJQueryWithExternalScript = function(externalURL) {
    setupJQuery(function() {$.getScript(externalURL);});
};
