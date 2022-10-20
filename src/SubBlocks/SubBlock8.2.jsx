import { useContext, useState, useEffect } from "react";
import { Counter } from "../Context/Counter";
import { TypingTime } from "../Context/TypingTime";
import { ShowChoicesTime } from "../Context/ShowChoicesTime";
import { SetCountTime } from "../Context/SetCountTime";

export default function ConversationBlock8dot2() {
  const [choice, setChoice] = useState(false);
  const [showFinal, setShowFinal] = useState(null);
  const [typing, setTyping] = useState(true);
  const { count, setCount } = useContext(Counter);
  const { typingTime } = useContext(TypingTime);
  const { showChoicesTime } = useContext(ShowChoicesTime);
  const { countTime } = useContext(SetCountTime);

  setTimeout(() => setTyping(false), typingTime);
  useEffect(() => {
    setTimeout(() => setChoice(true), 5500);
  }, []); //using useEffect, because otherwise before page content changes, choices are visible again

  return (
    <div className="container">
    {choice ? <button onClick={() => setCount(0)}>Nochmal spielen</button>
 : (typing ? (
        <h1 className="dot-flashing"></h1>
      ) : (
        <h1>Bis Samstag 👋 Ich freue mich!</h1>
      ))}
    </div>
  );
}
