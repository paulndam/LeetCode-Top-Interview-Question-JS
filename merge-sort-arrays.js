// strategy of doing a merge sort is setting your pointers.
// Time space complexity is O(m+n) , O(1)

const merge = (array1, m, array2, n) => {

    // set pointers
    let i = m - 1; // last element in array1
    let j = n - 1; // last element in array2
    let k = m + n - 1; // last element in the merged array

    // loop through both arrays, as long they are elements in them in decrement pointer
    // in order to move to the next element.
    while (i >= 0 || j >= 0) {
        // check if there are elements in array1 but no more elements in array2.
        if (j < 0) {
            array1[k] = array1[i]
            i--
        }
        // check if there are elements in array2 but no more elements in array1.
        else if (i < 0) {
            array1[k] = array2[j]
            j--
        }
        // check if element in array1 is greater than element in array2.
        else if (array1[i] >= array2[j]) {
            array1[k] = array1[i]
            i--
        }
        // check if element in array2 is greater than element in array1.
        else {
            array1[k] = array2[j]
            j--
        }
        k--

    }


}

const array1 = [1, 2, 3, 0, 0]
const m = 3
const array2 = [2, 5, 6]
const n = 3

merge(array1,m,array2,n)

console.log(array1)

