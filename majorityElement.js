const majorityElement = (array) => {

    let count = 0; // set my count
    let candidate // set the candidate(the element in the array)

    // loop thru array
    for (let num of array) {
        if (count === 0) {
            candidate = num
        }

        count += (num === candidate) ? 1 : -1
    }


    return candidate;
}

const input = [2, 2, 1, 1, 1, 2, 2]
console.log(majorityElement(input))