/**
 *
 * Given a string s, reverse the string according to the following rules:

All the characters that are not English letters remain in the same position.
All the English letters (lowercase or uppercase) should be reversed.
Return s after reversing it.

Example 1:

Input: s = "ab-cd"
Output: "dc-ba"

 */

function reverseOnlyLetters(s) {

    let string = s.split('');

    let left = 0;
    let right = string.length - 1;

    while (left < right) {

        while (left < right && !isLetter(string[left])) {
            left++
        }

        while (left < right && !isLetter(string[right])) {
            right --
        }

        [string[left], string[right]] = [string[right], string[left]]

        left++;
        right--;


    }

    return string.join('')

}

function isLetter(str) {
    return str.match(/[a-z]/i)
}

console.log(reverseOnlyLetters('ab-cd'));
console.log(reverseOnlyLetters('a-bC-dEf-ghIj'));