# Ng-Response-Converter

This angular service, shortened field names which sent by backend are being converted to original names according to specified directory.

## Download Ng-Response-Converter

You can install ng-response-converter via npm and Bower and its dependencies will be downloaded
automatically:

#### Npm
```bash
$ npm install ng-response-converter --save
```

#### Bower
```bash
$ bower install ng-response-converter --save
```

## Inject the Ng-Response-Converter Services
- Add ng-response.converter.min.js to your main file (index.html).

- Set `ng-response-converter` as a dependency in your module
```javascript
var myapp = angular.module('myapp', ['ng-response-converter'])
```

- Now the ng-response-converter services are available to be injected into any controller, service, or factory.:
```javascript
app.controller("SampleCtrl", function($scope, ngResponseConverter) {
var _data = {}; 
// data can be object or array
var data = {
  'a': 'content of aqua',
  'b': {
        'a' : 'content of alfa',
        'b' : 'content of beta'
  }
};
//Model must be like that:
var model = {
  'a': {'field': 'aqua'},
  'b': {
        'field': 'bambou',
        'object': {
          'a': { 'field': 'alfa' },
          'b': { 'field': 'beta' }
         }
      }
};
  _data = ngResponseConverter.change(data, model);
});
```

- Result
```javascript
_data: {
  'aqua': 'content of aqua',
  'bambou': {
        'alfa': 'content of alfa',
        'beta': 'content of beta'
      }
}
```
