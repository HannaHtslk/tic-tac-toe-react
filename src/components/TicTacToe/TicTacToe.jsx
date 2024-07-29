// TicTacToe.js
import React, { useRef, useState } from "react";
import Board from "../Board/Board";
import s from "./TicTacToe.module.css";
import circle_icon from "../../assets/circle-removebg-preview.png";
import cross_icon from "../../assets/cross-removebg-preview.png";
import { IoMdHeartEmpty } from "react-icons/io";
import { RiCloseLargeLine } from "react-icons/ri";
import { GoCircle } from "react-icons/go";

const TicTacToe = () => {
  const [data, setData] = useState(Array(9).fill(""));
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [winner, setWinner] = useState(null);
  const titleRef = useRef(null);

  const toggle = (index) => {
    if (lock || data[index]) return;

    const newData = [...data];
    newData[index] = count % 2 === 0 ? "x" : "o";
    setData(newData);
    setCount(count + 1);

    checkTheWinner(newData);
  };

  const checkTheWinner = (data) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let [a, b, c] of winningCombinations) {
      if (data[a] && data[a] === data[b] && data[a] === data[c]) {
        won(data[a]);
        return;
      }
    }

    if (data.every((square) => square)) {
      setWinner("draw");
      setLock(true);
    }
  };

  const won = (winner) => {
    setLock(true);
    setWinner(winner); // Set winner state
  };

  const reset = () => {
    setData(Array(9).fill(""));
    setCount(0);
    setLock(false);
    setWinner(null);
  };

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <h1 className={s.title} ref={titleRef}>
          Tic <IoMdHeartEmpty className={s.icon} />
          Tac <IoMdHeartEmpty className={s.icon} />
          Toe
        </h1>
        <h2 className={s.tech}>React</h2>
        {winner ? (
          <div className={s.winnerMessage}>
            {winner === "x" || winner === "o" ? (
              <>
                Congratulations:{" "}
                {winner === "x" ? <RiCloseLargeLine /> : <GoCircle />}
              </>
            ) : (
              "It's a draw!"
            )}
          </div>
        ) : null}
        <Board data={data} onSquareClick={toggle} />
        <button className={s.btn} onClick={reset}>
          reset
        </button>
      </div>
    </div>
  );
};
export default TicTacToe;
