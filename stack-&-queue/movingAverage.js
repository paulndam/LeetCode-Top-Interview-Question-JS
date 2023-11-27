

const MovingAverage = function(size){

    this.size = size;
    this.queue = [];
    this.sum = 0
}

MovingAverage.prototype.next = function(val){
    // store el in queue
    this.queue.push(val)
    this.sum += val;

    // remove old value if queue size is larger than the original array size.
    if (this.queue.length > this.size) {
        this.sum -= this.queue.shift()
    }

    // return avg
    return this.sum / Math.min(this.queue.length, this.size)
}

const movingAverage = new MovingAverage(3)
console.log(movingAverage.next(1))
console.log(movingAverage.next(10))
console.log(movingAverage.next(3))
console.log(movingAverage.next(5))