/*
Example 4: 2352. Equal Row and Column Pairs

Given an n x n matrix grid, return the number of pairs (R, C) where R is a row and C is a column, and R and C are equal if we consider them as 1D arrays.
*/

function equalPairs(grid) {

    // since we can't store arrays in hash map, so we convert them to strings.
    function convertTokey(arr) {

        let key = ""

        for (const num of arr) {
            key += num + ","
        }
        return key
    }

    // create hash map to store count of each row and column
    //
    let dic = new Map();
    // loop over the grid array.
    for (const arr of grid) {
        let key = convertTokey(arr);
        dic.set(key, (dic.get(key) || 0)+1)
    }

    // set hash map to keep track of columns.
    let columnDic = new Map();
    // loop over to grid and get each column
    for (let col = 0; col < grid[0].length; col++) {

        let currentCol = []

        // now loop over your row and compare it with the column to see if there's match.
        for (let row = 0; row < grid.length; row++) {
            currentCol.push(grid[row][col])
        }
        // since we can't store an array in the hash map.
        // use helper function, which converts arrays to strings and store that instead
        let key = convertTokey(currentCol)

        // set the occurrence of the key and if they key exist already, increment the key counter by 1
        dic.set(key, (dic.get(key) || 0)+1)

    }

    let ans = 0;

    for (const [key, val] of dic) {
        ans += val * columnDic.get(key) || 0
    }
    return ans
}