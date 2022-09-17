import React from 'react';
function getAdjacentMineCount(board, x, y){
        let top = 0;
        let bottom = 0;
        let left = 0;
        let right = 0;
        if ( x!== 0 && board[x-1][y] === "X"){
            top = 1
        }
      
        if(x !== (board.length-1) && board[x+1][y] === "X"){
            bottom = 1
        }

        if (y !== 0 && board[x][y-1] === "X"){
            left = 1
        }
      
        if(y === (board[0].length)-1 && board[x][y+1] === "X"){
            right = 1
        }
        console.log(top)
        console.log(bottom)
        console.log(left)
        console.log(right)
        return top+bottom+left+right;
    }
      

function getAdjacentMines(board, x, y){
    let adjacentMineCount = getAdjacentMineCount(board, x, y)
    console.log(adjacentMineCount)
}

export {getAdjacentMines};