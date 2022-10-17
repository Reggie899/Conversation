import { useContext, useState, useEffect } from "react";
import { Counter } from "../Context/Counter";
import { TypingTime } from "../Context/TypingTime";
import { ShowChoicesTime } from "../Context/ShowChoicesTime"; 
import { SetCountTime } from "../Context/SetCountTime";

export default function SubBlock3dot4() {
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
            <h1>Also du bist schon echt frech. Kann das sein?</h1>
          )}
          <h1>{showFinal}</h1>
          {choice == true ? (
            <div>
              <button
                onClick={() => {
                  setShowFinal("Wow, wer ist hier frech von uns beiden?");
                  setTimeout(() => setCount("4.6"), countTime);
                  setChoice(false);
                }}
              >
                Wow, wer ist hier frech von uns beiden?
              </button>
              <button
                onClick={() => {
                  setShowFinal(
                    "Fair enough, aber du scheinst auch die Flirt-Fähigkeiten eines Gorillas zu haben."
                  );
                  setTimeout(() => setCount("4.5"), countTime);
                  setChoice(false);
                }}
              >
                Fair enough, aber du scheinst auch die Flirt-Fähigkeiten eines Gorillas zu haben.
              </button>
            </div>
          ) : null}{" "}
        </div>
  );
}
