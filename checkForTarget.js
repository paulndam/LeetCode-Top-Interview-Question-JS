function checkForTarget(arr, k) {

    let left = 0;
    let right = arr.length - 1;
    let sum

    while (left < right) {

        console.log("left--->",arr[left])
        console.log("right --->",arr[right])

        sum = arr[left] + arr[right]

        console.log("sum --->",sum)

        if ( sum === k) {
            return true;
        }

        if (sum > k) {
            right--
        } else {
            left--
        }


    }
    return false;
}

console.log(checkForTarget([1,2,3,4,5,6,7],5))