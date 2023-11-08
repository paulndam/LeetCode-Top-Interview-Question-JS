/**
 * Given a string s, return the first character to appear twice. It is guaranteed that the input will have a duplicate character.
 */
function firstLetterToAppearTwice(str) {

    let seen = new Set();

    for (let i = 0; i < str.length; i++){

        if (seen.has(str[i])) {
            return str[i]
        }

        seen.add(str[i])
    }
    return " "
}
console.log(firstLetterToAppearTwice("abcdeda"))