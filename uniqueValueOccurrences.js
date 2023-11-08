function uniqueValueOccurrences(arr) {


    let count = new Map();
    let freqMap = new Map();

    for (const num of arr) {

        count.set(num, (count.get(num) || 0) + 1);
    }


    for (const val of count.values()) {

        if (freqMap.has(val)) {
            return false
        }

        freqMap.set(val, true)
    }

    return true;
}

console.log(uniqueValueOccurrences([1, 2, 2, 1, 1, 3]))
console.log(uniqueValueOccurrences([1, 2]))
console.log(uniqueValueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]))