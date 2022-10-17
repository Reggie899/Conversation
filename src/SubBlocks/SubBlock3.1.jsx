import { useContext, useState, useEffect } from "react";
import { Counter } from "../Context/Counter";
import { TypingTime } from "../Context/TypingTime";
import { ShowChoicesTime } from "../Context/ShowChoicesTime"; 
import { SetCountTime } from "../Context/SetCountTime";

export default function SubBlock3dot1() {
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
            <h1>Ich zeichne gerne, schaue Filme und schwimmen mag ich auch. Und deine?</h1>
          )}
          <h1>{showFinal}</h1>
          {choice == true ? (
            <div>
              <button
                onClick={() => {
                  setShowFinal("Oh cool! Was zeichnest deine? Ich lese viel und koche supergerne!");
                  setTimeout(() => setCount("4.1"), countTime);
                  setChoice(false);
                }}
              >
               Oh cool! Was zeichnest du? Ich lese viel und koche supergerne!
              </button>
              <button
                onClick={() => {
                  setShowFinal(
                   "Was ist dein Lieblingsfilm? Ich liebe Kunst und stricken."
                  );
                  setTimeout(() => setCount("4.2"), countTime);
                  setChoice(false);
                }}
              >
               Was ist dein Lieblingsfilm? Ich liebe Kunst und stricken. 
              </button>
            </div>
          ) : null}{" "}
        </div>
  );
}
