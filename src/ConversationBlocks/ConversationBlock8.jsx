import SubBlock8dot1 from "../SubBlocks/SubBlock8.1";
import SubBlock8dot2 from "../SubBlocks/SubBlock8.2";
import SubBlock8dot3 from "../SubBlocks/SubBlock8.3";



import { useContext } from "react";
import { Counter } from "../Context/Counter";

export default function ConversationBlock8() {
  const { count, setCount } = useContext(Counter);

  return (
    <div className="containerBlock">
      {count == 8.1 ? <SubBlock8dot1 /> : null}
      {count == 8.2 ? <SubBlock8dot2 /> : null}
      {count == 8.3 ? <SubBlock8dot3 /> : null}
    </div>
  );
}
