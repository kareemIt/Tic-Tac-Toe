import React, { useState } from 'react';
import './style.css';
import Square from './component/Square.js';

export default function App() {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, SetXIsNext] = useState(true);
  const winner = winGame(board);

  const handleClick = () => {
    const boardCopy = [...board];
    if (winner || boardCopy[i]) return;
    boardCopy[i] = xIsNext ? 'X' : 'O';
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };

  const renderMoves = () => (
    <button onClick={() => setBoard(Array(9).fill(null))}>Start Game</button>
  );

  function winGame(board) {
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        board[a] &&
        board[a] == board[b] &&
        board[b] == board[c] &&
        board[c]
      ) {
        return board[a];
      }
    }
    return;
  }

  return (
    <div className="Container">
      {board.map((boards, i) => {
        return <Square key={i} value={boards} onClick={handleClick} />;
      })}
      <p>
        {winner ? 'Winner:' + winner : 'Next Player:' + (xIsNext ? 'X' : '0')}
      </p>
      {renderMoves()}
    </div>
  );
}
