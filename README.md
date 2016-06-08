# Ng-Response-Convertor

This angular service, shortened field names which sent by backend are being converted to original names according to specified directory.

## Download Ng-Response-Convertor

You can install ng-response-convertor via npm and Bower and its dependencies will be downloaded
automatically:

#### Npm
```bash
$ npm install ng-response-convertor --save
```

#### Bower
```bash
$ bower install ng-response-convertor --save
```

## Inject the Ng-Response-Convertor Services
1. Add ng-response.convertor.min.js to your main file (index.html).

2. Set `ng-response-convertor` as a dependency in your module
```javascript
var myapp = angular.module('myapp', ['ng-response-convertor'])
```

3. Now the ng-response-convertor services are available to be injected into any controller, service, or factory.:
```javascript
app.controller("SampleCtrl", function($scope, ngResponseConvertor) {
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
  };
  _data = ngResponseConvertor.change(data, model);
});
```

4. Result
```javascript
_data: {
  'aqua': 'content of aqua',
  'bambou': {
        'alfa': 'content of alfa',
        'beta': 'content of beta'
      }
}
```
