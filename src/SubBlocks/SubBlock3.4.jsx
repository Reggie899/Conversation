import { useContext, useState, useEffect } from "react";
import { Counter } from "../Context/Counter";

export default function SubBlock3dot4() {
  const [choice, setChoice] = useState(false);
  const [showFinal, setShowFinal] = useState(null);
  const [typing, setTyping] = useState(true);
  const { count, setCount } = useContext(Counter);

  setTimeout(() => setTyping(false), 3000);
  useEffect(() => {
    setTimeout(() => setChoice(true), 4500);
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
                  setTimeout(() => setCount("3.1"), 3000);
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
                  setTimeout(() => setCount("3.2"), 3000);
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
