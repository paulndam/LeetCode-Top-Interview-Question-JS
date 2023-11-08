// USING TWO POINTER TECHNIQUE & PATTERN

function isPalindrome(str) {

    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] === str[right]) {

            return true;

        }
        left++;
        right--;
    }
    return false;

}

console.log(isPalindrome("racecar"))
console.log(isPalindrome("noon"))
console.log(isPalindrome("fighter"))
console.log(isPalindrome("civic"))




// racecar