import React from "react";
import s from "./Square.module.css";
import { RiCloseLargeLine } from "react-icons/ri";
import { GoCircle } from "react-icons/go";

const Square = ({ value, onClick }) => {
  return (
    <div className={s.box} onClick={onClick}>
      {value === "x" && <RiCloseLargeLine />}
      {value === "o" && <GoCircle />}
    </div>
  );
};

export default Square;
