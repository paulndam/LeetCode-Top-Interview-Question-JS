/**
 * Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.

For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".
Return the resulting string.

Example 1:

Input: word = "abcdefd", ch = "d"
Output: "dcbaefd"
 */

function reversePrefix(word, ch) {

    let strWords = word.split('')
    let left = 0;
    // find the occurrence of the ch.
    let right = strWords.indexOf(ch)
    // if it doesn't exist then just return the word.
    if (right === -1) {
        return word
    }

    while (left < right) {

        let temp = strWords[left]
        strWords[left] = strWords[right]
        strWords[right] = temp

        left++
        right--

    }

    return strWords.join('')
}

console.log(reversePrefix("abcdefd","d"))