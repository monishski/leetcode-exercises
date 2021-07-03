/**
 * @param {string} moves
 * @return {boolean}
*/
var judgeCircle = function(moves) {
  let position = [0, 0]
  for(let i = 0; i < moves.length; i++) {
    if (moves[i] === 'R' || moves[i] === 'L') {
      position = [position[0] + map[moves[i]], position[1]]
    } else {
      position = [position[0], position[1] + map[moves[i]]]
    }
  }
  return position[0] === 0 && position[1] === 0
  //Again you can rewriten the above:
  // let x = 0, y = 0;
  // for(const move of moves) {
  //   if (move === 'U') y++;
  //   else if (move === 'D') y--;
  //   else if (move === 'L') x--;
  //   else if (move === 'R') x++;
  // }
  // return x === 0 && y === 0;
};

const map = {
  'R': 1,
  'L': -1,
  'U': 1,
  'D': -1
}

