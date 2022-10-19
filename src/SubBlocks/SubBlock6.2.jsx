//Café Sunrise

// versehentlich geswiped

import { useContext, useState, useEffect } from "react";
import { Counter } from "../Context/Counter";
import { TypingTime } from "../Context/TypingTime";
import { ShowChoicesTime } from "../Context/ShowChoicesTime";
import { SetCountTime } from "../Context/SetCountTime";

export default function SubBlock6dot2() {
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
          <h1>Café Sunset finde ich persönlich besser. Aber ich bin da offen.</h1>
        </div>
      )}
      <h1>{showFinal}</h1>
      {choice == true ? (
        <div>
          <button
            onClick={() => {
              setShowFinal(
                "Im Café Sunset hab ich Hausverbot 🫣 .. lass uns lieber in Sunrise treffen."
              );
              setTimeout(() => setCount("7.2"), countTime);
              setChoice(false);
            }}
          >
            Im Café Sunset hab ich Hausverbot 🫣 .. lass uns lieber in Sunrise treffen.{" "}
          </button>
          <button
            onClick={() => {
              setShowFinal(
                "Okay, dann treffen wir uns im Sunrise! Um 14 Uhr?"
              );
              setTimeout(() => setCount("7.3"), countTime);
              setChoice(false);
            }}
          >
            Okay, dann treffen wir uns im Sunrise! Um 14 Uhr?{" "}
          </button>
        </div>
      ) : null}{" "}
    </div>
  );
}
