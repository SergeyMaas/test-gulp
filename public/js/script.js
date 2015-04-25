var reverseArray = function(arr) {
    var newArr = [];

    for (var i = 0; i <= arr.length - 1 ;) {
        newArr.push(arr.pop());
    }
    newArr.map(function(e) {
        return arr.unshift(e);
    });

    return newArr;
};
var reverseArrayInPlace = function(arr) {
    var newArr = [];
    
    for (var i = 0; i <= arr.length - 1 ;) {
        newArr.push(arr.pop());
    }

    newArr.map(function(e) {
        return arr.push(e);
    });

    return newArr;
};

var ar = ['a','b','c','d'];
var ar2 = ['a','b','c','d',4];

console.log(reverseArray(ar));
console.log(ar);
console.log(reverseArrayInPlace(ar2));
console.log(ar2);