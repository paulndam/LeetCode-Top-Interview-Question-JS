/*
Example 3: 844. Backspace String Compare

Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

For example, given s = "ab#c" and t = "ad#c", return true. Because of the backspace, the strings are both equal to "ac".
*/

const backSpaceStringCompare = (s1, s2) => {

    const helpBuildString = (s) => {
        let stack = []
        for (const char in s) {
            if (char !== '#') {
                stack.push(char)
            } else {
                stack.pop()
            }
        }
        return stack.join("")

    }

    return helpBuildString(s1) === helpBuildString(s2)

}

console.log(backSpaceStringCompare("ab#c","ad#c"))