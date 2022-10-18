import { useContext } from "react";
import { Counter } from "./Context/Counter";

import match from "./img/Match2.png";


export default function StartAnimation() {

    // const { count, setCount } = useContext(Counter);
    // setTimeout(() => setCount(1), 4000);

  return (
    <div className="container">
      <div className="frame">
        <div className="circle1"></div>
        <div className="circle2"></div>
      </div>
      <div className="matchDiv">  <img src={match}/></div>
     
    </div>
  );
}
