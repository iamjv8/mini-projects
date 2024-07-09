"use client";
import React, { useState } from "react";
import Box from "./Box";
import styles from "./styles.module.css";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXUserTurn, setIsXUserTurn] = useState(true);
  const [gameStatus, setGameStatus] = useState(null);
  const handleClick = (index) => {
    if (state[index] !== null) {
      return;
    }
    const copyState = [...state];
    copyState[index] = isXUserTurn ? "X" : "O";
    setState(copyState);
    setIsXUserTurn(!isXUserTurn);
    const remainingTurns = copyState.filter((item) => item == null);
    if (!remainingTurns.length) {
      console.log("Game Draw");
      setGameStatus("Draw");
    }
  };

  const calculateWinner = () => {
    const list = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let item of list) {
      const [a, b, c] = item;
      if (a !== null && state[a] === state[b] && state[b] === state[c]) {
        return state[a];
      }
    }
    return false;
  };

  const restartGame = () => {
    setState(Array(9).fill(null));
    setGameStatus(null);
  };

  const winner = calculateWinner();

  return (
    <div className={styles.boardContainer}>
      {winner || gameStatus ? (
        <>
          {gameStatus == "Draw" ? <>Game Draw</> : <>Winner is : {winner}</>}{" "}
          <button onClick={restartGame}>Restart</button>
        </>
      ) : (
        <>
          <div className={styles.boardRow}>
            <Box value={state[0]} onClick={() => handleClick(0)} />
            <Box value={state[1]} onClick={() => handleClick(1)} />
            <Box value={state[2]} onClick={() => handleClick(2)} />
          </div>
          <div className={styles.boardRow}>
            <Box value={state[3]} onClick={() => handleClick(3)} />
            <Box value={state[4]} onClick={() => handleClick(4)} />
            <Box value={state[5]} onClick={() => handleClick(5)} />
          </div>
          <div className={styles.boardRow}>
            <Box value={state[6]} onClick={() => handleClick(6)} />
            <Box value={state[7]} onClick={() => handleClick(7)} />
            <Box value={state[8]} onClick={() => handleClick(8)} />
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
