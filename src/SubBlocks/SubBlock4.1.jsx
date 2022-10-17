import { useContext, useState, useEffect } from "react";
import { Counter } from "../Context/Counter";
import eyePic from "../img/eye.jpg"

export default function SubBlock4dot1() {
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
              <div>
            <h1>Am liebsten zeichne ich Augen.</h1>
            <img width="300" src={eyePic} />
            </div>
          )}
          <h1>{showFinal}</h1>
          {choice == true ? (
            <div>
              <button
                onClick={() => {
                  setShowFinal("Wow, vielleicht kannst du auch mal meine zeichnen...");
                  setTimeout(() => setCount("5.1"), 3000);
                  setChoice(false);
                }}
              >
               Wow, vielleicht kannst du auch mal meine zeichnen...
              </button>
              <button
                onClick={() => {
                  setShowFinal(
                   "Bist du 10?"
                  );
                  setTimeout(() => setCount("5.2"), 3000);
                  setChoice(false);
                }}
              >
               Bist du 10?
              </button>
            </div>
          ) : null}{" "}
        </div>
  );
}
