import { useContext, useState, useEffect } from "react";
import { Counter } from "../Context/Counter";
import { TypingTime } from "../Context/TypingTime";
import { ShowChoicesTime } from "../Context/ShowChoicesTime"; 
import { SetCountTime } from "../Context/SetCountTime";

export default function SubBlock4dot2() {
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
            <h1>Dancer in the dark. Und deiner?</h1>
          )}
          <h1>{showFinal}</h1>
          {choice == true ? (
            <div>
              <button
                onClick={() => {
                  setShowFinal("Kenne ich nicht. Meiner... Herr der Ringe.");
                  setTimeout(() => setCount("5.3"), countTime);
                  setChoice(false);
                }}
              >
              Kenne ich nicht. Meiner... Herr der Ringe.
              </button>
              <button
                onClick={() => {
                  setShowFinal(
                   "Artsy! Was gefällt dir daran?"
                  );
                  setTimeout(() => setCount("5.4"), countTime);
                  setChoice(false);
                }}
              >
                "Artsy! Was gefällt dir daran?"
              </button>
            </div>
          ) : null}{" "}
        </div>
  );
}
