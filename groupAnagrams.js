/*
For example, given strs = ["eat","tea","tan","ate","nat","bat"], return [["bat"],["nat","tan"],["ate","eat","tea"]].
 */

function groupAnagram(str) {


    let groupCount = new Map();
    let ans = []

    for (const char of str) {
        let key = char.split('').sort().join();

        if (!groupCount.has(key)) {
            groupCount.set(key,[])

        }

        groupCount.get(key).push(char)
    }

    for (const group of groupCount.values()) {
        ans.push(group)
    }
    return ans
}

console.log(groupAnagram(["eat","tea","tan","ate","nat","bat"]))