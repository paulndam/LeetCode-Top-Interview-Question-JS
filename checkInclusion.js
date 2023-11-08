/*
Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
In other words, return true if one of s1's permutations is the substring of s2.
Example 1:
Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").

*/



function checkInclusion(s1, s2) {

    let s1Map = new Map();
    let windowMap = new Map();

    // create frequency map for s1.

    for (let char of s1) {
        s1Map.set(char,(s1Map.get(char) || 0) + 1);
    }

    // create frequency map for first window in s2.
    for (let i = 0; i < s1.length; i++) {
        windowMap.set(s2[i], (windowMap.get(s2[i]) || 0) + 1)

    }
    // helper function comparing maps
    const mapsAreEqual = (map1, map2) => {

        if (map1.size !== map2.size) return false

        for (let [key, value] of map1) {
            if(map2.get(key) !== value) return false
        }
        return true
    }

    // iterate/traverse thru s2, with a window of length of s1.length and compare.
    for (let i = s1.length; i <= s2.length; i++){

        if (mapsAreEqual(s1Map, windowMap)) {
            return true
        }

        // move window to right,
        // by subtracting leftmost char and adding a new char.
        windowMap.set(s2[i - s1.length], windowMap.get(s2[i - s1.length]) - 1)

        if (windowMap.get(s2[i - s1.length]) === 0) {
            windowMap.delete(s2[i - s1.length])
        }

        windowMap.set(s2[i], (windowMap.get(s2[i])||0)+1)
    }


    return false
}

console.log(checkInclusion("ab", "eidbaooo"))
console.log(checkInclusion("adc", "dcda"))