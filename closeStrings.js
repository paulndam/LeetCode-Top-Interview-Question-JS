/*
Two strings are considered close if you can attain one from the other using the following operations:
Operation 1: Swap any two existing characters.
For example, abcde -> aecdb
Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
You can use the operations on either string as many times as necessary.
Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.
Example 1:

Input: word1 = "abc", word2 = "bca"
Output: true
Explanation: You can attain word2 from word1 in 2 operations.
Apply Operation 1: "abc" -> "acb"
Apply Operation 1: "acb" -> "bca"
Example 2:

Input: word1 = "a", word2 = "aa"
Output: false
*/

function closeStrings(word1, word2) {

    if (word1.length !== word2.length) return false

    // helper function to create a frequency map.
    const freqMap = (word) => {
        let mapWord = new Map();
        for (let char of word) {
            mapWord.set(char,(mapWord.get(char) || 0)+1)
        }
        return mapWord
    }

    // frequency maps
    let mapWord1 = freqMap(word1);
    let mapWord2 = freqMap(word2)

    const setWord1 = new Set(word1);
    const setWord2 = new Set(word2);


    // check for same uniques char in word1 & word2.
    // if not unique return false
    if (setWord1.size !== setWord2.size) return false

    // loop thru unique set of word1.
    // check if word2 el/char has the same el/char of word1.
    // if not return false.
    for (let char of setWord1) {
        if(!setWord2.has(char)) return false
    }

    // sort the frequencies for both words
    const sortWord1Freq = [...mapWord1.values()].sort((a, b) => a - b)
    const sortWord2Freq = [...mapWord2.values()].sort((a, b) => a - b)

    for (let i = 0; i < sortWord1Freq; i++){

        if(sortWord1Freq[i] !== sortWord2Freq[i]) return false
    }

    return true

}

console.log(closeStrings("abc", "bca"))
console.log(closeStrings("a", "aa"))