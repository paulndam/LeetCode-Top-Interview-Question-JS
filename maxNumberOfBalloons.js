/*
Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

You can use each character in text at most once. Return the maximum number of instances that can be formed.
Example 1:
Input: text = "nlaebolko"
Output: 1
*/

function maxNumberOfBalloons(text) {

    let charCounts = new Map();

    // set count and increment count of each character
    for (let char of text) {
        charCounts.set(char, (charCounts.get(char) || 0)+1)
    }

    // determine how many times we can form the word ballon using the count frequency.

    let countB = charCounts.get('b')|| 0
    let countA = charCounts.get('a')|| 0
    let countL = (charCounts.get('l')|| 0) / 2 // diving because we can only use a character at most once, and balloon has to l's in it. and same for o.
    let countO = (charCounts.get('o')|| 0) / 2
    let countN = charCounts.get('n') || 0

    if (countB, countA, countL < 1 || countO < 1 || countN === 0) {
        return 0
    }

    return Math.floor(Math.min(countB, countA, countL, countO, countN))
}

// console.log(maxNumberOfBalloons("nlaebolko"))
// console.log(maxNumberOfBalloons("loonbalxballpoon"))
// console.log(maxNumberOfBalloons("lunga"))
console.log(maxNumberOfBalloons("balon"))

