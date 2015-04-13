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

var f1 = (function() {
    var count = 0;
    return function() {
        return count++;
    };
}());

console.log(f1());
console.log(f1());
console.log(f1());
console.log(f1());
console.log(f1());
console.log(f1());
console.log(f1());
console.log(f1());
console.log(f1());
console.log(f1());
console.log(f1());