// versehentlich geswiped

import { useContext, useState, useEffect } from "react";
import { Counter } from "../Context/Counter";
import { TypingTime } from "../Context/TypingTime";
import { ShowChoicesTime } from "../Context/ShowChoicesTime";
import { SetCountTime } from "../Context/SetCountTime";

export default function SubBlock5dot6() {
  const [choice, setChoice] = useState(false);
  const [showFinal, setShowFinal] = useState(null);
  const [typing, setTyping] = useState(true);
  const { count, setCount } = useContext(Counter);
  const { typingTime } = useContext(TypingTime);
  const { showChoicesTime } = useContext(ShowChoicesTime);
  const { countTime } = useContext(SetCountTime);

  setTimeout(() => setTyping(false), typingTime);
  useEffect(() => {
    setTimeout(() => setChoice(true), showChoicesTime);
  }, []); //using useEffect, because otherwise before page content changes, choices are visible again

  return (
    <div className="container">
      {typing ? (
        <h1 className="dot-flashing"></h1>
      ) : (
        <div>
          <h1>Oh haha! Charmant! Ich hoffe, du bereust es nicht.</h1>
        </div>
      )}
      <h1>{showFinal}</h1>
      {choice == true ? (
        <div>
          <button
            onClick={() => {
              setShowFinal(
                "Nur ein bisschen 😅"
              );
              setTimeout(() => setCount("5.2"), countTime);
              setChoice(false);
            }}
          >
            Nur ein bisschen 😅{" "}
          </button>
          <button
            onClick={() => {
              setShowFinal(
                "Samstag will ich ins Kino am Wasser. Hast du Lust mitzukommen? Danach weiß ich dann, ob ich's bereue 😅"
              );
              setTimeout(() => setCount("6.3"), countTime);
              setChoice(false);
            }}
          >
            Samstag will ich ins Kino am Wasser. Hast du Lust mitzukommen? Danach weiß ich dann, ob ich's bereue 😅{" "}
          </button>
        </div>
      ) : null}{" "}
    </div>
  );
}
