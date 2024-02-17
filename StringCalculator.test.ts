import { StringCalculator } from './StringCalculator';

describe("StringCalculator", () => {
    let stringCalculator: StringCalculator;

    beforeEach(() => {
        stringCalculator = new StringCalculator();
    });

    it("should return 0 for an empty string", () => {
        expect(stringCalculator.add("")).toBe(0);
    });
    it("should return the number itself for a single number", () => {
        expect(stringCalculator.add("1")).toBe(1);
    });

    it("should return the sum of two numbers", () => {
        expect(stringCalculator.add("1,5")).toBe(6);
    });
    it("should handle new lines between numbers", () => {
        expect(stringCalculator.add("1\n2,3")).toBe(6);
    });

    it("should allow custom delimiters", () => {
        expect(stringCalculator.add("//;\n1;2")).toBe(3);
    });

    it("should throw an exception for negative numbers", () => {
        expect(() => stringCalculator.add("1,-2")).toThrow(
            "negative numbers not allowed -2"
        );
    });

    it("should throw an exception for multiple negative numbers", () => {
        expect(() => stringCalculator.add("-1,-2,-3")).toThrow(
            "negative numbers not allowed -1,-2,-3"
        );
    });

    it("should ignore numbers greater than or equal to 1000", () => {
        expect(stringCalculator.add("2,1001")).toBe(2);
    });

    it("should handle input with multiple delimiters", () => {
        expect(stringCalculator.add("//[;][,]\n1;2,3")).toBe(6);
    });

    it("should handle input with custom delimiter of any length", () => {
        expect(stringCalculator.add("//[***]\n1***2***3")).toBe(6);
    });

    it("should handle input with multiple custom delimiters", () => {
        expect(stringCalculator.add("//[*][%]\n1*2%3")).toBe(6);
    });

    it("should handle input with custom delimiters containing special characters", () => {
        expect(stringCalculator.add("//[!@#]\n1!@#2")).toBe(3);
    });

    it("should handle input with custom delimiters and newlines", () => {
        expect(stringCalculator.add("//[*]\n1\n2*3")).toBe(6);
    });

    it("should handle input with empty string and custom delimiter", () => {
        expect(stringCalculator.add("//[;]\n")).toBe(0);
    });
    it("should handle input with leading and trailing spaces", () => {
        expect(stringCalculator.add(" 1,2,3 ")).toBe(6);
    });

    it("should handle input with whitespace characters as delimiters", () => {
        expect(stringCalculator.add("1\n\t2,3")).toBe(6);
    });
    it("should handle input with repeated delimiters", () => {
        expect(stringCalculator.add("1,,2,,,3")).toBe(6);
    });

    it("should handle input with floating point numbers", () => {
        expect(stringCalculator.add("1.5,2.5,3.5")).toBe(7.5);
    });

    it("should handle input with non-numeric characters", () => {
        expect(stringCalculator.add("1,2,three,4")).toBe(7);
    });

    it("should handle input with large numbers", () => {
        expect(stringCalculator.add("1000000000000000000,2000000000000000000")).toBe(0);
    });

    it("should handle input with custom delimiter consisting of multiple characters", () => {
        expect(stringCalculator.add("//[***]\n1***2***3")).toBe(6);
    });

    it("should handle input with multiple custom delimiters of varying lengths", () => {
        expect(stringCalculator.add("//[*][%][###]\n1*2%3###4")).toBe(10);
    });

    it("should handle input with multiple custom delimiters containing special characters", () => {
        expect(stringCalculator.add("//[@#][!!][$$]\n1@#2!!3$$4")).toBe(10);
    });
});