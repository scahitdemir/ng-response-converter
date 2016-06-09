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
$scope._data = []; //or {}; 
// data can be object or array
    var data = [
      {
        'a': 'content of aqua',
        'b': [
          {
            'c' : {
              'e': 'content of gama'
            },
            'd' : 'content of beta'
          },
          {
            'c' : {
              'e': 'content of gama'
            },
            'd' : 'content of beta'
          }
        ]
      },
      {
        'a': 'content of aqua',
        'b': [
          {
            'c' : {
              'e': 'content of gama'
            },
            'd' : 'content of beta'
          },
          {
            'c' : {
              'e': 'content of gama'
            },
            'd' : 'content of beta'
          }
        ]
      }
    ];
//Dictionary must be like that:
    var dictionary = {
      'a': {'field': 'aqua'},
      'b': {
        'field': 'bambou',
        'object': {
          'c': {
            'field': 'alfa',
            'object': {
              'e': {'field': 'gama'}
            }
          },
          'd': {'field': 'beta'}
        }
      }
    };
  $scope._data = ngResponseConverter.change(data, dictionary);
});
```

- Result
```javascript
_data: [{
             'aqua': 'content of aqua',
             'bambou': [{
               'alfa': {
                 'gama': 'content of gama'
               },
               'beta': 'content of beta'
             },
             {
               'alfa': {
                  'gama': 'content of gama'
                },
                'beta': 'content of beta'
              }]
           },
           {
             'aqua': 'content of aqua',
             'bambou': [{
               'alfa': {
                 'gama': 'content of gama'
               },
               'beta': 'content of beta'
             },
             {
               'alfa': {
                  'gama': 'content of gama'
                },
                'beta': 'content of beta'
           }]
```
