const _ = require('lodash')
var arr = ['foo', 'man', 'chew'],
    what = 'man',

    i = _.findIndex(arr, function(el) {

        return el === what;
    });

console.log(i);

console.log(arr.indexOf('man'));