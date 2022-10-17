import { useContext, useState, useEffect } from "react";
import { Counter } from "../Context/Counter";
import { TypingTime } from "../Context/TypingTime";
import { ShowChoicesTime } from "../Context/ShowChoicesTime";
import { SetCountTime } from "../Context/SetCountTime";

export default function ConversationBlock7dot4() {
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
        <h1>Du, ich muss noch einiges erledigen. Aber lass uns einfach mal die Tage schreiben, ok?</h1>
      )}
      <h1>{showFinal}</h1>
      {choice == true ? (
        <div>
          <button
            onClick={() => {
                setShowFinal("Ok 🙂 Dir noch einen schönen Tag 👋");
              setTimeout(() => setCount("8.3"), countTime);
              setChoice(false);
            }}
          >
            Ok 🙂 Dir noch einen schönen Tag 👋
          </button>
          <button
            onClick={() => {
              setShowFinal(
                <img
                  height="120vh"
                  src="Okay 🙄"
                />
              );
              setTimeout(() => setCount("5.2"), countTime);
              setChoice(false);
            }}
          >
           Okay 🙄
          </button>
        </div>
      ) : null}{" "}
    </div>
  );
}
