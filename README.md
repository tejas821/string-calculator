# String Calculator

A simple string calculator that can add numbers provided in a string format. This calculator follows the rules mentioned below:

1. If the input string is empty, it returns 0.
2. If the input string contains only one number, it returns that number.
3. If the input string contains two numbers separated by a comma, it returns the sum of those numbers.
4. If the input string contains numbers separated by new lines, it returns the sum of those numbers.
5. It supports custom delimiters specified at the beginning of the string in the format `//[delimiter]\n`.
6. It throws an exception for negative numbers and displays those negative numbers in the error message.
7. It ignores numbers greater than or equal to 1000.
8. It supports multiple delimiters enclosed in square brackets.
9. It handles custom delimiters of any length.
10. It handles multiple custom delimiters.
11. It handles custom delimiters containing special characters.
12. It handles custom delimiters along with newlines.
13. It handles empty strings with custom delimiters.
14. It handles leading and trailing spaces in the input string.
15. It handles whitespace characters as delimiters.
16. It handles repeated delimiters.
17. It supports floating-point numbers.
18. It supports numbers provided as strings.
19. It handles non-numeric characters gracefully.
20. It handles large numbers.
21. It supports custom delimiters consisting of multiple characters.
22. It supports multiple custom delimiters of varying lengths.
23. It supports multiple custom delimiters containing special characters.

## Installation

1. Clone the repository:
    git clone `https://github.com/tejas821/string-calculator.git`
2. Install dependencies:
    ```cd string-calculator
    npm install```


## Usage

To use the string calculator, import the `StringCalculator` class from the `StringCalculator.ts` file and create an instance. Then, you can use the `add` method to add numbers provided in a string format.

```typescript
import { StringCalculator } from './StringCalculator';

const stringCalculator = new StringCalculator();
console.log(stringCalculator.add("1,2,3")); // Output: 6
```

## Running Tests

This project includes test cases to ensure the correctness of the StringCalculator class. To run the tests, execute the following command:
```npm test
```

## Test Cases

- Should return 0 for an empty string
- Should return the number itself for a single number
- Should return the sum of two numbers
- Should handle new lines between numbers
- Should allow custom delimiters
- Should throw an exception for negative numbers
- Should throw an exception for multiple negative numbers
- Should ignore numbers greater than or equal to 1000
- Should handle input with multiple delimiters
- Should handle input with custom delimiter of any length
- Should handle input with multiple custom delimiters
- Should handle input with custom delimiters containing special characters
- Should handle input with custom delimiters and newlines
- Should handle input with empty string and custom delimiter
- Should handle input with leading and trailing spaces
- Should handle input with whitespace characters as delimiters
- Should handle input with repeated delimiters
- Should handle input with floating point numbers
- Should handle input with numbers as strings
- Should handle input with non-numeric characters
- Should handle input with large numbers
- Should handle input with custom delimiter consisting of multiple characters
- Should handle input with multiple custom delimiters of varying lengths
- Should handle input with multiple custom delimiters containing special characters


You are welcome to tailor this README to align with the unique needs and specifications of your project.
