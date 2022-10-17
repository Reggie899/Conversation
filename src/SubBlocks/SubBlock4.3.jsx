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

  return (
    <div className="container">
          {typing ? (
            <h1 className="dot-flashing"></h1>
          ) : (
            <img src="https://media3.giphy.com/media/aFTt8wvDtqKCQ/200w.gif?cid=82a1493bcwmqvq4yi2l8hwd30q2ey9mqp8vlx8sb3llerx0z&rid=200w.gif&ct=g"/
            >
          )}
          <h1>{showFinal}</h1>
          {choice == true ? (
            <div>
              <button
                onClick={() => {
                  setShowFinal(   <img width="200" src="https://cdn.vox-cdn.com/thumbor/EaUuzIdnUGXAs_LokdLgtdrJZCY=/0x0:420x314/1400x1050/filters:focal(136x115:202x181):format(gif)/cdn.vox-cdn.com/uploads/chorus_image/image/55279403/tenor.0.gif"/
                  >);
                  setTimeout(() => setCount("5.5"), countTime);
                  setChoice(false);
                }}
              >
              <img width="200" src="https://cdn.vox-cdn.com/thumbor/EaUuzIdnUGXAs_LokdLgtdrJZCY=/0x0:420x314/1400x1050/filters:focal(136x115:202x181):format(gif)/cdn.vox-cdn.com/uploads/chorus_image/image/55279403/tenor.0.gif"/
                  >              </button>
              <button
                onClick={() => {
                  setShowFinal(
<img width="200" src="https://c.tenor.com/dp_hQBGT0rIAAAAd/think-smart.gif"/
                  >                  );
                  setTimeout(() => setCount("5.5"), countTime);
                  setChoice(false);
                }}
              >
              <img width="200" src="https://c.tenor.com/dp_hQBGT0rIAAAAd/think-smart.gif"/
                  >               </button>
            </div>
          ) : null}{" "}
        </div>
  );
}
