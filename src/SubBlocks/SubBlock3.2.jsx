import { useContext, useState, useEffect } from "react";
import { Counter } from "../Context/Counter";

export default function SubBlock3dot2() {
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
<img
                  height="230vh"
                  src="https://media2.giphy.com/media/SVH9y2LQUVVCRcqD7o/200w.gif?cid=82a1493bp1z255x9ggh80041ds7ac511w0tgcf9vmntrqlb7&rid=200w.gif&ct=g"
                />          )}
          <h1>{showFinal}</h1>
          {choice == true ? (
            <div>
              <button
                onClick={() => {
                  setShowFinal(<img
                    height="230vh"
                    src="https://media.tenor.com/FjnLrLnMrCMAAAAC/meme-shrek.gif"
                  /> );
                  setTimeout(() => setCount("4.3"), 3000);
                  setChoice(false);
                }}
              >
<img
                    height="130vh"
                    src="https://media.tenor.com/FjnLrLnMrCMAAAAC/meme-shrek.gif"
                  />              </button>
              <button
                onClick={() => {
                  setShowFinal(
                   "Warum hast du mich gematcht?"
                  );
                  setTimeout(() => setCount("4.4"), 3000);
                  setChoice(false);
                }}
              >
               Warum hast du mich gematcht?
              </button>
            </div>
          ) : null}{" "}
        </div>
  );
}
