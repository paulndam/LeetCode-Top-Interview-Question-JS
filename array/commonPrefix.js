/**
 * Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 */

// use a two pointer technique

const longestCommonPrefix = (strs) => {

    if(strs.length === 0) return ""

    let longest = strs[0].length; // length of first string
    
    // iterate thru the strings starting from the second string
    for(let i = 1; i < strs.length; i++){
       
        // for each string, iterate through its character and compare to the first string
        let j = 0;
        // compare each character of strings to the first string
        // if they match then move onto to the next one
        while(j < strs[i].length && j < longest && strs[i][j] === strs[0][j]){
            j++
        }

        // update prefix to the current position.
        longest = j
    }
    // return longest prefix
    return strs[0].substring(0,longest)
}

console.log(longestCommonPrefix(["flower","flow","flight"]))