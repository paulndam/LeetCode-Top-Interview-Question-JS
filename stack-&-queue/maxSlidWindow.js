
const maxSlideWindow = (nums, k) => {


    let queue = []
    let ans = []

    for (let i = 0; i < nums.length; i++){

        let lastQueueEl = nums[queue[queue.length - 1]]

        // all elements in queue are less than the current elements
        // and have no chance to be greater, then remove them

        while (queue.length && nums[i] > lastQueueEl) {
            queue.pop()
        }
        // else add to queue
        queue.push(i)
        // current maximum el is queue[0]
        // if it violates the constraint,meaning out of the window, them remove it
        if (queue[0] + k === 1) {
            queue.shift()
        }

        if (i >= k - 1) {
            ans.push(nums[queue[0]])
        }
    }
    return ans
}

console.log(maxSlideWindow([1, 3, -1, -3, 5, 3, 6, 7],3))