import SubBlock5dot1 from "../SubBlocks/SubBlock5.1";
// import SubBlock5dot2 from "../SubBlocks/SubBlock5.2";
import SubBlock5dot3 from "../SubBlocks/SubBlock5.3";
import SubBlock5dot4 from "../SubBlocks/SubBlock5.4";
import SubBlock5dot5 from "../SubBlocks/SubBlock5.5";
import SubBlock5dot6 from "../SubBlocks/SubBlock5.6";
import SubBlock5dot7 from "../SubBlocks/SubBlock5.7";


import { useContext } from "react";
import { Counter } from "../Context/Counter";

export default function ConversationBlock5() {
  const { count, setCount } = useContext(Counter);

  return (
    <div className="containerBlock">
      {count == 5.1 ? <SubBlock5dot1 /> : null}
      {/* {count == 5.2 ? <SubBlock5dot2 /> : null} */}
      {count == 5.3 ? <SubBlock5dot3 /> : null}
      {count == 5.4 ? <SubBlock5dot4 /> : null}
      {count == 5.5 ? <SubBlock5dot5 /> : null}
      {count == 5.6 ? <SubBlock5dot6 /> : null}
      {count == 5.7 ? <SubBlock5dot7 /> : null}
    </div>
  );
}
