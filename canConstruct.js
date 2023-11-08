/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.
Example 1:
Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:
Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:
Input: ransomNote = "aa", magazine = "aab"
Output: true
 */

function canConstruct(ranSomeNote, magazine) {

    let ranSomeNoteDic = new Map();

    let magazineDic = new Map();

    // loop over ranSomeNote.
    for (let char of ranSomeNote) {
        ranSomeNoteDic.set(char, (ranSomeNoteDic.get(char)|| 0)+1)
    }

    // loop over magazine
    for (let char of magazine) {
        magazineDic.set(char, (magazineDic.get(char)||0)+1)
    }

    // loop over ranSomeNoteDic and check if every element in there exist in
    // magazine dic
    for (let [key, value] of ranSomeNoteDic) {
        if (!magazineDic.has(key) || magazineDic.get(key) < value) {
            return false;
        }
    }
    return true;
}