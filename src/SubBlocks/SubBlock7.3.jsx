import { useContext, useState, useEffect } from "react";
import { Counter } from "../Context/Counter";
import { TypingTime } from "../Context/TypingTime";
import { ShowChoicesTime } from "../Context/ShowChoicesTime";
import { SetCountTime } from "../Context/SetCountTime";

export default function ConversationBlock7dot3() {
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
        <h1>Klasse, dann sehen wir uns Samstag um 14 Uhr im Sunrise.</h1>
      )}
      <h1>{showFinal}</h1>
      {choice == true ? (
        <div>
          <button
            onClick={() => {
              setShowFinal("Ich freue mich! Bis dann! 🙂");
              setTimeout(() => setCount("8.2"), countTime);
              setChoice(false);
            }}
          >
            Ich freue mich! Bis dann! 🙂
          </button>
          <button
            onClick={() => {
              setShowFinal(
                <img
                  height="120vh"
                  src="Warte, ich hab es mir doch anders überlegt."
                />
              );
              setTimeout(() => setCount("5.2"), countTime);
              setChoice(false);
            }}
          >
            Warte, ich hab es mir doch anders überlegt.
          </button>
        </div>
      ) : null}{" "}
    </div>
  );
}
