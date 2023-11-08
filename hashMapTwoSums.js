// Using Hash Map.

function twoSums(nums, target) {


    //Initialize your hashMap.
    let hashMap = new Map();


    // loop over nums array and get each element.
    for (let i = 0; i < nums.length; i++) {

        let num = nums[i];

        let element = target - num

        if (hashMap.has(element)) {
            return [hashMap.get(element),i]
        }

        hashMap.set(num,i)
    }

    return [-1,-1]
}

/**
 *
 *
 * index 0 : 10 - 2 = 8
 * index 1 : 10 - 7 = 3
 *
{
    key=2 : val=0
    key=7 : val=1
}

 */
function twoSums2(nums, target) {

    let hash = new Map();

    for (let i = 0; i < nums.length; i++) {

        let el = nums[i];
        let elementSum = target - el

        if (hash.has(elementSum)) {
            return [hash.get(elementSum),i]
        }

        hash.set(el,i)
    }
    return [-1,-1]
}

console.log(twoSums2([5, 2, 7, 10, 3,9],8))
