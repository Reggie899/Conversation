// versehentlich geswiped

import { useContext, useState, useEffect } from "react";
import { Counter } from "../Context/Counter";
import { TypingTime } from "../Context/TypingTime";
import { ShowChoicesTime } from "../Context/ShowChoicesTime";
import { SetCountTime } from "../Context/SetCountTime";

export default function SubBlock6dot1() {
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
          <h1>Ja klar, gar kein Problem.</h1>
        </div>
      )}
      <h1>{showFinal}</h1>
      {choice == true ? (
        <div>
          <button
            onClick={() => {
              setShowFinal(
                "Was isst du gerne? 🍝"
              );
              setTimeout(() => setCount("7.1"), countTime);
              setChoice(false);
            }}
          >
            Was isst du gerne? 🍝{" "}
          </button>
          <button
            onClick={() => {
              setShowFinal(
                "Du bist so verständnisvoll. Wie cool!"
              );
              setTimeout(() => setCount("4.5"), countTime);
              setChoice(false);
            }}
          >
            Du bist so verständnisvoll. Wie cool!{" "}
          </button>
        </div>
      ) : null}{" "}
    </div>
  );
}
