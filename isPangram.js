/*
A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.


 */

function isPangram(sentence) {

    let hasEveryAlphabetLetter = new Set();

    for (let char of sentence.toLowerCase()) {
        if (char >= 'a' && char <= 'z') {
            hasEveryAlphabetLetter.add(char)
       }

        if (hasEveryAlphabetLetter.size === 26) {
            return true
        }
    }
    return false
}

console.log(isPangram("thequickbrownfoxjumpsoverthelazydog"))
console.log(isPangram("leetcode"))