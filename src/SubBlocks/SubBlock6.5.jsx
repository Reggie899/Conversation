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

  const gif1 = "https://media4.giphy.com/media/7lLSd8EKbzOWx2qw5g/giphy.gif";
  const gif2 = "https://media3.giphy.com/media/qrIsXgEdorkI/200w.gif?cid=82a1493b3sj2qs90952x4s4qmri17hojkkfj44mlzyol2z2n&rid=200w.gif&ct=g";
  

  return (
    <div className="container">
      {typing ? (
        <h1 className="dot-flashing"></h1>
      ) : (
        <img 
        width={"200px"}
        style={{marginBottom: "2%"}}
        src="https://i2.wp.com/hypebeast.com/wp-content/blogs.dir/6/files/2017/12/2018-christmas-memes-gifs-grinch-mean-girls-0.gif?w=960" />
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
              setTimeout(() => setCount("5.7"), countTime);
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
              setTimeout(() => setCount("5.7"), countTime);
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
