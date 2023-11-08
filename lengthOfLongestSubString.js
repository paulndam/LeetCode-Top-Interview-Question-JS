function lengthOfLongestSubString(string) {

    // using sliding window technique
    let charMap = new Map();
    let left = 0; // left pointer
    let maxLen = 0; // stores max length of sub string

    for (let right = 0; right < string.length; right++) {
        // if character already exist in string increment it to 1,
        // then we move the left pointer to the right.(our window can only move towards the right)
        if (charMap.has(string[right])) {
            left = Math.max(left, charMap.get(string[right])+1);
        }

        // updating last index of character
        charMap.set(string[right], right)
        // get the length of substring array
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}