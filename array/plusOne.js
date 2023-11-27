/*
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
Increment the large integer by one and return the resulting array of digits.

Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4]. */

const plusOne = (digits) => {

    // increment last element
    digits[digits.length - 1] += 1

    // handle case where last element is 10.
    for (let i = digits.length - 1; i > 0 && digits[i] === 10; i--){
        digits[i] = 0
        digits[i - 1] += 1
    }

    // handle case where first element is 10.
    if (digits[0] === 10) {
        digits[0] = 0
        digits.unshift(1) // adds 1 to the beginning of the array.
    }


    return digits
}

console.log(plusOne([9, 9]))
console.log(plusOne([4,3,2,1]))