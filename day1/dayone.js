"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return function (value) {
        fns.forEach(function (fn) { return value = fn(value); });
        return value;
    };
}
function read(path) {
    return (0, fs_1.readFileSync)(path, 'utf-8');
}
function split(data) {
    return data.split('\n');
}
function mapToNumber(data) {
    return data.map(function (str) { return +str; });
}
function count(numbers) {
    var counter = 0;
    for (var i = 1; i < numbers.length; i++)
        if (numbers[i] > numbers[i - 1])
            counter++;
    return counter;
}
var ans = pipe(read, split, mapToNumber, count)('./data.txt');
console.log(ans);
