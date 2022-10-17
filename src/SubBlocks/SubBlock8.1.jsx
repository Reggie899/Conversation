// Antwort auf die Frage, warum man da auch Hausverbot hat 

import { useContext, useState, useEffect } from "react";
import { Counter } from "../Context/Counter";
import { TypingTime } from "../Context/TypingTime";
import { ShowChoicesTime } from "../Context/ShowChoicesTime";
import { SetCountTime } from "../Context/SetCountTime";

export default function ConversationBlock8dot1() {
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
        <h1>Also, das ist jetzt unangenehm.. aber einmal war ich richtig betrunken und habe mit einer anderen Person die Bar demoliert. Ich weiß auch nicht, wer die andere Person war. </h1>
      )}
      <h1>{showFinal}</h1>
      {choice == true ? (
        <div>
          <button
            onClick={() => {
                setShowFinal("Ich 😳");
              setTimeout(() => setCount("9.1"), countTime);
              setChoice(false);
            }}
          >
            Ich 😳
          </button>
          <button
            onClick={() => {
              setShowFinal(
                <img
                  height="120vh"
                  src="Wow! Was für eine wilde Geschichte. Ich habe nur mal bei denen in die Küche gekotzt."
                />
              );
              setTimeout(() => setCount("9.2"), countTime);
              setChoice(false);
            }}
          >
            Wow! Was für eine wilde Geschichte. Ich habe nur mal bei denen in die Küche gekotzt.
          </button>
        </div>
      ) : null}{" "}
    </div>
  );
}
