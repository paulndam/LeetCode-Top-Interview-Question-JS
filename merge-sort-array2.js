const merge2 = (array1, array2) => {

    // set pointers
    let i = 0; // pointer for array1
    let j = 0; // pointer for array2
    let finalArray = []  // initializing empty array.

    // loop thru both array as long as they have elements.
    while (i < array1.length && j < array2.length) {
        // check if first element is array1 is less than or equal to elements in array2
        // then add it into final array and increment your pointer in order to move to the next element.
        // else if its not less than or equal to element in array2 then add that element into final array array and increment your pointer in order to move to the next element.
        if (array1[i] <= array2[j]) {
            finalArray.push(array1[i]);
            i++
        } else {
            finalArray.push(array2[j]);
            j++
        }

    }
    // check if there's any element left in array 1, if so , add them into final array.
    while (i < array1.length) {
        finalArray.push(array1[i])
        i++
    }
    // check if there's any element left in array 1, if so , add them into final array.
    while (j < array1.length) {
        finalArray.push(array1[j])
        j++
    }

    // return finalArray

    // bonus: remove duplicates from merged array if any.
    return finalArray.filter((value, index, arrayValues) => {
        return arrayValues.indexOf(value) === index

    })


}

const arr1 = [1, 3, 5, 8]
const arr2 = [2, 2, 6, 7]

const t = merge2(arr1, arr2)
console.log(t)
