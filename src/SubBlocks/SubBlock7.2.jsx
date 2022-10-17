import { useContext, useState, useEffect } from "react";
import { Counter } from "../Context/Counter";
import { TypingTime } from "../Context/TypingTime";
import { ShowChoicesTime } from "../Context/ShowChoicesTime";
import { SetCountTime } from "../Context/SetCountTime";

export default function ConversationBlock7dot2() {
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
        <h1>Wow, ich habe da auch Hausverbot 😳 Aber ich gehe trotzdem hin 😅 ...</h1>
      )}
      <h1>{showFinal}</h1>
      {choice == true ? (
        <div>
          <button
            onClick={() => {
                setShowFinal("Wow, warum hast du da Hausverbot?");
              setTimeout(() => setCount("8.1"), countTime);
              setChoice(false);
            }}
          >
            Wow, warum hast du da Hausverbot?
          </button>
          <button
            onClick={() => {
              setShowFinal(
                <img
                  height="120vh"
                  src="Okay, lass uns trotzdem lieber im Sunrise treffen 😅"
                />
              );
              setTimeout(() => setCount("7.3"), countTime);
              setChoice(false);
            }}
          >
           Okay, lass uns trotzdem lieber im Sunrise treffen 😅
          </button>
        </div>
      ) : null}{" "}
    </div>
  );
}
