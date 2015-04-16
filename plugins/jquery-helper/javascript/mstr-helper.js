(function($) {
  $.MicroStrategyObjectTypes = {
    Panel: ['scriptClass', 'mstrmojo.ExpressDocPanel'],
    DropDownList: ['cssClass', 'mstrmojo-DocSelector-DropDownList']
  };
  $.expr[':'].mstr = $.expr.createPseudo(function(arg) {
    if (arg) {
      var args = arg.split('=');
      if (args.length == 1) {
        var prop = 'title';
        var propValue = arg;
      } else if (args[0] == 'type' && $.MicroStrategyObjectTypes.hasOwnProperty(args[1])) {
        var prop = $.MicroStrategyObjectTypes[args[1]][0];
        var propValue = $.MicroStrategyObjectTypes[args[1]][1];
      } else {
        var prop = args[0];
        var propValue = args[1];
      }
      return function(elem) {
        var answer = false;
        $.each(mstrmojo.all, function(key, value) {
          answer = (value.domNode === elem) && (value[prop] === propValue);
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
