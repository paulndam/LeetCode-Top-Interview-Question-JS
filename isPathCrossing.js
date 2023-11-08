/**
 * Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.

Return true if the path crosses itself at any point, that is, if at any time you are on a location you have previously visited. Return false otherwise.


*/


function isPathCrossing(path) {

    let pathMap = new Map();
    // keep track of the current position
    let x = 0;
    let y = 0;

    // set starting point
    let coordinates = `${x},${y}`

    // add starting point to map.
    pathMap.set(coordinates, true)

    // loop thru each coordinate in path
    for (let dir of path) {

        switch (dir) {
            case 'N':
                y++;
                break;
            case 'S':
                y--;
                break;
            case 'E':
                x++;
                break
            case 'W':
                x--
                break
        }

        coordinates = `${x},${y}`

        if (pathMap.has(coordinates)) {
            return true
        }

        pathMap.set(coordinates,true)

    }

    return false
}

console.log(isPathCrossing("NES"))
console.log(isPathCrossing("NESWW"))
