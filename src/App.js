import React from 'react';
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
		[2, 4, 6],
	];
  fucntion winGame() {

  }

  return (
    <div className="Container">
      <Square value={1} />
      <Square value={2} />
      <Square value={3} />
      <Square value={4} />
      <Square value={5} />
      <Square value={6} />
      <Square value={7} />
      <Square value={8} />
      <Square value={9} />
    </div>
  );
}
