// Kino am Wasser - muss zu beiden Szenarien passen! (5.4 und 5.3 und 5.6 und 5.7 und 4.5)

//Café Sunrise

// versehentlich geswiped

import { useContext, useState, useEffect } from "react";
import { Counter } from "../Context/Counter";
import { TypingTime } from "../Context/TypingTime";
import { ShowChoicesTime } from "../Context/ShowChoicesTime";
import { SetCountTime } from "../Context/SetCountTime";

export default function SubBlock6dot3() {
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
          <h1>Das finde ich toll! Dann lass es uns so machen. Samstag Kino am Wasser. Wollen wir vorher was trinken?</h1>
        </div>
      )}
      <h1>{showFinal}</h1>
      {choice == true ? (
        <div>
          <button
            onClick={() => {
              setShowFinal(
                "Nein, einen Film schauen reicht mir."
              );
              setTimeout(() => setCount("4.5"), countTime);
              setChoice(false);
            }}
          >
            Nein, einen Film schauen reicht mir.{" "}
          </button>
          <button
            onClick={() => {
              setShowFinal(
                "Sehr gerne! 14 Uhr im Sunrise? Das ist ja nebenan."
              );
              setTimeout(() => setCount("7.3"), countTime);
              setChoice(false);
            }}
          >
            Sehr gerne! 14 Uhr im Sunrise? Das ist ja nebenan.{" "}
          </button>
        </div>
      ) : null}{" "}
    </div>
  );
}
