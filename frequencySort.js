/*
Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

Return the sorted string. If there are multiple answers, return any of them.

Example 1:
Input: s = "tree"
Output: "eert"
*/

function frequencySort(s) {

    let sortMap = new Map();
    let result = ""

    for (let char of s) {
        console.log("char---->",char)

        sortMap.set(char, (sortMap.get(char) || 0)+1)

    }
    // convert map entries into an array and sort based on frequency
    let sortEntries = [...sortMap.entries()].sort((a,b)=> b[1] - a[1])

    for (const [key, val] of sortEntries) {
        console.log(`Key ---> ${key} : Value ---->${val}`)

        result += key.repeat(val)

    }

    return result
}

// console.log(frequencySort("tree"))
console.log(frequencySort("cccaaa"))