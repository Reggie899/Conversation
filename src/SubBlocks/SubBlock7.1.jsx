import { useContext, useState, useEffect } from "react";
import { Counter } from "../Context/Counter";
import { TypingTime } from "../Context/TypingTime";
import { ShowChoicesTime } from "../Context/ShowChoicesTime";
import { SetCountTime } from "../Context/SetCountTime";

export default function ConversationBlock7dot1() {
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
        <h1>Vegan auf jeden Fall. Und du?</h1>
      )}
      <h1>{showFinal}</h1>
      {choice == true ? (
        <div>
          <button
            onClick={() => {
              //   setShowFinal("Unmatch");
              setTimeout(() => setCount("3.3"), countTime);
              setChoice(false);
            }}
          >
            Unmatch
          </button>
          <button
            onClick={() => {
              setShowFinal("Ich auch! Echt cool! Im Café Sunrise gibt es Samstag um 14 Uhr eine vegane Verkostung. Wollen wir da vielleicht hin?");
              setTimeout(() => setCount("7.3"), countTime);
              setChoice(false);
            }}
          >
            Ich auch! Echt cool! Im Café Sunset gibt es Samstag um 14 Uhr eine
            vegane Verkostung. Wollen wir da vielleicht hin?
          </button>
        </div>
      ) : null}{" "}
    </div>
  );
}
