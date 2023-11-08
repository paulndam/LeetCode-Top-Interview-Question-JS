/*
Given an array of integers nums, find the maximum value of nums[i] + nums[j], where nums[i] and nums[j] have the same digit sum (the sum of their individual digits). Return -1 if there is no pair of numbers with the same digit sum.
*/

function maximumSum(nums) {

    // helper sum function
    function getDigitSum(num) {
        let sum = 0;

        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        return sum;
    }

    let dic = new Map();
    let ans = -1

    for (const number of nums) {

        let sum = getDigitSum(number);

        if (dic.has(sum)) {
            ans = Math.max(ans, number + dic.get(sum))
        }

       dic.set(sum, Math.max(dic.get(sum) || 0, number))
    }


    return ans
}