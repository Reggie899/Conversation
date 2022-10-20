import { useContext, useState, useEffect } from "react";
import { Counter } from "../Context/Counter";
import { TypingTime } from "../Context/TypingTime";
import { ShowChoicesTime } from "../Context/ShowChoicesTime";
import { SetCountTime } from "../Context/SetCountTime";

export default function SubBlock4dot3() {
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

const gif1 = "https://media.tenor.com/4KTIHbcluWEAAAAC/eating-popcorn-pocorn.gif";
const gif2 = "https://c.tenor.com/dp_hQBGT0rIAAAAd/think-smart.gif";

  return (
    <div className="container">
      {typing ? (
        <h1 className="dot-flashing"></h1>
      ) : (
        <img
        width={"200px"}
        style={{marginBottom: "8%"}}
        src="https://media3.giphy.com/media/aFTt8wvDtqKCQ/200w.gif?cid=82a1493bcwmqvq4yi2l8hwd30q2ey9mqp8vlx8sb3llerx0z&rid=200w.gif&ct=g" />
      )}
      <h1>{showFinal}</h1>
      {choice == true ? (
        <div>
          <button
            onClick={() => {
              setShowFinal(
                <div className="divGifChoiceContainer">
                <div
                  className="divGifChoice"
                  style={{ backgroundImage: `url(${gif1})` }}
                ></div>{" "}
              </div>
            );
              setTimeout(() => setCount("5.5"), countTime);
              setChoice(false);
            }}
          >
            <img
              width="200"
              src={gif1}
            />{" "}
          </button>
          <button
            onClick={() => {
              setShowFinal(
                <div className="divGifChoiceContainer">
                  <div
                    className="divGifChoice"
                    style={{ backgroundImage: `url(${gif2})` }}
                  ></div>{" "}
                </div>
              );
              setTimeout(() => setCount("5.5"), countTime);
              setChoice(false);
            }}
          >
            <img
              width="200"
              src={gif2}
            />{" "}
          </button>
        </div>
      ) : null}{" "}
    </div>
  );
}
