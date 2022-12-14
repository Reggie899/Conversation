import { useContext, useState, useEffect } from "react";
import { Counter } from "../Context/Counter";
import { TypingTime } from "../Context/TypingTime";
import { ShowChoicesTime } from "../Context/ShowChoicesTime";
import { SetCountTime } from "../Context/SetCountTime";

export default function SubBlock4dot4() {
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
        <h1>Du wirkst cool und fun. Und ich mag dein Lächeln. Und du mich?</h1>
      )}
      <h1>{showFinal}</h1>
      {choice == true ? (
        <div>
          <button
            onClick={() => {
              setShowFinal(
                "haha danke! Ich hab ausversehen nach rechts geswiped. Aber du wirkst so weit echt nett."
              );
              setTimeout(() => setCount("5.6"), countTime);
              setChoice(false);
            }}
          >
            haha danke! Ich hab ausversehen nach rechts geswiped. Aber du wirkst
            so weit echt nett.{" "}
          </button>
          <button
            onClick={() => {
              setShowFinal(
                "Du scheinst ein sozialer und kreativer Mensch zu sein. Das fand ich sehr ansprechend."
              );
              setTimeout(() => setCount("5.7"), countTime);
              setChoice(false);
            }}
          >
            Du scheinst ein sozialer und kreativer Mensch zu sein. Das fand ich
            sehr ansprechend.{" "}
          </button>
        </div>
      ) : null}{" "}
    </div>
  );
}
