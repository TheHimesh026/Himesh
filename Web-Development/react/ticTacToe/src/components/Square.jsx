import { useState } from 'react';

export default function Square({ value, onSquareClick }) {
  const [clickOn, setClickOn] = useState(false);

  const handleClick = () => {
    setClickOn(true);
    onSquareClick();
  };

  return (
    <button className={`square ${clickOn ? 'stateOn' : null}`} onClick={handleClick}>
      {value}
    </button>
  );
}