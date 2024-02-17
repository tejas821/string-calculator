export class StringCalculator {
    add(numbers: string): number {
        if (numbers === "") {
            return 0;
        }
        // Default delimiter is comma and newline
        const delimiterRegex = /,|\n/;
        let delimiter = delimiterRegex.source;

        // Check if custom delimiter is provided
        if (numbers.startsWith("//")) {
            const customDelimiterMatch = numbers.match(/^\/\/(.*)\n/);
            if (customDelimiterMatch) {
                delimiter = customDelimiterMatch[1];
                numbers = numbers.substring(customDelimiterMatch[0].length);
            }
        }

        const numberArray = numbers.split(new RegExp(delimiter));
        
        let sum = 0;
        const negatives:number[] = [];

        for (const numStr of numberArray) {
            const num = parseInt(numStr);
            if (num < 0) {
                negatives.push(num);
            }
            if (num < 1000) {
                sum += num;
            }
        }

        if (negatives.length > 0) {
            throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
        }

        return sum;
    }
}