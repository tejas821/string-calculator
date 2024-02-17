"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringCalculator = void 0;
var StringCalculator = /** @class */ (function () {
    function StringCalculator() {
    }
    StringCalculator.prototype.add = function (numbers) {
        if (numbers === "") {
            return 0;
        }
        // Default delimiter is comma and newline
        var delimiterRegex = /,|\n/;
        var delimiter = delimiterRegex.source;
        // Check if custom delimiter is provided
        if (numbers.startsWith("//")) {
            var customDelimiterMatch = numbers.match(/^\/\/(.*)\n/);
            if (customDelimiterMatch) {
                delimiter = customDelimiterMatch[1];
                numbers = numbers.substring(customDelimiterMatch[0].length);
            }
        }
        var numberArray = numbers.split(new RegExp(delimiter));
        var sum = 0;
        var negatives = [];
        for (var _i = 0, numberArray_1 = numberArray; _i < numberArray_1.length; _i++) {
            var numStr = numberArray_1[_i];
            var num = parseInt(numStr);
            if (num < 0) {
                negatives.push(num);
            }
            if (num < 1000) {
                sum += num;
            }
        }
        if (negatives.length > 0) {
            throw new Error("negative numbers not allowed ".concat(negatives.join(",")));
        }
        return sum;
    };
    return StringCalculator;
}());
exports.StringCalculator = StringCalculator;
