import { useContext, useState, useEffect } from "react";
import { Counter } from "../Context/Counter";

export default function ConversationBlock2dot1() {
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
        <h1>Danke auch ganz gut!</h1>
      )}
      <h1>{showFinal}</h1>
      {choice == true ? (
        <div>
          <button
            onClick={() => {
              setShowFinal("Was sind deine Hobbies?");
              setTimeout(() => setCount("3.1"), 3000);
              setChoice(false);
            }}
          >
            Was sind deine Hobbies?
          </button>
          <button
            onClick={() => {
              setShowFinal(
                <img
                  height="120vh"
                  src="https://media4.giphy.com/media/nFFguNjdeotwc/200.gif"
                />
              );
              setTimeout(() => setCount("3.2"), 3000);
              setChoice(false);
            }}
          >
            <img
              height="120vh"
              src="https://media4.giphy.com/media/nFFguNjdeotwc/200.gif"
            />{" "}
          </button>
        </div>
      ) : null}{" "}
    </div>
  );
}
