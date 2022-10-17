import SubBlock4dot1 from "../SubBlocks/SubBlock4.1";
import SubBlock4dot2 from "../SubBlocks/SubBlock4.2";
import SubBlock4dot3 from "../SubBlocks/SubBlock4.3";
import SubBlock4dot4 from "../SubBlocks/SubBlock4.4";
import SubBlock4dot5 from "../SubBlocks/SubBlock4.5";
import SubBlock4dot6 from "../SubBlocks/SubBlock4.6";


import { useContext } from "react";
import { Counter } from "../Context/Counter";

export default function ConversationBlock4() {
  const { count, setCount } = useContext(Counter);

  return (
    <div className="container">
      {count == 4.1 ? <SubBlock4dot1 /> : null}
      {count == 4.2 ? <SubBlock4dot2 /> : null}
      {count == 4.3 ? <SubBlock4dot3 /> : null}
      {count == 4.4 ? <SubBlock4dot4 /> : null}
      {count == 4.5 ? <SubBlock4dot5 /> : null}
      {count == 4.6 ? <SubBlock4dot6 /> : null}
    </div>
  );
}
