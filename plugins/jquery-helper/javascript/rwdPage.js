
var setupJQuery = function(callback) {
    if (mstrmojo) {
        mstrmojo._LoadsScript.requiresExternalScripts(
            [{url: '//code.jquery.com/jquery-1.11.2.min.js'},
            {url: '../plugins/jquery-helper/javascript/mstr-helper.js'}],
            callback);
    }
};
var setupJQueryWithExternalScript = function(externalURL) {
    setupJQuery(function() {$.getScript(externalURL);});
};
