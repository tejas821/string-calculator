import { StringCalculator } from './StringCalculator';

describe("StringCalculator", () => {
    let stringCalculator = new StringCalculator;

    beforeEach(() => {
        stringCalculator = new StringCalculator();
    });

    it("should return 0 for an empty string", () => {
        expect(stringCalculator.add("")).toBe(0);
    });

});