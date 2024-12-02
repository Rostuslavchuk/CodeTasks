class SumOfFactorialNum {
    constructor(number) {
        this.number = number;  // Store the number for which the factorial will be calculated
    }
    
    factorial() {  // Method to calculate the factorial of a number
        let rval = BigInt(1);  // Initialize rval as a BigInt with value 1 (for multiplication)
        for (let i = 2; i <= this.number; i++) {
            rval *= BigInt(i);  // Multiply rval by each number i (starting from 2) to calculate the factorial
        }
        return rval;  // Return the calculated factorial
    }
    
    sumOfFactorial() {
        const result = this.factorial();  // Get the factorial result
        const arr = result.toString().split('');  // Convert the factorial to a string and then split it into an array of characters (digits)
        return arr.reduce((acc, curr) => acc + Number(curr), 0);  // Sum up all the digits of the factorial and return the sum
    }
}

// Create an instance of SumOfFactorialNum with the number 100
const sumOfFactorialNum = new SumOfFactorialNum(100); 

// Log the sum of the digits of the factorial of 100 to the console
console.log(sumOfFactorialNum.sumOfFactorial());
