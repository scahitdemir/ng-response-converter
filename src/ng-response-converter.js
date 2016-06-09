(function () {
  'use strict';

  var moduleResponseConverter = angular.module('ng-response-converter', []);

  moduleResponseConverter.service('ngResponseConverter', function () {

    this.change = function(data, dictionary) {
      var _data = angular.isArray(data) ? [] : {};

      if (angular.isArray(data)) {
        for(var i = 0; i < data.length; i++) {
          _data.push(allKeysChange(data[i], dictionary));
        }
      }
      else {
        _data = allKeysChange(data, dictionary);
      }

      return _data;
    };



    function allKeysChange(obj, dictionary) {
      var output = {};

      function arrayLoop(item, index) {
        if(index === 0) output[dictionary[i].field] = [];
        output[dictionary[i].field].push(allKeysChange(item, dictionary[i].object));
      }

      for (var i in obj) {
        if (Object.prototype.toString.apply(obj[i]) === '[object Array]') {
          angular.forEach(obj[i], arrayLoop);
        }
        else {
          if (Object.prototype.toString.apply(obj[i]) === '[object Object]') {
            output[dictionary[i].field] = allKeysChange(obj[i], dictionary[i].object);
          } else {
            output[dictionary[i].field] = obj[i];
          }
        }
      }

      return output;
    }

  });
})();
