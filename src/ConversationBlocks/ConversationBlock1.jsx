import { useContext, useState, useEffect } from "react";
import { Counter } from "../Context/Counter";

export default function ConversationBlock1() {
  const [choice, setChoice] = useState(false);
  const [showFinal, setShowFinal] = useState(null);
  const [typing, setTyping] = useState(true);
  const { count, setCount } = useContext(Counter);

  setTimeout(() => setTyping(false), 3000);
  useEffect(() => {
    setTimeout(() => setChoice(true), 5000);
  }, []); //using useEffect, because otherwise before page content changes, choices are visible again

  return (
    <div className="container">
      {typing ? <h1 className="dot-flashing"></h1> : <h1>Hey wie geht's?</h1>}
      <h1>{showFinal}</h1>
      {choice == true ? (
        <div>
          <button
            onClick={() => {
              setShowFinal("Gut und selbst?");
              setTimeout(() => setCount("2.1"), 3000);
              setChoice(false);
            }}
          >
            Gut und selbst?
          </button>
          <button
            onClick={() => {
              setShowFinal("Wow, du bist ja richtig kreativ 🙄");
              setTimeout(() => setCount("2.2"), 3000);
              setChoice(false);
            }}
          >
            Wow, du bist ja richtig kreativ.
          </button>
        </div>
      ) : null}
    </div>
  );
}
