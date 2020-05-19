const buckets = require('../dist/buckets.min.js');

var eq = function (arg1, arg2) {
    return arg1.val === arg2.val;
};

var customObjectArray = [
    {
        key1: "value1"
    },
    {
        key2: "value2"
    },
    {
        key3: "value3"
    }
];

// var numberArray = [1, 3, 5, 7, 9]

//console.log(buckets.arrays.indexOf(numberArray, 1));
// console.log(numberArray);
// buckets.arrays.remove(numberArray, 9)
// console.log(numberArray);

// console.log(buckets.arrays.indexOf(customObjectArray, {
//     key: "value3"
// }));
console.log(customObjectArray);
buckets.arrays.remove(customObjectArray, {
    key3: "value3"
}, eq)
console.log(customObjectArray);