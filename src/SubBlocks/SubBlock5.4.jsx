// -- zeichnen selbst

import { useContext, useState, useEffect } from "react";
import { Counter } from "../Context/Counter";
import eyePic from "../img/eye.jpg";
import { TypingTime } from "../Context/TypingTime";
import { ShowChoicesTime } from "../Context/ShowChoicesTime";
import { SetCountTime } from "../Context/SetCountTime";

export default function SubBlock5dot4() {
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
          <h1>Der Schock-Effekt!</h1>
          <img width="300" src={eyePic} />
        </div>
      )}
      <h1>{showFinal}</h1>
      {choice == true ? (
        <div>
          <button
            onClick={() => {
              setShowFinal(
                "Schock und sowas ist nicht so meins."
              );
              setTimeout(() => setCount("6.4"), countTime);
              setChoice(false);
            }}
          >
            Schock und sowas ist nicht so meins.{" "}
          </button>
          <button
            onClick={() => {
              setShowFinal(
                "Nice. Finde ich auch gut. Wollen wir uns am Samstag einen Film zusammen anschauen?"
              );
              setTimeout(() => setCount("6.3"), countTime);
              setChoice(false);
            }}
          >
            Nice. Finde ich auch gut. Wollen wir uns am Samstag einen Film zusammen anschauen?{" "}
          </button>
        </div>
      ) : null}{" "}
    </div>
  );
}
