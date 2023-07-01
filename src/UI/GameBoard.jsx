import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faO } from "@fortawesome/free-solid-svg-icons";
import "./GameBoard.css";

const GameBoard = ({ playerToken }) => {
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
  const setBoardToken = (value) => {
    console.log(value);
    setBoard({ ...board, [value]: playerToken });
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
      Player selected{" "}
      {playerToken === "X" ? (
        <FontAwesomeIcon icon={faX} />
      ) : (
        <FontAwesomeIcon icon={faO} />
      )}
      <div className="board">
        <div className="row-1">
          <div className="col-1">
            <span className="player-token" onClick={() => setBoardToken("0")}>
              {setIcon(board["0"])}
            </span>
          </div>
          <div className="col-2">
            <span className="player-token" onClick={() => setBoardToken("1")}>
              {setIcon(board["1"])}
            </span>
          </div>
          <div className="col-3">
            <span className="player-token" onClick={() => setBoardToken("2")}>
              {setIcon(board["2"])}
            </span>
          </div>
        </div>
        <div className="row-2">
          <div className="col-4">
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
    </div>
  );
};

export default GameBoard;
