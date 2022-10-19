import { useContext, useState, useEffect } from "react";
import { Counter } from "../Context/Counter";
import { TypingTime } from "../Context/TypingTime";
import { ShowChoicesTime } from "../Context/ShowChoicesTime";
import { SetCountTime } from "../Context/SetCountTime";

export default function ConversationBlock9dot2() {
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
        <h1>haha okay, verstehe. Auch nicht schlecht. Dann Samstag um 14 Uhr im Sunrise?</h1>
      )}
      <h1>{showFinal}</h1>
      {choice == true ? (
        <div>
          <button
            onClick={() => {
                setShowFinal("Yes 🙌 Bis dann!");
              setTimeout(() => setCount("8.2"), countTime);
              setChoice(false);
            }}
          >
            Yes 🙌 Bis dann!
          </button>
          <button
            onClick={() => {
              setShowFinal(
               "Ich habe es mir anders übrlegt. Lieber doch nicht."
              );
              setTimeout(() => setCount("3.3"), countTime);
              setChoice(false);
            }}
          >
            Ich habe es mir anders übrlegt. Lieber doch nicht.
          </button>
        </div>
      ) : null}{" "}
    </div>
  );
}
