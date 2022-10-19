import { useContext, useState, useEffect } from "react";
import { Counter } from "../Context/Counter";
import { TypingTime } from "../Context/TypingTime";
import { ShowChoicesTime } from "../Context/ShowChoicesTime";
import { SetCountTime } from "../Context/SetCountTime";
import scary from "../img/scary.jpg";

export default function SubBlock6dot4() {
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
          <img width="300" src={scary} />{" "}
        </div>
      )}
      <h1>{showFinal}</h1>
      {choice == true ? (
        <div>
          <button
            onClick={() => {
              setShowFinal(
                "Ja, genau sowas meine ich 😳 Warum schickst du mir sowas???"
              );
              setTimeout(() => setCount("3.3"), countTime);
              setChoice(false);
            }}
          >
            Ja, genau sowas meine ich 😳 Warum schickst du mir sowas???{" "}
          </button>
          <button
            onClick={() => {
              setShowFinal("haha.. ja, aber das ist ja harmlos... ");
              setTimeout(() => setCount("7.4"), countTime);
              setChoice(false);
            }}
          >
            haha.. ja, aber das ist ja harmlos...{" "}
          </button>
        </div>
      ) : null}{" "}
    </div>
  );
}
