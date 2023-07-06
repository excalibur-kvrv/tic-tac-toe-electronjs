import { getBoardFromDict, calculateWinner, checkForTie, getWinnerPos } from "./utils";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faO } from "@fortawesome/free-solid-svg-icons";
import "./GameBoard.css";

const GameBoard = ({ playerToken, gameStartedHandler }) => {
  const [board, setBoard] = useState({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
  });
  const [winner, setWinner] = useState("");
  const [winnerPos, setWinnerPos] = useState([-1, -1, -1]);
  const [currentPlayer, setCurrentPlayer] = useState(playerToken);
  const [tie, setTie] = useState(false);

  useEffect(() => {
    const currentBoard = getBoardFromDict(board);
    const currentWinner = calculateWinner(currentBoard);
    const winningPos = getWinnerPos(currentBoard);
    const currentTie = checkForTie(board);
    setTie(currentTie);
    setWinnerPos(winningPos);
    setWinner(currentWinner);
  }, [board]);

  const setBoardToken = (value) => {
    if (winner) return null;
    if (board[value] === "") {
      setBoard({ ...board, [value]: currentPlayer });
      if (currentPlayer === "X") setCurrentPlayer("O");
      else setCurrentPlayer("X");
    }
  };

  const setIcon = (value) => {
    if (value === "X" || value === "O") {
      return value === "X" ? (
        <FontAwesomeIcon icon={faX} />
      ) : (
        <FontAwesomeIcon icon={faO} />
      );
    }
  };

  return (
    <div className="game-board">
      <p>
        Current Player {" "}
        {currentPlayer === "X" ? (
          <FontAwesomeIcon icon={faX} />
        ) : (
          <FontAwesomeIcon icon={faO} />
        )}
      </p>
      <div className="board">
        <div className="row-1">
          <div className="col-1">
            <div className={winnerPos[0] === 0 && winnerPos[1] === 3 ? "completed-line-vertical": "hide"}></div>
            <div className={winnerPos[0] === 0 && winnerPos[1] === 1 ? "completed-line-horizontal": "hide"}></div>
            <div className={winnerPos[0] === 0 && winnerPos[1] === 4 ? "completed-line-diagonal-top": "hide"}></div>
            <span className="player-token" onClick={() => setBoardToken("0")}>
              {setIcon(board["0"])}
            </span>
          </div>
          <div className="col-2">
            <div className={winnerPos[0] === 1 && winnerPos[1] === 4 ? "completed-line-vertical": "hide"}></div>
            <span className="player-token" onClick={() => setBoardToken("1")}>
              {setIcon(board["1"])}
            </span>
          </div>
          <div className="col-3">
            <div className={winnerPos[0] === 2 && winnerPos[1] === 5 ? "completed-line-vertical": "hide"}></div>
            <span className="player-token" onClick={() => setBoardToken("2")}>
              {setIcon(board["2"])}
            </span>
          </div>
        </div>
        <div className="row-2">
          <div className="col-4">
            <div className={winnerPos[0] === 3 && winnerPos[1] === 4 ? "completed-line-horizontal": "hide"}></div>
            <span className="player-token" onClick={() => setBoardToken("3")}>
              {setIcon(board["3"])}
            </span>
          </div>
          <div className="col-5">
            <span className="player-token" onClick={() => setBoardToken("4")}>
              {setIcon(board["4"])}
            </span>
          </div>
          <div className="col-6">
            <span className="player-token" onClick={() => setBoardToken("5")}>
              {setIcon(board["5"])}
            </span>
          </div>
        </div>
        <div className="row-3">
          <div className="col-7">
            <div className={winnerPos[0] === 6 && winnerPos[1] === 7 ? "completed-line-horizontal": "hide"}></div>
            <div className={winnerPos[0] === 2 && winnerPos[1] === 4 ? "completed-line-diagonal-bottom": "hide"}></div>
            <span className="player-token" onClick={() => setBoardToken("6")}>
              {setIcon(board["6"])}
            </span>
          </div>
          <div className="col-8">
            <span className="player-token" onClick={() => setBoardToken("7")}>
              {setIcon(board["7"])}
            </span>
          </div>
          <div className="col-9">
            <span className="player-token" onClick={() => setBoardToken("8")}>
              {setIcon(board["8"])}
            </span>
          </div>
        </div>
      </div>
      {tie ? <p>Game is a draw</p> : null}
      {winner ? <p>{setIcon(winner)} won the game</p> : null}
      {winner || tie ? <button onClick={() => gameStartedHandler(false)} className="restart-button">Restart Game</button>: null}
    </div>
  );
};

export default GameBoard;
