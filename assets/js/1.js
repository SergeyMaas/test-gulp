var counter = (function() {
    var count = 0;
    return function() {
        return count++;
    };
}());

console.log(counter());
var fo = 3;
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

var ff = function() {
    console.log('hello');
};