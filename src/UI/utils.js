function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function getWinnerPos(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [a, b, c];
    }
  }
  return [-1, -1, -1];
}

function getBoardFromDict(dict) {
  const board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let key of Object.keys(dict)) {
    board[key] = dict[key];
  }
  return board;
}

function checkForTie(dict) {
  let availablePos = false;
  for (let key of Object.keys(dict)) {
    if (dict[key] === "") availablePos = true;
  }
  return !availablePos;
}

export { calculateWinner, getBoardFromDict, checkForTie, getWinnerPos };