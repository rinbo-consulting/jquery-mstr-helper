(function($) {
  $.MicroStrategyObjectTypes = {
    Panel: ['scriptClass', 'mstrmojo.ExpressDocPanel'],
    DropDownList: ['cssClass', 'mstrmojo-DocSelector-DropDownList'],
    Grid: ['gridData'],
    VITab: ['scriptClass', 'mstrmojo.vi.ui.tabs.Tab']
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

  $.getVITabNames = function() {
    var names = [];

    $.each($(":mstr(type=VITab)"), function(idx, elem) {
      names.push(elem.innerText.replace(/[\n\r]/g, ''));
    });

    return names;
  };

  $.selectVITabByName = function(tabName) {
    $.each(mstrmojo.all, function(key, value) {
      if(value[$.MicroStrategyObjectTypes.VITab[0]] == $.MicroStrategyObjectTypes.VITab[1]) {
        if(value.title == tabName) {
          console.log('mstr-helper says: switching to tab: ' + tabName);
          value.tabSelected();
        } else {
          console.log('mstr-helper says: ' + value.title + ' != ' + tabName + '. Move along.');
        }
      }
    });
  };

  $.selectVITabByNumber = function(tabNumber) {
    var counter = 0;
    $.each(mstrmojo.all, function(key, value) {
      if(value[$.MicroStrategyObjectTypes.VITab[0]] == $.MicroStrategyObjectTypes.VITab[1]) {
        counter++;
        if(counter == tabNumber) {
          console.log('mstr-helper says: switching to tab no: ' + tabNumber);
          value.tabSelected();
        } else {
          console.log('mstr-helper says: no.' + counter + ' != no. ' + tabNumber + '. Move along.');
        }
      }
    });
  };
})(jQuery);
