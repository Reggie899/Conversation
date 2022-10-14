import { useContext, useState, useEffect } from "react";
import { Counter } from "../Context/Counter";

export default function SubBlock3dot3() {
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

        <h1>Du hast den Match aufgelöst.</h1>


         <button onClick={()=>setCount(1)}>Nochmal spielen</button>
        </div>
  );
}
