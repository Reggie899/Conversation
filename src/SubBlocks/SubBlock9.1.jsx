// Antwort auf die Frage, warum man da auch Hausverbot hat

import { useContext, useState, useEffect } from "react";
import { Counter } from "../Context/Counter";
import { TypingTime } from "../Context/TypingTime";
import { ShowChoicesTime } from "../Context/ShowChoicesTime";
import { SetCountTime } from "../Context/SetCountTime";

export default function ConversationBlock9dot1() {
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
        <h1>
          Duuuuu 😱 OMG dann kennen wir uns jaaaaa! Wollen wir zusammen dann das
          Sunrise unsicher machen?
        </h1>
      )}
      <h1>{showFinal}</h1>
      {choice == true ? (
        <div>
          <button
            onClick={() => {
              setShowFinal("Auf jeden Fall 💪 Samstag. 14 Uhr. Sunrise 🌅");
              setTimeout(() => setCount("8.2"), countTime);
              setChoice(false);
            }}
          >
            Auf jeden Fall 💪 Samstag. 14 Uhr. Sunrise 🌅{" "}
          </button>
          <button
            onClick={() => {
              setShowFinal(
                <img
                  height="120vh"
                  src="Sorry! Ich weiß jetzt, wer du bist 😅 Also: nein."
                />
              );
              setTimeout(() => setCount("3.3"), countTime);
              setChoice(false);
            }}
          >
            Sorry! Ich weiß jetzt, wer du bist 😅 Also: nein.
          </button>
        </div>
      ) : null}{" "}
    </div>
  );
}
