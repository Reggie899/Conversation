import { isFlowBaseAnnotation } from "@babel/types";
import { useContext, useState } from "react";
import { Counter } from "../Context/Counter";

export default function ConversationBlock1() {
  const [choice, setChoice] = useState(false);
  const [showFinal, setShowFinal] = useState(null);
  const [typing, setTyping] = useState(true);
  const { count, setCount } = useContext(Counter);

  setTimeout(() => setTyping(false), 3000);
  setTimeout(() => setChoice(true), 5000);


  return (
    <div className="container">

      {typing ? <h1 className="dot-flashing"></h1> :  <h1>Hey wie geht's?</h1> }
      <h1>{showFinal}</h1>
      {choice == true ? (
        <div>
          <button
            onClick={() => {
              setShowFinal("Gut");
             setTimeout(() => setCount("2.1"), 3000);
              console.log(count[0]);
            }}
          >
            Gut
          </button>
          <button
            onClick={() => {
              setShowFinal("Wow, du bist ja richtig kreativ 🙄");
             setTimeout(() => setCount("2.2"), 3000);
              console.log(count[0]);
            }}
          >
            Wow, du bist ja richtig kreativ.
          </button>
        </div>
      ) : null}
    </div>
  );
}
