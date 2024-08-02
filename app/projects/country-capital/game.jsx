"use client";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

const Button = ({ label, clickHandler }) => {
  return (
    <button className={styles.button} onClick={clickHandler}>
      {label}
    </button>
  );
};

const Game = ({ data }) => {
  const buttons = [];
  let randomButtons = [];
  let selectedButtons = [];
  Object.entries(data).map((key) => buttons.push(key[0], key[1]));
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  const createRandomButtons = () => {
    let index = 0;
    while (index < buttons.length) {
      const randNumber = Math.floor(Math.random() * buttons.length - 1) + 1;
      if (!randomButtons.includes(buttons[randNumber])) {
        randomButtons = [...randomButtons, buttons[randNumber]];
        index++;
      }
    }
  };
  createRandomButtons();

  const checkPair = () => {
    if (data[selectedButtons[0]]) {
      if (data[selectedButtons[0]] == selectedButtons[1]) {
        console.log("Matched", randomButtons);
        randomButtons.splice(randomButtons.indexOf(selectedButtons[0]), 1);
      }
    }

    if (data[selectedButtons[1]]) {
      if (data[selectedButtons[1]] == selectedButtons[0]) {
        console.log("Matched");
      }
    }
    // Object.entries(data).map((key) => {
    //   if(selectedButtons.indexOf(key[0]) > -1) {

    //   }
    //   if(selectedButtons.includes(key[1])) {

    //   }
    // });
  };

  const clickHandler = (label) => {
    if (selectedButtons.length <= 2) {
      selectedButtons.push(label);
      if (selectedButtons.length == 2) {
        checkPair();
        selectedButtons.length = 0;
      }
    }
  };

  return (
    <div className={styles.container}>
      {hydrated &&
        randomButtons.length &&
        randomButtons.map((item, index) => {
          return (
            <Button
              label={item}
              key={index}
              clickHandler={() => clickHandler(item)}
            />
          );
        })}
    </div>
  );
};

export default Game;
