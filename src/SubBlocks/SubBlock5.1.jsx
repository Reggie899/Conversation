import { useContext, useState, useEffect } from "react";
import { Counter } from "../Context/Counter";
import { TypingTime } from "../Context/TypingTime";
import { ShowChoicesTime } from "../Context/ShowChoicesTime";
import { SetCountTime } from "../Context/SetCountTime";

export default function SubBlock5dot1() {
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
          <h1>Sehr gerne! Wie wäre es am Samstag in einem Café</h1>
        </div>
      )}
      <h1>{showFinal}</h1>
      {choice == true ? (
        <div>
          <button
            onClick={() => {
              setShowFinal(
                "Lass uns lieber erst noch länger schreiben und online kennenlernen."
              );
              setTimeout(() => setCount("6.1"), countTime);
              setChoice(false);
            }}
          >
            Lass uns lieber erst noch länger schreiben und online kennenlernen.{" "}
          </button>
          <button
            onClick={() => {
              setShowFinal(
                "Ja, das passt mir gut. Ich schlage vor, im Café Sunrise."
              );
              setTimeout(() => setCount("6.2"), countTime);
              setChoice(false);
            }}
          >
            Ja, das passt mir gut. Ich schlage vor, im Café Sunrise.{" "}
          </button>
        </div>
      ) : null}{" "}
    </div>
  );
}
