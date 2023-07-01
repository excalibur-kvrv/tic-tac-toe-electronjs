import { useState } from "react";
import GameBoard from "./GameBoard.jsx";
import PlayerTokenChoice from "./PlayerTokenChoice.jsx";
import "./App.css";

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [playerToken, setPlayerToken] = useState("");

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      {gameStarted ? (
        <GameBoard playerToken={playerToken} gameStartedHandler={setGameStarted} />
      ) : (
        <PlayerTokenChoice
          playerTokenHandler={setPlayerToken}
          gameStartedHandler={setGameStarted}
        />
      )}
    </div>
  );
};

export default App;
