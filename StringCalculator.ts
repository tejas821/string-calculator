export class StringCalculator {
    add(numbers: string): number {
        if (numbers === "") {
            return 0;
        }
        // Default delimiter is comma and newline
        let delimiterRegex = /[,\n]/;

        // Check if custom delimiter is provided
        if (numbers.startsWith("//")) {
            const customDelimiterMatch = numbers.match(/^\/\/\[?(.*?)\]?\n/);
            if (customDelimiterMatch) {
                const customDelimiters = customDelimiterMatch[1].split('][').map(delimiter => {
                    // Escape special characters for regex
                    return delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
                });
                const customDelimiterPattern = customDelimiters.join('|');
                delimiterRegex = new RegExp(customDelimiterPattern + '|\\n');
                numbers = numbers.substring(customDelimiterMatch[0].length);
            }
        }

        const numberArray = numbers.split(delimiterRegex);
        
        let sum = 0;
        const negatives:number[] = [];

        for (const numStr of numberArray) {
            const num = parseFloat(numStr); // Parse as float instead of integer
            if (isNaN(num)) { // Check if parsed number is NaN
                continue; // Ignore invalid numbers
            }
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