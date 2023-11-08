/*
You are given an integer array matches where matches[i] = [winneri, loseri] indicates that the player winneri defeated player loseri in a match.

Return a list answer of size 2 where:

answer[0] is a list of all players that have not lost any matches.
answer[1] is a list of all players that have lost exactly one match.
The values in the two lists should be returned in increasing order.
 */



function findWinners(matches) {

    let counts = new Map();
    let lostOnce = []
    let neverLost = []

    for (const [winner, looser] of matches) {

        // if no element appears more than 1 time, we set that element at the first index, indicating they are a winner
        if (!counts.has(winner)) {
            counts.set(winner,0)
        }

        // increment counts for each time we see a looser. Meaning each time we see value more than once we increment the count.
        counts.set(looser, (counts.get(looser) || 0) + 1)

    }

    // separate players based on their lost count.
    for (const [players, losses] of counts.entries()) {
        if (losses === 0) {
            neverLost.push(players)
        } else if (losses === 1) {
            lostOnce.push(players)
        }
    }

    neverLost.sort((a, b) => a - b)
    lostOnce.sort((a, b) => a - b)

    console.log(neverLost,lostOnce)

    return [neverLost, lostOnce]
}


console.log(findWinners([[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]))