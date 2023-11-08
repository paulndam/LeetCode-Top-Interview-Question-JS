/*
Given a pattern and a string s, find if s follows the same pattern.
Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.
Example 1:
Input: pattern = "abba", s = "dog cat cat dog"
Output: true
*/

function wordPattern(pattern, s) {
    // split the string
    // so that they are words
    let words = s.split(' ');

    // check for length of both string, return false if no match
    if(pattern.length !== words.length) return false;

    // create map to store freq of pattern
    let mapPattern = new Map();
    // create map to store freq of string
    let mapString = new Map();

    // loop thru pattern since
    // we want to find if a string follows the same pattern
    for (let i = 0; i < pattern.length; i++) {

        let char = pattern[i] // get char/elm index from pattern
        let word = words[i] // get char/elm index from string

        // check if mapping is consistent with previous mapping, if not, return false
        if (mapPattern.has(char) && mapPattern.get(char) !== word || mapString.has(word) && mapString.get(word) !== char) {

            return false
        }

        // set new mappings if none exist
        if (!mapPattern.has(char) || !mapString.has(word)) {

            mapPattern.set(char, word)
            mapString.set(word, char)
        }
    }

    return true
}

console.log(wordPattern("abba", "dog cat cat dog"))
console.log(wordPattern("abba", "dog cat cat fish"))
console.log(wordPattern("aaaa","dog cat cat dog"))