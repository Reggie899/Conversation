// versehentlich geswiped

import { useContext, useState, useEffect } from "react";
import { Counter } from "../Context/Counter";
import eyePic from "../img/eye.jpg";
import { TypingTime } from "../Context/TypingTime";
import { ShowChoicesTime } from "../Context/ShowChoicesTime";
import { SetCountTime } from "../Context/SetCountTime";

export default function SubBlock5dot7() {
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
          <h1>Das ist süß von dir! Vielleicht können wir uns am Samstag sehen und uns weiter kennenlernen?</h1>
          <img width="300" src={eyePic} />
        </div>
      )}
      <h1>{showFinal}</h1>
      {choice == true ? (
        <div>
          <button
            onClick={() => {
              setShowFinal(
                "Das klingt gut 🍀 Samstag Kino am Wasser?"
              );
              setTimeout(() => setCount("6.3"), countTime);
              setChoice(false);
            }}
          >
            Das klingt gut 🍀 Samstag Kino am Wasser?{" "}
          </button>
          <button
            onClick={() => {
              setShowFinal(
                "Lass uns vielleicht noch ein bisschen länger hier schreiben, bevor wir uns treffen 😊"
              );
              setTimeout(() => setCount("6.1"), countTime);
              setChoice(false);
            }}
          >
            Lass uns vielleicht noch ein bisschen länger hier schreiben, bevor wir uns treffen 😊{" "}
          </button>
        </div>
      ) : null}{" "}
    </div>
  );
}
