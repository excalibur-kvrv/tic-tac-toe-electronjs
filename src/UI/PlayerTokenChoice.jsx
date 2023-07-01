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
      Select player token
      <button onClick={setToken} value="X">X</button>
      <button onClick={setToken} value="O">O</button>
    </div>
  );
};

export default PlayerTokenChoice;