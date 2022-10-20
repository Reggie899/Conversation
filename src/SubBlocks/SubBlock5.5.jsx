import { useContext, useState, useEffect } from "react";
import { Counter } from "../Context/Counter";
import { TypingTime } from "../Context/TypingTime";
import { ShowChoicesTime } from "../Context/ShowChoicesTime";
import { SetCountTime } from "../Context/SetCountTime";

export default function SubBlock5dot5() {
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

const gif1 = "https://i.pinimg.com/originals/3c/3a/a1/3c3aa1b78817b4154e96145f08937764.gif";
const gif2 = "https://media.giphy.com/media/yr7n0u3qzO9nG/giphy.gif";

  return (
    <div className="container">
      {typing ? (
        <h1 className="dot-flashing"></h1>
      ) : (
        <img 
        width={"200px"}
        style={{marginBottom: "8%"}}
        src="https://wallpapers-clan.com/wp-content/uploads/2022/08/meme-gif-pfp-1.gif" />
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
              setTimeout(() => setCount("4.5"), countTime);
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
              setTimeout(() => setCount("6.5"), countTime);
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
