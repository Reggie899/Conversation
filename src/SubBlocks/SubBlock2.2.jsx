import { useContext, useState, useEffect } from "react";
import { Counter } from "../Context/Counter";
import { TypingTime } from "../Context/TypingTime";
import { ShowChoicesTime } from "../Context/ShowChoicesTime";
import { SetCountTime } from "../Context/SetCountTime";

export default function ConversationBlock2dot2() {
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
          {typing ? <h1 className="dot-flashing"></h1> : <h1>Sorry? 🤨</h1>}
          <h1>{showFinal}</h1>
          {choice == true ? (
            <div>
              <button
                onClick={() => {
                  setShowFinal("This is over 🙅🏻‍♀️");
                  setTimeout(() => setCount("3.3"), countTime);
                  setChoice(false);
                }}
              >
                This is over
              </button>
              <button
                onClick={() => {
                  setShowFinal("Okay, ich wollte nicht gemein sein. Fangen wir nochmal von vorne an.");
                  setTimeout(() => setCount("3.4"), countTime);
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
