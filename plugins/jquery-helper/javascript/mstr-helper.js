(function($) {
  $.MicroStrategyObjectTypes = {
    Panel: ['scriptClass', 'mstrmojo.ExpressDocPanel'],
    DropDownList: ['cssClass', 'mstrmojo-DocSelector-DropDownList'],
    Grid: ['gridData']
  };
  $.expr[':'].mstr = $.expr.createPseudo(function(arg) {
    if (arg) {
      var args = arg.split('=');
      if (args.length == 1) {
        var prop = 'title';
        var propValue = arg;
      } else if (args[0] == 'type' && $.MicroStrategyObjectTypes.hasOwnProperty(args[1])) {
        var identifiers = $.MicroStrategyObjectTypes[args[1]];
        var prop = identifiers[0];
        if (identifiers.length == 2) {
          var propValue = identifiers[1];
        } else {
          var propValue = undefined;
        }
      } else {
        var prop = args[0];
        var propValue = args[1];
      }
      return function(elem) {
        var answer = false;
        $.each(mstrmojo.all, function(key, value) {
          if (propValue) {
            answer = (value.domNode === elem) && (value[prop] === propValue);
          } else {
            answer = (value.domNode === elem) && value.hasOwnProperty(prop);
          }
          return !answer;
        });
        return answer;
      }
    } else {
      return function() {
        return false;
      }
    }
  });
})(jQuery);
