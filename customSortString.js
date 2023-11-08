/**
 You are given two strings order and s. All the characters of order are unique and were sorted in some custom order previously.

Permute the characters of s so that they match the order that order was sorted. More specifically, if a character x occurs before a character y in order, then x should occur before y in the permuted string.

Return any permutation of s that satisfies this property.
Example 1:
Input: order = "cba", s = "abcd"
Output: "cbad"
*/

function customSort(order, s) {


    let sMap = new Map();
    let result = ""

    for (let char of s) {
        sMap.set(char, (sMap.get(char)||0)+1);
    }

    for (let orderChar of order) {

        while (sMap.get(orderChar) > 0) {
            result += orderChar
            sMap.set(orderChar, sMap.get(orderChar)-1)
        }

    }

    for (let [key, val] of sMap.entries()) {
        console.log(`key --> ${key}: value ---> ${val}`)
        while (val > 0) {
            result += key
            val--
        }
    }
    return result
}

console.log(customSort("cba", "abcd"));
console.log(customSort("kqep", "pekeq"));