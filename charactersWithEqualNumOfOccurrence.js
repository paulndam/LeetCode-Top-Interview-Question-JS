/*
Given a string s, determine if all characters have the same frequency.
For example, given s = "abacbc", return true. All characters appear twice. Given s = "aaabb", return false. "a" appears 3 times, "b" appears 2 times. 3 != 2.
 */

function equalNumOfOccurrences(str) {

    let count = new Map();
    // loop thru you string
    for (const char of str) {
        // increment existing char
        // set char to 1 if not already present
        count.set(char, (count.get(char) || 0)+1)
    }
    // Get all the frequency occurrences of each character in the hash map
    console.log("----->",count.values())
    // loop thru the frequency occurrences
    for (const val of count.values()) {
        // check if the char frequency is the same as other characters, then return true, otherwise return false
        if ( val !== count.values().next().value) {
            return false
        }
    }
    return true
}

console.log(equalNumOfOccurrences("abacbc"))
console.log(equalNumOfOccurrences("aaabb"))