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

});