(function($) {
  $.getPanelByName = function(name) {
    var elements = [];
    for (key in mstrmojo.all) {
      var obj = mstrmojo.all[key];
      if ('scriptClass' in obj && obj.scriptClass === 'mstrmojo.ExpressDocPanel' && obj.title === strName) {
        results.push(obj.domNode);
      }
    }
    return $(results);
  }
})(jQuery);
