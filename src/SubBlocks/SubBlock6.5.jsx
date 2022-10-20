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

  return (
    <div className="container">
      {typing ? (
        <h1 className="dot-flashing"></h1>
      ) : (
        <img 
        style={{marginBottom: "2%"}}
        src="https://i2.wp.com/hypebeast.com/wp-content/blogs.dir/6/files/2017/12/2018-christmas-memes-gifs-grinch-mean-girls-0.gif?w=960" />
      )}
      <h1>{showFinal}</h1>
      {choice == true ? (
        <div>
          <button
            onClick={() => {
              setShowFinal(
                <img
                  width="200"
                  src="https://media4.giphy.com/media/7lLSd8EKbzOWx2qw5g/giphy.gif"
                />
              );
              setTimeout(() => setCount("5.7"), countTime);
              setChoice(false);
            }}
          >
            <img
              width="200"
              src="https://media4.giphy.com/media/7lLSd8EKbzOWx2qw5g/giphy.gif"
            />{" "}
          </button>
          <button
            onClick={() => {
              setShowFinal(
                <img
                  width="200"
                  src="https://media3.giphy.com/media/qrIsXgEdorkI/200w.gif?cid=82a1493b3sj2qs90952x4s4qmri17hojkkfj44mlzyol2z2n&rid=200w.gif&ct=g"
                />
              );
              setTimeout(() => setCount("5.7"), countTime);
              setChoice(false);
            }}
          >
            <img
              width="200"
              src="https://media3.giphy.com/media/qrIsXgEdorkI/200w.gif?cid=82a1493b3sj2qs90952x4s4qmri17hojkkfj44mlzyol2z2n&rid=200w.gif&ct=g"
            />{" "}
          </button>
        </div>
      ) : null}{" "}
    </div>
  );
}
