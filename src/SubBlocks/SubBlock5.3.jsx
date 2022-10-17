// -- zeichnen selbst

import { useContext, useState, useEffect } from "react";
import { Counter } from "../Context/Counter";
import eyePic from "../img/eye.jpg";
import { TypingTime } from "../Context/TypingTime";
import { ShowChoicesTime } from "../Context/ShowChoicesTime";
import { SetCountTime } from "../Context/SetCountTime";

export default function SubBlock5dot3() {
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
          <h1>Herr der Ringe mag ich auch. Am Samstag kommt der neue Teil in die Kinos. Wollen wir zusammen hin?</h1>
          <img width="300" src={eyePic} />
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
                "Hammer Idee! Ich bin dabei. Welches Kino? Das am Wasser?"
              );
              setTimeout(() => setCount("6.3"), countTime);
              setChoice(false);
            }}
          >
            Hammer Idee! Ich bin dabei. Welches Kino? Das am Wasser?{" "}
          </button>
        </div>
      ) : null}{" "}
    </div>
  );
}
