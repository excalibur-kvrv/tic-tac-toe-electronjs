import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faO } from "@fortawesome/free-solid-svg-icons";
import "./PlayerTokenChoice.css";

const PlayerTokenChoice = ({
  gameStartedHandler,
  playerTokenHandler
}) => {
  const setToken = (evt) => {
    playerTokenHandler(evt.target.value);
    gameStartedHandler(true);
  }

  return (
    <div>
      <p>Select player 1's token</p>
      <div>
        <button onClick={setToken} value="X" className="button"><FontAwesomeIcon icon={faX} /></button>
        <button onClick={setToken} value="O" className="button"><FontAwesomeIcon icon={faO} /></button>
      </div>
    </div>
  );
};

export default PlayerTokenChoice;