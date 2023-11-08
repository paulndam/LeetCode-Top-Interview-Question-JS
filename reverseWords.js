/**
 * Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:

Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Example 2:

Input: s = "God Ding"
Output: "doG gniD"

 */

function reverseWords(s) {

    let words = s.split(' ');
    console.log("words --->", words);

    for (let i = 0; i < words.length; i++) {

        let word = words[i]
        let arr = words[i].split('')
        let left = 0
        let right = word.length - 1

        while (left < right) {

            let temp = arr[left]
            arr[left] = arr[right]
            arr[right] = temp

            left++;
            right--

        }

        words[i] = arr.join('')
    }

    return words.join(' ')

}

console.log(reverseWords("Let's take LeetCode contest"))