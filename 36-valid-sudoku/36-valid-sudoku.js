/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const rows = {}
    const cols = {}
    const grids= {}
    
    for (let r=0; r<9; r++){
        for (let c=0; c<9; c++){
            if (board[r][c] != "."){
                
                const cell = Math.floor(r/3) + "," + Math.floor(c/3)
                rows[r]= rows[r]|| new Set()
                cols[c]= cols[c]|| new Set()
                grids[cell] = grids[cell] || new Set()
                
                if (rows[r].has(board[r][c]) ||
                    cols[c].has(board[r][c]) ||
                    grids[cell].has(board[r][c])
                   ) { return false}
                
                rows[r].add(board[r][c]) 
                cols[c].add(board[r][c]) 
                grids[cell].add(board[r][c])
            }
        }
    }
    return true
};