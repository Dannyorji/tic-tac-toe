import { useState } from "react";
import "./App.css";
import { Square } from "./Task";
import { Board } from "./Board";
export default function Game() {
  const [history, setHistory] = useState([[9].fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setHistory([...history, nextSquares]);
  }
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    move > 0
      ? (description = "Go to move #" + move)
      : (description = "Go to game start");

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });
  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol className="move">{moves}</ol>
      </div>
    </div>
  );
}
