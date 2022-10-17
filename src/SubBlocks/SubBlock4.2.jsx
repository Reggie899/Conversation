import { useContext, useState, useEffect } from "react";
import { Counter } from "../Context/Counter";

export default function SubBlock4dot2() {
  const [choice, setChoice] = useState(false);
  const [showFinal, setShowFinal] = useState(null);
  const [typing, setTyping] = useState(true);
  const { count, setCount } = useContext(Counter);

  setTimeout(() => setTyping(false), 3000);
  useEffect(() => {
    setTimeout(() => setChoice(true), 4500);
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
                  setTimeout(() => setCount("4.1"), 3000);
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
                  setTimeout(() => setCount("4.2"), 3000);
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
