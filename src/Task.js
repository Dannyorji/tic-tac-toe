import { useState, useEffect } from "react";

export function Square({ value, onSquareClick }) {
  const [bgColor, setBgColor] = useState("white");
  useEffect(() => {
    if (value == "X") setBgColor("pink");
    else if (value == "O") setBgColor("orange");
  }, [value]);

  return (
    <button
      onClick={onSquareClick}
      style={{ backgroundColor: bgColor }}
      className="square"
    >
      {value}
    </button>
  );
}
