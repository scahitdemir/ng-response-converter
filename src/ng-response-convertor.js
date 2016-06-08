(function () {
  'use strict';

  var moduleResponseConvertor = angular.module('ng-response-convertor', []);

  moduleResponseConvertor.service('ngResponseConvertor', function () {

    var _model = {};

    this.change = function(data, model) {
      _model = model;
      return reChangeField(data);
    };

    function reChangeField(data) {
      var _data = {};

      if (angular.isArray(data)) {
        for(var i = 0; i < data.length; i++) {
          _data.push(allKeysChange(data[i]));
        }
      }
      else {
        _data = allKeysChange(data.response);
      }

      log(2, "Re-change time: " + (new Date().getTime() - convertTime) + "ms");
      return _data;
    }

    function allKeysChange(obj, path) {
      var output = {};
      for (var i in obj) {
        if (Object.prototype.toString.apply(obj[i]) === '[object Object]') {
          output[_model[i].field] = allKeysChange(obj[i], i);
        } else {
          if (path) {
            output[_model[path].object[i].field] = obj[i];
          } else {
            output[_model[i].field] = obj[i];
          }
        }
      }
      return output;
    }

  });
})();
