"use client";
import React from "react";
import Game from "./game";
const data = {
  India: "Delhi",
  China: "Beijing",
  Russia: "Moscow",
  Afghanistan: "Kabul",
  France: "Paris",
  Germany: "Berlin",
  England: "London",
};
const Page = () => {
  return <Game data={data} />;
};

export default Page;
