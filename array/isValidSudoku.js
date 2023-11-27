/*
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
*/


const isValidSudoku = (board) => {
    // initialize columns array
    let columnSet = Array.from({ length: 9 }, () => new Set())

    for (let i = 0; i < board.length; i++){

        // Use a Set to make sure each row element is unique
        let rowSet = new Set()

        // loop thru inner array, in order to loop over each row column
        for (let j = 0; j < board[i].length; j++){

            console.log("Element at -----> [" + i + "][" + j + "]:", board[i][j])

            // check if row contains unique non-empty elements.
            if (board[i][j] !== ".") {
                // row check
                if (rowSet.has(board[i][j])) {
                    console.log(`Row ${i} is not unique`)
                    return false
                }
                rowSet.add(board[i][j])

                // column check
                if (columnSet[j].has(board[i][j])) {
                    console.log(`Column ${j} is not unique`)
                    return false
                }
                columnSet[j].add(board[i][j])

            }

        }

    }

    // check for unique values in 3x3 subgrid

    for (let i = 0; i < 9; i += 3){
        for (let j = 0; j < 9; j += 3){

            let boxSet = new Set()
            // loops over row of subgrid
            for (let k = 0; k < 3; k++){
                // loops over column of subgrid
                for (x = 0; x < 3; x++){

                    let current = board[i + k][j + x]
                    console.log("current board ---->", current)

                    if (current !== "." && boxSet.has(current)) {
                        console.log(`Duplicate number found in 3x3 box starting at row ${i}, column ${j}`)
                        return false
                    }

                    boxSet.add(current)
                }
            }
        }
    }

    return true

}

const inPut =
    [

     ["5","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]

    ]

const inPut2 =
 [["8", "3", ".", ".", "7", ".", ".", ".", "."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".", ".", ".", ".", "8", ".", ".", "7", "9"]]


const inPut3 =
    [
        ["8", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"]
    ]

console.log(isValidSudoku(inPut))
