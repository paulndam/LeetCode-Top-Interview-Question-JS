// Using Two Pointer Technique Approach Two.
// Initializing both pointers at first index (0)

function sortArray(arr1, arr2) {

    let i = j = 0;
    let mergedArray = [];

    while (i < arr1.length && j < arr2.length) {

        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++
        } else {
            mergedArray.push(arr2[j]);
            j++
        }


    }

    while (i < arr1.length) {
        // logic below.
        mergedArray.push(arr1[i]);
        i++
    }

    while (j < arr2.length) {
        // logic below.
        mergedArray.push(arr2[j]);
        j++
    }

    return mergedArray;

}
console.log(sortArray([1,3,7,9],[2,4,5,6,8,10]))