function findLargestLuckyInteger(arr) {

    let countEl = new Map();

    let maxVal = -1;

    for (const num of arr) {
        countEl.set(num, (countEl.get(num)||0)+1)
    }

    for (const [key, val] of countEl.entries()) {

        if (key === val) {
            maxVal = Math.max(maxVal,key)
        }
    }

    return maxVal
}

console.log(findLargestLuckyInteger([2, 2, 3, 4]))
console.log(findLargestLuckyInteger([1, 2, 2, 3, 3, 3]))
console.log(findLargestLuckyInteger([2,2,2,3,3]))
