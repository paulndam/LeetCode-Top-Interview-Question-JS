

function findLongestSubstring(string, k) {

    // initialize map in order to keep track of occurrence of element
    let counts = new Map();
    // set pointers
    let left = 0
    let  ans = 0;
    // loop thru string array
    for (let right = 0; right < string.length; right++) {
        // add element in array going towards the right
        counts.set(string[right], (counts.get(string[right]) || 0) + 1)
        // if constraints is violated
        while (counts.size > k) {
            // remove the element from the left and increment it to the next one
            counts.set(string[left], counts.get(string[left]) - 1)

            if (counts.get(string[left]) == 0) {
                counts.delete(string[left])
            }

            left++
        }

        ans = Math.max(ans, right - left + 1)

    }
    return ans
}

console.log(findLongestSubstring("eceba",2))