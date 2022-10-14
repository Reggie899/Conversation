import { useContext, useState, useEffect } from "react";
import { Counter } from "../Context/Counter";

export default function ConversationBlock2dot2() {
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
          {typing ? <h1 className="dot-flashing"></h1> : <h1>Sorry? 🤨</h1>}
          <h1>{showFinal}</h1>
          {choice == true ? (
            <div>
              <button
                onClick={() => {
                  setShowFinal("This is over 🙅🏻‍♀️");
                  setTimeout(() => setCount("3.3"), 3000);
                  setChoice(false);
                }}
              >
                This is over
              </button>
              <button
                onClick={() => {
                  setShowFinal("Okay, ich wollte nicht gemein sein. Fangen wir nochmal von vorne an.");
                  setTimeout(() => setCount("3.4"), 3000);
                  setChoice(false);
                }}
              >
                Okay, ich wollte nicht gemein sein. Fangen wir nochmal von vorne an.{" "}
              </button>
            </div>
          ) : null}{" "}
        </div>
  );
}
