import React from "react";
import Square from "../Square/Square";
import s from "./Board.module.css";

const Board = ({ data, onSquareClick }) => {
  return (
    <div className={s.board}>
      {data.map((mark, index) => (
        <Square key={index} value={mark} onClick={() => onSquareClick(index)} />
      ))}
    </div>
  );
};

export default Board;
