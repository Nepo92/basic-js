const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const mines = matrix.map((item) => {
    const elem = item.map((el) => el);

    return elem;
  });

  const width = mines[0].length;

  for (let i = 0; i < width; i++) {
    const y = i;

    for (let j = 0; j < width; j++) {
      const x = j;

      const mine = mines[y];
      
      if (mine) {
        const currentMine = mines[y][x];

        if (currentMine === true) {
          if (mines[y]) {
            const up = mines[y - 1];
  
            if (up) {
              if (up !== true) {
                mines[y - 1][x] = mines[y - 1][x] + 1;
              }
  
              const topLeft = mines[y - 1][x - 1];
  
              if (topLeft !== undefined && topLeft !== true) {
                mines[y - 1][x - 1] = mines[y - 1][x - 1] + 1;
              }
  
              const topRight = mines[y - 1][x + 1];
  
              if (topRight !== undefined && topRight !== true) {
                mines[y - 1][x + 1] = mines[y - 1][x + 1] + 1;
              }
            }
  
            const down = mines[y + 1];
  
            if (down) {
              if (down !== true) {
                mines[y + 1][x] = mines[y + 1][x] + 1;
              }
  
              const bottomLeft = mines[y + 1][x - 1];
  
              if (bottomLeft !== undefined && bottomLeft !== true) {
                mines[y + 1][x - 1] = mines[y + 1][x - 1] + 1;
              }
  
              const bottomRight = mines[y + 1][x + 1];
  
              if (bottomRight !== undefined && bottomRight !== true) {
                mines[y + 1][x + 1] = mines[y + 1][x + 1] + 1;
              }
            }
  
            const right = mines[y][x + 1];
  
            if (right !== undefined && right !== true) {
              mines[y][x + 1] = mines[y][x + 1] + 1;
            }
  
            const left = mines[y][x - 1];
  
            if (left !== undefined && left !== true) {
              mines[y][x - 1] = mines[y][x - 1] + 1;
            }
          }
        }
      }
    }
  }

  const result = mines.map((item) => {
    return item.map((item) => {
      if (item === true) {
        return 1;
      } else if (item === false) {
        return 0;
      }

      return item;
    })
  })

  return result;
}

module.exports = {
  minesweeper
};
