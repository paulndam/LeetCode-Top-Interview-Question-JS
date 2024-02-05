/**
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given an integer, convert it to a roman numeral.
 */
const intToRoman = (num) => {
    // create a map and associates each roman value with their number representation.
    const values = [1000,900,500,400,100,90,50,40,10, 9,5,4,1];
    const symbol = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
    // should be string since we are building roman values
    let result = '';

    // iterate over the values-symbol pairs
    for(let i = 0; i < values.length; i++){
        // while num is greater than or equal to the current val
        console.log("values ====>",values[i])
        console.log("num ====>",num)

        while(num >= values[i]){
            // append the correct symbol to the result
            result += symbol[i]
            // subtract the values from num
            num -= values[i]
        }
    }

    return result
}

console.log(intToRoman(3))