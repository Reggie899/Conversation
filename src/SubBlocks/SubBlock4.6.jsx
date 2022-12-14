import { useContext, useState, useEffect } from "react";
import { Counter } from "../Context/Counter";
import { TypingTime } from "../Context/TypingTime";
import { ShowChoicesTime } from "../Context/ShowChoicesTime";
import { SetCountTime } from "../Context/SetCountTime";

export default function SubBlock4dot6() {
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
        <h1>Wir sind beide frech. Wir passen gut zusammen.</h1>
      )}
      <h1>{showFinal}</h1>
      {choice == true ? (
        <div>
          <button
            onClick={() => {
              setShowFinal(
                "Geh doch dahin, wo der Pfeffer wächst... "
              );
              setTimeout(() => setCount("4.5"), countTime);
              setChoice(false);
            }}
          >
            Geh doch dahin, wo der Pfeffer wächst... {" "}
          </button>
          <button
            onClick={() => {
              setShowFinal(
                "Dann lass uns zusammen frech ins Kino am Wasser gehen. Samstag? 🍿"
              );
              setTimeout(() => setCount("6.3"), countTime);
              setChoice(false);
            }}
          >
            Dann lass uns zusammen frech ins Kino am Wasser gehen. Samstag? 🍿{" "}
          </button>
        </div>
      ) : null}{" "}
    </div>
  );
}
